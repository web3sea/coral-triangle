// Supabase Edge Function for generating personalized copy
// Deploy with: supabase functions deploy generate-personalized-copy

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface LeadData {
  name: string
  email: string
  subscriberId: string
}

// Extract context from email domain
function getLeadContext(email: string): string {
  const domain = email.toLowerCase()
  if (domain.includes('.edu') || domain.includes('university')) {
    return 'academic/research professional'
  }
  if (domain.includes('.org')) {
    return 'conservation/nonprofit professional'
  }
  if (domain.includes('.gov')) {
    return 'government/policy professional'
  }
  return 'general marine conservation enthusiast'
}

// Generate icebreaker using OpenAI
async function generateIcebreaker(name: string, email: string): Promise<string> {
  const context = getLeadContext(email)
  const domain = email.split('@')[1] || ''
  
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a friendly marine conservation expert who writes warm, personalized messages for the Coral Triangle conservation initiative.'
        },
        {
          role: 'user',
          content: `Generate a personalized icebreaker message for our new newsletter subscriber.

Lead Information:
- Name: ${name}
- Email domain: ${domain}
- Context: ${context}

Requirements:
1. Address them by their first name
2. Thank them warmly for subscribing
3. Mention the Coral Triangle and its importance
4. Create a personal connection based on their context
5. Keep it conversational and authentic (40-50 words)
6. End with an invitation to engage

Output ONLY the icebreaker message, no additional text.`
        }
      ],
      temperature: 0.7,
      max_tokens: 150
    })
  })

  const data = await response.json()
  return data.choices[0].message.content.trim()
}

// Generate subject line using OpenAI
async function generateSubject(name: string, email: string): Promise<string> {
  const context = getLeadContext(email)
  
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a marketing copywriter specializing in environmental and marine conservation campaigns.'
        },
        {
          role: 'user',
          content: `Create a compelling email subject line for our new subscriber.

Lead Information:
- Name: ${name}
- Context: ${context}

Requirements:
1. Max 50 characters (STRICTLY ENFORCE)
2. Include a personalized element (name, role, or context)
3. Create curiosity about Coral Triangle conservation
4. Use action-oriented or benefit-driven language
5. Avoid spam triggers (FREE, URGENT, !!!)
6. Sound personal, not mass-marketing

Output ONLY the subject line, no quotes or additional text.`
        }
      ],
      temperature: 0.8,
      max_tokens: 50
    })
  })

  const data = await response.json()
  return data.choices[0].message.content.trim()
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Parse request body
    const { name, email, subscriberId }: LeadData = await req.json()

    if (!name || !email || !subscriberId) {
      throw new Error('Missing required fields: name, email, subscriberId')
    }

    // Generate personalized copy
    console.log(`Generating copy for ${name} (${email})`)
    
    const [icebreaker, subject] = await Promise.all([
      generateIcebreaker(name, email),
      generateSubject(name, email)
    ])

    console.log(`Generated icebreaker: ${icebreaker.substring(0, 50)}...`)
    console.log(`Generated subject: ${subject}`)

    // Update Supabase record
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { error: updateError } = await supabase
      .from('ct_newsletter_subscribers')
      .update({
        icebreaker,
        subject
      })
      .eq('id', subscriberId)

    if (updateError) {
      throw updateError
    }

    console.log(`Successfully updated subscriber ${subscriberId}`)

    return new Response(
      JSON.stringify({
        success: true,
        subscriberId,
        icebreaker,
        subject,
        timestamp: new Date().toISOString()
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Error:', error)
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})

/* 
 * DEPLOYMENT INSTRUCTIONS:
 * 
 * 1. Set secrets:
 *    supabase secrets set OPENAI_API_KEY=sk-your-key-here
 * 
 * 2. Deploy function:
 *    supabase functions deploy generate-personalized-copy
 * 
 * 3. Test locally:
 *    supabase functions serve generate-personalized-copy --env-file ./supabase/.env.local
 * 
 * 4. Test with curl:
 *    curl -X POST https://your-project.supabase.co/functions/v1/generate-personalized-copy \
 *      -H "Authorization: Bearer YOUR_ANON_KEY" \
 *      -H "Content-Type: application/json" \
 *      -d '{"name":"John Doe","email":"john@example.com","subscriberId":"uuid-here"}'
 * 
 * 5. Call from frontend:
 *    const { data } = await supabase.functions.invoke('generate-personalized-copy', {
 *      body: { name, email, subscriberId }
 *    })
 */

/**
 * AI Copy Generation Utility
 * Generates personalized icebreaker and subject lines for leads
 */

export interface LeadData {
  name: string;
  email: string;
  created_at?: string;
}

export interface GeneratedCopy {
  icebreaker: string;
  subject: string;
}

/**
 * Extract domain from email for personalization context
 */
function getEmailDomain(email: string): string {
  return email.split('@')[1] || '';
}

/**
 * Determine lead context based on email domain
 */
function getLeadContext(email: string): string {
  const domain = getEmailDomain(email).toLowerCase();
  
  if (domain.includes('.edu') || domain.includes('university')) {
    return 'academic/research';
  }
  if (domain.includes('.org')) {
    return 'conservation/nonprofit';
  }
  if (domain.includes('.gov')) {
    return 'government/policy';
  }
  return 'general enthusiast';
}

/**
 * Generate prompt for icebreaker creation
 */
export function getIcebreakerPrompt(lead: LeadData): string {
  const context = getLeadContext(lead.email);
  
  return `You are a friendly marine conservation expert writing to a new newsletter subscriber.

Lead Information:
- Name: ${lead.name}
- Email domain: ${getEmailDomain(lead.email)}
- Context: ${context}

Generate a warm, personalized icebreaker message (40-50 words) that:
1. Addresses them by name
2. Thanks them for subscribing
3. Mentions Coral Triangle conservation
4. Creates a connection based on their context
5. Sounds natural and conversational

Output only the icebreaker message, no additional text.`;
}

/**
 * Generate prompt for subject line creation
 */
export function getSubjectLinePrompt(lead: LeadData): string {
  const context = getLeadContext(lead.email);
  
  return `You are a marketing copywriter specializing in environmental causes.

Lead Information:
- Name: ${lead.name}
- Context: ${context}, just subscribed to Coral Triangle conservation newsletter

Generate ONE compelling email subject line (max 50 characters) that:
1. Includes their name OR a personalized element
2. Creates curiosity about coral reef conservation
3. Uses action-oriented language
4. Avoids spam trigger words
5. Feels personal, not mass-marketed

Output only the subject line, no quotes or additional text.`;
}

/**
 * Generate personalized copy using OpenAI API
 * Note: This requires VITE_OPENAI_API_KEY in .env
 */
export async function generatePersonalizedCopy(
  lead: LeadData
): Promise<GeneratedCopy> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  
  if (!apiKey) {
    throw new Error('OpenAI API key not configured');
  }

  try {
    // Generate icebreaker
    const icebreakerResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a friendly marine conservation expert who writes warm, personalized messages.'
          },
          {
            role: 'user',
            content: getIcebreakerPrompt(lead)
          }
        ],
        temperature: 0.7,
        max_tokens: 150
      })
    });

    const icebreakerData = await icebreakerResponse.json();
    const icebreaker = icebreakerData.choices[0].message.content.trim();

    // Generate subject line
    const subjectResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a marketing copywriter specializing in environmental causes.'
          },
          {
            role: 'user',
            content: getSubjectLinePrompt(lead)
          }
        ],
        temperature: 0.8,
        max_tokens: 50
      })
    });

    const subjectData = await subjectResponse.json();
    const subject = subjectData.choices[0].message.content.trim();

    return {
      icebreaker,
      subject
    };
  } catch (error) {
    console.error('Error generating personalized copy:', error);
    throw error;
  }
}

/**
 * Validate generated copy meets requirements
 */
export function validateGeneratedCopy(copy: GeneratedCopy): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Check icebreaker length (30-60 words)
  const icebreakerWords = copy.icebreaker.split(/\s+/).length;
  if (icebreakerWords < 30 || icebreakerWords > 60) {
    errors.push(`Icebreaker word count (${icebreakerWords}) outside range 30-60`);
  }

  // Check subject length (30-60 characters)
  if (copy.subject.length < 30 || copy.subject.length > 60) {
    errors.push(`Subject length (${copy.subject.length}) outside range 30-60`);
  }

  // Check for empty content
  if (!copy.icebreaker.trim()) {
    errors.push('Icebreaker is empty');
  }
  if (!copy.subject.trim()) {
    errors.push('Subject is empty');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

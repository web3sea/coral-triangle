# Make.com AI Prompts for Copy Generation

Use these prompts in your Make.com scenario with OpenAI or Anthropic modules.

## Scenario Flow

```
[Webhook] → [Router] → [OpenAI: Icebreaker] → [OpenAI: Subject] → [Supabase: Update]
```

---

## Module 1: Generate Icebreaker

### OpenAI Settings
- **Model**: `gpt-4o-mini`
- **Role**: System
- **Temperature**: 0.7
- **Max Tokens**: 150

### System Message
```
You are a friendly marine conservation expert who writes warm, personalized messages for the Coral Triangle conservation initiative.
```

### User Message (Use Make.com variables)
```
Generate a personalized icebreaker message for our new newsletter subscriber.

Lead Information:
- Name: {{1.name}}
- Email: {{1.email}}
- Email domain: {{substring(1.email; add(indexOf(1.email; "@"); 1))}}

Context:
{{if(contains(lower(1.email); ".edu"); "Academic/Research professional"; if(contains(lower(1.email); ".org"); "Conservation/Nonprofit professional"; if(contains(lower(1.email); ".gov"); "Government/Policy professional"; "General marine conservation enthusiast")))}}

Requirements:
1. Address them by their first name
2. Thank them warmly for subscribing
3. Mention the Coral Triangle and its importance
4. Create a personal connection based on their context
5. Keep it conversational and authentic (40-50 words)
6. End with an invitation to engage

Output ONLY the icebreaker message, no quotes or additional text.
```

---

## Module 2: Generate Subject Line

### OpenAI Settings
- **Model**: `gpt-4o-mini`
- **Role**: System
- **Temperature**: 0.8
- **Max Tokens**: 50

### System Message
```
You are a marketing copywriter specializing in environmental and marine conservation campaigns.
```

### User Message (Use Make.com variables)
```
Create a compelling email subject line for our new subscriber.

Lead Information:
- Name: {{1.name}}
- Context: {{if(contains(lower(1.email); ".edu"); "Academic/Research"; if(contains(lower(1.email); ".org"); "Conservation"; if(contains(lower(1.email); ".gov"); "Policy"; "Enthusiast")))}}

Requirements:
1. Max 50 characters (STRICTLY ENFORCE)
2. Include a personalized element (name, role, or context)
3. Create curiosity about Coral Triangle conservation
4. Use action-oriented or benefit-driven language
5. Avoid spam triggers (FREE, URGENT, !!!)
6. Sound personal, not mass-marketing

Output ONLY the subject line, no quotes or additional text.
```

---

## Module 3: Update Supabase Record

### Supabase Update Action
- **Table**: `ct_newsletter_subscribers`
- **Filter**: `email` = `{{1.email}}`

### Fields to Update
```json
{
  "icebreaker": "{{2.choices[].message.content}}",
  "subject": "{{3.choices[].message.content}}"
}
```

---

## Alternative: Anthropic Claude Prompts

If using Anthropic instead of OpenAI:

### Icebreaker Prompt
```xml
<lead>
  <name>{{1.name}}</name>
  <email>{{1.email}}</email>
  <context>{{if(contains(lower(1.email); ".edu"); "Academic/Research"; "General")}}</context>
</lead>

<task>
Generate a warm, personalized icebreaker message (40-50 words) for this new Coral Triangle newsletter subscriber. Address them by name, thank them for subscribing, mention the Coral Triangle's importance, and create a personal connection based on their context.
</task>

<requirements>
- Natural, conversational tone
- 40-50 words
- Authentic and friendly
- Include call to engage
</requirements>

Output only the icebreaker message.
```

### Subject Line Prompt
```xml
<lead>
  <name>{{1.name}}</name>
  <context>{{if(contains(lower(1.email); ".edu"); "Academic"; "General")}}</context>
</lead>

<task>
Create ONE compelling email subject line (max 50 characters) for this Coral Triangle conservation newsletter subscriber. Make it personal, create curiosity, avoid spam triggers.
</task>

Output only the subject line.
```

---

## Testing Your Make.com Scenario

### Test Data 1: Academic
```json
{
  "name": "Dr. Sarah Johnson",
  "email": "sarah.johnson@stanford.edu"
}
```

**Expected Output**:
- Icebreaker: Mentions research/science, academic contribution
- Subject: Professional, data/science-oriented

---

### Test Data 2: Conservation Professional
```json
{
  "name": "Michael Chen",
  "email": "mchen@oceanconservancy.org"
}
```

**Expected Output**:
- Icebreaker: Acknowledges conservation work, shared mission
- Subject: Impact-focused, action-oriented

---

### Test Data 3: General Enthusiast
```json
{
  "name": "Emma Rodriguez",
  "email": "emma.rod@gmail.com"
}
```

**Expected Output**:
- Icebreaker: Welcoming, educational, inspiring
- Subject: Curiosity-driven, accessible

---

## Error Handling in Make.com

### Add Error Handler
After each OpenAI module, add an error handler:

**If AI generation fails**:
1. Set default fallback copy
2. Log error to Google Sheets or Airtable
3. Send alert to Slack/Email
4. Still update Supabase with fallback values

### Fallback Values
```json
{
  "icebreaker": "Hi {{1.name}}! 👋 Thanks for joining our Coral Triangle conservation community. We're excited to share the latest research, success stories, and ways you can help protect these incredible marine ecosystems. Looking forward to connecting with you!",
  "subject": "{{1.name}}, Welcome to Coral Triangle Conservation"
}
```

---

## Rate Limiting & Costs

### OpenAI Costs (GPT-4o-mini)
- Icebreaker: ~150 tokens output = $0.00009
- Subject: ~30 tokens output = $0.000018
- **Total per lead**: ~$0.0001
- **1000 leads**: ~$0.10

### Make.com Operations
- Webhook: 1 operation
- Router: 1 operation  
- OpenAI calls: 2 operations
- Supabase update: 1 operation
- **Total**: 5 operations per lead
- Free tier: 1000 operations/month = 200 leads
- Pro: $9/month for 10,000 operations = 2000 leads

---

## Monitoring

### Add Google Sheets Logger
After Supabase update, log to Google Sheets:

| Timestamp | Name | Email | Icebreaker Length | Subject Length | Generation Time | Status |
|-----------|------|-------|-------------------|----------------|-----------------|--------|
| {{now}} | {{1.name}} | {{1.email}} | {{length(2.output)}} | {{length(3.output)}} | {{formatDate(now; "X")}} | Success |

---

## Quality Assurance

### Weekly Review Checklist
- [ ] Check 10 random generated icebreakers
- [ ] Verify subject lines are under 50 chars
- [ ] Look for any hallucinations or inappropriate content
- [ ] Verify personalization is working
- [ ] Check Make.com error logs
- [ ] Review generation costs

### Red Flags to Watch For
- Repeated generic phrases
- Subject lines over 50 characters
- Icebreakers mentioning incorrect information
- Spam-triggering language
- Cultural insensitivity

---

## Advanced: A/B Testing Prompts

### Test 1: Formal vs Casual
Create two scenarios with different tones and track engagement.

### Test 2: Length Variations
- Short icebreaker (30-35 words) vs Long (45-50 words)
- Short subject (30-40 chars) vs Long (40-50 chars)

### Test 3: Personalization Depth
- Basic: Just name
- Medium: Name + context
- Deep: Name + context + specific mention

Track open rates, click rates, and response rates for each variant.

---

## Optimization Tips

1. **Batch Processing**: Use Make.com's aggregator if processing multiple leads
2. **Caching**: Store common contexts to reduce API calls
3. **Retries**: Set up automatic retries with exponential backoff
4. **Webhooks**: Use Supabase webhooks to trigger Make.com (instead of frontend)
5. **Priority Queue**: Process high-value leads (.edu, .org) with higher temperature for more creativity

---

## Ready to Deploy?

### Pre-deployment Checklist
- [ ] Tested with 20+ diverse lead examples
- [ ] Error handlers in place
- [ ] Fallback copy configured
- [ ] Monitoring/logging set up
- [ ] Cost limits configured in OpenAI
- [ ] Make.com scenario named and documented
- [ ] Team trained on monitoring dashboard
- [ ] Rollback plan ready

### Go Live! 🚀

-- Add icebreaker and subject columns to ct_newsletter_subscribers table
-- These will store AI-generated personalized copy for each lead

ALTER TABLE ct_newsletter_subscribers
ADD COLUMN IF NOT EXISTS icebreaker TEXT,
ADD COLUMN IF NOT EXISTS subject TEXT;

-- Add indexes for better query performance when filtering/searching
CREATE INDEX IF NOT EXISTS idx_ct_newsletter_icebreaker 
ON ct_newsletter_subscribers(icebreaker) 
WHERE icebreaker IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_ct_newsletter_subject 
ON ct_newsletter_subscribers(subject) 
WHERE subject IS NOT NULL;

-- Add comments for documentation
COMMENT ON COLUMN ct_newsletter_subscribers.icebreaker IS 'AI-generated personalized icebreaker message for outreach';
COMMENT ON COLUMN ct_newsletter_subscribers.subject IS 'AI-generated personalized email subject line';

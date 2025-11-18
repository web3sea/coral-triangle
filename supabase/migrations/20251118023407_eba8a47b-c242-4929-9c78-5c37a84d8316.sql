-- Ensure RLS is enabled
ALTER TABLE public.ct_newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Drop existing insert policies to avoid conflicts
DROP POLICY IF EXISTS "Anyone can insert newsletter subscriptions" ON public.ct_newsletter_subscribers;
DROP POLICY IF EXISTS "Allow anonymous newsletter signups" ON public.ct_newsletter_subscribers;

-- Create the exact policy as specified
CREATE POLICY "allow_anonymous_inserts"
ON public.ct_newsletter_subscribers
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
-- Drop existing insert policy
DROP POLICY IF EXISTS "Anyone can insert newsletter subscriptions" ON public.ct_newsletter_subscribers;

-- Create new permissive policy for anonymous inserts
CREATE POLICY "Allow anonymous newsletter signups"
ON public.ct_newsletter_subscribers
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
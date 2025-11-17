-- Add SELECT policy to restrict reading newsletter subscribers to authenticated users only
CREATE POLICY "Only authenticated users can view subscribers"
ON public.ct_newsletter_subscribers
FOR SELECT
TO authenticated
USING (true);
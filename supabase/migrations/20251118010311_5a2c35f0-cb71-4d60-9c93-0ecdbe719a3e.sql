-- Create newsletter subscribers table
CREATE TABLE IF NOT EXISTS public.ct_newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.ct_newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public signup form)
CREATE POLICY "Anyone can insert newsletter subscriptions"
ON public.ct_newsletter_subscribers
FOR INSERT
WITH CHECK (true);

-- Only authenticated users can view subscribers
CREATE POLICY "Only authenticated users can view subscribers"
ON public.ct_newsletter_subscribers
FOR SELECT
USING (auth.uid() IS NOT NULL);

-- Add index on email for faster lookups
CREATE INDEX idx_newsletter_email ON public.ct_newsletter_subscribers(email);
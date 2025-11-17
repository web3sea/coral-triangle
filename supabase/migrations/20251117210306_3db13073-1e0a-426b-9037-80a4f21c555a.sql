-- Create newsletter subscribers table
CREATE TABLE public.ct_newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.ct_newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public newsletter signup)
CREATE POLICY "Anyone can subscribe to newsletter"
ON public.ct_newsletter_subscribers
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create function to notify webhook on new subscriber
CREATE OR REPLACE FUNCTION notify_newsletter_webhook()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  webhook_url text := 'https://hook.us2.make.com/uuiq1jh0ydvoymm9ojp247dsso41mxb4';
BEGIN
  PERFORM net.http_post(
    url := webhook_url,
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := json_build_object(
      'name', NEW.name,
      'email', NEW.email,
      'created_at', NEW.created_at
    )::text
  );
  RETURN NEW;
END;
$$;

-- Create trigger to call webhook on insert
CREATE TRIGGER on_newsletter_signup
AFTER INSERT ON public.ct_newsletter_subscribers
FOR EACH ROW
EXECUTE FUNCTION notify_newsletter_webhook();
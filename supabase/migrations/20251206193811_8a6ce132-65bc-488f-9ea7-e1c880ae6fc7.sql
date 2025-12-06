-- Remove the anonymous INSERT policy from blog_posts table
-- This prevents unauthorized content injection
-- Make.com should use the service role key instead of anon key

DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.blog_posts;
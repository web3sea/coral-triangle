-- Re-enable anonymous inserts for Make.com integration
CREATE POLICY "Allow anonymous inserts" 
ON public.blog_posts 
FOR INSERT 
WITH CHECK (true);
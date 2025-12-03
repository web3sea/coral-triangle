-- Disable Row Level Security for blog_posts table
ALTER TABLE public.blog_posts DISABLE ROW LEVEL SECURITY;

-- Drop existing RLS policy
DROP POLICY IF EXISTS "Anyone can view blog posts" ON public.blog_posts;
-- Enable Row Level Security on blog_posts
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read blog posts (public access)
CREATE POLICY "Anyone can view blog posts" ON public.blog_posts
  FOR SELECT USING (true);

-- Allow anonymous inserts (for Make.com with anon key)
CREATE POLICY "Allow anonymous inserts" ON public.blog_posts
  FOR INSERT WITH CHECK (true);
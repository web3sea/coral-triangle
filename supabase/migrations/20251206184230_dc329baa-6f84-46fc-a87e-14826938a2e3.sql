-- Rename url column to blog_html and change its purpose
ALTER TABLE public.blog_posts RENAME COLUMN url TO blog_html;

-- Update the column comment to reflect its new purpose
COMMENT ON COLUMN public.blog_posts.blog_html IS 'HTML content of the blog post';
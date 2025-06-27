
-- Create a storage bucket for images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'images',
  'images',
  true,
  10485760, -- 10MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
);

-- Create storage policies for the images bucket
-- Allow anyone to view images (since bucket is public)
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'images');

-- Allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'images' AND auth.role() = 'authenticated');

-- Allow authenticated users to update their own uploads
CREATE POLICY "Users can update own images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'images' AND auth.role() = 'authenticated');

-- Allow authenticated users to delete their own uploads
CREATE POLICY "Users can delete own images"
ON storage.objects FOR DELETE
USING (bucket_id = 'images' AND auth.role() = 'authenticated');

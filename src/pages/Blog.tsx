import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { supabase } from "@/integrations/supabase/client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, X } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BlogPost {
  id: string;
  title: string;
  blog_html: string;
  description: string | null;
  published_date: string;
  created_at: string;
}

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("published_date", { ascending: false });

      if (error) throw error;
      return data as BlogPost[];
    },
  });

  return (
    <div className="min-h-screen bg-entreprenology-bg text-white">
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-entreprenology-turquoise mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Insights, updates, and stories from the Coral Triangle
            </p>
          </div>

          {isLoading && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="bg-entreprenology-bg border border-entreprenology-coral/20">
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4 bg-entreprenology-coral/20" />
                    <Skeleton className="h-4 w-1/2 bg-entreprenology-coral/20" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-20 w-full bg-entreprenology-coral/20" />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-entreprenology-coral">Failed to load blog posts. Please try again later.</p>
            </div>
          )}

          {posts && posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No blog posts yet. Check back soon!</p>
            </div>
          )}

          {posts && posts.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-entreprenology-bg border border-entreprenology-coral/20 hover:border-entreprenology-turquoise/40 transition-colors"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-white line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-gray-400">
                      <Calendar className="h-4 w-4" />
                      {format(new Date(post.published_date), "MMMM d, yyyy")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {post.description && (
                      <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                        {post.description}
                      </p>
                    )}
                    <div className="pt-2"></div>
                    <Button
                      variant="outline"
                      className="w-full border-entreprenology-turquoise/40 text-entreprenology-turquoise hover:bg-entreprenology-turquoise/10"
                      onClick={() => setSelectedPost(post)}
                    >
                      Read Article
                      <BookOpen className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-white border-gray-200">
          <DialogHeader>
            <DialogTitle className="text-2xl text-entreprenology-bg pr-8">
              {selectedPost?.title}
            </DialogTitle>
            {selectedPost && (
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {format(new Date(selectedPost.published_date), "MMMM d, yyyy")}
              </p>
            )}
          </DialogHeader>
          <div 
            className="prose prose-lg max-w-none mt-4
              prose-headings:text-entreprenology-bg
              prose-a:text-entreprenology-coral prose-a:no-underline hover:prose-a:underline
              prose-strong:text-entreprenology-bg
              prose-p:text-gray-700
              prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectedPost?.blog_html || "") }}
          />
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Blog;

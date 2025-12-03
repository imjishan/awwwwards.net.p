import React from "react"
import { Link } from "react-router-dom"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card"
import { BlogPost } from "../types"
import { formatDate } from "../lib/utils"

const posts: BlogPost[] = [
    {
        id: "1",
        title: "The Future of React: Server Components",
        excerpt: "Exploring how React Server Components are changing the way we build web applications.",
        date: "2023-10-15",
        readTime: "5 min read",
        slug: "future-of-react",
        content: "",
        imageUrl: "https://picsum.photos/600/400?grayscale&random=20"
    },
    {
        id: "2",
        title: "Mastering Tailwind CSS",
        excerpt: "Tips and tricks for building beautiful, responsive layouts faster than ever.",
        date: "2023-09-22",
        readTime: "8 min read",
        slug: "mastering-tailwind",
        content: "",
        imageUrl: "https://picsum.photos/600/400?grayscale&random=21"
    }
]

export function Blog() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
             <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
                Thoughts, tutorials, and insights on software development.
            </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(post => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                    <Card className="h-full overflow-hidden transition-all hover:border-primary/50 hover:shadow-md">
                        <div className="aspect-[1.6] overflow-hidden">
                             <img 
                                src={post.imageUrl} 
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                             />
                        </div>
                        <CardHeader>
                            <div className="flex justify-between text-xs text-muted-foreground mb-2">
                                <span>{formatDate(post.date)}</span>
                                <span>{post.readTime}</span>
                            </div>
                            <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                        </CardContent>
                        <CardFooter>
                            <span className="text-sm font-medium text-primary underline-offset-4 group-hover:underline">Read more</span>
                        </CardFooter>
                    </Card>
                </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
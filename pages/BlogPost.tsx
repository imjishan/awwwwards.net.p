import React from "react"
import { useParams, Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { ArrowLeft } from "lucide-react"

export function BlogPost() {
  const { slug } = useParams()
  
  // Mock data fetching
  const post = {
      title: "The Future of React: Server Components",
      date: "October 15, 2023",
      readTime: "5 min read",
      author: "Dev User",
      content: `
        <p>React Server Components (RSC) represent a major shift in how we think about building React applications...</p>
        <p>This paradigm allows us to render components on the server that have zero impact on the client-side bundle size.</p>
        <h3>Why it matters</h3>
        <p>Performance is the main driver here. By keeping heavy dependencies on the server, we ship less JavaScript to the browser.</p>
        <p>... (Rest of the article would go here)</p>
      `
  }

  return (
    <article className="pt-24 pb-20 min-h-screen">
       <div className="container px-4 md:px-6 mx-auto max-w-3xl">
        <Button variant="ghost" className="mb-8" asChild>
            <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
        </Button>

        <header className="mb-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{post.title}</h1>
            <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span>By {post.author}</span>
            </div>
        </header>
        
        <div className="w-full aspect-video rounded-xl bg-muted overflow-hidden mb-10">
            <img src="https://picsum.photos/800/400?grayscale" alt="Blog cover" className="w-full h-full object-cover" />
        </div>

        {/* In a real app, use a safe HTML parser */}
        <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground mb-6">
                React Server Components are changing the landscape of web development. Here is why you should care.
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
       </div>
    </article>
  )
}
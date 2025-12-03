import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Project } from "../../types"

// In a real app, this would come from a constants file or API
export const projectsData: Project[] = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for managing products, orders, and analytics. Built with Next.js App Router.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates using Socket.io and Drag & Drop interface.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    featured: true,
  },
  {
    id: "3",
    title: "AI Image Generator",
    description: "SaaS application wrapping OpenAI's DALL-E API with Stripe subscription integration.",
    tags: ["Next.js", "OpenAI API", "Stripe", "Prisma"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    featured: true,
  },
]

export function Projects({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const displayProjects = featuredOnly 
    ? projectsData.filter(p => p.featured) 
    : projectsData

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                {featuredOnly ? "Featured Projects" : "All Projects"}
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              A selection of projects that showcase my passion for building robust web applications.
            </p>
          </div>
          {featuredOnly && (
             <Button variant="ghost" asChild>
                <Link to="/projects">View All Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
             </Button>
          )}
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                <div className="relative aspect-video overflow-hidden">
                    <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <CardHeader>
                  <CardTitle className="leading-tight hover:text-primary transition-colors">
                    <Link to={`/projects/${project.id}`}>{project.title}</Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                    {project.githubUrl && (
                        <Button variant="outline" size="sm" className="w-full" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                <Github className="mr-2 h-4 w-4" /> Code
                            </a>
                        </Button>
                    )}
                    {project.demoUrl && (
                        <Button size="sm" className="w-full" asChild>
                            <a href={project.demoUrl} target="_blank" rel="noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" /> Live
                            </a>
                        </Button>
                    )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
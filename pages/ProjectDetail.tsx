import React from "react"
import { useParams, Link } from "react-router-dom"
import { projectsData } from "../components/sections/Projects"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export function ProjectDetail() {
  const { id } = useParams()
  const project = projectsData.find(p => p.id === id)

  if (!project) {
    return (
        <div className="min-h-screen pt-32 flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Project Not Found</h1>
            <Button asChild>
                <Link to="/projects">Back to Projects</Link>
            </Button>
        </div>
    )
  }

  return (
    <article className="pt-24 pb-20 min-h-screen">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <Button variant="ghost" className="mb-8" asChild>
            <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
        </Button>

        <div className="aspect-video w-full overflow-hidden rounded-xl border bg-muted mb-8 shadow-sm">
             <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
            <div>
                <h1 className="text-4xl font-bold tracking-tight mb-2">{project.title}</h1>
                 <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
            </div>
            <div className="flex gap-3">
                 {project.githubUrl && (
                    <Button variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noreferrer">
                            <Github className="mr-2 h-4 w-4" /> View Code
                        </a>
                    </Button>
                )}
                {project.demoUrl && (
                    <Button asChild>
                        <a href={project.demoUrl} target="_blank" rel="noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                    </Button>
                )}
            </div>
        </div>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                {project.description}
            </p>
            <h2 className="text-2xl font-semibold mb-4 mt-8">Overview</h2>
            <p className="text-muted-foreground mb-4">
                This project was built to address specific problems in the domain. It features a modern architecture using the latest web technologies.
                (This is a placeholder for detailed markdown content usually fetched from a CMS or local file).
            </p>
             <h2 className="text-2xl font-semibold mb-4 mt-8">Key Features</h2>
             <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Real-time data synchronization</li>
                <li>Responsive design for mobile and desktop</li>
                <li>Secure authentication and authorization</li>
                <li>Performance optimized with 95+ Lighthouse score</li>
             </ul>
             <h2 className="text-2xl font-semibold mb-4 mt-8">Technical Stack</h2>
             <p className="text-muted-foreground">
                The application relies on React for the UI, Node.js for the backend API, and PostgreSQL for data persistence. State management is handled by Redux Toolkit.
             </p>
        </div>
      </div>
    </article>
  )
}
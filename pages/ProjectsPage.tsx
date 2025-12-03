import React from "react"
import { Projects } from "../components/sections/Projects"

export function ProjectsPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container px-4 md:px-6 mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">My Portfolio</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
            Here is a collection of my personal and professional work.
        </p>
      </div>
      <Projects />
    </div>
  )
}
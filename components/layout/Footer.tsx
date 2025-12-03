import React from "react"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="w-full py-10 bg-background border-t">
      <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                Home
            </Link>
            <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary">
                Projects
            </Link>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary">
                Blog
            </Link>
             <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact
            </Link>
        </nav>
      </div>
    </footer>
  )
}
import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Github, Twitter, Linkedin } from "lucide-react"
import { cn } from "../../lib/utils"
import { Button } from "../ui/button"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          Dev<span className="text-primary">Portfolio</span>.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-2 ml-4">
            <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="Github">
                    <Github className="h-5 w-5" />
                </a>
            </Button>
             <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                </a>
            </Button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-lg font-medium p-2 rounded-md hover:bg-accent",
                location.pathname === item.path
                  ? "bg-accent/50 text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex gap-4 p-2 border-t mt-2 pt-4 justify-center">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
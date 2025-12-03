import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 max-w-3xl"
        >
          <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground mb-4">
            Available for new opportunities
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Building digital experiences that matter.
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            I'm a Full Stack Developer passionate about building accessible, pixel-perfect user interfaces that blend design and function.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" asChild>
            <Link to="/projects">
              View Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline">
            Download CV <Download className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}
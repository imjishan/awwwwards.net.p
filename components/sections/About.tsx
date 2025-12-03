import React from "react"
import { motion } from "framer-motion"

export function About() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="w-full md:w-1/2 aspect-square relative rounded-2xl overflow-hidden shadow-xl bg-muted">
             {/* Placeholder for Profile Image */}
             <img 
                src="https://picsum.photos/800/800?grayscale" 
                alt="Profile"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
             />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I have always been fascinated by how things work. This curiosity led me to the world of software engineering, where I can build systems that solve real-world problems.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With over 5 years of experience in full-stack development, I specialize in the JavaScript ecosystem, particularly React, Node.js, and TypeScript. I care deeply about code quality, performance, and user experience.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new cooking recipes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
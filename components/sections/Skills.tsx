import React from "react"
import { motion } from "framer-motion"
import { Badge } from "../ui/badge"
import { SkillCategory } from "../../types"

const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "GraphQL"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "Redis", "Docker", "AWS"],
  },
  {
    name: "Tools & Methods",
    skills: ["Git", "CI/CD", "Jest", "Agile", "Figma", "Vercel", "Linux"],
  },
]

export function Skills() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive list of the technologies and tools I use to bring products to life.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
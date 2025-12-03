import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { Experience as ExperienceType } from "../../types"

const experienceData: ExperienceType[] = [
  {
    id: "1",
    role: "Senior Frontend Engineer",
    company: "TechCorp Inc.",
    period: "2021 - Present",
    description: "Leading the frontend team in rebuilding the core product dashboard using Next.js and TypeScript. Improved performance by 40%.",
  },
  {
    id: "2",
    role: "Full Stack Developer",
    company: "StartUp Solutions",
    period: "2019 - 2021",
    description: "Developed and maintained multiple client projects. Implemented a real-time chat feature using WebSockets and Redis.",
  },
  {
    id: "3",
    role: "Junior Web Developer",
    company: "Digital Agency",
    period: "2018 - 2019",
    description: "Collaborated with designers to implement pixel-perfect landing pages. Gained expertise in responsive web design.",
  },
]

export function Experience() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Work Experience</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experienceData.map((job, index) => (
            <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
            >
                <Card className="border-l-4 border-l-primary">
                    <CardHeader>
                        <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                            <div>
                                <CardTitle>{job.role}</CardTitle>
                                <CardDescription className="text-base font-medium text-foreground/80 mt-1">{job.company}</CardDescription>
                            </div>
                            <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded">{job.period}</span>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{job.description}</p>
                    </CardContent>
                </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
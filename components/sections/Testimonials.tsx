import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Testimonial } from "../../types"
import { Quote } from "lucide-react"

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "InnovateTech",
    text: "Working with this developer was an absolute pleasure. They translated our vague requirements into a robust, beautiful application faster than we expected.",
    avatarUrl: "https://picsum.photos/100/100?random=10"
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO",
    company: "StartupX",
    text: "Exceptional code quality and attention to detail. Not only did they deliver the feature, but they also improved our existing CI/CD pipeline.",
    avatarUrl: "https://picsum.photos/100/100?random=11"
  },
  {
    id: "3",
    name: "Emily Davis",
    role: "Lead Designer",
    company: "Creative Studio",
    text: "A developer who actually cares about design details! The implementation was pixel-perfect to my Figma designs.",
    avatarUrl: "https://picsum.photos/100/100?random=12"
  }
]

export function Testimonials() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kind words from people I've worked with.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full relative overflow-hidden">
                <Quote className="absolute top-4 right-4 h-12 w-12 text-muted/20 rotate-12" />
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <img 
                            src={testimonial.avatarUrl} 
                            alt={testimonial.name} 
                            className="w-12 h-12 rounded-full object-cover border-2 border-primary/10"
                        />
                        <div>
                            <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                            <p className="text-xs text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
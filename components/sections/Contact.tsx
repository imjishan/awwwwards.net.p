import React, { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Input, Textarea } from "../ui/form-elements"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    alert("Message sent! (Demo)")
  }

  return (
    <section className="py-20" id="contact">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Get in Touch</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                    Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>

                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Mail className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-medium">Email</p>
                            <p className="text-muted-foreground">hello@example.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-medium">Location</p>
                            <p className="text-muted-foreground">San Francisco, CA</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="bg-card border rounded-xl p-6 shadow-sm"
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <Input id="name" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <Input id="email" type="email" placeholder="john@example.com" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                        <Input id="subject" placeholder="Project Inquiry" required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[120px]" required />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                </form>
            </motion.div>
        </div>
      </div>
    </section>
  )
}
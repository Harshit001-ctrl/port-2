"use client"

import { useState, useRef, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Mail, User, MessageSquare, Send } from "lucide-react"
import { toast } from "react-hot-toast"
import gsap from "gsap"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import emailjs from "@emailjs/browser"

const formSchema = z.object({
  from_name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  from_email: z.string().email({ message: "Please enter a valid email address." }),
  from_message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from_name: "",
      from_email: "",
      from_message: "",
    },
  })

  useEffect(() => {
    gsap.from(formRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    })
  }, [])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      await emailjs.sendForm("service_tw89tjw", "template_1dz22lk", formRef.current!, "yYbdABY9A_DW7QLyj")

      gsap.to([".form-field"], {
        y: -10,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          form.reset()
          gsap.to([".form-field"], {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out",
          })
        },
      })

      toast.success("Message sent successfully!")
    } catch (error) {
      console.error("EmailJS Error:", error)
      toast.error("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/80">
      <Card className="max-w-2xl mx-auto bg-zinc-900 shadow-2xl shadow-zinc-800/20 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-white text-center">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-zinc-400 text-center mb-8">Have a question or proposal? I'd love to hear from you.</p>
          <Form {...form}>
            <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="from_name"
                render={({ field }) => (
                  <FormItem className="form-field">
                    <FormLabel className="flex items-center gap-2 text-zinc-300">
                      <User className="h-4 w-4" />
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Name"
                        {...field}
                        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600 focus:ring-zinc-600"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="from_email"
                render={({ field }) => (
                  <FormItem className="form-field">
                    <FormLabel className="flex items-center gap-2 text-zinc-300">
                      <Mail className="h-4 w-4" />
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="yourgmail@example.com"
                        type="email"
                        {...field}
                        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600 focus:ring-zinc-600"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="from_message"
                render={({ field }) => (
                  <FormItem className="form-field">
                    <FormLabel className="flex items-center gap-2 text-zinc-300">
                      <MessageSquare className="h-4 w-4" />
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message here..."
                        className="min-h-[120px] resize-none bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600 focus:ring-zinc-600"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-white text-black hover:bg-zinc-200" disabled={isSubmitting}>
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  )
}


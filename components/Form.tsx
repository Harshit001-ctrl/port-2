"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, User, MessageSquare, ArrowRight } from "lucide-react";
import { toast } from "react-hot-toast";
import gsap from "gsap";
import emailjs from "@emailjs/browser";
import { Toaster } from 'react-hot-toast';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  from_name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  from_email: z.string().email({ message: "Please enter a valid email address." }),
  from_message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from_name: "",
      from_email: "",
      from_message: "",
    },
  });

  useEffect(() => {
  if (formRef.current) {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }
}, []);


  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    if (!formRef.current) {
      toast.error("Form not found. Please try again.");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        "service_tw89tjw",
        "template_1dz22lk",
        {
          from_name: values.from_name,
          from_email: values.from_email,
          message: values.from_message,
        },
        "yYbdABY9A_DW7QLyj"
      );

      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
      <Toaster position="bottom-right" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500">
            Let's Connect
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Have an exciting project in mind? I'd love to hear about it. Drop me a message, and let's create something amazing together.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-black/40 backdrop-blur-xl border-zinc-800/50 shadow-xl">
          <CardContent className="p-6">
            <Form {...form}>
              <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="from_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-200 flex items-center gap-2">
                          <User className="h-4 w-4 text-rose-500" />
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            {...field}
                            className="bg-zinc-900/50 border-zinc-800 focus:border-rose-500 focus:ring-rose-500/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="from_email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-200 flex items-center gap-2">
                          <Mail className="h-4 w-4 text-rose-500" />
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="your gmail@example.com"
                            {...field}
                            className="bg-zinc-900/50 border-zinc-800 focus:border-rose-500 focus:ring-rose-500/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="from_message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-200 flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-rose-500" />
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project..."
                          className="min-h-[150px] text-white bg-zinc-900/50 border-zinc-800 focus:border-rose-500 focus:ring-rose-500/20 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:opacity-90 
                    transition-all group font-semibold"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      Send Message
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

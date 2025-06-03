"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export default function Waitlist() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      form.reset();
    }, 1500);
  }

  return (
    <section
      id="waitlist"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] rounded-full bg-pink-900/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-md rounded-3xl border border-purple-500/20 shadow-xl shadow-purple-500/5 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-12 flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600">
                Join the waitlist
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Enroll to get notified early.
              </p>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your name"
                            className="h-12 rounded-lg bg-background/50 border-muted"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            className="h-12 rounded-lg bg-background/50 border-muted"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full h-12 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-purple-500/20 text-base font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Joining..." : "Join Waitlist"}
                  </Button>
                </form>
              </Form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-900 to-pink-900 p-8 md:p-12 flex flex-col justify-center hidden md:block"
            >
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-300 font-semibold">AS</span>
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">Anirban S.</p>
                      <p className="text-white/70 text-sm">
                        "Collaboration tools made project management a breeze.
                        Highly recommend!"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-pink-300 font-semibold">MP</span>
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">Michael P.</p>
                      <p className="text-white/70 text-sm">
                        "Getting the perfect matches and closing the deals in 48
                        hours, pretty impressive, waiting for the launch!"
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-white/90 text-xl font-semibold text-center mt-6">
                  Join 5,000+ people <br />
                  already on our waitlist
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6">
            Be part of the future of meaningful connections
          </h3>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {[
              "5,000+ on waitlist",
              "Launching Q3 2025",
              "Early access coming soon",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2" />
                <span className="text-muted-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

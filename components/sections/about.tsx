"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Lock,
  Sparkles,
  LineChart,
  Clock,
  Shield,
  BrainCircuit,
  Handshake,
  Send,
  CircleCheckBig,
} from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Access Top-Tier Expertise",
      description:
        "Connect with a curated network of vetted, expert consultants.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-purple-500" />,
      title: "AI-Powered Precision Matching",
      description:
        "Our intelligent algorithms analyze your project needs precisely.",
    },
    {
      icon: <Handshake className="h-8 w-8 text-purple-500" />,
      title: "Meaningful Connections",
      description:
        "Focus on quality over quantity, with matches that truly matter.",
    },
    {
      icon: <LineChart className="h-8 w-8 text-purple-500" />,
      title: "Accelerate Your Search",
      description:
        "Streamline your search and receive high-quality proposals faster.",
    },
    {
      icon: <CircleCheckBig className="h-8 w-8 text-purple-500" />,
      title: "Hire with Confidence",
      description:
        "Work with verified professionals who undergo a thorough vetting.",
    },
    {
      icon: <Send className="h-8 w-8 text-purple-500" />,
      title: "Seamless Communication",
      description:
        "Collaborate directly and securely via integrated messaging.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -left-[300px] top-1/4 w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-3xl" />
        <div className="absolute -right-[300px] bottom-1/4 w-[600px] h-[600px] rounded-full bg-pink-900/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600">
            Seamless Collaboration
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Matchkin uses advanced algorithms to connect you with like-minded
            individuals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300 shadow-lg hover:shadow-purple-500/5">
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-purple-500/10 w-16 h-16 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            "The platform's AI matching is spot-on. <br />
            Will definitely save us weeks of searching."
          </h3>
          <p className="text-lg text-muted-foreground italic mb-6">
            - Adwit Kumar (Project Manager, Confidential)
          </p>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {["Trusted", "Secure", "Fast", "Seamless"].map((brand, index) => (
              <motion.span
                key={index}
                className="text-xl md:text-2xl font-bold brand-text"
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

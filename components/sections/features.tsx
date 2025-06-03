"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  Zap,
  Users,
  Shield,
  Briefcase,
  ChartLine,
} from "lucide-react";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "AI-Powered Matching",
      description: "Get matched automatically with relevant projects.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Streamlined Workflow",
      description: "Manage contracts, communication, and payments easily.",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Access High-Quality Projects",
      description:
        "Connect with serious clients seeking your specific expertise.",
    },
    {
      icon: <ChartLine className="h-8 w-8" />,
      title: "Build Your Reputation",
      description: "Showcase skills and experience to attract opportunities.",
    },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Why Join Matchkin?
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience the future of professional networking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="group"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 transition-all duration-300 group-hover:border-purple-500/40 group-hover:shadow-lg group-hover:shadow-purple-500/5">
                <div className="mb-4 p-3 rounded-full bg-purple-500/20 w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

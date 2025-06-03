"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-40 pb-32"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 dark:from-black dark:to-slate-900/30 z-0" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/10 dark:bg-purple-500/5"
            style={{
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto text-center relative"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-8"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600">
              Connect projects with
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-500">
              expert consultants
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl font-medium text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            Seamless collaboration with AI-powered matching.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div className="relative">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base md:text-lg font-semibold px-8 py-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-purple-500/20 relative"
              >
                <a href="#waitlist">
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>

            <Button
              variant="outline"
              size="lg"
              className="text-base md:text-lg font-semibold px-8 py-6 rounded-full border-2 border-purple-500/20 hover:border-purple-500/30"
            >
              <a href="#about">Learn More</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          className="mt-24 md:mt-32 max-w-6xl mx-auto"
        >
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 to-pink-900/70 backdrop-blur-md flex items-center justify-center">
              <p className="text-2xl md:text-3xl font-bold text-white/90 text-center px-8 glow-text">
                For Clients & For Consultants
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <a
            href="#about"
            className="text-foreground/70 flex flex-col items-center"
          >
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <span className="w-6 h-6 border-b-2 border-r-2 border-foreground/70 transform rotate-45"></span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

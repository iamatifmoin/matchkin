"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Connection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const nodes = [
    { x: "20%", y: "20%", delay: 0 },
    { x: "80%", y: "30%", delay: 0.2 },
    { x: "30%", y: "70%", delay: 0.4 },
    { x: "70%", y: "80%", delay: 0.6 },
    { x: "50%", y: "50%", delay: 0.8 },
  ];

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.8 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.8, 0.4, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.3,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="connection"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Connect & Grow Together
          </h2>
          <p className="text-xl text-muted-foreground">
            Watch your network expand with meaningful connections.
          </p>
        </motion.div>

        <div className="relative h-[600px] max-w-4xl mx-auto">
          <svg className="absolute inset-0 w-full h-full">
            {nodes.map((node, i) =>
              nodes
                .slice(i + 1)
                .map((target, j) => (
                  <motion.path
                    key={`${i}-${j}`}
                    d={`M ${node.x} ${node.y} L ${target.x} ${target.y}`}
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    fill="none"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={lineVariants}
                  />
                ))
            )}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  stopColor="rgb(168, 85, 247)"
                  stopOpacity="0.4"
                />
                <stop
                  offset="100%"
                  stopColor="rgb(236, 72, 153)"
                  stopOpacity="0.4"
                />
              </linearGradient>
            </defs>
          </svg>

          {nodes.map((node, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{ left: node.x, top: node.y }}
              initial={{ scale: 0, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
              }
              transition={{ duration: 0.5, delay: node.delay }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center"
                variants={pulseVariants}
                initial="initial"
                animate="animate"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        ></motion.div>
      </div>
    </section>
  );
}

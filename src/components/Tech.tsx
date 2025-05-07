"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const techIcons = [
  { src: "/nextjs.png", alt: "Next.js" },
  { src: "/typescript.png", alt: "TypeScript" },
  { src: "/tailwind.png", alt: "Tailwind CSS" },
  { src: "/redis.png", alt: "Redis" },
  {src: "/react.png", alt: "React"},
  {src: "/nodejs.png", alt: "Node.js"},
  {src: "/MongoDB.png", alt: "MongoDB"},
  {src: "/Docker.png", alt: "Docker"},
  {src: "/Apache Kafka.png", alt: "Apache Kafka"},
  {src: "/Firebase.png", alt: "Firebase"},
  {src:"/Java.png", alt:"Java"},
];

const TechStack: React.FC = () => {
  return (
    <section
      className="max-w-[40rem] mx-auto px-4 w-full flex flex-col gap-8"
      id="techstack"
    >
      <motion.h2
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-2xl font-semibold"
      >
        Tech Stack
      </motion.h2>

      <div className="flex  items-center gap-6">
        {techIcons.map((tech, index) => (
          <motion.div
            key={tech.alt}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 0.8, filter: "blur(0px)" }}
            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
          >
            <Image src={tech.src} alt={tech.alt} width={60} height={60} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;

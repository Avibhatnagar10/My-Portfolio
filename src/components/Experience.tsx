"use client";

import { NextPage } from "next";
import { motion } from "motion/react";
import { Calendar } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

const Experience: NextPage = () => {
  const experiences: Experience[] = [
    {
      title: "Software Developer",
      company: "Tech Firefly",
      duration: "March 2025 - Present",
      description: [
        "Building a SaaS Platform",
        
      ],
    },
  ];

  return (
    <section
      className="max-w-[40rem] mx-auto px-[1rem] w-full flex flex-col gap-8"
      id="experience"
    >
      <div>
        <motion.h2
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 0.9 }}
          className="text-2xl font-semibold"
        >
          Experience
        </motion.h2>
      </div>
      <motion.div
        className="flex flex-col gap-8"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.3, delay: 0.2 * index }}
            className="border border-white border-opacity-10 rounded-xl p-4 hover:bg-white hover:bg-opacity-5 transition-all flex flex-col gap-4 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-lg">
                {exp.title} @{exp.company}
              </h3>
              <div className="flex items-center gap-4 text-sm opacity-80">
                <span className="flex items-center gap-2">
                  <Calendar size={14} className="mb-0.5" />
                  {exp.duration}
                </span>
              </div>
            </div>
            <hr className="opacity-10" />
            <ul className="list-disc list-inside opacity-80 flex flex-col gap-1">
              {exp.description.map((point, i) => (
                <li key={i} className="text-pretty">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;

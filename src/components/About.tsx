"use client";

import { NextPage } from "next";

import { motion } from "motion/react";

interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
    <section
      className="max-w-[40rem] mx-auto px-[1rem] w-full flex flex-col gap-8"
      id="about"
    >
      <div>
        <motion.h2
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="text-2xl font-semibold"
        >
          About
        </motion.h2>
      </div>
      <div className="flex items-start justify-start flex-col gap-6">
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 0.8, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          I love designing and developing real-world SaaS platforms that solve meaningful problems.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 0.8, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
           I'm committed to open collaboration and community-driven development, building with the future in mind—where AI isn’t a buzzword but a core utility for productivity, inclusivity, and innovation.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 0.8, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          My focus is always on user-centric design and scalable backend architecture, ensuring the tools I build deliver value at scale and make a tangible difference.
        </motion.p>{" "}
      </div>
    </section>
  );
};

export default About;

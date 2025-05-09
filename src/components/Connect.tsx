"use client";

import { NextPage } from "next";
import { motion } from "motion/react";
import { Mail, Github, Twitter, Linkedin, Youtube } from "lucide-react";

import Link from "next/link";

const Connect: NextPage = () => {
  const socials = [
    {
      name: "Email",
      icon: <Mail size={20} />,
      link: "mailto:avibhatnagar10@gmail.com ",
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      link: "https://github.com/Avibhatnagar10",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      link: "https://www.linkedin.com/in/avi-bhatnagar10/",
    },
    
  ];

  return (
    <section
      className="max-w-[40rem] mx-auto px-[1rem] w-full flex flex-col gap-8 pb-44"
      id="connect"
    >
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-6"
      >
        <div>
          <motion.h2
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.3, delay: 1.3 }}
            className="text-2xl font-semibold"
          >
            Let's Connect
          </motion.h2>
        </div>
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 1.4 }}
        >
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.link}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 border border-white border-opacity-10 rounded-full hover:bg-white hover:bg-opacity-5 transition-all"
            >
              {social.icon}
              <span className="text-sm font-medium">{social.name}</span>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Connect;

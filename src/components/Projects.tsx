"use client";

import { NextPage } from "next";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

interface Props {}

const Projects: NextPage<Props> = ({}) => {
  const projects: Project[] = [
    {
      title: "NexStream - A Live Streaming Platform ",
      description: "AI-powered live streaming platform designed for seamless collaboration, real-time engagement, and smart content moderation.",
      image: "/nexstream.png",
      link: "https://nexstream-1011.vercel.app/",
      tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    },
    {
      title: "AI Video Analyzer",
      description: "Advanced AI-powered tool designed to analyze YouTube videos for content compliance, potential violations, and risk assessment.",
      image: "/aivideo.png",
      link: "https://yt-ai-analyzer.vercel.app/",
      tags: ["React.js", "TypeScript", "Youtube API", "Docker", "Python", "NLP Models"],
    },
    {
      title: "AniVara",
      description: "Watch anime and manga in high quality.",
      image: "/anivara.png",
      link: "https://ani-vara.vercel.app/",
      tags: ["React.js", "Material UI", "Framer Motion", "TypeScript" ],
    },
   
  ];

  return (
    <section
      className="max-w-[40rem] mx-auto px-[1rem] w-full flex flex-col gap-8"
      id="projects"
    >
      <div>
        <motion.h2
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 1.1 }}
          className="text-2xl font-semibold"
        >
          Projects
        </motion.h2>
      </div>
      <div className="flex flex-col gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="grid grid-cols-1 gap-6 w-full grow"
        >
          {projects.map((project, index) => (
            <div
              className="border border-white border-opacity-10 rounded-xl p-4 hover:bg-white hover:bg-opacity-5 transition-all w-full backdrop-blur-xl"
              key={index}
            >
              <Link href={project.link} className="flex flex-col gap-4">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg -mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1920}
                    height={1020}
                    className="object-cover rounded-lg"
                  />
                </div>
                <hr className="opacity-10" />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight
                        size={16}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </h3>
                    <p className="opacity-80 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

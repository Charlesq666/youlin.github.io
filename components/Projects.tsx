import { ProjectType } from "@/types";
import { motion } from "framer-motion";
import React from "react";
import ProjectCard from "./ProjectCard";

type Props = {};

const projects: ProjectType[] = [
  {
    title: "Work Conservative Scheduler Coorperative Lock",
    descriptions: [
      "Scheduler Cooperative Locks (SCL) is a family of locking primitives introduced to address the scheduler subversion problem, where lock usage patterns determine which thread runs, potentially undermining CPU scheduling goals. SCL aims to provide proportional lock allocations that match the CPU scheduler's allocations, ensuring fair access to resources for each thread. This is achieved by offering an equal or proportional time window, known as lock opportunity, within which each thread can acquire the lock.",
      "While SCL has been effective in addressing scheduler subversion and improving fairness among threads, it has a shortcoming in that it is not work-conserving. In SCL, there can be instances where no thread holds the lock, but other threads are unable to acquire it because they are not the slice owner. This limitation can lead to inefficient use of resources and reduced system performance.",
      "To address the limitations of SCL, I helpd to develop a Work Conserving Scheduler Cooperative Lock (WC-SCL) that allows multiple threads to share a lock slice, increasing lock efficiency and fairness among threads. I designed new heuristics for pairing mechanisms, built a benchmark suite, and implemented a Python-based simulator to test these mechanisms. By analyzing each thread's past critical section and non-critical section time, I aimed to better predict the future lock acquiring behavior of individual threads, ultimately leading to improved lock management and performance."
    ],
    imgUrl: "/projects/lock.png",

  }
];

const Projects = (props: Props) => {
  return (
    <motion.div
      className="component-basic"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="basic">Projects</h3>

      <div className="min-h-[75%] w-full flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-basic">
        {projects.map((project, index) => (
           <ProjectCard key={index} project={project}/>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-primary/10 left-0 h-[500px] -skew-y-12 z-0"></div>
    </motion.div>
  );
};

export default Projects;

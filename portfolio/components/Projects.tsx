import { ProjectType } from "@/types";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

const projects: ProjectType[] = [
  {
    title: "project 1",
    description: "description 1",
    imgUrl: "https://venturebeat.com/wp-content/uploads/2019/04/d2fcb133-1ed1-4a92-bd7f-8be7cfc96cec.png?fit=750%2C408&strip=all" 
  },
  {
    title: "project 2",
    description: "description 2",
    imgUrl: "https://venturebeat.com/wp-content/uploads/2019/04/d2fcb133-1ed1-4a92-bd7f-8be7cfc96cec.png?fit=750%2C408&strip=all" 
  },
  {
    title: "project 3",
    description: "description 3",
    imgUrl: "https://venturebeat.com/wp-content/uploads/2019/04/d2fcb133-1ed1-4a92-bd7f-8be7cfc96cec.png?fit=750%2C408&strip=all" 
  },
];

const Projects = (props: Props) => {
  return (
    <motion.div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="basic absolute top-24">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, index) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center p-20 md:p-44 h-screen" key={index}>
            <motion.img
              initial={{ 
                opacity: 0, 
                y: -300
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ 
                opacity: 1,
                y: 0
              }}
              viewport={{ once: true }}
              src={project.imgUrl}
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                {project.title}
              </h4>
            </div>

            <p className="text-lg text-center md:text-left">
              {project.description}
            </p>
          </div>
        ))}
        <motion.div className=""></motion.div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;

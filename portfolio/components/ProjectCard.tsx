import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ProjectType } from '@/types'

type Props = {
  project: ProjectType
}

const ProjectCard = ( {project} : Props) => {
  return (
    <div
      className="w-screen snap-center flex flex-col justify-center gap-10 items-center p-10 sm:p-20 md:p-44 h-screen"
    >
      <motion.div
        className="max-w-[30%] max-h-[30%] rounded-md"
        initial={{
          opacity: 0,
          y: -300,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
      >
        <Image 
          className="max-h-full object-cover object-center"
          src={project.imgUrl}
          alt=""
          width={600}
          height={600}
        />
      </motion.div>

      <div className="h-[60%] space-y-10 px-0 md:px-10 max-w-6xl z-10">
        <h4 className="h-[20%] text-2xl md:text-4xl font-semibold text-center">
          {project.title}
        </h4>
        <ul className="h-[80%] list-disc overflow-y-scroll scrollbar scrollbar-basic">
          {project.descriptions.map((description, index) => (
            <li className="text-md md:text-lg text-center md:text-left" key={index}>
              {description}
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default ProjectCard
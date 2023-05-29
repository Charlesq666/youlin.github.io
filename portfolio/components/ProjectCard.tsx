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
      className="h-full w-screen snap-center flex flex-col justify-center gap-10 items-center px-4 md:px-10 lg:px-20 pb-4"
    >
      <motion.div
        className="max-h-[30%] rounded-sm"
        initial={{
          opacity: 0,
          y: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
      >
        <Image 
          priority = {true}
          className="max-h-full aspect-square rounded-md object-cover object-center"
          src={project.imgUrl}
          alt=""
          width={300}
          height={300}
        />
      </motion.div>

      <div className="text-primary h-[70%] mb-10 gap-3 px-0 md:px-10 max-w-6xl z-10">
        <h4 className="h-[15%] text-xl md:text-2xl lg:text-3xl font-semibold text-center">
          {project.title}
        </h4>
        <ul className="h-[85%] list-disc overflow-y-scroll scrollbar scrollbar-basic">
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
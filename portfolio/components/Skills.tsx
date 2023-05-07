import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 basic'>skills</h3>

      <h3 className='absolute top-36 uppercase tracking-3[px] text-gray-500 text-sm'>hover over a skill for currecy proficiency</h3>
    
      <div className='grid grid-cols-4 gap-5'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  )
}

export default Skills
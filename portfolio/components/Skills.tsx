import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'

type Props = {}

const skillUrls = [
  'https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon.png',
  'https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon.png',
]

const Skills = (props: Props) => {
  return (
    <motion.div className='component-basic'>
      <h3 className='basic'>skills</h3>

      <h3 className='absolute top-36 uppercase tracking-3[px] text-gray-500 text-sm'>hover over a skill for currecy proficiency</h3>
    
      <div className='grid grid-cols-4 gap-5'>
        {skillUrls.map((skillUrl, index) => (
          <Skill key={index} imgUrl={skillUrl} />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
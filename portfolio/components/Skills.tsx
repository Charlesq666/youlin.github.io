import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'
import { SkillObj } from '@/types'

type Props = {}

const skillObjs: SkillObj[] = [
  { name: 'Python', imgUrl: 'skills/python.svg' },
  { name: 'JavaScript', imgUrl: 'skills/js.png' },
  { name: 'TypeScript', imgUrl: 'skills/ts.png' },
  { name: 'React', imgUrl: 'skills/react.svg' },
  { name: 'Next.js', imgUrl: 'skills/nextjs.svg' },
  { name: 'Vue', imgUrl: 'skills/vue.png' },
  { name: 'Flask', imgUrl: 'skills/flask.png' },
  { name: 'FastAPI', imgUrl: 'skills/fastapi.svg' },
  { name: 'Scrapy', imgUrl: 'skills/scrapy.png' },
  { name: 'Scikit-Learn', imgUrl: 'skills/scikit-learn.png' },
  { name: 'Pandas', imgUrl: 'skills/pandas.png' },
  { name: 'AWS', imgUrl: 'skills/aws.svg' },
  { name: 'AWS Lambda', imgUrl: 'skills/awslambda.png' },
  { name: 'AWS EC2', imgUrl: 'skills/ec2.png' },
  { name: 'AWS Route53', imgUrl: 'skills/route53.png' },
  { name: 'AWS DynamoDB', imgUrl: 'skills/dynamodb.png' },
  { name: 'Elasticsearch', imgUrl: 'skills/elasticsearch.png' },
  { name: 'Docker', imgUrl: 'skills/docker.png' },
  { name: 'MySQL', imgUrl: 'skills/mysql.png' },
  { name: 'MongoDB', imgUrl: 'skills/mongodb.svg' },
  { name: 'SQLite', imgUrl: 'skills/sqlite.png' },
  { name: 'REST API', imgUrl: 'skills/restapi.png' },
  { name: 'HTML', imgUrl: 'skills/html.png' },
  { name: 'CSS', imgUrl: 'skills/css.png' },
  { name: 'C', imgUrl: 'skills/c.png' },
  { name: 'Go', imgUrl: 'skills/golang.png' },
  { name: 'GitHub', imgUrl: 'skills/github.png' },
  { name: 'SQL', imgUrl: 'skills/sql.png' },
]

const Skills = (props: Props) => {
  return (
    <motion.div className='component-basic'>
      <h3 className='basic'>
        skills
        <p className='h-[20%] text-sm lowercase w-[50%] font-normal tracking-[2px]'>
          Hover over a skill to see its fullname
        </p>
      </h3>
    
      <div className='h-[80%] flex items-center justify-center'>
        <div className='overflow-x-hidden overflow-y-auto scrollbar-basic max-h-full mb-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
          {skillObjs.map((skillObj, index) => (
            <Skill key={index} skillObj={skillObj} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Skills
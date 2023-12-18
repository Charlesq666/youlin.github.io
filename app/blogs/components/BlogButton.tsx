'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    id: number,
    title: string,
    description: string,
    date: string,
}

const Blog = (props: Props) => {
    const router = useRouter()
    return (
        <motion.button 
            onClick={() => router.push(`/blogs/${props.id}`)}
            className='bg-amber-200 rounded-lg h-24'
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.02 }}
        >
            {props.title} 
        </motion.button>
    )
}

export default Blog
import BlogLayout from '@/components/BlogLayout'
import Layout from '@/components/Layout'
import React from 'react'

type Props = {}

const blogs = (props: Props) => {
  return (
    <BlogLayout>
      <div className='flex items-center justify-center font-bold w-full h-screen'>
        This is a blog page
      </div>
    </BlogLayout>
  )
}

export default blogs
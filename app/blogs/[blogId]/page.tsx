import { blogs } from '@/lib/blogs'
import React from 'react'

type Props = {
  params: {
    blogId: string
  }
}

const blog = (props: Props) => {
  console.log(`this is ${JSON.stringify(props)}`)
  return (
    <div className='h-full flex items-center justify-center'>
        this is { props.params.blogId }
    </div>
  )
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    blogId: blog.id.toString()
  }))
}

export default blog
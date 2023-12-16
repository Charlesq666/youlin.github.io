import React from 'react'
import BlogHeader from './BlogHeader'
import Head from 'next/head'

type Props = {
  children: React.ReactNode
}

const BlogLayout = ( {children} : Props) => {
  return (
    <div className='bg-blog-bg h-screen'>
      <Head>
        <meta name="description" content="personal blogs" />
        <title>Youlin Qu's Blog</title>
      </Head>
      <BlogHeader />
      {children}
    </div>
  )
}

export default BlogLayout
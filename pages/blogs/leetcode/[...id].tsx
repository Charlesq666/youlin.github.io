import BlogLayout from '@/components/BlogLayout'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const BlogIDPage = (props: Props) => {
  const router = useRouter()
  const {id} = router.query

  return (
    <BlogLayout>
      <div> {id} </div>
    </BlogLayout>
  )
}

export default BlogIDPage
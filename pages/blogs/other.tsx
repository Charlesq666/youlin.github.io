import BlogLayout from '@/components/BlogLayout'
import React from 'react'

type Props = {}

const other = (props: Props) => {
  return (
    <BlogLayout>
      <div className='flex items-center justify-center font-bold w-full h-screen'>
        under develop, check back for more
      </div>
    </BlogLayout>
  )
}

export default other
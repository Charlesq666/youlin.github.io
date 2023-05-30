import Layout from '@/components/Layout'
import React from 'react'

type Props = {}

const blog = (props: Props) => {
  return (
    <Layout>
      <div className='h-full w-full text-2xl font-semibold uppercase text-black flex items-center justify-center'>
        blog
      </div>
    </Layout>
  )
}

export default blog
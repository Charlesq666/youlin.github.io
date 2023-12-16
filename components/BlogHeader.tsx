import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const BlogHeader = (props: Props) => {
  const cName = 'm-4 font-semibold uppercase tracking-[2px]'
  return (
    <div className='mx-auto flex items-center justify-between max-w-6xl gap-10'>
      <div className={cName}>
        <Link href="/blogs">
          BlogHome
        </Link>
      </div>

      <div className={cName}>
        <Link href="/blogs/leetcode">
          leetcode
        </Link>
      </div>

      <div className={cName}>
        <Link href="/blogs/other">
          other
        </Link>
      </div>

    </div>
  )
}

export default BlogHeader
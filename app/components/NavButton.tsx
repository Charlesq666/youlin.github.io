import { NavLinkInfo } from '@/lib/data'
import Link from 'next/link'
import React from 'react'

type Props = {
    info: NavLinkInfo,
}

const NavButton = ({ info }: Props) => {
  return (
    <Link href={info.url} className='bg-amber-200 hover:bg-amber-300 text-gray-900 rounded-md p-2 w-20 h-10 text-center hover:scale-105'>
        { info.name }
    </Link>
  )
}

export default NavButton
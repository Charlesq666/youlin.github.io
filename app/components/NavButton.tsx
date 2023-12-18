import { NavLinkInfo } from '@/lib/navlinks'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

type Props = {
    info: NavLinkInfo,
    isActivated?: boolean
}

const NavButton = ({ info, isActivated }: Props) => {
    const buttonClass = isActivated ? 
    'bg-red-300' : 
    'bg-amber-200 hover:bg-amber-300'

    return (
        <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
        >
            <Link href={info.url} className={buttonClass + ' text-gray-900 rounded-md p-2 w-20 h-10 text-center'}>
                { info.name }
            </Link>
        </motion.div>
    )
}

export default NavButton
'use client'
import { Authcontext } from "@/contexts/AuthContext"
import { links } from "@/lib/navlinks"
import { useContext } from "react"
import NavButton from "./NavButton"
import { usePathname } from "next/navigation"

type Props = {}

const Navbar = (props: Props) => {
    const { login, logout, isLoggedIn } = useContext(Authcontext)
    const pathName = usePathname()
    return (
        <div 
            className='h-20 w-[90vw] rounded-lg bg-gray-100 flex items-center justify-center mx-auto mt-2 fixed top-2 opacity-80 z-10'
        >
            <nav className="flex items-center justify-evenly gap-2 w-full mx-4">
                { links.map((navLink) => (
                    <NavButton info={navLink} isActivated={pathName === navLink.url} key={navLink.name}/>
                ))}
            </nav>
        </div>
    )
}

export default Navbar
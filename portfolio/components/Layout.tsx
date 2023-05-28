import React from 'react'
import Header from './Header'

type Props = {
  children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
  <div className="bg-background text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-basic">
    <Header />
    {children}
  </div>
  )
}

export default Layout
import React from 'react'
import Header from './Header'
import Head from 'next/head'

type Props = {
  children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
  <div className="bg-background text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-basic">
    <Head>
      <meta name="description" content="Portfolio Website" />   
      <title>Youlin Qu</title>
    </Head>    

    <Header />
    {children}
  </div>
  )
}

export default Layout
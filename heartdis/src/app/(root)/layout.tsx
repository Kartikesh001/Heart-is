"use server"
import React from 'react'


// import {  MenuItem } from '../componenets/navbar';
import HeartSections from '../componenets/trial';
import HeartHealthIntro from '../componenets/trial';
import Navbar from '../componenets/Navbar';
const layout = ({children}: Readonly<{
    children: React.ReactNode;}>) => {
  return (
    <div>
        {/* <NavbarDemo/>
        <HeartHealthIntro/> */}
          <Navbar />
      {children}
    </div>
  )
}

export default layout
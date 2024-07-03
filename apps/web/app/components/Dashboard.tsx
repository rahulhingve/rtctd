"use client"
import React from 'react'
import Appbar from './Appbar'

import Link from 'next/link'

import { LandingPage } from './LandingPage'


const Dashboard = () => {



  return (
    <div >
      <div>
        <Appbar />
      </div>


      <div>
        <LandingPage />
      </div>
    </div>

  )
}

export default Dashboard
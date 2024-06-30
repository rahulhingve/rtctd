"use client"
import React from 'react'
import Appbar from './Appbar'
import { Button } from '@repo/ui/button'
import Link from 'next/link'
import { useSession } from 'next-auth/react'


const Dashboard = () => {
  const {data: session}= useSession();
    
    
  return (
    <div >
       <div>
        <Appbar/>
        </div> 
       <div>
        <Link href="/editor" >Go to Code Editor</Link>
        </div> 
        <div>
          {session? <h1>{session.user?.name}</h1>:<h1>session  nahiiiiii hai </h1>}
        </div>
    </div>
    
  )
}

export default Dashboard
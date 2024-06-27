import React from 'react'
import Appbar from './Appbar'
import { Button } from '@repo/ui/button'
import Link from 'next/link'


const Dashboard = () => {
    
    
  return (
    <div>
       <div>
        <Appbar/>
        </div> 
       <div>
        <Link href="/editor" >Go to Code Editor</Link>
        </div> 
    </div>
    
  )
}

export default Dashboard
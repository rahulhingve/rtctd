import React from 'react'

import Appbar from '../../components/Appbar'
import { getServerSession } from 'next-auth';
import { options } from '../../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import CodeEditor from '../../components/CodeEditor';

const page = async () => {

    const session = await getServerSession(options);
if(!session?.user){
  redirect("/")
}
  return (
    <div>
        <Appbar />
        <CodeEditor/>
    </div>
  )
}

export default page
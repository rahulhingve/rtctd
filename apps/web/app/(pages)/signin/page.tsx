'use client'




import { redirect } from "next/navigation";
import { GithubSignInButton } from "../../components/authButtons";
import { useSession } from "next-auth/react";


export default  function Page() {

const {data: session}=useSession();
if(session?.user){
    redirect("/dashboard")
}

  return <div  >
    

    <div className="w-full  flex flex-col items-center justify-center min-h-screen bg-black py-2">
      <div className="flex flex-col items-center  rounded-xl bg-black p-10 shadow-md">
        <h1 className="mt-10 mb-4 text-4xl font-bold text-white">Sign In</h1>
        {/* <GoogleSignInButton /> */}
        <GithubSignInButton />
       
      </div>
    </div>
    </div>

}


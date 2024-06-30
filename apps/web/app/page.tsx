

import { getServerSession } from "next-auth";
import { CredentialsForm } from "./components/credentialsForm";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { GithubSignInButton } from "./components/authButtons";


export default async function Page() {

const session = await getServerSession(options);
if(session?.user){
  redirect("/dashboard")
}

  return <div  >
    

    <div className="w-full  flex flex-col items-center justify-center min-h-screen bg-black py-2">
      <div className="flex flex-col items-center  rounded-xl bg-slate-300 p-10 shadow-md">
        <h1 className="mt-10 mb-4 text-4xl font-bold">Sign In</h1>
        {/* <GoogleSignInButton /> */}
        <GithubSignInButton />
        <span className="text-2xl font-semibold text-white text-center mt-8">
          Or
        </span>
        {/* <CredentialsSignInButton /> */}
        <CredentialsForm />
      </div>
    </div>
    </div>

}



import { getServerSession } from "next-auth";
import Dashboard from "./components/Dashboard";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function Page() {

const session = await getServerSession(options);
if(!session?.user){
  redirect("/api/auth/signin")
}

  return <div>
    <Dashboard/>
  </div>
}


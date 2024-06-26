
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "./api/auth/[...nextauth]/options";

export default async function Page() {
 const session = await getServerSession(options);
 if (session) {
  redirect('/dashboard')
} else {
  redirect('/api/auth/signin')
}
}


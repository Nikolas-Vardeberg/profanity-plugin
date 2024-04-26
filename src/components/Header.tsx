import { getSession, logout } from "@/lib/lib";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";



const Header = async () => {
    let session = await getSession();

    if(!session) {
        redirect("/admin/signin")
    }

  
    return (
      <header className='border bottom-1'><nav className='bg-white border-gray-200 px-4 py-2.5'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'><h1>Stopp Banning admin</h1><div>
          {
            session.user ? (
              <div className="flex items-center gap-4">
                <Link href="/admin/dashboard">
                  <Button variant="outline">Log Out</Button></Link>
              </div>

            ) : (
              <Link href="/api/auth/signin"><Button variant="link">Sign in</Button></Link>
            )
          }</div></div>
      </nav></header>
    )
  }
  
  export default Header
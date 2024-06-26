import { getSession, logout } from "@/lib/lib";
import { redirect, usePathname } from "next/navigation";
import { Button } from "../../../../components/ui/button";
import Image from "next/image";
import Link from "next/link";



const Header = async () => {
    let session = await getSession();

    if(!session) {
        redirect("/admin/signin")
    }



    const adminLinks = [
        { href: "/admin/dashboard", label: "Dashboard" },
        { href: "/admin/dashboard/pricing", label: "Pricing" },
        { href: "/admin/dashboard/kommune/", label: "Min Kommune" },
      ];
  
    return (
        <header className='border bottom-1'>
            <nav className='bg-white border-gray-200 px-4 py-2.5'>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>

                    <h1>Stopp Banning admin</h1>

                    <div className="space-x-4">
                    {adminLinks.map((link, index) => (
                        <Link key={index} href={link.href}>
                            <Button variant="adminOutline">
                                {link.label}
                            </Button>
                        </Link>
                    ))}
                    </div>

                    <div>
                        <div className="flex items-center gap-4">
                            <form action={async () => {
                                "use server"
                                await logout();
                                redirect("/admin/signin")
                            }}>
                            <Button variant="adminOutline" type="submit">Log Out</Button>
                            </form>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
  }
  
  export default Header
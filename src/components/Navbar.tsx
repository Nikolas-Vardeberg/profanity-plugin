import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { ArrowDown } from "lucide-react"



export default function Navbar() {
    return(
        <div className="sticky inset-x-0 top-0 z-30 bg-background transition-all bg-gradient-to-r from-red-600 to-red-500">
            <MaxWidthWrapper>
                <nav className="w-full relative flex items-center justify-between mx-auto px-12 py-5">
           
                    <Link href="/" className="font-bold text-l text-white">
                        Ringsaker Kommune
                    </Link>


                    <ul className="flex space-x-4">
                        <li>
                            hei
                        </li>
                        <li>
                            hei
                        </li>
                        <li>
                            hei
                        </li>
                    </ul>

                    <Link href="/" className="border-2 p-1 font-normal px-4 rounded-full text-white">
                        Download 
                    </Link>


                </nav>
            </MaxWidthWrapper>
        </div>
    )
}
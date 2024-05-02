import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigationlink = () => {
    const currentPath = usePathname();

    const links = [
        { label: "Dashboard", href: "/admin/dashboard" },
        { label: "Pricing", href: "/admin/dashboard/pricing" },
        { label: "My Kommune", href: "/admin/dashboard/kommune" },
    ];

    return (
        <div className="space-x-4">
            {links.map((link, index) => (
                <Link 
                    key={index} // Added key prop here
                    className={cn({
                        "bg-red-500 text-primary-foreground": link.href === currentPath,
                        "border border-input bg-background hover:bg-accent": link.href!== currentPath,
                        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2": true,
                    })}
                    href={link.href}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
}

export default Navigationlink;
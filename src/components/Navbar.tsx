"use client"
 
import Link from "next/link"
import { Button, buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { useParams, usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image"
 
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import MaxWidthWrapper from "./MaxWidthWrapper"
 
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "./ui/sheet";
 
import { AlignJustify, ArrowDown } from "lucide-react";
import { AvatarIcon } from "@radix-ui/react-icons";
import React from "react"
 
 
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Om Oss",
      href: "https://www.ringsaker.kommune.no",
      description:
        "Utforsk vår virksomhet og oppdag hva vi har å tilby.",
    },
    {
      title: "Book time",
      href: "/booking",
      description:
      "Book en time for å få mer informasjon om våre skreddersydde flyttetjenester, og for å diskutere dine spesifikke behov og krav."
    },
    {
      title: "Ta Kontakt",
      href: "https://www.ringsaker.kommune.no/kontakt-oss.465156.no.html",
      description:
      "Ta kontakt med oss for eventuelle spørsmål eller for å diskutere et potensielt samarbeid."
    },
    {
      title: "Prisliste",
      href: "/prisliste",
      description: "Prislister & servicer vår virksomhet har å tilby",
    },
  ]
 
export default function Navbar() {
    return(
      <div className="sticky inset-x-0 top-0 z-30 bg-background transition-all border-b">
        <MaxWidthWrapper>
        <nav className="w-full relative flex items-center justify-between mx-auto px-12 py-5">
           
            <Link href="/">
              <Image height={120} width={120} src="/logo.png" alt='logo' />
            </Link>
 
            <div>
            <NavigationMenu>
                <NavigationMenuList className="hidden md:flex md:space-x-4">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Kom i gang</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <AvatarIcon className="h-6 w-6" />
                              <div className="mb-2 mt-4 text-lg font-medium">
                                  Ringsaker                            
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="https://www.ringsaker.kommune.no" title="Om Selskapet">
                        Utforsk vår virksomhet og oppdag hva vi har å tilby.
                        </ListItem>
                        <ListItem href="https://www.ringsaker.kommune.no/kontakt-oss.465156.no.html" title="Ta Kontakt">
                        Har du spørsmål eller ønsker å diskutere et potensielt samarbeid? Ta gjerne kontakt med oss.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Om Oss</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="https://www.ringsaker.kommune.no/kontakt-oss.465156.no.html" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Ta Kontakt
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
 
            <div className="md:hidden">
            <Sheet>
                <SheetTrigger>
                    <AlignJustify />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetDescription>
                            <div className="flex flex-col space-y-6 items-start w-full text-lg mt-10 text-primary">
                                <Link
                                href="/om-oss"
                                >
                                    Om Oss
                                </Link>
                                <Link
                                href="/booking"
                                >
                                   Book Time
                                </Link>
                                <Link
                                href="https://www.ringsaker.kommune.no/kontakt-oss.465156.no.html"
                                >
                                    Ta Kontakt
                                </Link>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            </div>
 
           
            <Link className={buttonVariants({  size: "default", className: "max-md:hidden bg-red-500" })}
                href="/dashboard" target="_blank"
              >
                Ta kontakt <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
 
        </nav>
        </MaxWidthWrapper>
        </div>
    )
}
 
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
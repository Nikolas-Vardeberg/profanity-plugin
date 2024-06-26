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
      title: "Brann og beredskap",
      href: "https://www.ringsaker.kommune.no",
      description:
        "Utforsk vår virksomhet og oppdag hva vi har å tilby.",
    },
    {
      title: "Kultur, natur og fritid",
      href: "https://www.ringsaker.kommune.no/organisasjon.382268.no.html",
      description:
      "Les mer om vår organisasjon og hva vi har å tilby.",
    },
    {
      title: "Oppvekst og læring",
      href: "https://www.ringsaker.kommune.no/kontakt-oss.465156.no.html",
      description:
      "Ta kontakt med oss for eventuelle spørsmål eller for å diskutere et potensielt samarbeid."
    },
    {
      title: "Helse og omsorg",
      href: "https://www.ringsaker.kommune.no/tjenester.465157.no.html",
      description: "Sjekk ut våre tjenester og se hva vi har å tilby.",
    },
    {
      title: "Individ og samfunn",
      href: "https://www.ringsaker.kommune.no/tjenester.465157.no.html",
      description: "Sjekk ut våre tjenester og se hva vi har å tilby.",
    },
    {
      title: "Plan, bygg og eiendom",
      href: "https://www.ringsaker.kommune.no/tjenester.465157.no.html",
      description: "Sjekk ut våre tjenester og se hva vi har å tilby.",
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
                    <NavigationMenuTrigger>Om Ringskaer</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                              <img
                                src="/random.png"
                                alt="ringsaker"
                                className="h-full w-full rounded-md"
                              />
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="https://www.ringsaker.kommune.no" title="Velkommen til Ringsaker!">
                        Utforsk vår virksomhet og oppdag hva vi har å tilby.
                        </ListItem>
                        <ListItem href="https://www.ringsaker.kommune.no/kontakt-oss.465156.no.html" title="Kommunefakta">
                        Har du spørsmål eller ønsker å diskutere et potensielt samarbeid? Ta gjerne kontakt med oss.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Tjenester</NavigationMenuTrigger>
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
                          Organisasjon
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="https://www.ringsaker.kommune.no/kontakt-oss.465156.no.html" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Politkk
                      </NavigationMenuLink>
                    </Link>
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
 
           
            <Link className={buttonVariants({  size: "default", className: "max-md:hidden bg-red-500 hover:bg-red-700" })}
                href="/admin/dashboard"
              >
                Min Side <ArrowRight className="ml-2 h-5 w-5" />
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
"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

import { ThemeMenu } from "../theme/ThemeMenu";


// Navbar FC
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { slug: "home", name: "Home", href: "/" },
    { slug: "skills", name: "Skills", href: "#skills" },
    { slug: "projects", name: "Projects", href: "#projects" },
    { slug: "experiences", name: "Experiences", href: "/#xperience" },
    { slug: "about", name: "About", href: "#about" },
    { slug: "contact", name: "Contact", href: "#contact" },
  ];
  //   FC return
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-4">
          {/* Left side - Name/Logo */}
          <div className=" flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight text-primary">
                Afzaal Ahmad
              </span>
            </Link>
          </div>

          {/* Middle - Desktop Menu (hidden on mobile) */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems?.map((item) => {
              return (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary text-foreground/80"
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right side - Actions */}
          <div className="flex items-center space-x-4">
            <div>
              <ThemeMenu />
            </div>
            <div className="hidden md:block">
              {/* <Button variant="outline" size="sm">
                Sign In
              </Button> */}
            </div>

            <Toggle />
            {/* Mobile menu button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setIsMobile(!isMobile)}
                >
                  {isMobile ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex-1 pt-6">
                    {navItems.map((item) => (
                      <Link
                        key={item.slug}
                        href={item.href}
                        className="block py-2 px-4 text-lg font-medium transition-colors hover:text-primary"
                        onClick={() => setIsMobile(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="p-4 border-t">
                    <Button className="w-full">Sign In</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

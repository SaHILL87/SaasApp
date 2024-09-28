"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const MobileNav = () => {
  const navLinks = [
    {
      label: "Home",
      route: "/",
      icon: "/assets/icons/home.svg",
    },
    {
      label: "Image Restore",
      route: "/transformations/add/restore",
      icon: "/assets/icons/image.svg",
    },
    {
      label: "Generative Fill",
      route: "/transformations/add/fill",
      icon: "/assets/icons/stars.svg",
    },
    {
      label: "Object Remove",
      route: "/transformations/add/remove",
      icon: "/assets/icons/scan.svg",
    },
    {
      label: "Object Recolor",
      route: "/transformations/add/recolor",
      icon: "/assets/icons/filter.svg",
    },
    {
      label: "Background Remove",
      route: "/transformations/add/removeBackground",
      icon: "/assets/icons/camera.svg",
    },
    {
      label: "Profile",
      route: "/profile",
      icon: "/assets/icons/profile.svg",
    },
    {
      label: "Buy Credits",
      route: "/credits",
      icon: "/assets/icons/bag.svg",
    },
  ];

  const pathname = usePathname();
  return (
    <header className="header">
      <Link href={"/"} className="flex items-center gap-2 md:py-2">
        <Image
          src={"/assets/images/logo-icon.svg"}
          width={28}
          height={28}
          alt="logo"
        />
        <h1 className="text-2xl font-bold text-purple-700">SaasApp</h1>
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSwitchSessionUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image
                src={"/assets/icons/menu.svg"}
                width={24}
                height={24}
                alt="menu"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64 w-40 ">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Image
                    src={"/assets/images/logo-icon.svg"}
                    width={28}
                    height={28}
                    alt="logo"
                  />
                  <h1 className="text-xl font-bold text-purple-700">SaasApp</h1>
                </SheetTitle>
              </SheetHeader>
              <ul className="header-nav_elements">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname;
                  return (
                    <li
                      key={link.route}
                      className={`${
                        isActive && "gradient-text"
                      } p-18 whitespace-nowrap flex text-dark-700`}
                    >
                      <Link href={link.route} className="sidebar-link">
                        <Image
                          src={link.icon}
                          width={24}
                          height={24}
                          alt="logo"
                        />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;

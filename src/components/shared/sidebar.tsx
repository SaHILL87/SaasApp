"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
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
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-5 ">
        <Link href={"/"} className="sidebar-logo">
          <Image
            src={"/assets/images/logo-icon.svg"}
            width={40}
            height={40}
            alt="logo"
          />
          <h1 className="text-2xl font-bold text-purple-700 px-4 py-2">
            SaasApp
          </h1>
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <Link href={link.route} className="sidebar-link">
                      <Image
                        src={link.icon}
                        width={24}
                        height={24}
                        alt="logo"
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul>
              {navLinks.slice(6, 8).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <Link href={link.route} className="sidebar-link">
                      <Image
                        src={link.icon}
                        width={24}
                        height={24}
                        alt="logo"
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex cursor-pointer gap-2 p-4">
                <UserButton afterSwitchSessionUrl="/" showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

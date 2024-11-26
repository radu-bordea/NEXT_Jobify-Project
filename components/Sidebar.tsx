"use client";
import Logo from "@/assets/logo.svg";
import links from "@/utils/links";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";


function Sidebar() {
  const pathname = usePathname(); // Get the current pathname for determining active link

  return (
    <aside className="py-4 px-8 bg-muted h-full">
      {/* Logo at the top of the sidebar */}
      <Image src={Logo} alt="logo" className="mx-auto" />
      
      {/* Container for sidebar navigation links */}
      <div className="flex flex-col mt-20 gap-y-4">
        {/* Loop through the list of links to render each as a button */}
        {links.map((link) => {
          return (
            <Button
              asChild
              key={link.href}
              // Use "default" variant for the active link, otherwise "link" variant
              variant={pathname === link.href ? "default" : "link"}
            >
              {/* Each link with optional icon and label */}
              <Link href={link.href} className="flex items-center gap-x-2">
                {link.icon} 
                <span className="capitalize">{link.label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;

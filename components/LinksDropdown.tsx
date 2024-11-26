import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AlignLeft } from 'lucide-react';
import { Button } from './ui/button';
import links from '@/utils/links';
import Link from 'next/link';

function DropdownLinks() {
  return (
    <DropdownMenu>
      {/* Dropdown trigger button, only visible on smaller screens */}
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon">
          <AlignLeft />
          {/* Screen reader-only text for accessibility */}
          <span className="sr-only">Toggle links</span>
        </Button>
      </DropdownMenuTrigger>
      
      {/* Dropdown menu content, only visible on smaller screens */}
      <DropdownMenuContent
        className="w-52 lg:hidden"
        align="start"
        sideOffset={25}
      >
        {/* Map through the list of links to render each as a dropdown item */}
        {links.map((link) => {
          return (
            <DropdownMenuItem key={link.href}>
              {/* Link with optional icon and label */}
              <Link href={link.href} className="flex items-center gap-x-2">
                {link.icon} 
                <span className="capitalize">{link.label}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropdownLinks;



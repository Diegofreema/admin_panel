'use client';
import { useEffect, useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import {
  IconHome2,
  IconUsers,
  IconCalendarEvent,
  IconAlbum,
  IconDeviceProjector,
} from '@tabler/icons-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

import { usePathname, useRouter } from 'next/navigation';
interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;

  href: string;
}

function NavbarLink({
  icon: Icon,
  label,

  href,
}: NavbarLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = () => {
    router.push(href);
  };
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <p
            className="hover:!bg-transparent hover:!text-[yellow] "
            onClick={handleClick}
          >
            <Icon
              size={30}
              color={pathname === href ? 'yellow' : 'white'}
              stroke={1.5}
            />
          </p>
        </TooltipTrigger>
        <TooltipContent className="transition !duration-[0.1s] !translate-x-10 ">
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

const mockdata = [
  { icon: IconUsers, label: 'Team', href: '/' },
  { icon: IconCalendarEvent, label: 'Event', href: '/event' },
  { icon: IconAlbum, label: 'Gallery', href: '/gallery' },
  { icon: IconDeviceProjector, label: 'Projects', href: '/project' },
];

export function SideBar() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const links = mockdata.map((link, index) => (
    <NavbarLink {...link} key={link.label} />
  ));

  if (!isMounted) return null;

  return (
    <nav className="!p-4">
      <div className="flex items-center justify-center">
        <Avatar>
          <AvatarImage src="/butterfly.jpeg" />
          <AvatarFallback>IMG</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center space-y-5">
          {links}
        </div>
      </div>
    </nav>
  );
}

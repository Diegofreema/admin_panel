'use client';
import { useEffect, useState } from 'react';
import {
  Tooltip,
  UnstyledButton,
  Stack,
  rem,
  Avatar,
  Center,
} from '@mantine/core';
import {
  IconHome2,
  IconUsers,
  IconCalendarEvent,
  IconAlbum,
  IconDeviceProjector,
} from '@tabler/icons-react';

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
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={handleClick}>
        <Icon
          style={{ width: rem(30), height: rem(30) }}
          color={pathname === href ? 'yellow' : 'white'}
          stroke={1.5}
        />
      </UnstyledButton>
    </Tooltip>
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
      <Center mb={60}>
        <Avatar src={'/butterfly.jpeg'} size={40} />
      </Center>

      <div className="flex flex-col justify-center items-center h-full">
        <Stack justify="center" gap={20}>
          {links}
        </Stack>
      </div>
    </nav>
  );
}

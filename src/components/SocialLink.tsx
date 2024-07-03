import React from 'react';
import { Button, Group } from '@mantine/core';

export interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}
export default function SocialLink({ icon, href, label }: SocialLinkProps) {
  const handleClick = () => {
    window.open(href, '_blank', 'noopener noreferrer');
  };

  return (
    <Group>
        <Button onClick={handleClick} variant="subtle" color="rgba(0, 0, 0, 1)" leftSection={icon}>
            {label}
        </Button>
    </Group>
  );
}

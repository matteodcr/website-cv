import React from 'react';
import { ActionIcon, Anchor, Group } from '@mantine/core';

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
      <ActionIcon size="xl" color="blue" radius="xl" onClick={handleClick}>
        {icon}
      </ActionIcon>
      <Anchor href={href} target="_blank">
        {label}
      </Anchor>
    </Group>
  );
}

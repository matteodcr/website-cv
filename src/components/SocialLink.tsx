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
      <ActionIcon variant="white" color="rgba(0, 0, 0, 1)" size="xl" radius="xs" onClick={handleClick}>
        {icon}
      </ActionIcon>
      <Anchor href={href} target="_blank">
        {label}
      </Anchor>
    </Group>
  );
}

import { ActionIcon, em, Group } from '@mantine/core';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import CustomFloatingIndicator from '@/components/Layout/HeaderMenu';
import { getWebsiteContent } from '@/config/structure';

export default function Header() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(`(max-width: ${em(1000)})`);
  const { logo } = getWebsiteContent();
  return (
    <Group justify="space-between">
      <Group justify="flex-start">
        <ActionIcon onClick={() => navigate('/')} variant="transparent" h="50px" w="50px">
          <img src={logo} width="50px" height="50px" alt="LOGO" />
        </ActionIcon>
      </Group>
      {!isMobile && <CustomFloatingIndicator />}
    </Group>
  );
}

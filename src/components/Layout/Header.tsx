import { ActionIcon, em, Group, Text } from '@mantine/core';
import React, { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import CustomFloatingIndicator from '@/components/Layout/HeaderMenu';
import { getWebsiteContent } from '@/config/structure';
import { getLanguage } from '@/config/language';

export default function Header() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(`(max-width: ${em(1000)})`);
  const { logo } = getWebsiteContent();
  const [language, setLanguage] = useState(getLanguage());

  const onClick = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    console.log('before', language);
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    console.log('after', newLanguage);
    window.location.reload();
  };

  const getFlag = () => (language === 'fr' ? '🇬🇧' : '🇫🇷');
  return (
    <Group justify="space-between">
      <Group justify="flex-start">
        <ActionIcon onClick={() => navigate('/')} variant="transparent" h="50px" w="50px">
          <img src={logo} width="50px" height="50px" alt="LOGO" />
        </ActionIcon>
      </Group>
      {!isMobile && <CustomFloatingIndicator />}
      <ActionIcon variant="transparent" mx={15} onClick={onClick}>
        <Text fz={25}>{getFlag()}</Text>
      </ActionIcon>
    </Group>
  );
}

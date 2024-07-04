import React from 'react';
import { em, SimpleGrid, Stack, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { observer } from 'mobx-react-lite';

import SocialLink from '@/components/SocialLink';
import { getWebsiteContent } from '@/config/structure';

export const ContactPage = observer(() => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const { socialLinksData } = getWebsiteContent();
  return (
    <>
      <Title>Contact</Title>
      <SimpleGrid cols={isMobile ? 1 : 1}>
        <Stack p="md">
          {/*<MapChart />*/}
          <Stack gap="md">
            {socialLinksData.map((socialLink, index) => (
              <SocialLink
                key={index}
                icon={socialLink.icon}
                href={socialLink.href}
                label={socialLink.label}
              />
            ))}
          </Stack>
        </Stack>
      </SimpleGrid>
    </>
  );
});

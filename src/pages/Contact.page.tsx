import React from 'react';
import { Button, em, SimpleGrid, Stack, Textarea, TextInput, Title } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { observer } from 'mobx-react-lite';
import AnimatedPage from '@/components/AnimatedPage';
import SocialLink, { SocialLinkProps } from '@/components/SocialLink';
import { useNavigationStore } from '@/store/Navigation.store';

const socialLinksData: SocialLinkProps[] = [
  {
    icon: <IconBrandGithub />,
    href: 'https://github.com/matteodcr',
    label: 'Github',
  },
  {
    icon: <IconBrandLinkedin />,
    href: 'https://www.linkedin.com/in/matteodecorsaire/en?originalSubdomain=ca',
    label: 'Linkedin',
  },
];

export const ContactPage = observer(() => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const store = useNavigationStore();

  return (
    <AnimatedPage direction={store.routePosition}>
      <Title>Contact</Title>
      <SimpleGrid cols={isMobile ? 1 : 2}>
        <Stack p="md">
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
        <Stack>
          <TextInput disabled label="Nom" placeholder="Votre nom" />
          <TextInput disabled label="Courriel" placeholder="Votre email" />
          <Textarea disabled label="Message" placeholder="Votre message" />
          <Button disabled>⚠️ En construction</Button>
        </Stack>
      </SimpleGrid>
    </AnimatedPage>
  );
});

import React from 'react';
import { Button, em, SimpleGrid, Stack, Textarea, TextInput, Title } from '@mantine/core';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { observer } from 'mobx-react-lite';
import AnimatedPage from '@/components/AnimatedPage';
import SocialLink, { SocialLinkProps } from '@/components/SocialLink';
import { useNavigationStore } from '@/store/Navigation.store';

const socialLinksData: SocialLinkProps[] = [
  {
    icon: <IconBrandLinkedin />,
    href: 'https://www.linkedin.com/in/lisa-d%C3%A9corsaire-782638157/',
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
          <TextInput disabled label="Nom" size={isMobile ? 'lg' : 'md'} placeholder="Votre nom" />
          <TextInput
            disabled
            label="Courriel"
            size={isMobile ? 'lg' : 'md'}
            placeholder="Votre email"
          />
          <Textarea
            disabled
            label="Message"
            size={isMobile ? 'lg' : 'md'}
            placeholder="Votre message"
          />
          <Button size={isMobile ? 'xl' : 'lg'} disabled>
            ⚠️ En construction
          </Button>
        </Stack>
      </SimpleGrid>
    </AnimatedPage>
  );
});

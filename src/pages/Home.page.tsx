import { useMediaQuery } from '@mantine/hooks';
import { em, Flex, SimpleGrid, Text } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { IconBrandLinkedin } from '@tabler/icons-react';
import AnimatedPage from '@/components/AnimatedPage';
import HomeCard, { HomeCardProps } from '@/components/HomeCard';
import { useNavigationStore } from '@/store/Navigation.store';

const data: HomeCardProps[] = [
  {
    icon: <IconBrandLinkedin />,
    title: 'Linkedin',
    description: '',
    link: 'https://www.linkedin.com/in/lisa-d%C3%A9corsaire-782638157/',
  },
];

export const HomePage = observer(() => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const store = useNavigationStore();

  return (
    <AnimatedPage direction={store.routePosition}>
      <Flex mih={50} gap="sm" justify="center" align="flex-start" direction="column" wrap="wrap">
        <Text c="blue">Bonjour 👋, je suis</Text>
        <Flex mih={50} gap={0} justify="center" align="flex-start" direction="column" wrap="wrap">
          <Text fw={700} fz={35}>
            Lisa Decorsaire
          </Text>
          <Text c="dimmed">Business Analyst</Text>
        </Flex>
      </Flex>

      <SimpleGrid my="sm" cols={isMobile ? 1 : 2}>
        {data.map((props, index) => (
          <HomeCard key={index} {...props} />
        ))}
      </SimpleGrid>
    </AnimatedPage>
  );
});

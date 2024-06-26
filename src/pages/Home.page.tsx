import { useMediaQuery } from '@mantine/hooks';
import { em, Flex, SimpleGrid, Text } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import AnimatedPage from '@/components/AnimatedPage';
import HomeCard from '@/components/HomeCard';
import { useNavigationStore } from '@/store/Navigation.store';
import { getWebsiteContent } from '@/config/structure';

export const HomePage = observer(() => {
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
    const store = useNavigationStore();
    const { homeLinks } = getWebsiteContent();

    return (
    <AnimatedPage direction={store.routePosition}>
      <Flex mih={50} gap="sm" justify="center" align="flex-start" direction="column" wrap="wrap">
        <Text c="blue">Bonjour 👋, je suis</Text>
        <Flex mih={50} gap={0} justify="center" align="flex-start" direction="column" wrap="wrap">
          <Text fw={700} fz={35}>
            Mattéo Decorsaire
          </Text>
          <Text c="dimmed">Etudiant en informatique et en génie logiciel</Text>
        </Flex>
      </Flex>

      <SimpleGrid my="sm" cols={isMobile ? 1 : 2}>
        {homeLinks.map((props, index) => (
          <HomeCard key={index} {...props} />
        ))}
      </SimpleGrid>
    </AnimatedPage>
  );
});

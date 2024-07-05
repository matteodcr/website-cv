import { useMediaQuery } from '@mantine/hooks';
import { em, Flex, SimpleGrid, Text } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import HomeCard from '@/components/HomeCard';
import { getWebsiteContent } from '@/config/structure';

export const HomePage = observer(() => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const { homeLinks, introSentence, fullName, position } = getWebsiteContent();

  return (
    <>
      <Flex mih={50} gap="sm" justify="center" align="flex-start" direction="column" wrap="wrap">
        <Text c="blue">{introSentence}</Text>
        <Flex mih={50} gap={0} justify="center" align="flex-start" direction="column" wrap="wrap">
          <Text fw={700} fz={35}>
            {fullName}
          </Text>
          <Text c="dimmed">{position}</Text>
        </Flex>
      </Flex>

      <SimpleGrid my="sm" cols={isMobile ? 1 : 2}>
        {homeLinks.map((props, index) => (
          <HomeCard key={index} {...props} />
        ))}
      </SimpleGrid>
    </>
  );
});

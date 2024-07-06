import { useMediaQuery } from '@mantine/hooks';
import { Center, em, Flex, SimpleGrid, Text, Title } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import HomeCard from '@/components/HomeCard';
import { getWebsiteContent } from '@/config/structure';

export const HomePage = observer(() => {
  const isMobile = useMediaQuery(`(max-width: ${em(1500)})`);
  const { homeLinks, introSentence, fullName, position } = getWebsiteContent();

  return (
    <>
      <Flex mih={50} justify="center" align="center" direction="column" wrap="wrap">
        <Text c="blue" size={isMobile ? 'lg' : 'xl'} align="center">
          {introSentence}
        </Text>
        <Flex
          pt={0}
          mih={50}
          gap={0}
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <Text fw={700} fz={isMobile ? 30 : 50}>
            {fullName}
          </Text>
          <Center>
            <Title fz={isMobile ? 20 : 30} c="dimmed" order={5} textWrap="pretty">
              {position}
            </Title>
          </Center>
        </Flex>
      </Flex>

      <SimpleGrid my="sm" cols={isMobile ? 1 : 1} mx={isMobile ? 0 : '8em'}>
        {homeLinks.map((props, index) => (
          <HomeCard key={index} {...props} />
        ))}
      </SimpleGrid>
    </>
  );
});

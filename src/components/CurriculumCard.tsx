import { Anchor, BackgroundImage, Badge, Button, em, Flex, Group, Image, Stack, Text } from '@mantine/core';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { IconOutbound } from '@tabler/icons-react';
import styles from '@/components/CurriculumCard.module.css';

export interface CurriculumProps {
  backgroundImage: string;
  image: string;
  date: string;
  title: string;
  place: string;
  description: string;
  link: string;
  contract?: string;
}
export default function CurriculumCard({ image, title, description, link, place, date, backgroundImage, contract }: CurriculumProps) {
  const isMobile = useMediaQuery(`(max-width: ${em(1500)})`);

  function goToLink() {
    window.open(link, '_blank', 'noopener noreferrer');
  }

  const Content = () => (
    <>
      <BackgroundImage src={backgroundImage} h={isMobile ? 200 : 200} w={isMobile ? '100%' : 200}>
        <Anchor onClick={goToLink} target="_blank" underline="always">
          <Flex
            justify="center"
            align="center"
            h="100%"
            style={{ backdropFilter: 'blur(1px) saturate(200%)' }}
          >
            <Image src={image} className={styles.card} alt="front" h="100" w="100" />
          </Flex>
        </Anchor>
      </BackgroundImage>

      <Stack gap={0} h={isMobile ? undefined : 200} justify="space-between">
        <Stack gap={0}>
          <Text c="dimmed" fz={16}>
            {date}
          </Text>
          <Text fz={23} fw={700}>
            {title}
          </Text>
          <Group>
            {contract && <Badge color="black" size="md" radius="sm">{contract}</Badge>}
          <Text fz={15} lineClamp={1}>
            {place}
          </Text>
          </Group>
          <Text py="sm">
            {description}
          </Text>
        </Stack>
        <Flex>
          {!isMobile && (
              <Button
                onClick={goToLink}
                rightSection={<IconOutbound size={14} />}
                variant="transparent"
                color="rgba(0, 0, 0, 1)"
                px={0}
              >En savoir plus
              </Button>

          )}
        </Flex>
      </Stack>
    </>
  );

  return (
    <>
      {isMobile ? (
        <Stack h="100%" mih={50} gap="md" justify="flex-start" align="flex-start">
          <Content />
        </Stack>
      ) : (
        <Flex h="100%" mih={50} gap="md" justify="flex-start" align="flex-start" wrap="revert">
          <Content />
        </Flex>
      )}
    </>
  );
}

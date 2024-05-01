import { Anchor, BackgroundImage, em, Flex, Image, Stack, Text } from '@mantine/core';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import styles from '@/components/CurriculumCard.module.css';

export interface CurriculumProps {
  backgroundImage: string;
  image: string;
  date: string;
  title: string;
  place: string;
  description: string;
  link: string;
}
export default function CurriculumCard({
  image,
  title,
  description,
  link,
  place,
  date,
  backgroundImage,
}: CurriculumProps) {
  const isMobile = useMediaQuery(`(max-width: ${em(1000)})`);

  function goToLink() {
    window.open(link, '_blank', 'noopener noreferrer');
  }

  const Content = () => (
    <>
      <BackgroundImage src={image} h={isMobile ? 200 : 200} w={isMobile ? '100%' : 200}>
        <Anchor onClick={goToLink} target="_blank" underline="always">
          <Flex
            justify="center"
            align="center"
            h="100%"
            style={{ backdropFilter: 'blur(1px) saturate(200%)' }}
          >
            <Image src={backgroundImage} className={styles.card} alt="front" h="100" w="100" />
          </Flex>
        </Anchor>
      </BackgroundImage>

      <Stack gap={0} h={isMobile ? undefined : 200} justify="space-between">
        <Stack gap={0}>
          <Text c="dimmed" fz={11}>
            {date}
          </Text>
          <Text fz={17} fw={700}>
            {title}
          </Text>
          <Text fz={13} lineClamp={1}>
            {place}
          </Text>
          <Text lineClamp={1} py="sm">
            {description}
          </Text>
        </Stack>
        <Flex>
          {!isMobile && (
            <Anchor onClick={goToLink} target="_blank" underline="always">
              En savoir plus ↗
            </Anchor>
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

import React, { ReactNode } from 'react';
import { BackgroundImage, Badge, Card, Flex, Group, Stack, Text, Title } from '@mantine/core';
import styles from '@/components/ProjectCard.module.css';

export interface Technologies {
  name: string;
  icon: ReactNode;
  backgroundColor: string;
  textColor: string;
}

function TechnologiesBadge({ name, icon, backgroundColor, textColor }: Technologies) {
  return (
    <Badge size="lg" color={backgroundColor}>
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="nowrap"
        style={{ alignItems: 'center' }}
      >
        {icon}
        <Title order={5} m={0} pt={4} c={textColor}>
          {name}
        </Title>
      </Flex>
    </Badge>
  );
}

export interface ProjectProps {
  name: string;
  font: string;
  fontColor: string;
  description: string;
  link: string;
  image: string;
  technologies: Technologies[];
}

export default function ProjectCard({
  name,
  description,
  link,
  image,
  technologies,
  font,
  fontColor,
}: ProjectProps) {
  function goToLink() {
    window.open(link, '_blank', 'noopener noreferrer');
  }
  return (
    <Card
      className={styles.picture}
      onClick={goToLink}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ cursor: 'pointer' }}
    >
      <Card.Section component="a">
        <BackgroundImage src={image} h={160}>
          <Flex
            justify="center"
            align="center"
            h="100%"
            style={{ backdropFilter: 'blur(2px)  saturate(40%)' }}
            wrap="nowrap"
          >
            <Stack justify="center" gap="0">
              <Flex mih={50} gap="md" justify="center" align="center" direction="row" wrap="wrap">
                <Text
                  className={styles.card}
                  fz={40}
                  c={fontColor}
                  style={{
                    fontFamily: font,
                  }}
                >
                  {name}
                </Text>
              </Flex>
              <Flex mih={50} gap="md" justify="center" align="center" direction="row" wrap="wrap">
                {technologies.map((tech, index) => (
                  <TechnologiesBadge key={index} {...tech} />
                ))}
              </Flex>
            </Stack>
          </Flex>
        </BackgroundImage>
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs"></Group>

      <Text size="sm" c="dimmed">
        {description}
      </Text>
    </Card>
  );
}

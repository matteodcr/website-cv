import {
  Accordion,
  Anchor,
  BackgroundImage,
  Badge,
  Button,
  em,
  Flex,
  Group,
  Image,
  List,
  Stack,
  Text,
} from '@mantine/core';
import React, { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { IconOutbound } from '@tabler/icons-react';
import styles from '@/components/CurriculumCard.module.css';
import { CurriculumProps } from '@/config/structure';

export default function CurriculumCard({
  image,
  title,
  description,
  descriptionList,
  link,
  place,
  date,
  backgroundImage,
  contract,
}: CurriculumProps) {
  const isMobile = useMediaQuery(`(max-width: ${em(1500)})`);
  const [imageLoaded, setImageLoaded] = useState(false);

  function goToLink() {
    window.open(link, '_blank', 'noopener noreferrer');
  }

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const Content = () => (
    <>
      <Accordion.Item value={title} style={{ flex: 1, width: '100%' }}>
        <Accordion.Control>
          <Flex
            h="100%"
            direction={isMobile ? 'column' : 'row'}
            mih={50}
            gap="md"
            justify="flex-start"
            align="flex-start"
            wrap="revert"
          >
            <BackgroundImage
              src={backgroundImage}
              h={isMobile ? 200 : 200}
              w={isMobile ? '100%' : 200}
            >
              <Anchor
                // onClick={goToLink}
                target="_blank"
                underline="always"
              >
                <Flex
                  justify="center"
                  align="center"
                  h="100%"
                  style={{ backdropFilter: 'blur(1px) saturate(200%)' }}
                >
                  <Image
                    src={image}
                    className={styles.card}
                    alt="front"
                    h={100}
                    w={100}
                    onLoad={handleImageLoad}
                    style={{ opacity: imageLoaded ? 1 : 0 }}
                  />
                </Flex>
              </Anchor>
            </BackgroundImage>
            <Stack gap={0} style={{ flex: 1, width: '100%' }}>
              <Text c="dimmed" fz={16}>
                {date}
              </Text>
              <Text fz={23} fw={700}>
                {title}
              </Text>
              <Group>
                <Text component="span" fz={15} lineClamp={1}>
                  {contract && (
                    <Badge color="black" size="md" radius="sm" mr={10}>
                      {contract}
                    </Badge>
                  )}
                  {place}
                </Text>
              </Group>
            </Stack>
          </Flex>
        </Accordion.Control>
        <Accordion.Panel>
          {description && <Text py="sm">{description}</Text>}
          {descriptionList && (
            <List withPadding>
              {descriptionList?.map((item) => (
                <List.Item icon={item.icon} key={item.icon}>
                  {item.description}
                </List.Item>
              ))}
            </List>
          )}
          <Flex>
            {!isMobile && (
              <Button
                onClick={goToLink}
                rightSection={<IconOutbound size={16} />}
                variant="light"
                color="rgba(0, 0, 0, 1)"
                mt={10}
              >
                En savoir plus
              </Button>
            )}
          </Flex>
        </Accordion.Panel>
      </Accordion.Item>
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

import { Card, Flex, Text, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import styles from '@/components/HomeCard.module.css';
import { HomeCardProps } from '@/config/structure';

export default function HomeCard({ icon, title, description, link }: HomeCardProps) {
  const navigate = useNavigate();
  return (
    <Card className={styles.card} shadow="sm" radius="md" withBorder onClick={() => navigate(link)}>
      <Flex mih={50} gap="xs" justify="flex-start" align="center" direction="row" wrap="revert">
        {icon}
        <Flex mih={50} justify="center" align="flex-start" direction="column" wrap="wrap">
          <Title order={4} lineClamp={1}>
            {title}
          </Title>
          <Text lineClamp={1}>{description} </Text>
        </Flex>
      </Flex>
    </Card>
  );
}

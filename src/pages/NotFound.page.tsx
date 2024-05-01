import { Center, Image, Stack, Text, Title } from '@mantine/core';

export default function NotFoundPage() {
  return (
    <Stack bg="var(--mantine-color-body)" align="stretch" justify="center" gap="md">
      <Center>
        <Image w="300" src="src/404.png" />
      </Center>
      <Center>
        <Title>404 - Page Not Found</Title>
      </Center>
      <Center>
        <Text>Sorry, the page you are looking for does not exist.</Text>
      </Center>
    </Stack>
  );
}

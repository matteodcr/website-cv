import { Button, Center, Image, Stack, Text, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { getWebsiteContent } from '@/config/structure';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const { notFoundPicture } = getWebsiteContent();
  return (
    <Stack bg="var(--mantine-color-body)" align="stretch" justify="center" gap="md">
      <Center>
        <Image
          w="300"
          src={notFoundPicture} // use normal <img> attributes as props
        />
      </Center>
      <Center>
        <Title>404 - Page Non Trouvée</Title>
      </Center>
      <Center>
        <Text>Désolé, cette page est inexistante</Text>
      </Center>
      <Center>
        <Button onClick={() => navigate('/')}>Retour</Button>
      </Center>
    </Stack>
  );
}

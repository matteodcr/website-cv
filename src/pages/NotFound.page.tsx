import {Anchor, Center, Image, Stack, Text, Title} from '@mantine/core';
import notFoundPage from '@/assets/404.png';
import {useNavigate} from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate();
    return (
        <Stack bg="var(--mantine-color-body)" align="stretch" justify="center" gap="md">
            <Center>
                <Image
                    w="300"
                    src={notFoundPage} // use normal <img> attributes as props
                />
            </Center>
            <Center>
                <Title>404 - Page Non Trouvée</Title>
            </Center>
            <Center>
                <Text>Désolé, cette page n'existe pas</Text>
            </Center>
            <Center>
                <Anchor onClick={() => navigate('/')} target="_blank">
                    Retour à l'accueil
                </Anchor>
            </Center>
        </Stack>
    );
}

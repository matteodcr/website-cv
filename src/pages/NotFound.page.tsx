import { Center, Image, Stack, Text, Title } from '@mantine/core';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import notFoundPage from '@/assets/404.png';

export default function NotFoundPage() {
    return (
        <Stack bg="var(--mantine-color-body)" align="stretch" justify="center" gap="md">
            <Center>
                <Image
                  w="300"
                  src={<LazyLoadImage
                    src={notFoundPage} // use normal <img> attributes as props
                    />} />
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

import { Flex, Loader, Stack } from '@mantine/core';
import React from 'react';

export default function CustomLoader() {
  return (
    <Flex justify="center" align="center" h="100vh">
      <Stack align="center" justify="center">
        <img src="../assets/logo.png" alt="logo" width="100px" />
        <Loader color="black" />
      </Stack>
    </Flex>
  );
}

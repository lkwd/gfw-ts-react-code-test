import { Box, Code, Stack, Text } from "@chakra-ui/core";
import React from "react";
import { ReactComponent as Logo } from "./logo.svg";

export function App() {
  return (
    <Stack
      align="center"
      spacing="4"
      height="100vh"
      paddingTop="32"
      backgroundColor="orange.100"
    >
      <Box as={Logo} />
      <Text fontSize="3xl">
        Edit <Code fontSize="3xl">src/App.tsx</Code> and save to reload.
      </Text>
    </Stack>
  );
}

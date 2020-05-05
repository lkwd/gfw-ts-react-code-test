import { Box, Code, Stack, Text } from "@chakra-ui/core";
import React from "react";
import { Logger, LogEvent } from "./components/Logger";
import { ReactComponent as Logo } from "./logo.svg";

export function App() {
  let [logs, setLogs] = React.useState<LogEvent[]>([]);

  React.useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/lkwd/gfw-ts-react-code-test/logs"
    )
      .then((response) => response.json())
      .then((json) => setLogs(json));
  }, []);

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
      <Box width="xl">
        {logs.map((l) => (
          <Logger key={l.id} logEvent={l} />
        ))}
      </Box>
    </Stack>
  );
}

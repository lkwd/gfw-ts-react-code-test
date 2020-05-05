import { Box, Icon, Stack } from "@chakra-ui/core";
import React from "react";

export enum LogEventSeverityLevel {
  Info = "info",
  Warning = "warn",
  Error = "error",
}

export interface LogEvent {
  id: string;
  severityLevel: LogEventSeverityLevel;
  message: string;
}

interface LoggerProps {
  logEvent: LogEvent;
}

export function Logger({ logEvent }: LoggerProps) {
  const iconMap = {
    [LogEventSeverityLevel.Info]: {
      name: "info",
      color: "blue",
    },
    [LogEventSeverityLevel.Warning]: {
      name: "warning-2",
      color: "orange",
    },
    [LogEventSeverityLevel.Error]: {
      name: "warning",
      color: "red",
    },
  };
  const icon = iconMap[logEvent.severityLevel];

  return (
    <Stack
      data-testid={`log-${logEvent.id}`}
      isInline={true}
      align="center"
      backgroundColor="white"
      padding="2"
    >
      <Icon name={icon.name} color={`${icon.color}.500`} />
      <Box fontWeight="bold">{logEvent.severityLevel}:</Box>
      <Box>{logEvent.message}</Box>
    </Stack>
  );
}

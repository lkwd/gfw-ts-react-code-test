interface LoggerFormatter {
  format: (text: string) => string;
}

/**
 * This logger outputs messages with different levels of severity.
 *
 * This Logger is implemented using composition to allow behaviour to be
 * delegated to other objects.
 * @see https://thoughtbot.com/blog/reusable-oo-composition-vs-inheritance
 */
export class Logger {
  constructor(
    private labelFormatter: LoggerFormatter,
    private messageFormatter: LoggerFormatter,
  ) {}

  public info(message: string): string {
    return `[${this.formatLabel('INFO')}]: ${this.formatMessage(message)}`;
  }

  public warn(message: string): string {
    return `[${this.formatLabel('WARN')}]: ${this.formatMessage(message)}`;
  }

  public error(message: string): string {
    return `[${this.formatLabel('ERROR')}]: ${this.formatMessage(message)}`;
  }

  private formatLabel(severityLabel: string): string {
    return this.labelFormatter.format(severityLabel);
  }

  private formatMessage(message: string): string {
    return this.messageFormatter.format(message);
  }
}

/*
 * These `Formatter` objects have the effect of making the behaviour a first
 * class concept in the domain.
 */
export class ShiftedLabelFormatter implements LoggerFormatter {
  public format(severityLabel: string): string {
    return severityLabel.substring(1).concat(severityLabel[0]);
  }
}

export class UppercaseMessageFormatter implements LoggerFormatter {
  public format(message: string): string {
    return message.toUpperCase();
  }
}

/**
 * This composition approach makes the behaviour of the system a bit clearer.
 * With the inheritance approach, you only see what is overridden, which can
 * make it difficult to understand the bigger picture.
 */
export class UppercaseShiftedLabelLogger {
  private logger: Logger = new Logger(
    new ShiftedLabelFormatter(),
    new UppercaseMessageFormatter(),
  );

  public info(message: string): string {
    return this.logger.info(message);
  }

  public warn(message: string): string {
    return this.logger.warn(message);
  }

  public error(message: string): string {
    return this.logger.error(message);
  }
}

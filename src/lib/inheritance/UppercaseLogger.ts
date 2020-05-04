import { Logger } from './Logger';

/**
 * This logger outputs its messages in uppercase.
 */
export class UppercaseLogger extends Logger {
  protected formatMessage(message: string): string {
    return message.toUpperCase();
  }
}

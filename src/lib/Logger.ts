/**
 * This logger outputs messages with different levels of severity.
 */
export class Logger {
  public info(message: string): string {
    return `[INFO]: ${message}`;
  }

  public warn(message: string): string {
    return `[WARN]: ${message}`;
  }

  public error(message: string): string {
    return `[ERROR]: ${message}`;
  }
}

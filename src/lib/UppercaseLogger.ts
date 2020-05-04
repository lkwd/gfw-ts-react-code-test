/**
 * This logger outputs its messages in uppercase.
 */
export class UppercaseLogger {
  public info(message: string): string {
    return `[INFO]: ${message.toUpperCase()}`;
  }

  public warn(message: string): string {
    return `[WARN]: ${message.toUpperCase()}`;
  }

  public error(message: string): string {
    return `[ERROR]: ${message.toUpperCase()}`;
  }
}

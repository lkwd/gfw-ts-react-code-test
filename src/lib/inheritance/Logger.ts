/**
 * This logger outputs messages with different levels of severity.
 *
 * This Logger is implemented using the template method pattern so that other
 * classes can override how the message is formatted by using inheritance.
 * The default implementation is to return the label and the message unchanged.
 *
 * @see https://sourcemaking.com/design_patterns/template_method
 *
 * Another more type safe implementation would be to use abstract classes.
 * @see https://hackernoon.com/abstract-classes-in-typescript-text-video-cda9a4e6a56a
 */
export class Logger {
  public info(message: string): string {
    return `[${this.formatLabel('INFO')}]: ${this.formatMessage(message)}`;
  }

  public warn(message: string): string {
    return `[${this.formatLabel('WARN')}]: ${this.formatMessage(message)}`;
  }

  public error(message: string): string {
    return `[${this.formatLabel('ERROR')}]: ${this.formatMessage(message)}`;
  }

  protected formatLabel(severityLabel: string): string {
    return severityLabel;
  }

  protected formatMessage(message: string): string {
    return message;
  }
}

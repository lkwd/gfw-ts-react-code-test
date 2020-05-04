/**
 * This logger outputs messages with the first character of their labels shifted to the end
 */
export class ShiftedLabelLogger {
  public info(message: string): string {
    return `${this.formatLabel("INFO")}: ${message}`;
  }

  public warn(message: string): string {
    return `${this.formatLabel("WARN")}: ${message}`;
  }

  public error(message: string): string {
    return `${this.formatLabel("ERROR")}: ${message}`;
  }

  private formatLabel(severityLabel: string) {
    const label = severityLabel.substring(1).concat(severityLabel[0]);

    return `[${label}]`;
  }
}

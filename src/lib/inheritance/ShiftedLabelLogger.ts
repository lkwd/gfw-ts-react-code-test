import { Logger } from './Logger';

/**
 * This logger outputs messages with the first character of their labels shifted to the end
 */
export class ShiftedLabelLogger extends Logger {
  protected formatLabel(severityLabel: string): string {
    return severityLabel.substring(1).concat(severityLabel[0]);
  }
}

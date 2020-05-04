import { ShiftedLabelLogger } from './ShiftedLabelLogger';

describe('info', function () {
  test('returns an info message with the first character of the label shifted to the end', function () {
    const logger = new ShiftedLabelLogger();

    const result = logger.info('notice');

    expect(result).toBe('[NFOI]: notice');
  });
});

describe('warn', function () {
  test('returns an warning message with the first character of the label shifted to the end', function () {
    const logger = new ShiftedLabelLogger();

    const result = logger.warn('warning');

    expect(result).toBe('[ARNW]: warning');
  });
});

describe('error', function () {
  test('returns an error message with the first character of the label shifted to the end', function () {
    const logger = new ShiftedLabelLogger();

    const result = logger.error('explosion');

    expect(result).toBe('[RRORE]: explosion');
  });
});

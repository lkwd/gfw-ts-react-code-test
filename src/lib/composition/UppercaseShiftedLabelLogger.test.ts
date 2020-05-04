import { UppercaseShiftedLabelLogger } from './UppercaseShiftedLabelLogger';

describe('info', function () {
  test('returns an info message in uppercase with the first character of the label shifted to the end', function () {
    const logger = new UppercaseShiftedLabelLogger();

    const result = logger.info('notice');

    expect(result).toBe('[NFOI]: NOTICE');
  });
});

describe('warn', function () {
  test('returns an warning message in uppercase with the first character of the label shifted to the end', function () {
    const logger = new UppercaseShiftedLabelLogger();

    const result = logger.warn('warning');

    expect(result).toBe('[ARNW]: WARNING');
  });
});

describe('error', function () {
  test('returns an error message in uppercase with the first character of the label shifted to the end', function () {
    const logger = new UppercaseShiftedLabelLogger();

    const result = logger.error('explosion');

    expect(result).toBe('[RRORE]: EXPLOSION');
  });
});

import { UppercaseLogger } from './UppercaseLogger';

describe('info', function () {
  test('returns an info message in uppercase', function () {
    const logger = new UppercaseLogger();

    const result = logger.info('notice');

    expect(result).toBe('[INFO]: NOTICE');
  });
});

describe('warn', function () {
  test('returns an warning message in uppercase', function () {
    const logger = new UppercaseLogger();

    const result = logger.warn('warning');

    expect(result).toBe('[WARN]: WARNING');
  });
});

describe('error', function () {
  test('returns an error message in uppercase', function () {
    const logger = new UppercaseLogger();

    const result = logger.error('explosion');

    expect(result).toBe('[ERROR]: EXPLOSION');
  });
});

import { Logger } from './Logger';

describe('info', function () {
  test('returns an info message', function () {
    const logger = new Logger();

    const result = logger.info('notice');

    expect(result).toBe('[INFO]: notice');
  });
});

describe('warn', function () {
  test('returns an warning message', function () {
    const logger = new Logger();

    const result = logger.warn('warning');

    expect(result).toBe('[WARN]: warning');
  });
});

describe('error', function () {
  test('returns an error message', function () {
    const logger = new Logger();

    const result = logger.error('explosion');

    expect(result).toBe('[ERROR]: explosion');
  });
});

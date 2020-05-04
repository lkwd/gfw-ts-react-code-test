# LKWD Game Framework TypeScript React Code test

## Logger

We've been asked to build a series of logger objects. The logger should be able
to output messages at different levels of severity.

Those levels are `info`, `warn` and `error`.

The simplest logger we need is one that can output a message with a label so
that we can see which level of logging it is.

```
const logger = new Logger();
logger.info("notice") // => "[INFO]: notice"
logger.warn("warning") // => "[WARN]: warning"
logger.error("explosion") // => "[ERROR]: explosion"
```

## UppercaseLogger

This logger should output its messages in uppercase.

```
const logger = new UppercaseLogger();
logger.info("notice") // => "[INFO]: NOTICE"
logger.warn("warning") // => "[WARN]: WARNING"
logger.error("explosion") // => "[ERROR]: EXPLOSION"
```

## ShiftedLabelLogger

This logger shifts the first character of the label to the end.

```
const logger = new ShiftedLabelLogger();
logger.info("notice") // => "[NFOI]: notice"
logger.warn("warning") // => "[ARNW]: warning"
logger.error("explosion") // => "[RRORE]: explosion"
```

## UppercaseShiftedLabelLogger

Now, we've been given a new requirement for a logger that outputs its messages
in uppercase and also shifts the labels.

```
const logger = new UppercaseShiftedLabelLogger();
logger.info("notice") // => "[NFOI]: NOTICE"
```

## React

We would now like to build a React app that pulls logs from an API.

We have created an API for you to use here: https://my-json-server.typicode.com/lkwd/gfw-ts-react-code-test/logs.

## Alternative output methods

We may want to output the logs in any of the following forms:

- The browser console
- `LocalStorage`
- A web service such as [Sentry](https://sentry.io/) or
  [Papertrail](https://www.papertrail.com/)

- How might we change our output destination?
- How would we test this new output method?

## Development

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/lkwd/gfw-ts-react-code-test)

Below is a list of commands you will probably find useful.

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode. By default, runs tests
related to files changed since the last commit.

### `npm start` or `yarn start`

Starts the React app.

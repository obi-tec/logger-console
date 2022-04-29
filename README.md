# Logger Console
A simple library write log for Lambda Applications with Cloudwatch logs.

## Installation
```bash
npm install @obi-tec/logger-console
```

## Usage
```js
const logger = require('@obi-tec/logger-console');

logger.info('Some log info');

const details = {
    otherMessage: 'Some other message'
};
logger.info('Some log info with details', details);
```

## Change log level
To change the log level is used the environment variable `process.env.LOG_LEVEL`

The default value is `info`

Options:
```
LOG_LEVEL="debug"
LOG_LEVEL="info"
LOG_LEVEL="warn"
LOG_LEVEL="error"
LOG_LEVEL="request"
LOG_LEVEL="none"
```

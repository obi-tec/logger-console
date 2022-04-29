// dependencies
const stringify = require('json-stringify-safe');

const level = process.env.LOG_LEVEL || 'info';

const logLevels = {
  debug   : 10,
  info    : 20,
  warn    : 30,
  error   : 40,
  request : 50,
  none    : 60
};

/** Log a debug message, level 10
 * @param  {string} message - The message to log
 * @param  {Object} details - The object details to log
 */
module.exports.debug = (message, details) => {
  if (logLevels[level] <= logLevels.debug) {
    if (details) {
      // eslint-disable-next-line no-console
      console.debug(stringify({
        level: 'debug',
        message,
        details
      }));
    } else {
      // eslint-disable-next-line no-console
      console.debug(stringify({
        level: 'debug',
        message
      }));
    }
  }
};

/** Log an information message, level 20
 * @param  {string} message - The message to log
 * @param  {Object} details - The object details to log
 */
module.exports.info = (message, details) => {
  if (logLevels[level] <= logLevels.info) {
    if (details) {
      // eslint-disable-next-line no-console
      console.info(stringify({
        level: 'info',
        message,
        details
      }));
    } else {
      // eslint-disable-next-line no-console
      console.info(stringify({
        level: 'info',
        message
      }));
    }
  }
};

/** Log a warn message, level 30
 * @param  {string} message - The message to log
 * @param  {Object} details - The object details to log
 */
module.exports.warn = (message, details) => {
  if (logLevels[level] <= logLevels.warn) {
    if (details) {
      // eslint-disable-next-line no-console
      console.warn(stringify({
        level: 'warn',
        message,
        details
      }));
    } else {
      // eslint-disable-next-line no-console
      console.warn(stringify({
        level: 'warn',
        message
      }));
    }
  }
};

/** Log a warn message, level 40
 * @param  {string} message - The message to log
 * @param  {Error} error - The object error to log
 */
module.exports.error = (message, error) => {
  if (logLevels[level] <= logLevels.error) {
    if (error) {
      // eslint-disable-next-line no-console
      console.error(stringify({
        level : 'error',
        message,
        error : {
          name  : error.name,
          stack : error.stack,
          ...error
        }
      }));
    } else {
      // eslint-disable-next-line no-console
      console.error(stringify({
        level: 'error',
        message
      }));
    }
  }
};

/**
 * @typedef {Object} Request
 * @property {string} url - The url of the request
 * @property {string} method - The method of the request
 */

/** Log a request http message, level 50
 * @param  {Request} request - The request to log
 */
module.exports.request = (request) => {
  if (logLevels[level] <= logLevels.request) {
    // eslint-disable-next-line no-console
    console.info(stringify({
      level   : 'info',
      message : 'req',
      details : {
        url    : request.url,
        method : request.method
      }
    }));
  }
};


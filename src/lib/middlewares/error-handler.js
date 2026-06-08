const { logger } = require('../utils');

const errorHandler = (
  knownErrors,
  { defaultTo500 = true, log = false, logFunc = logger.error } = {},
) => (err, req, res, next) => {
  const { name, status, message } = err;

  const knownError = Object.values(knownErrors).some(({ name: n }) => name === n);
  if (knownError) {
    res.status(status).json({ message });
    if (log) logFunc('known error:', err);
  } else if (defaultTo500) {
    res.status(500).json({ message: 'internal error' });
    if (log) logFunc(log, '500 unhandled error:', err);
  } else {
    next(err);
    if (log) logFunc(log, 'next unhandled error:', err);
  }
};

module.exports = errorHandler;

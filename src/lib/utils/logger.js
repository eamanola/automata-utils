const { NODE_ENV } = require('../../config');

const RED = 31;
const YELLOW = 33;

const colorStrings = (color) => (arg) => (
  typeof arg === 'string' ? `\x1b[${color}m${arg}\x1b[0m` : arg
);

const error = (...args) => console.error.call(console, ...args.map(colorStrings(RED)));

const info = NODE_ENV === 'test'
  ? () => null
  : console.info.bind(console);

const warn = (...args) => console.warn.call(console, ...args.map(colorStrings(YELLOW)));

const logger = {
  error,
  info,
  warn,
};

module.exports = logger;

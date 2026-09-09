const isEven = require('./modules/isEven');
const log = require('./modules/logger');

log('App started');

const numbers = [3, 4, 7, 10, 15, 22];

numbers.forEach((num) => {
  if (isEven(num)) {
    log(`${num} is even`);
  } else {
    log(`${num} is odd`);
  }
});

log('App finished');

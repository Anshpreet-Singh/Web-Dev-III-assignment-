const crypto = require('crypto');
const fs = require('fs');
const log = require('./modules/logger');

function rollDice() {
  return crypto.randomInt(1, 7);
}

const numberOfRolls = 5;
const history = [];

for (let i = 1; i <= numberOfRolls; i++) {
  const result = rollDice();
  console.log(`Dice Rolled: ${result}`);
  history.push(`Roll ${i}: ${result}`);
}

fs.writeFileSync('./diceHistory.txt', history.join('\n'));
log('Dice roll history saved to diceHistory.txt');

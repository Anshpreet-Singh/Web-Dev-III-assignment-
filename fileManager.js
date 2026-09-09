const fs = require('fs');
const log = require('./modules/logger');

const filePath = './test.txt';

function createFile() {
  log('Creating File...');
  fs.writeFileSync(filePath, 'Hello Node.js');
  log('File Created');
}

function readFile() {
  log('Reading File');
  const data = fs.readFileSync(filePath, 'utf8');
  console.log(data);
}

function updateFile() {
  fs.appendFileSync(filePath, '\nLearning FS Module');
  log('File Updated');
  const data = fs.readFileSync(filePath, 'utf8');
  console.log(data);
}

function deleteFile() {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    log('File Deleted');
  } else {
    log('File does not exist, nothing to delete');
  }
}

createFile();
readFile();
updateFile();
deleteFile();

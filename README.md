# Web-Dev-III-assignment-
# Smart Utility Toolkit

A collection of mini backend utilities built using only Node.js core modules
(`process`, `http`, `fs`, `crypto`) — no external packages, no frameworks.

## Folder Structure
```
smart-utility-toolkit/
├── calculator.js       # CLI calculator (process.argv)
├── app.js              # Demonstrates reusing custom modules
├── server.js           # HTTP server with routes
├── fileManager.js       # CRUD file operations (fs)
├── dice.js             # Random dice generator (crypto)
├── modules/
│   ├── isEven.js       # Custom module: checks even/odd
│   └── logger.js       # Custom module: logs with timestamp
└── README.md
```

## How to Run Each Part

### 1. CLI Calculator
```
node calculator.js add 10 5
node calculator.js sub 10 5
node calculator.js mul 4 3
node calculator.js div 10 2
```
Supports: add, sub, mul, div, mod, pow.
Invalid operations or non-numeric inputs are handled gracefully.

### 2. Custom Modules Demo
```
node app.js
```
Imports `isEven.js` and `logger.js` from the `modules/` folder and uses them
on a list of numbers, logging each result with a timestamp.

### 3. HTTP Server
```
node server.js
```
Then visit in your browser (or Postman):
- http://localhost:3000/        -> "Welcome to Node Server"
- http://localhost:3000/about   -> "About Page"
- http://localhost:3000/contact -> "Contact Page"
- any other route               -> 404 error message

### 4. File Manager (CRUD)
```
node fileManager.js
```
Creates `test.txt`, reads it, appends to it, then deletes it — printing each
step to the terminal.

### 5. Dice Generator
```
node dice.js
```
Rolls a secure random dice (1-6) five times using `crypto.randomInt()` and
saves the roll history to `diceHistory.txt`.

## Concepts Practiced
- `process.argv` for command-line input
- `module.exports` / `require()` for custom modules
- `http.createServer()` and basic routing
- `fs` methods: `writeFileSync`, `readFileSync`, `appendFileSync`, `unlinkSync`
- `crypto.randomInt()` for secure randomness
- Console logging to trace execution order

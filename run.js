const execSync = require('child_process').execSync;

const arg = process.argv[2] || "0";

execSync('npx ts-node src/index.ts '+arg, {stdio:[0, 1, 2]});
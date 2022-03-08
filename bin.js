#!/usr/bin/env node
const run = require('.');
const args = process.argv.slice(2).reverse();

if (args.length > 3) {
  throw new Error('Usage: convert-action [runner] [filename] [compiled.js]');
}

run.apply(null, args);

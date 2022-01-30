#!/usr/bin/env node

async function run() {
  const args = process.argv.slice(2);
  const task = args[0];

  if (!task) {
    panic('Missing partytown task argument. Example command: partytown copylib dest/directory');
  }

  switch (task) {
    case 'copylib': {
      await copyLibTask(args);
      break;
    }
    default: {
      panic('Unknown partytown task: ' + task);
    }
  }
}

async function copyLibTask(args) {
  try {
    const utils = require('../utils/index.cjs');
    const destDir = args[1];
    const result = await utils.copyLibFiles(destDir);

    if (!args.includes('--silent')) {
      console.log('Partytown lib copied to: ' + result.dest);
    }
  } catch (e) {
    panic(String(e.message || e));
  }
}

function panic(msg) {
  console.error('❌ ' + msg);
  process.exit(1);
}

run();

const { createServer } = require('./server.cjs');

const port = parseInt(process.argv[2], 10);
const enableAtomics = process.argv.includes('--atomics');

(async () => {
  const server = await createServer(port, enableAtomics);
  console.log(`Serving${server.enableAtomics ? ` (atomics)` : ``}: ${server.address}`);
})();

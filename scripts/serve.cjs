const { createServer } = require('./server.cjs');

const port = parseInt(process.argv[2], 10);
const sandboxPort = process.argv[3] && parseInt(process.argv[3], 10);
const enableAtomics = process.argv.includes('--atomics');

(async () => {
  const server = await createServer(port, enableAtomics);
  console.log(`Serving${server.enableAtomics ? ` (atomics)` : ``}: ${server.address}tests/`);

  if (sandboxPort) {
    const sandboxServer = await createServer(sandboxPort, enableAtomics);
    console.log(`Sandbox: ${sandboxServer.address}~partytown/`);
  }
})();

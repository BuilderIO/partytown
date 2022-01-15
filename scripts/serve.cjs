const path = require('path');
const http = require('http');
const fs = require('fs');

const testsDir = path.join(__dirname, '..', 'tests');
const port = parseInt(process.argv[2], 10);
const origin = `http://localhost:${port}/`;
const enableAtomics = process.argv.includes('--atomics');

const server = http.createServer((req, rsp) => {
  const url = new URL(req.url, origin);
  let filePath = path.join(testsDir, url.pathname.substring(1));
  if (url.pathname.endsWith('/')) {
    filePath = path.join(filePath, 'index.html');
  }

  const readStream = fs.createReadStream(filePath);
  readStream.on('open', () => {
    rsp.setHeader('Cache-Control', 'max-age=0');
    rsp.setHeader('Access-Control-Allow-Origin', '*');

    if (enableAtomics || url.searchParams.has('atomics')) {
      rsp.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
      rsp.setHeader('Cross-Origin-Embedder-Policy', 'credentialless');
    }

    switch (path.extname(filePath)) {
      case '.js': {
        rsp.setHeader('Content-Type', 'application/javascript; charset=UTF-8');
        break;
      }
      case '.gif': {
        rsp.setHeader('Content-Type', 'image/gif');
        break;
      }
      case '.png': {
        rsp.setHeader('Content-Type', 'image/png');
        break;
      }
      default: {
        rsp.setHeader('Content-Type', 'text/html; charset=UTF-8');
      }
    }
    readStream.pipe(rsp);
  });

  readStream.on('error', (err) => {
    if (err.code === 'ENOENT') {
      rsp.writeHead(404);
      rsp.write(`404: ${filePath}`);
    } else {
      console.error(err);
      rsp.writeHead(500);
      rsp.write(String(err));
    }
    rsp.end();
  });
});

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`Serving${enableAtomics ? ` (atomics)` : ``}: ${origin}`);
});

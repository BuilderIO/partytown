const path = require('path');
const http = require('http');
const fs = require('fs');

exports.createServer = function (port, enableAtomics) {
  const rootDir = path.join(__dirname, '..');
  const address = `http://localhost:${port}/`;

  const server = http.createServer(async (req, rsp) => {
    const url = new URL(req.url, address);
    const pathName = url.pathname.substring(1);

    if (pathName.endsWith('post')) {
      rsp.writeHead(200);
      let body = '';
      req.setEncoding('utf-8');
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', () => {
        const postDir = path.join(rootDir, 'tests', 'posts');
        const fileName = `${Math.round(Math.random() * 8999 + 1000)}.js`;
        try {
          fs.mkdirSync(postDir, { recursive: true });
        } catch (e) {}

        fs.writeFileSync(path.join(postDir, fileName), body);
        rsp.end();
      });
      return;
    }

    let filePath;
    if (pathName.startsWith('~partytown')) {
      filePath = path.join(rootDir, 'lib', pathName.replace('~partytown/', ''));
    } else if (pathName.endsWith('/')) {
      filePath = path.join(rootDir, pathName, 'index.html');
    } else if (pathName.endsWith('favicon.ico')) {
      filePath = path.join(rootDir, 'docs', 'site', 'public', 'favicon.ico');
    } else {
      filePath = path.join(rootDir, pathName);
    }

    if (url.searchParams.has('delay')) {
      await new Promise((resolve) => {
        setTimeout(resolve, url.searchParams.get('delay'));
        rsp.setHeader('X-DELAY', url.searchParams.get('delay'));
      });
    }

    const readStream = fs.createReadStream(filePath);
    readStream.on('open', () => {
      rsp.setHeader('Cache-Control', 'max-age=0');
      rsp.setHeader('Access-Control-Allow-Origin', '*');

      if (enableAtomics || url.searchParams.has('atomics')) {
        if (url.searchParams.get('coep') === 'require-corp') {
          rsp.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
          rsp.setHeader('Cross-Origin-Embedder-Policy', 'credentialless');
        } else if (url.searchParams.get('coep') !== 'false') {
          rsp.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
          rsp.setHeader('Cross-Origin-Embedder-Policy', 'credentialless');
        }
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
        case '.ico': {
          rsp.setHeader('Content-Type', 'image/x-icon');
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

  return new Promise((resolve, reject) => {
    server.listen(port, (err) => {
      if (err) {
        reject(err);
      } else {
        const rtn = {
          address,
          enableAtomics,
          close() {
            return new Promise((resolve) => {
              server.close(resolve);
            });
          },
        };
        resolve(rtn);
      }
    });
  });
};

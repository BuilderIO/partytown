const sirv = require('sirv');
const polka = require('polka');

// Init `sirv` handler
const assets = sirv('./tests', {
  setHeaders(res) {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  },
});

const port = parseInt(process.argv[2], 10);

polka()
  .use(assets)
  .listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on localhost:${port}~!`);
  });

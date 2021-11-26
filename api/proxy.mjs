import fetch from 'node-fetch';

export default function (request, response) {
  try {
    const proxyUrl = request.query.url;
    if (!proxyUrl) {
      response.status(400).send(`Missing "url" querystring`);
    } else {
      const proxyHeaders = {
        'accept': request.headers.accept,
        'accept-encoding': request.headers['accept-encoding'],
        'cache-control': request.headers['cache-control'],
        'if-modified-since': request.headers['if-modified-since'],
        'if-none-match': request.headers['if-none-match'],
        'user-agent': request.headers['user-agent'],
      };

      fetch(proxyUrl, { headers: proxyHeaders }).then((proxyRsp) => {
        const headers = ['age', 'cache-control', 'content-type', 'date', 'etag', 'last-modified'];
        headers.forEach((headerName) => {
          if (proxyRsp.headers.has(headerName)) {
            response.setHeader(headerName, proxyRsp.headers.get(headerName));
          }
        });
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.writeHead(proxyRsp.status);

        proxyRsp.text().then((proxyText) => {
          response.end(proxyText);
        });
      });
    }
  } catch (e) {
    response.status(500).send(String(e));
  }
}

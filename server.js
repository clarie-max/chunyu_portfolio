const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const preferredPort = Number(process.env.PORT) || 4173;
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.mp4': 'video/mp4',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((request, response) => {
  const urlPath = decodeURIComponent((request.url || '/').split('?')[0]);
  const requestedFile = urlPath === '/' ? 'chunyu_portfolio.html' : urlPath.replace(/^\/+/, '');
  const filePath = path.resolve(root, requestedFile);

  if (!filePath.startsWith(root + path.sep) && filePath !== root) {
    response.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(error.code === 'ENOENT' ? 404 : 500, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end(error.code === 'ENOENT' ? 'Not found' : 'Server error');
      return;
    }
    response.writeHead(200, {
      'Content-Type': mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-store'
    });
    response.end(content);
  });
});

function startServer(port) {
  server.once('error', (error) => {
    if (error.code === 'EADDRINUSE' && port === preferredPort && !process.env.PORT) {
      console.log(`Port ${port} is in use. Starting the portfolio preview on 4174 instead.`);
      startServer(4174);
      return;
    }
    throw error;
  });
  server.listen(port, '127.0.0.1', () => {
    console.log(`Portfolio preview: http://127.0.0.1:${port}`);
  });
}

startServer(preferredPort);

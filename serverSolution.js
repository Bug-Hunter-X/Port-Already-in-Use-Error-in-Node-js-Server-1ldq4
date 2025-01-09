const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;
let serverPort = port;

function startServer(port) {
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

function tryPort() {
  server.once('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${serverPort} is already in use. Trying next port...`);
      serverPort++;
      tryPort(); // Try the next port
    } else {
      console.error('Server error:', err);
      process.exit(1);
    }
  });

  startServer(serverPort);
}

tryPort();
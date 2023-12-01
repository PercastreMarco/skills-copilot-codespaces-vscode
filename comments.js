// Create web server
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Send a simple HTML response
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello, World!</h1>');
  res.end();
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});


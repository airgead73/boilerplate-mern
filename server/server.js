const http = require('http');
const app = require('./app/app')
const port = process.env.PORT || 5000;

if (port === undefined) {
  throw new Error(
    "Port is not defined."
  );
}

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listenting', onListening);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // assign error messages.
  switch (error.code) {
    case 'EACCES':
      console.log(`Port ${port} requires privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.log(`Port ${port} is already in use.`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  console.log(`Mode is ${process.env.NODE_ENV}. Listening on ${port}.`)
}

//app.listen(port, () => console.log(`Server started on port ${port}`))
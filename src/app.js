var port = process.env.PORT || 3000,
  http = require('http'),
  fs = require('fs'),
  html = fs.readFileSync('index.html');

var log = function (entry) {
  fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

var server = http.createServer((request, response) => {
  fs.readFile(`.${request.url}`, (err, data) => {
      if (err) {
          response.writeHeader(404, {
              'Content-Type': 'text/plain'
          })
          response.write('404 Not Found')
          response.end()
          return
      }

      if (request.url.endsWith('.html')) {
          response.writeHeader(200, {
              'Content-Type': 'text/html'
          })
      }

      if (request.url.endsWith('.js')) {
          response.writeHeader(200, {
              'Content-Type': 'application/javascript'
          })
      }

      if (response.method === 'POST') {
        var body = '';

        response.on('data', function (chunk) {
          body += chunk;
        });

        response.on('end', function () {
          if (response.url === '/') {
            log('Received message: ' + body);
          } else if (response.url = '/scheduled') {
            log('Received task ' + response.headers['x-aws-sqsd-taskname'] + ' scheduled at ' + response.headers['x-aws-sqsd-scheduled-at']);
          }

          res.writeHead(200, 'OK', { 'Content-Type': 'text/plain' });
          res.end();
        });
      }

      response.write(data)
      response.end()
  })
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');

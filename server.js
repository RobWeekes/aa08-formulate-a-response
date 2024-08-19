const http = require('http');

// start server code
const server = http.createServer((req, res) => {

let reqBody = '';
req.on('data', (data) => {
    reqBody += data;
});

console.log(req.method, req.url);

res.statusCode = 200;


// multi-line JavaScript string using a template literal
const responseBody = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello there!</h1>
  </body>
  </html>
`;

res.setHeader('Content-Type', 'text/html');

res.write(responseBody);

// console.log(responseBody);

return res.end("Bye");


});
// end of server code

const port = 3000;

server.listen(port, () => console.log('Server is listening to port', port));

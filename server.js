const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
})

server.listen(process.env.PORT || 3000)






// const PORT = 3000

// fs.readFile('index.html', function (err, html) {
//     if (err) throw err;
//     http.createServer(function (req, res) {
//         console.log("req:", req);
//         // res.writeHeader(200, { "Content-Type": "text/html" });
//         res.write(html);
//         res.end();
//     }).listen(PORT);
//     console.log("Listening @localhost:3000")
// });
const express = require("express");
const fs = require('fs')

const app = express();
const PORT = 5000

app.listen(PORT, () => {
  console.log("Application started and Listening on port " + PORT);
});


// app.get("/", (req, res) => {
//   console.log(req.url)
//   res.sendFile("/example.html");

// });

// app.get("/hello", (req, res) => {
//   console.log(req.url)
//   res.sendFile(__dirname + "/out_py_requests.html");
// });

app.use('/', function (req, res, next) {
  console.log("A new request received at " + Date.now());
  console.log("\nreq.url:")
  console.log(req.url)
  next();
});

app.get('/*', function (req, res) {
  console.log(req.url)
  console.log("req.hostname")
  console.log(req.hostname)
  console.log("req.origin")
  console.log(req.originalUrl)
  console.log("req")
  console.log(req)
  req.host = "amazon"
  req.hostname = "amazon"
  req.url = "https://www.amazon.com" + req.url
  console.log(req.url)
  const request = new Request(req.url)
  const url = req.url
  const method = req.method
  const headers = req.headers
  const credentials = req.credentials
  fetch(request)
    .then((response) => {
      console.log("redirected: ", response.redirected)
      return response.text()
    })
    .then((data) => {
      // console.log(data)
      console.log(url)
      // fs.writeFile('out_server_express_middleware.html', data, function (err) {
      //   if (err) return console.log(err);
      //   console.log(`${url} > out_server_express_middleware.html`);
      // });
      res.send(data)
    })
    .catch(e => { console.log(e) });
  // res.send('<h1>hello</h1><script>console.log("hello from app.get express")</script>');
});

app.post('/*', function (req, res) {
  console.log(req.url)
  console.log("req.hostname")
  console.log(req.hostname)
  req.hostname = "amazon"
  // req.url = "https://www.amazon.com" + req.url
  console.log(req.url)
  const request = new Request(req.url)
  const url = req.url
  const method = req.method
  const headers = req.headers
  const credentials = req.credentials
  fetch(request)
    .then((response) => {
      console.log("redirected: ", response.redirected)
      return response.text()
    })
    .then((data) => {
      // console.log(data)
      console.log(url)
      // fs.writeFile('out_server_express_middleware.html', data, function (err) {
      //   if (err) return console.log(err);
      //   console.log(`${url} > out_server_express_middleware.html`);
      // });
      res.send(data)
    })
    .catch(e => { console.log(e) });
  // res.send('<h1>hello</h1><script>console.log("hello from app.get express")</script>');
});

const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});


app.get("/", (req, res) => {
    //   res.sendFile(__dirname + "/index.html");
    console.log("/out_py_requests.html")
    res.sendFile("/out_py_requests.html");
});
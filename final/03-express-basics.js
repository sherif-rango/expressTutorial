const express = require("express");
const app = express();
// since this is a function we can invoke it like this
// const app = require('express')()
// const app = express === const server = http.createServer ()

app.get("/", (req, res) => {
  console.log("user hit the resource");
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

//all handle all http requests, * all resources , here i cover all wrong resources with any http methods if user cant find the resource it will be 404
app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

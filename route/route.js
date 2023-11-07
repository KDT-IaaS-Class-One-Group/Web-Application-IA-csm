const fs = require("fs");
// const contenType = require("./mod/contenType");

// 루트 경로 ("/")에 대한 처리
function handleRoot(req, res) {
  fs.readFile("./doc/index.html", (err, data) => {
    if (err) {
      console.log("Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

// "/styles.css"에 대한 처리
function handleStyles(req, res) {
  fs.readFile("./doc/index.css", (err, data) => {
    if (err) {
      console.log("Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    }
  });
}

// "/script.js"에 대한 처리
function handleScript(req, res) {
  fs.readFile("./doc/index.js", (err, data) => {
    if (err) {
      console.log("Error");
    } else {
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.end(data);
    }
  });
}

module.exports = { handleRoot, handleStyles, handleScript };
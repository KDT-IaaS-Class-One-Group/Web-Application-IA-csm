const fs = require('fs');
// const contenType = require("./mod/contenType");

function entryRoute(req, res){
  fs.readFile("./doc/index.html", (err, data) => {
    if (err) {
      console.log("index Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html"});
      res.end(data);
    }
  });
}

// "/styles.css"에 대한 처리
function Styles(req, res) {
  fs.readFile("./doc/index.css", (err, data) => {
    if (err) {
      console.log("Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    }
  });
}

function Script(req, res) {
  fs.readFile("./doc/index.js", (err, data) => {
    if (err) {
      console.log("Error");
    } else {
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.end(data);
    }
  });
}





module.exports = {entryRoute, Styles, Script};
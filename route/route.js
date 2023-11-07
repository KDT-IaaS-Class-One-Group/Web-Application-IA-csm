const fs = require('fs');
const contenType = require('../mod/contenType');

function rootRoute(req, res, contenType){
  if (req.method === "GET") {
    if (req.url === "/") {
      fs.readFile("./doc/index.html", (err, data) => {
        if (err) {
          console.log("index Error");
        } else {
          res.writeHead(200, contenType);
          res.end(data);
        }
      });
    } else if (req.url === "/index.css") {
      fs.readFile("./doc/index.css", (err, data) => {
        if (err) {
          console.log("css Error");
        } else {
          // res.writeHead(200, { "Content-Type": "text/css" });
          res.writeHead(200, contenType("text/css"));
          res.end(data);
        }
      });
    } else if (req.url === "/index.js") {
      fs.readFile("./doc/index.js", (err, data) => {
        if (err) {
          console.log("script Error");
        } else {
          res.writeHead(200,contenType("application/javascript"));
          res.end(data);
        }
      });
    }
  }
}

module.exports = rootRoute;
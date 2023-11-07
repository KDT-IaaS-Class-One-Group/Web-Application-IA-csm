const fs = require('fs');
const contenType = require("./mod/contenType");

function entryRoute(req, res){
  fs.readFile("./doc/index.html", (err, data) => {
    if (err) {
      console.log("index Error");
    } else {
      res.writeHead(200, contenType);
      res.end(data);
    }
  });
}

module.exports = entryRoute;

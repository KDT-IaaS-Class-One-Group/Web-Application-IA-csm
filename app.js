// require http
const http = require("http");
const contenType = require("./mod/contenType");
// require file system
const fs = require("fs");
//port
let port = 3217;

// rout
const serv = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    fs.readFile("./doc/index.html", (err, data) => {
      if (err) {
        console.log("error");
      } else {
        res.writeHead(200, contenType);
        res.end(data);
      }
    });
  } 
});

serv.listen(port, () => {
  console.log(`
http://localhost:${port}
`);
});

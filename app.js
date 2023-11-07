// require http
const http = require("http");
// const contenType = require("./mod/contenType");
// require file system
const fs = require("fs");
const { Script, Styles, entryRoute } = require("./route/route");


// port
let port = 3217;

// route
const serv = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      entryRoute()
    } else if (req.method === "POST") {
      if (req.url === "./doc/index.css") {
        Styles()
      }
    } else if (req.method === "GET") {
      if (req.url === "./doc/index.css") {
        Script()
      }
    }
  }
});

serv.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

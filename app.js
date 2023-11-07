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
  if (req.method === "GET"&& req.url === "/") {
      entryRoute(req, res)
    } else if (req.method === "POST"&&req.url === "/index.css") {
        Styles(req, res)
    } else if (req.method === "POST" &&req.url === "/index.js") {
        Script(req, res)
      }
});

serv.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

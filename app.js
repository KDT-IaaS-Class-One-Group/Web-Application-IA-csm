// require http
const http = require("http");
const contenType = require("./mod/contenType");
// require file system
const fs = require("fs");
const rootRoute = require("./route/route");
// port
let port = 3217;

// route
const serv = http.createServer((req, res) => {

  rootRoute(req, res, contenType)
});

serv.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
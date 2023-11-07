// require http
const http = require("http");
const route = require("./route/route"); // route.js 파일을 가져옴
let port = 3217;

const serv = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      route.handleRoot(req, res);
    } else if (req.url === "./doc/index.css") {
      route.handleStyles(req, res);
    } else if (req.url === "./doc/index.js") {
      route.handleScript(req, res);
    }
  }
});

serv.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
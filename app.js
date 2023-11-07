// require http
const http = require("http");
const route = require("./route/route"); // route.js 파일을 가져옴
let port = 3217;

const serv = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      route.handleRoot(req, res);
    } 
  }
});

serv.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
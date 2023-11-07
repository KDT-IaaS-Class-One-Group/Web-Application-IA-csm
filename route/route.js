const fs = require('fs');
const contenType = require('../mod/contenType');

function rootRoute(req, res, contenType) {
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
  } else if (req.method === "POST" && req.url === "/json") {
    let requestBody = '';
    req.on('data', (chunk) => {
      // 요청 본문 데이터 수집
      requestBody += chunk;
    });

    req.on('end', () => {
      try {
        const userData = JSON.parse(requestBody);

        // userData를 JSON 파일로 저장
        fs.writeFile("./doc/save.json", JSON.stringify(userData, null, 2), (err) => {
          if (err) {
            console.log("JSON Error");
          } else {
            console.log("Data saved as userdata.json");
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Data saved successfully" }));
          }
        });
      } catch (error) {
        console.log("JSON Parsing Error");
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON data" }));
      }
    });
  }
}

module.exports = rootRoute;

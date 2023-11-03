// require http
const http = require('http');
const contenType = require('./contenType');

let port = 3217;

const serv = http.createServer((req,res)=>{
  if(req.method==='GET'&& req.url === '/'){
    res.writeHead(200, contenType);
    res.end('hello');
  }
})

serv.listen(port, () => {
console.log(`
http://localhost:${port}
`)
})
// require http
const http = require('http');

let port = 3217;

const serv = http.createServer((req,res)=>{
  res.end('hello')
})

serv.listen(port, () => {
console.log(`
http://localhost:${port}
`)
})
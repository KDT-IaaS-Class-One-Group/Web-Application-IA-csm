// require http
const http = require('http');
const contenType = require('./contenType');
let nomalCont =  contenType('text/html', 'utf8')
//port 
let port = 3217;

const serv = http.createServer((req,res)=>{
  // rout
  if(req.method==='GET'&& req.url === '/'){
    res.writeHead(200, nomalCont);
    res.end('hello');
    
  }  else if(req.method==='POST'&& req.url === '/'){
    res.writeHead(200, nomalCont)
  } 
})

serv.listen(port, () => {
console.log(`
http://localhost:${port}
`)
})
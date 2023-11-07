const fs = require('fs');
const contenType = require('./contenType');

function readUrlFile(url,contenType){
  fs.readFile(url, (err,data)=>{
    res.writeHead(contenType);
    res.end(data);
    }
  )
};

module.exports = readUrlFile;
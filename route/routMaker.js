
function routMaker(reqMethod, reqUrl, resCont) {
  if(req.method===reqMethod&& req.url === reqUrl){
    resCont;
  }
} 

module.exports = routMaker;
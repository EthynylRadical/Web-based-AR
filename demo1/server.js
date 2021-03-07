var http = require('http');
var fs = require('fs');//引入文件读取模块

var fileRoot = 'D:\\Github\\Web-based-AR\\demo1\\main.html'

function parseJSON(req,res,next){
    var arr = [];
    req.on("data",function(data){
        arr.push(data);
    });
    req.on("end",function(){
        var data= Buffer.concat(arr).toString(),ret;
        try{
            var ret = JSON.parse(data);
        }catch(err){}
        req.body = ret;
        next();
    })
}

var server= http.createServer(function(req,res)
{

    var url = req.url;
    if (req.url === '/' && req.method.toLowerCase() === 'get') {
        var file = fileRoot + 'camera.html';
        console.log(url);

        fs.readFile( file , function(err,data)
        {
            if(err){
                res.writeHeader(404,{
                    'content-type' : 'text/html;charset="utf-8"'
                });
                res.end('<h1>404错误</h1><p>你要找的页面不存在</p>');
            }else{
                res.writeHeader(200,{
                    'content-type' : 'text/html;charset="utf-8"'
                });
                res.end(data);
            }

        });
    }
    else if (req.url === '/' && req.method.toLowerCase() === 'post') {
        var pData = '';
        req.on('data', function (chunk) {
            pData += chunk;
        });
        req.on('end', function () {

        })
    }


}).listen(8080);

console.log('服务器开启成功');
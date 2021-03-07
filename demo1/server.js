var http = require('http');
var fs = require('fs');//引入文件读取模块

var htmlRoot = 'D:\\Github\\Web-based-AR\\demo1\\main.html'

var server= http.createServer(function(req,res)
{

    var url = req.url;
    var file = htmlRoot;
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

}).listen(8080);

console.log('服务器开启成功');
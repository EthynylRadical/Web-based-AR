const express = require('express');
const app = express();


app.use(express.static("‪C:\\Users\\Ethynyl Radical\\Desktop\\PycharmProject"));

//Setting the router
app.get("/", (req, res) => {
    res.send('Hello world')
});
var server = app.listen(8080, function () {
    var host = server.address().host;
    var port = server.address().port;

    console.log(`Running on http://${host}:${port}`)
})
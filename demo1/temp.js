const express = require('express');
const app = express();


app.use("/", express.static('public'));

//Setting the router
app.get("/", (req, res) => {
    res.send()
})
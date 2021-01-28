var express = require('express');
var app = express();
var path = require('path');
var pageRoutes = require("./pageRoutes/pageRoute");

const staticPath = path.join(__dirname, '.');
// console.log(staticPath); 
app.use(express.static(staticPath));

app.use('/', pageRoutes);

var port = 8000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

app.get('/', (req, res) => {
    res.send("Hello express server");
})
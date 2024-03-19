var express = require('express')
var app = express()

app.get('/', function (req, res) {
    console.log('sending infos')
    res.send('Hello World!')
});

app.all('*', function (req, res) {
    console.log('abort')
    res.status(500).send('Error 500: Server Error')
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')

});
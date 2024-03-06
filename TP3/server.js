var http = require('http');
const fs = require("fs");
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Hello World!');
//     res.end();
// }).listen(8080);
//
// console.log('ReadFile starting to read file asynchronously\n');
// fs.readFile('random.txt', 'utf8', function (err, data) {
//     if(err){
//         console.log('error reading file');
//         return console.log(err);
//     }
//     console.log(data);
// });
// console.log('\nReadFile called readFile function but this message will be printed first before the file is fully read asynchronously\n');


//server link : http://localhost:8080 or http://127.0.0.1:8080/

http.createServer(function (req, res) {
    fs.readFile('random.txt', 'utf8', function (err, data) {
        if (err){
            res.writeHead(500, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    }
    });
}).listen(8080);
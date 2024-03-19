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
//4.b
http.createServer(function (req, res) {
    fs.readFile('random.txt', 'utf8', function (err, data) {
        if (err){
            res.writeHead(404, {'Content-Type': 'text/html'}); //404 Not Found and 500 is server error
            return res.end("404 Not Found");
        } else {
        const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Random title </title>
        </head>
        <body>
            <h1>Title of 4c question ALLO </h1>
            <p>${data}</p>
            <footer>FOOTER TEXT DONT SEE IT</footer> 
        </body>
        </html>
        `;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(htmlContent);
        return res.end();
    }
    });
}).listen(8080);

//4.c

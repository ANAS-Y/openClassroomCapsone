const express = require('express');
const cities = require('cities');
let http = require('http');
let fs = require('fs');
var nStatic = require('node-static');
var fileServer = new nStatic.Server('/public');

//const app = express();
//app.use(express.static(__dirname + '/public'));
//app.listen(3000);


let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/HTML'
    });
    fs.readFile('SearchCity.html', function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('file not found');
        } else {
            response.write(data);
        }
        response.end();
    });
};

http.createServer(handleRequest).listen(3000);

/**
 * 
 */

var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(function(request, response) {
	var dirname = __dirname;

	var userpath = request.url;
	console.log(userpath);

	if (userpath == "/") {
		fs.readFile(dirname + "\\index.html", function(err, data) {
			response.writeHead(200, {
				"Content-Type" : "text/html;charset=UTF-8"
			});
			response.end(data);
		});
	} else if (userpath == "/otherPage") {
		fs.readFile(dirname + "\\otherPage.html", function(err, data) {
			response.writeHead(200, {
				"Content-Type" : "text/html;charset=UTF-8"
			});
			response.end(data);
		});
	}

});

server.listen(3000, function() {
	console.log("server running at http://127.0.0.1:3000");
});

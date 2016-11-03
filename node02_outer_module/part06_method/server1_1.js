/**
 * 
 */

var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, resp) {
	
	if(req.method == "GET"){
		fs.readFile("part06_method/main.html", function(err, data) {
			resp.writeHead(200, {"Content-Type" : "text/html;charset=UTF-8"});
			resp.end(data);
		});
		
		
	} else if (req.method == "POST"){
		
	}
	
});


server.listen(3000, function() {
	console.log("server running at http://127.0.0.1:3000");
});

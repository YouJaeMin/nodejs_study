/**
 * 
 */

var http = require("http");
var fs = require("fs");

//console.log(__dirname);
var server = http.createServer(function(request, response) {
	
	
	var dirname = __dirname;
	
	fs.readFile(dirname+"\\index.html", function(err, data) {
		if (err !== null){
			console.log(err);
			//클라이언트에 읍답할때 String 으로 리턴해야 하므로 
			//error 객체를 문자열로 변환
			response.end(JSON.stringify(err));
			
		}else{
			response.writeHead(200,{"Content-Type" : "text/html;charset=UTF-8"});
			response.end(data);
		}
		
	});
	
//	fs.readFile("part03_fs/index.html", function(err, data) {
//		
//		console.log(err);
//		
//		response.writeHead(200, {"Content-Type" : "text/html;charset=UTF-8"});
//		response.end(data);
//	});

});


server.listen(3000, function() {
	console.log("server running at http://127.0.0.1:3000");
});

/**
 * 
 */

//url모듈을 추출한다. (import한다.)
var url = require("url");

// url 정보
var urlStr = "http://idols.com/q?grroup=EXIT&name=kim";

// true : 파라미터 사용여부(true은 사용, false은 미사용)
// url.parse() : urlStr문자열을 Object로 변경)
var parsed = url.parse(urlStr, true);

console.log(parsed);
console.log("========");
console.log("protocol==", parsed.protocol);
console.log("query==", parsed.query);
console.log("query.grroup==%s query.name==%s", parsed.query.grroup, parsed.query.name);
console.log("pathname==", parsed.pathname);
console.log("path==", parsed.path);


var querystring = require("querystring");
var queryParsed = querystring.parse(parsed.query);
console.log(queryParsed);

var queryParsed2 = querystring.parse(parsed.search);
console.log(queryParsed2);

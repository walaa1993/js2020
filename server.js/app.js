/*var http = require("http");
var myhttp = http.createServer(function(require,response){
	response.writeHead(200);
	response.write('welcome to the first node.js server');
	response.end();
});
myhttp.listen(8888,"127.0.0.1");
console.log("we listen to http://127.0.0.1:8888");*/
/*var html = "<!DOCTYPE html><html><head><title></title></head><body><h1>This is HTML page</h1></body></html>";
var http = require("http");
var info = {
	"name":"walaa",
	"age":"26"
}
var myhttp = http.createServer(function(request,response){
	response.writeHead(200);
	response.write(html);
	response.end();
});
myhttp.listen(8888,"127.0.0.1");
console.log("we listen to http://127.0.0.1:8888/");*/

/*var http = require("http"); // call http libraray 
var url = require("url"); // call url library 

var myhttp = http.createServer(function(request,response){ // accept request and response 
	var queryString = url.parse(request.url,true).query;
	console.log(queryString);
	console.log(queryString.id);
});

myhttp.listen(3000,"127.0.0.1");

console.log("we listen to http://127.0.0.1:3000?id=1");*/
/*var http = require("http"); // call http libraray 
var postHTML = "<!DOCTYPE html><html><head><title>HTML Response Page</title></head>"+
"<body><form method='post' action='/'>First Name: <input type='text' name='fname'>"+
"Last Name: <input type='text' name='lname'>"+
"<input type='submit'></form>"+
"</body></html>";

var myhttp = http.createServer(function(request,response){ // accept request and response 
	response.writeHead(200);
	response.write(postHTML);
	response.end();
});

myhttp.listen(3000,"127.0.0.1");

console.log("we listen to http://127.0.0.1:3000/");*/
var http = require("http"); // call http libraray 
var postHTML = "<!DOCTYPE html><html><head><title>HTML Response Page</title></head>"+
"<body><form method='post' action='/'>First Name: <input type='text' name='fname'>"+
"Last Name: <input type='text' name='lname'>"+
"<input type='submit'></form>"+
"</body></html>";

var qs = require("querystring");
var myhttp = http.createServer(function(request,response){ // accept request and response 	
	response.end(postHTML);	
	if(request.method =='POST'){
		var body ="";
		request.on('data',function(data){ // on posting data 
			body += data;
		});
		request.on('end',function(){
			var post = qs.parse(body); // convert data so i can read it 			
			console.log(post['fname']);	
			console.log(post['lname']);	
		});
	}
});

myhttp.listen(3000,"127.0.0.1");

console.log("we listen to http://127.0.0.1:3000/");






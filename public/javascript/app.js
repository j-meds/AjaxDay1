var firebase = "https://ajaxx.firebaseio.com/";

books = [];

var book = function(title,author,img){
	this.title = title;
	this.author = author;
	this.img = img;
	this._id = null;
}
// Create , Read , Update , Delete

//get - retrives info (no data can be set, has no BODY)
//post - creates info
//put - replaces the info
//patch - updates info
//delete -Deletes info
//soap apis - only limited for xml 




function displayBooks(){
	var elementString = "";
	for(var i= 0; i<books.length;i++){
		 
		elementString += "<li><img src='"+ books[i].img +"'"+
		 "width='160px' height='100' style='border:ridge 7px white; border-radius:10px;' /> <span>"+books[i].title  +  "</span>" +
		'<span>'+books[i].author  + '</span></li>'
	}
	document.getElementById("bookList").innerHTML += elementString;
}

//transferring to firebase
//Get - retrieving
/*
var req = new XMLHttpRequest();
console.log(req);

//Post - Creates Info
//obj.open('verb', url, [aSync = true])
req.open('POST', firebase + '.json', true);

//define the onLoad
req.onload = function(){
	console.log(JSON.parse(this.response));
}

console.log("defined after onload");

//send the request
req.send(JSON.stringify(newBook)); */


//transferring to javascript
//create the request
function getBooks(){
var req = new XMLHttpRequest();
//open the request
req.open("get", firebase + '.json',true);
//define the onload
req.onload = function(){
	if(this.status >= 200 && this.status < 400){
		var res = JSON.parse(this.response);
		console.log(res);
		for(var prop in res){
			books.push(res[prop]);
		}
		displayBooks();
}
}
//send the request
req.send();	
}


getBooks();
displayBooks();

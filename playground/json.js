// var obj = {
// 	name: 'PANKAJ'
// };


// //object to string coversion
// console.log(obj);	
// var strObj = JSON.stringify(obj);
// console.log(typeof strObj);
// console.log(strObj);


// String to Object conversion


// var stringObj = '{ "a": "b", "c": "d"}';

// console.log(typeof stringObj);

// console.log(typeof JSON.parse(stringObj));


var fs = require('fs');

var sampleNote = {
	name: 'PANKAJ',
	age: 25
}

var stringContent = JSON.stringify(sampleNote);
console.log(stringContent);  

fs.writeFileSync('sample_notes.json', stringContent);

var readingNotes = fs.readFileSync('sample_notes.json'); // whenever we read the content of json file, 
// the received content from the file won't be a string. Its of object type. We need to use the toString()
// method on the readed object to print the output of .json file as string else it will show a buffer o/p. 

console.log(typeof readingNotes);  // will o/p object
console.log(typeof readingNotes.toString()); // will o/p string
console.log(readingNotes.toString());	// prints the json content
var readable = JSON.parse(readingNotes);  // will covert the json into the javascript object
console.log(readable);  // will print the json Object
console.log(readingNotes + " "); // this will print json content output bcoz readingNotes object 
 // this will print json content output bcoz readingNotes object 
// has been converted from object type to the string type due to the concat operator

console.log(readingNotes); // this will directly print the object
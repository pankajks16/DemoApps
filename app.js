console.log('Starting app.js ..... ');
const fs = require('fs');
//const os = require('os');	
const notes = require('./notes.js');
const _ = require('lodash');
//var user  = os.userInfo();






// yargs is a 3rd party module from npm and is used to extract the run time arguments passed to the app.js 
// file while running it.

//console.log(process.argv);

var yargs = require('yargs');   // look out in npmjs.org
var argv = yargs.argv;
console.log('\n Yargs : \n', argv);
// /console.log(argv.pankaj, argv.hello);

var input = process.argv[2]

console.log('Command is :', input);	
if (input === 'add') {
	console.log(notes.addNote(argv.title));
} else if (input === 'remove') {
	var result = notes.removeNote(argv.title);
	console.log('Result : ' + result);
} else if (input === 'list') {
	console.log(notes.getAll());
} else if (input === 'read') {
	var count = notes.readNote(argv.title);
	if (count.length === 0){
		console.log('Element not present to read it ...')
	} else {
		console.log('Readed note is:\n' + 'Title: ' + count[0].title + '\nContent: ' + count[0].content);
		// using count[0] i.e., indexed form because the returned element is an array and we need the internal
		// element to extract the title and the content from it.
	}
} else if (input === 'addNote') {
	var note = notes.addJsonNote(argv.title, argv.content);
	if (note !== undefined) {
		console.log("Notes successfully added and saved !!!");
		console.log(`------\n Title: ${note.title} \n Content: ${ note.content }`);

	} else {
		console.log("Note title exists. So cannot create a note. Retry with different title !!!");
	}
} else {
	console.log('Unknown command entered ...');
}


//console.log(notes.add(5, 6));
// /console.log(notes.remove(argv.title));
// console.log(_.isString(1));
// console.log(_.isString('1'));

// var newArray = _.uniq([1,,2,3,4,1,1,1,5,2,2]);
// console.log(newArray);

// console.log(`Result is : ${notes.add(3,2)}`);
// console.log(user);
// user object which i took from the terminal to see the object contents
// user = { uid: -1,
//   gid: -1,
//   username: 'SPankaj',
//   homedir: 'C:\\Users\\SPankaj',
//   shell: null }


// fs.appendFile('Hello.txt', 'Welcome to node created file sir ... \n');
// fs.appendFile('Hello.txt', 'Welcome ' + user.username + '\n');
// fs.appendFile('Hello.txt', `Welcome ${user.username} \n`);
// above is the ES 6 feature .... use interpolation inside the grave accent notation
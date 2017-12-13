console.log('Starting notes.js......')

// console.log(module.exports);
const fs = require('fs');

var fetchNotes = () => {
	try {
		var fileContent = fs.readFileSync('notes-data.json');
		return JSON.parse(fileContent);
	} catch (e) {
		console.log("File doesnt exists ... so creating new one and pushing content into it");
		return [];
	}
};


var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


var addNote = (title) => {
	return `The title added is : ${title}`;
};


var readNote = (title) => {
	var existingNote = fetchNotes();

	var readedNote = existingNote.filter((ele) => {
		return ele.title === title;
	});
	console.log('Inside readNote() method \n ');
	console.log(readedNote);
	return readedNote;
};


var logNotes = (note) => {
	console.log('\nThe note is -------- ');
	console.log(`Tiltle: ${note.title}`);
	console.log(`Content: ${note.content}`);
};

var removeNote = (title) => {
	//return 'Removed title : ' + title;
	var note = fetchNotes();
	console.log(note);

	var newArr = note.filter((ele) => {
		return ele.title !== title;
	});
	saveNotes(newArr);
	return newArr;
};

var getAll = () => {
	return fetchNotes();
};

var addJsonNote = (title, content) => {
	var arr = fetchNotes();
	var obj = {
		title,
		content
	};
	console.log(arr);
	console.log(obj);
	//console.log(fileContent);
	//console.log(JSON.stringify(fileContent));
	var dup = arr.filter((arg) => { return arg.title === title }); // arg.title is the title present in the JSON
	// object which is passed as the argument in the callback function of the filter method method argument list.
	// and the title after the === is the title passed in the argument. So we are comparing here the title of
	// the json object with the title passed in the argument to find the count of the duplicate elements.
	console.log(dup);
	if (dup.length === 0) {
		arr.push(obj);
		saveNotes(arr);
		console.log('Note created and content saved successfully');
		return obj;
	}
};
//follow below eway when coding like : var add = (a, b) => { return 'hello ' + (a+b); }

module.exports = {
		addNote,						// when the key and value are equal, then we can simply write the value 
		removeNote,						// as it is directly instead of writing twice the same thing
		getAll,
		addJsonNote,
		readNote,
		logNotes
};

// module.exports = {
// 	 	add: add,
//		remove: remove
// };

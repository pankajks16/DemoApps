var square = (x) => x*x;

var square 

console.log(square(7));

// if we use arrow function in an object, then we are not going to get the access to the "this" keyword
// and the 'arguments' keywords. to have access to these words we can use the following syntax:

//  var x = { 
//	sayHi () {
//
//  };

// instead of:  
// 	var x = {
// 		sayHi: () => {

// 		}
// 	};

// don't use the second way to use the this keyword and the arguments keyword. It wont work as expected.
// FUNCTION BASICS
// Basic Function
function sayHello() {
	console.log("Harro!");
}
// sayHello();

//Basic Function with Parameter passed through 
function sayHello(name) {
	console.log("Harro! " + name);
}
// sayHello("Stacy");

//Boolean with a coersion of use-alert as true or false
function sayHello (name, useAlert) {
	if (useAlert) {
		alert("Hello, " + name);
	}
	else {
		console.log("Hello, " + name);
	}
}
// //This runs statement with alert
// sayHello("Roger", true);
// //This runs statement win console since a blank parameter coerces to false
// sayHello("Clarice");


// ----------


//PRACTICE WITH PARAMETERS AND FOR LOOP
// Visual way of seeing list items
// // Counting in all of JS starts at 0.
// var item0 = "corgi",
// 		 item1 = "beagle",
// 		 item2 = "saint bernard";

// function listItems() {
// 	 console.log(item0);
// 	 console.log(item1);
// 	 console.log(item2);
// }

// listItems();

// Introducing DRY way by using array of data values and a For loop
var items =["corgi",
						"labrador",
						"golden retreiver"];
//Adding more values to the array
items.push("pekingese",
					 "golden doodle",
					 "unicorn");
//alphabetical order function call
items.sort();
// For loop structure: ( initiator; condition(times out function after the conditioner is spent); incrementer;)
											// for(var i=0; i<10; 1++)
function listItems() {
	for(var i = 0; i < items.length; i++) {
		console.log(items[i]);
	}
}

listItems();




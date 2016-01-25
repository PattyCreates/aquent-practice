// Function Basics
// Basic Function
function sayHello() {
	console.log("Harro!");
}

sayHello();

//Basic Function with Parameter passed through 
function sayHello(name) {
	console.log("Harro! " + name);
}

sayHello("Stacy");

//Boolean with a coersion of use-alert as true or false
function sayHello (name, useAlert) {
	if (useAlert) {
		alert("Hello, " + name);
	}
	else {
		console.log("Hello, " + name);
	}
}
//This runs statement with alert
sayHello("Roger", true);
//This runs statement win console since a blank parameter coerces to false
sayHello("Clarice");
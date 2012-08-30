// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
"use strict";

function exampleA(text) {
	console.log("You can declare a function. " + text);
}

exampleA("You can call a declared function.");

// ****

var exampleB = function(text) {
	console.log("You can assign a function to a variable. " + text);
};

exampleB("You can call a function in a variable.");

// ****

exampleC(function() {
	console.log("You can pass a function as a parameter.");
});

function exampleC(exampleD) {
	exampleD();
	console.log("  You can call a function in a parameter. ");
}

// ****

function outerFunction() {
	var closureVariable = "You can read and write variables in outer functions";
	exampleF(function() {
		console.log(closureVariable + " from inner functions.");
	});
}

function exampleF(exampleG) {
	exampleG();
	console.log("  (Some languages just can't do it.)");
}

outerFunction();

// ****

/* OUTPUT:

You can declare a function. You can call a declared function.
You can assign a function to a variable. You can call a function in a variable.
You can pass a function as a parameter.
  You can call a function in a parameter.
You can read and write variables in outer functions from inner functions.
  (Some languages just can't do it.)

 */

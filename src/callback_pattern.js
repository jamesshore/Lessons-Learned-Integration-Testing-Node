// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
"use strict";

var http = require("http");

var server = http.createServer();
server.listen(8080, function() {
	console.log("Server started.");
});
console.log("Server starting.");
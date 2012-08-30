// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
"use strict";

var http = require("http");

http.get("http://google.com", function(response) {
	response.setEncoding("utf8");

	response.on("data", function(chunk) {
		console.log("** Received: " + chunk);
	});

	response.on("end", function() {
		console.log("** End of response.");
	});
});

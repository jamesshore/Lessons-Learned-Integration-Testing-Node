// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
"use strict";

var server = require("./server.js");
var http = require("http");

exports.test_serverReturnsHelloWorld = function (test) {
	server.start(8080);
	var request = http.get("http://localhost:8080");
	request.on("response", function (response) {
		var responseText = "";
		response.setEncoding("utf8");

		response.on("data", function (chunk) {
			responseText += chunk;
		});
		response.on("end", function () {
			test.equals(200, response.statusCode, "status code");
			test.equals("Hello World", responseText, "response text");
			server.stop(function () {
				test.done();
			});
		});
	});
};
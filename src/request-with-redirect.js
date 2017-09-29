const request = require('request');
const url = require('url');
require('colors');

function requestMultipartForm(method, pageUrl, formData) {
	return new Promise((resolve, reject) => {
		console.log("Requesting: ".green, pageUrl);
		request({method, uri:pageUrl, formData}, function(err, res, body) {
			if (err) { reject(err); }
			if (res.statusCode > 300 && res.statusCode < 400 && res.headers.location) {
				console.log("Redirecting...".blue);
				redirectUrl = res.headers.location + "/";

		        requestMultipartForm("GET", redirectUrl)
		        .then((result) => resolve(result));
		    } else {
				resolve(body);
		    }
		});

	});
}

module.exports = requestMultipartForm;
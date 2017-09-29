const xpath = require('xpath');
const DOMParser = require('xmldom').DOMParser;
const requestWithRedirect = require('./request-with-redirect');

const lmtoolUrl = 'http://www.speech.cs.cmu.edu/cgi-bin/tools/lmtool/run';

function run(fileStream) {
	return new Promise((resolve, reject) => {
		requestWithRedirect("POST", lmtoolUrl, {formtype: 'simple', corpus: fileStream})
		.then(body => {
			const doc = new DOMParser({errorHandler:{}}).parseFromString(body);
			const node = xpath.select1("/html/body/p/a", doc);
			const fileUrl = node.getAttribute('href');
			resolve(fileUrl);
		})
		.catch(err => console.log(err));
	});
}

module.exports = {
	run
};
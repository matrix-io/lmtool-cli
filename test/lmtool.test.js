const assert = require('chai').assert;
const fs = require('fs');
const lmtool = require('../');

describe('LMTool-CLI Test', function() {
	it('should get a link', function(done) {
		this.timeout(5000);
		lmtool.run(fs.createReadStream(__dirname + '/test-word.txt'))
		.then((link) => {
			assert.match(link, /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);
			done();
		});
	})
})
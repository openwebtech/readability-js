/*eslint handle-callback-err:0*/
'use strict';

var read = require('../src/readability');

describe('result', function() {
	it('should get document', function(done) {
		read('http://www.whitehouse.gov/', function(err, result) {
			result.title.should.equal('The White House');
			done();
		});
	});

	it('should not read style:none blocks', function(done) {
		read('http://zaol.hu/kulfold/megrongaltak-petofi-sandor-szobrat-ungvaron-1720762', function(err, result) {
			result.content.text().length.should.equal(1240);
			// console.log(result.content.text());
			done();
		});
	});
});

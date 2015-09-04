var node = require('./node');
var fs = node('fs');

module.exports = function () {
	//return 'sasa';
	return fs.readdirSync('./') + 'qwez';
}
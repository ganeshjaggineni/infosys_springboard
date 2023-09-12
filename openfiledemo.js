
const fs = require('fs');

fs.open('samplegani.tx', 'r', function (err, f) {
	console.log('Saved!');
});

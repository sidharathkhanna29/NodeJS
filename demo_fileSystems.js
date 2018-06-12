var fs = require('fs');

//Read
fs.open('demofile2.txt', 'w' , function (err, file) {
	if (err) throw err;
	console.log('Saved!');
});

//Create
fs.writeFile('demofile2.txt', 'Hello Sidharath !', function (err) {
	if (err) throw err;
	console.log('Saved!');
});

//Update
fs.appendFile('demofile2.txt', 'How are you doing!!! ', function (err) {
	if (err) throw err;
	console.log('Updated!');
});

//Delete
fs.unlink('demofile1.txt', function (err) {
	if (err) throw err;
		console.log('File Deleted!');
});

//Rename
fs.rename('demofile2.txt', 'demofile1.txt', function (err) {
	if (err) throw err;
	console.log('File Renamed!');
});
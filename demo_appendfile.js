var fs = require('fs');
	fs.appendFile('demofile1.txt', 'Hello content!' ,function(err) {
		if (err) throw err;
		console.log('Saved!');
	});

	fs.rename('demo_openfile.js', 'demo_fileSystems.js', function (err) {
		if (err) throw err;
		console.log('File Renamed!');
	});
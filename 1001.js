const readline = require('readline');
const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];

reader.on('line', function (line) {
	input = line.split(' ').map((el) => parseInt(el));
	reader.close();
}).on('close', function () {
	console.log(input[0] - input[1]);
	process.exit();
});
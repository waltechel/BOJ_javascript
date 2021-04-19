const readLine = require('readline');
const reader = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
});
let input = [];


reader.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let A = Math.min(input[0], Math.min(input[1], input[2]));
	let B = Math.min(input[3], input[4]);

	console.log(A + B - 50);



});
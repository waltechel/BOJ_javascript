const readLine = require('readline');
const { deflateRaw } = require('zlib');
const reader = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
});
let N;
let input = [];

reader.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	N = parseInt(input[0]);
	let A = N - 1;
	let B = 1;
	for (let i = 0; i < N; i++) {
		let line = "";
		for (let j = 0; j < A; j++) {
			line += " ";
		}
		for (let j = 0; j < B; j++) {
			line += "*";
		}
		console.log(line);
		A--;
		B += 2;
	}

});
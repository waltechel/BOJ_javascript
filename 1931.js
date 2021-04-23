const readLine = require('readline');
const { deflateRaw } = require('zlib');
const reader = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
});
let input = [];
let N;

reader.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	N = parseInt(input[0]);

	let A = [];
	for (let i = 1; i <= N; i++) {
		let B = input[i].split(' ').map(Number);
		A.push(B);
	}

	A.sort(function (a, b) {
		if (a[1] != b[1]) {
			return a[1] - b[1];
		} else {
			return a[0] - b[0];
		}
	});

	let answer = 0;
	let time = 0;
	for (let i = 0; i < N; i++) {
		if (time <= A[i][0]) {
			time = A[i][1];
			answer++;
		}
	}
	console.log(answer);

});
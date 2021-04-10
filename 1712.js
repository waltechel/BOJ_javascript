const readLine = require('readline');
const reader = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
});

let N;
let input = [];
let A = [];

reader.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	A = input[0].split(' ').map(Number);
	let a = BigInt(A[0]);
	let b = BigInt(A[1]);
	let c = BigInt(A[2]);

	let size = 1;
	while (size < 2100000000) {
		size *= 2;
	}
	let answer = BigInt(0);
	for (let i = BigInt(size); i > 0; i /= BigInt(2)) {
		if (a + b * (answer + i) >= c * (answer + i)) {
			answer += i;
		}
	}

	if (answer == size * 2 - 1) {
		console.log(-1)
	} else {
		console.log(parseInt(answer + BigInt(1)))
	}

});



const readLine = require('readline');
const reader = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
});
let input = [];

reader.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let N = parseInt(input[0].split(' ')[0]);
	let M = parseInt(input[0].split(' ')[1]);
	let A = input[1].split(' ').map(Number);
	// console.log(A)

	let max = -1;
	for (let i = 0; i < N - 2; i++) {
		for (let j = i + 1; j < N - 1; j++) {
			for (let k = j + 1; k < N; k++) {
				if (A[i] + A[j] + A[k] <= M && A[i] + A[j] + A[k] > max) {
					max = A[i] + A[j] + A[k];
				}
			}
		}
	}

	console.log(max)
});



const readLine = require('readline');
const { deflateRaw } = require('zlib');
const reader = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
});
let N, M;
var A;
let input = [];

reader.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	M = parseInt(input[0]);
	N = parseInt(input[1]);
	// console.log(N, M);

	A = [];
	for (let i = 0; i <= 10000; i++) {
		A.push(true);
	}
	// console.log(A)

	A[0] = false;
	A[1] = false;
	for (let i = 2; i <= 10000; i++) {
		if (A[i] == true) {
			for (let j = i + i; j <= 10000; j += i) {
				A[j] = false;
			}
		}
	}

	// console.log(A)

	let cnt = 0;
	let answer = 0;
	let answer2 = 10000;
	for (let i = M; i <= N; i++) {
		if (A[i] == true) {
			answer += i;
			cnt++;
			answer2 = Math.min(answer2, i);
		}
	}

	if(cnt == 0){
		console.log('-1');
	}else{
		console.log(answer);
		console.log(answer2);
	}

});
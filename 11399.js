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
	N = parseInt(input[0]);
	A = input[1].split(' ').map(Number);
	A.sort(function(a, b){
		return a - b;
	});
	let answer = 0;
	let sum = 0;
	for(let i = 0 ; i < A.length ; i++){
		sum += A[i];
		answer += sum;
	}
	console.log(answer)
});



const readLine = require('readline');
const reader = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
});

let N, K;
let input = [];
let A = [];
let B = [];

reader.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	N = input[0].split(' ').map(Number)[0];
	K = input[0].split(' ').map(Number)[1];

	for(let i = 1 ; i <= N ; i++){
		B[i - 1] = parseInt(input[i])
	}
	let answer = 0;
	for(let i = N - 1 ; i >= 0 ; i--){
		if(K >= B[i]){
			let candi = parseInt(K / B[i]);
			answer += candi;
			K %= B[i];
		}
	}

	console.log(answer);



});



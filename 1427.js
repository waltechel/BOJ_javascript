const readLine = require('readline');
const reader = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
});
let input = [];


reader.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let A = input[0];
	let B = [];
	for(let i = 0 ; i < A.length; i++){
		B.push(parseInt(A[i]));
	}
	B.sort(function(a, b){
		return b - a;
	})
	for(let i = 0 ; i < B.length; i++){
		process.stdout.write(B[i]+"");
	}
	


});
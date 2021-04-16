const readLine = require('readline');
const reader = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
});
let input = [];

reader.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let A = parseInt(input[0].split(' ')[0]);
	let B = parseInt(input[0].split(' ')[1]);
	let C = parseInt(input[0].split(' ')[2]);

	if(A > C){
		console.log(1);
	}else{
		let answer = 1;
		C -= A;//하루 치는 미리 뺀다.
		answer += Math.ceil(C / (A - B));
		console.log(answer);
	}
	
});
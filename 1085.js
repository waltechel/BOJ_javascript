const readLine = require('readline');
const reader = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
});
let input = [];

var dist = function(x1, y1, x2, y2){
	return Math.abs(x1 - x2) + Math.abs(y1 - y2);
} 

reader.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let x = parseInt(input[0].split(' ')[0]);
	let y = parseInt(input[0].split(' ')[1]);
	let w = parseInt(input[0].split(' ')[2]);
	let h = parseInt(input[0].split(' ')[3]);

	let answer = 5000;
	answer = Math.min(answer, dist(x, y, x, 0));
	answer = Math.min(answer, dist(x, y, x, h));
	answer = Math.min(answer, dist(x, y, 0, y));
	answer = Math.min(answer, dist(x, y, w, y));

	console.log(answer);

});
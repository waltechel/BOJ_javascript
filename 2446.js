const readLine = require('readline');
const { deflateRaw } = require('zlib');
const reader = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
});
let input = [];
let N;
draw = function (a, b, flag, phase) {

	for (let i = 0; i < a; i++) {
		process.stdout.write(" ");
	}
	for (let i = 0; i < b; i++) {
		process.stdout.write("*");
	}
	console.log();

	if (phase == 2 * N - 1) {
		return;
	}

	if (a == N - 1) {
		flag = -1;
	}

	if (flag == 1) {
		draw(a + 1, b - 2, flag, phase + 1);
	} else {
		draw(a - 1, b + 2, flag, phase + 1);
	}

}

reader.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	N = parseInt(input[0]);
	draw(0, 2 * N - 1, 1, 1);

});
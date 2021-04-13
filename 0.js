const readLine = require('readline');
const reader = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
});
let input = [];

reader.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let N = parseInt(input[0]);
	let line = input[1];

	let H = 0;
	let M = 0;
	for (let i = 0; i < N - 1; i++) {
		if (line[i] == 'H') {
			H++;
		} else if (line[i] == 'M') {
			M++;
		}
	}

	if (H > M) {
		console.log('H');
	} else if (H < M) {
		console.log('M');
	} else if (H == 0 && M == 0) {
		console.log('HM');
	} else {
		let flag = line[0];
		for (let i = 0; i < N - 1; i++) {
			if (line[i] == line[i + 1] && line[i] == 'H') {
				flag = 'H';
				break;
			}
			if (line[i] == line[i + 1] && line[i] == 'M') {
				flag = 'M';
				break;
			}
		}
		console.log(flag);
	}


});
const readline = require('readline');
const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
reader.on('line', function (line) {
	input = line.split(' ').map((el) => parseInt(el));
	reader.close();
}).on('close', function () {
	let flag = true;
	for (let i = 0; i < 7; i++) {
		if (input[i] >= input[i + 1]) {
			flag = false;
			break;
		}
	}
	if (flag) {
		console.log("ascending")
		process.exit();
	}
	flag = true;
	for (let i = 0; i < 7; i++) {
		if (input[i] <= input[i + 1]) {
			flag = false;
			break;
		}
	}
	if (flag) {
		console.log("descending")
		process.exit();
	} else {
		console.log("mixed");
	}

	process.exit();
})



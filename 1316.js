const readLine = require('readline');
const reader = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
});

let N;
let answer = 0;

let input = [];

reader.on('line', function (line) {
	input.push(line);
}).on('close', function () {
		N = parseInt(input[0]);
		for (let i = 1; i <= N; i++) {
			// console.log("input[i] is : ", input[i])
			var flag2 = true;
			for (let j = 0; j < input[i].length; j++) {
				var flag = true;
				for (let k = j + 1; k < input[i].length; k++) {
					// console.log("i, j, k is : ", i, j, k)
					if (input[i][j] != input[i][k]) {
						flag = false;
						continue;
					}
					if (input[i][j] == input[i][k] && flag == false) {
						flag2 = false;
						break;
					}
				}
				if (flag2 == false) {
					break;
				}
			}
			if (flag2 === true) {
				answer++;
			}
		}
		console.log(answer);
	});



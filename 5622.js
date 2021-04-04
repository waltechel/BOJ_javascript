const readline = require('readline');
const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var input;
reader.on('line', function (line) {
	input = line;
	//reader가 close가 되어야 넘어갑니다.
	reader.close();
}).on('close', function () {
	let answer = 0;
	for(let i = 0 ; i < input.length ; i++){
		let c = input[i];
		if(c == 'A' || c == 'B' || c == 'C'){
			answer += 3;
		}else if(c == 'D' || c == 'E' || c == 'F'){
			answer += 4;
		}else if(c == 'G' || c == 'H' || c == 'I'){
			answer += 5;
		}else if(c == 'J' || c == 'K' || c == 'L'){
			answer += 6;
		}else if(c == 'M' || c == 'N' || c == 'O'){
			answer += 7;
		}else if(c == 'P' || c == 'Q' || c == 'R' || c == 'S'){
			answer += 8;
		}else if(c == 'T' || c == 'U' || c == 'V'){
			answer += 9;
		}else if(c == 'W' || c == "X" || c == 'Y' || c == 'Z'){
			answer += 10;
		}
	}
	console.log(answer);
	process.exit();
})



const readLine = require('readline');
const reader = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
});
let input = [];

reader.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let Test = parseInt(input[0]);
	for(let test_case = 1 ; test_case <= Test ; test_case++){
		let line = input[test_case].split(' ').map(Number);
		let H = parseInt(line[0]);
		let W = parseInt(line[1]);
		let N = parseInt(line[2]);
		// console.log(H, W, N)
		let index = 1;
		FOR : for(let j = 1 ; j <= W; j++){
			for(let i = 1 ; i <= H ; i++){
				if(index == N){
					if(i <= 9 && j <= 9){
						console.log(i + '0' + j)
					}else if(i <= 9 && j >= 10){
						console.log(i + '' + j)
					}else if(i >= 10 && j <= 9){
						console.log(i + '0' + j)
					}else{
						console.log(i + '' + j)
					}
					break FOR;
				}
				index++;
			}
		}

	}

});
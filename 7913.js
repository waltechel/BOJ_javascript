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
	let A = 0;
	let B = 0;
	let H = 0.5;
	let M = 0.5;
	console.log('line[i] is ', undefined,' and A is : ', A, ' and B is : ' , B, ' and H is : ' , H , ' and M is : ', M);
	for(let i = 0 ; i < N ; i++){
		A += (H /= 2);
		B += (M /= 2);
		if(line[i] == 'H'){
			H += 0.5;
		}else{
			M += 0.5;
		}
	console.log('line[i] is ', line[i],' and A is : ', A, ' and B is : ' , B, ' and H is : ' , H , ' and M is : ', M);
	}

  // console.log(1 + 37 / 64 , 59 / 64)
	

	if(A > B){
		console.log('H');
	}else if(A < B){
		console.log('M');
	}else{
		console.log('HM');
	}

});



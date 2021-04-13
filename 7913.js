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
	let SumH = 0;
	let SumM = 0;
	let H = 0.5;
	let M = 0.5;
	console.log('line[i] is ', undefined,' and SumH is : ', SumH, ' and SumM is : ' , SumM, ' and H is : ' , H , ' and M is : ', M);
	for(let i = 0 ; i < N ; i++){
		SumH += (H /= 2);
		SumM += (M /= 2);
		if(line[i] == 'H'){
			H += 0.5;
		}else{
			M += 0.5;
		}
	console.log('line[i] is ', line[i],' and SumH is : ', SumH - 0.25, ' and SumM is : ' , SumM - 0.25, ' and H is : ' , H , ' and M is : ', M);
	}

  // console.log(1 + 37 / 64 , 59 / 64)
	

	if(SumH > SumM){
		console.log('H');
	}else if(SumH < SumM){
		console.log('M');
	}else{
		console.log('HM');
	}

});



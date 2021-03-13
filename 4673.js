var A = new boolean[10001];
for (let i = 0; i <= 10000; i++) {
	A[i] = false;
}
for (let i = 1; i <= 10000; i++) {
	if (A[i] == false) {
		let a = i;
		while (true) {
			let sum = 0;
			while (a > 0) {
				sum += a % 10;
				a /= 10;
			}
			if (sum <= 10000) {
				if(A[sum]){
					break;
				}
				A[sum] = true;
			}
			a = sum;
		}
	}
}
for(let i = 1 ; i <= 10000; i++){
	if(A[i]){
		console.log(i);
	}
}
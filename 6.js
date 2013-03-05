function differenceBetweenSquareTechniques(max) {
	var sumSquared = 0, allSquared = 0;
	for (i = 1; i <= max; i++) {
		sumSquared += i;
		allSquared += (i * i);
	}	
	sumSquared = sumSquared * sumSquared;
	return sumSquared - allSquared;
}

console.time('timer');
console.log(differenceBetweenSquareTechniques(100));
console.timeEnd('timer');
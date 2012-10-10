function arrToStr(arr){
	return arr.join().replace(',','');
}

function isPalindrome(num) {
	var arr = num.split(''),
		halfRange = (arr.length / 2),
		isEvenLength = (arr.length % 2 == 0),
		firstHalfLimit =  isEvenLength ? halfRange : Math.floor(halfRange),
		secondHalfLimit = isEvenLength ? halfRange : Math.ceil(halfRange),
		firstHalf = arr.slice(0,firstHalfLimit),
		secondHalf = arr.slice(secondHalfLimit);
	return (arrToStr(firstHalf) == arrToStr(secondHalf.reverse()));
}

function highestPalindromeInRange(rangeStart, rangeEnd) {
	var results = [];
	for (var i = rangeEnd; i >= rangeStart; i--) {
		for (var j = rangeEnd-1; j >= rangeStart; j--) {
			if (isPalindrome((i * j).toString())) {
				results.push(i * j)
			}
		}
	}
	return results.sort(function(a, b){
		return a - b;
	}).reverse()[0];
}

console.log(highestPalindromeInRange(100, 999));
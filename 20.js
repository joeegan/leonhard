function timesDescending(top) {
  var i = top;
  var sum = 1;
  while (i <= top && i > 0) {
    sum = sum * i;
    console.log(i);
    i--;
  }
  console.log(sum);
  return sum; 
}

function addSumOfDigits(num) {
  var arr = num.toString()
        .replace(/e.*$/,'')
        .replace('.','')
        .split('');
  console.log('arr', arr);
  return arr.reduce(function(previousValue, currentValue){
    return parseFloat(previousValue, 10) + parseFloat(currentValue, 10);
  });
}

console.log(addSumOfDigits(timesDescending(100)));
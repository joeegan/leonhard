function sumOfRange(rangeBottom, rangeTop) {

   var sumOfProducts = 1,
       i = rangeBottom;

   while (i < rangeTop) {
      sumOfProducts += (sumOfProducts * i);
      i++;
   }

   return sumOfProducts;

}

function lowestProductEvenlyDivisibleByRange(rangeBottom, rangeTop) {

   var max = sumOfRange(rangeBottom, rangeTop),
       i = 0,
       answer, isGood, j;

   while (i < max) {
      isGood = true;
      i = i + rangeTop;

      for (j = rangeTop; j > 1; j--) {
         if (i % j !== 0) {
            isGood = false;
            break;
         }
      }
      if (isGood) {
         answer = i;
         break;
      }
   }

   return answer;

};

console.time('timer');
console.log(lowestProductEvenlyDivisibleByRange(1, 20));
console.timeEnd('timer');
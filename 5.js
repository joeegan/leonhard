function incrementalArrFromProductRange(rangeBottom, rangeTop) {

   var result = [],
       sumOfProducts = 1;
       i = rangeBottom - 1;
       rangeTop = rangeTop-1;

   while (i < rangeTop) {
      i++;
      sumOfProducts += (sumOfProducts * i);
   }

   for (var i = sumOfProducts; i > 0; i--) {
      result.push(i);
   }

   return result;

}

var answer = incrementalArrFromProductRange(1, 10).filter(function (element) {

   var isGood = true;

   for (var j = 10; j > 1; j--) {
      if (element % j !== 0) {
         isGood = false;
         break;
      }
   }

   return isGood;

});

console.log(answer[answer.length-1]);
var sqrt = Math.sqrt;

function findAllSquaresInRange(min, max) {
   var i;
   var arr = [];
   for (i = max; i > min; i--) {
      if (sqrt(i) % 1 == 0) {
         arr.push(i);
      }
   }
   return arr;
}

function findPythagoreanTriplet(arr, target) {
   var triplet = [],
       arrLength = arr.length,
       item, item2, item3,
       sqrt1, sqrt2, sqrt3,
       i, j, k;

   for(i = 0; i < arrLength; i++) {
      item = arr[i];
      for(j = 0; j < arrLength; j++) {
         item2 = arr[j];
         for(k = 0; k < arrLength; k++) {
            item3 = arr[k];
            if (item + item2 == item3) {
               sqrt1 = sqrt(item);
               sqrt2 = sqrt(item2);
               sqrt3 = sqrt(item3);
               if (sqrt1 + sqrt2 + sqrt3 == target && sqrt1 < sqrt2 < sqrt3) {
                  triplet.push(sqrt1);
                  triplet.push(sqrt2);
                  triplet.push(sqrt3);
               }
               break;
            }
         }
      }
   }
   return triplet;
}

console.time('time');
var squares = findAllSquaresInRange(20000,190000); // TODO remove hardcoded range
var triplet = findPythagoreanTriplet(squares, 1000);
var answer = triplet.filter(function(elem, pos) {
   return triplet.indexOf(elem) == pos;
}).sort(function(a,b){
   return a - b;
}).reduce(function(previousValue, currentValue){
   return previousValue * currentValue;
});
console.log(answer);
console.timeEnd('time');


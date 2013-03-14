var sieves = require('./sieves');

var primes = [];
var primeStore = [];
var target;
var triangular, i, j;
var counted = [];
init(500);

function init(target){
   primes = sieves.eratosthenesSieve(41256280);
   target = target;
   var i, j;
   for (i = 4125628; i < 41256280; i++) {
      triangular = 0;
      for (j = 1; j < i; j++) {
         triangular += j;
         if (counted.indexOf(triangular) == -1) {
            // console.log('triangular', triangular);
            if (calcDivisors(triangular) > target) {
               console.log('answer is: '+triangular);
               return;
            }
            counted.push(triangular);
         }
      }
   }
}

function calcDivisors(num) {
   answer = 0;
   primeStore = [];
   var result = calcExponentials(genDivisors(num));
   // console.log('result', result);
   return result;
}

function genDivisors(num) {
   var prime;
   var numDivided;
   var p;
   for (p = 0; p < primes.length; p++) {
      prime = primes[p];
      if (num % prime == 0) {
         primeStore.push(prime);
         numDivided = num / prime;
         // console.log('primeStore', primeStore);
         if (primes.indexOf(numDivided) != -1) {
            primeStore.push(numDivided);
            // console.log('prime divisors are', primeStore);
            return primeStore;
         } else {
            genDivisors(numDivided);
         }
         break;
      }
   }
   return primeStore;
}

function calcExponentials(arr){
   var a = arr.reduce(function (acc, curr) {
      if (typeof acc[curr] == 'undefined') {
         acc[curr] = 1;
      } else {
         acc[curr] += 1;
      }
      return acc;
   }, {});
   // console.log('a',a);
   var answer = 1;
   for (var k in a) {
      answer *= a[k]+1;
   }
   //console.log('expos', answer);
   return answer;
}

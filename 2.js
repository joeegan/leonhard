function fibonacci(limit, arr, prevPrevTerm, prevTerm) {
   var term = prevTerm + prevPrevTerm;
   if (term <= limit) 
      arr.push(term)
   else 
      return arr;
   return fibonacci(limit, arr, prevTerm, term);
}

function sumEvens(arr, result) {
   var result = result || 0;
   if (arr[0] % 2 == 0) 
      result += arr[0];
   if (arr.length == 1) 
      return result
   return sumEvens(arr.slice(1), result);
}

console.log(sumEvens(fibonacci(100, [1, 2], 1, 2)));
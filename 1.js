/*
 * @constructor
 * @param {Integer} limit 
*/
function RetrieveIntegersBelow(limit) {
  this.limit = limit;
  for (var i=1; i<limit; i++) {
    this.results.push(i);
  }
  // console.log('results', this.results)
  return this;
}

/*
 * @param {Array} multiples 
 */
RetrieveIntegersBelow.prototype.filterByMultiplesOf = function(multiples) {
  for (var i=0; i<multiples.length; i++) {
    this.filterByMultipleOf(multiples[i]);
  }
  // console.log('filteredResults', this.filteredResults);
  return this;
};

/*
 * @param {Integer} multiple to divide by 
 */
RetrieveIntegersBelow.prototype.filterByMultipleOf = function(multiple) {
  for (var i=1; i<this.results.length; i++) {
    if ((this.results[i] % multiple) === 0) {
      this.filteredResults.push(this.results[i]);
    }
  }
  // console.log('filteredResults', this.filteredResults, multiple);
  return this.filteredResults;
};

RetrieveIntegersBelow.prototype.sortByAscending = function() {
  this.sortedResults = this.filteredResults.sort(function(a, b) {
    return a - b;
  });
  // console.log('sortedResults', this.sortedResults);
  return this;
};

RetrieveIntegersBelow.prototype.filterDuplicates = function() {
  for (var i=0; i<this.sortedResults.length; i++) {
    if (this.sortedResults[i] != this.sortedResults[i-1]) {
      this.duplicateFreeResults.push(this.sortedResults[i]);
    }
  }
  // console.log('duplicateFreeResults', this.duplicateFreeResults);
  return this;
};

RetrieveIntegersBelow.prototype.combine = function() {
  this.combinedResults = this.duplicateFreeResults.reduce(function(previousValue, currentValue){
    return previousValue + currentValue;
  });
  // console.log('combinedResults', this.combinedResults);
  return this.combinedResults;
};

/* Populated inside the constructor, stores the consecutive integers */
RetrieveIntegersBelow.prototype.results = [];

/* Populated by filter methods, stores the filtered integers */
RetrieveIntegersBelow.prototype.filteredResults = [];

/* Populated by filter methods, stores the sorted integers */
RetrieveIntegersBelow.prototype.sortedResults = [];

/* Populated by filter methods, stores the integers, without duplicates  */
RetrieveIntegersBelow.prototype.duplicateFreeResults = [];

/* The Integer of which our results are constrained to  */
RetrieveIntegersBelow.prototype.limit = null;

/* initialise */
var answer = new RetrieveIntegersBelow(10)
                    .filterByMultiplesOf([3,5])
                    .sortByAscending()
                    .filterDuplicates()
                    .combine();

console.log(answer);
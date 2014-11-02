// Loads Loadash operator '_'
var _ = require("lodash"), exercises = {};

// 8 points
// this function takes a variable number of string arguments
// use the arguments keyword as well as the _.each() method from
// lodash to return the first string containing the substring
// "waldo"
exercises.wheresWaldo = function() {
	var found;
  _.each(arguments, function(val, index) {
      var searched = val.search("waldo");
      if (searched >= 0) {
        found = val;
        return false;
      }
	});

  if ( found === null ) {
    return "I didn\'t find Waldo in those strings?!?";
  } else {
    return found;
  }
};

// 8 points
// given an array of arrays (all holding numbers), return an
// array holding the largest number in each sub-array.
// use _.chain() and _.map() and _.max()

exercises.largestNums = function(arrayOfNumberArrays) {
	var bigNums = _.chain(arrayOfNumberArrays)
	.map(function(eachArray) {
		return _.max(eachArray);
	})
	.value();

	return bigNums;

  // TODO: implement me
};

// 8 points
// you are given an array of Date objects and two boundary dates
// use the lodash _.filter() method to return an array with all
// the objects from dates that fit within the given boundaries
exercises.filterDates = function(dates, lowerBound, upperBound) {
  var result = [];
  _.filter(dates, function(date) {
    if (date > lowerBound && date < upperBound) {
      result.push(date);
    }
  });
  return result;
};

// 16 points (including the test)
// make up your own exercise like those above. implement it and
// write a test for it in tests/functional.spec.js.
// for 4 extra credit points, use _.reduce()

exercises.addUpArray = function(array) {
	var sum = _.reduce(array, function(sum, num) {
    return sum + num;
  });
	return sum;
};

module.exports = exercises;

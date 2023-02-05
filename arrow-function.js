// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

// ES2015 version of the above function
const double = (arr) => arr.map((val) => val * 2);

// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

const squareAndFindEvens = (numbers) => {
	const squares = numbers.map((num) => num ** 2);
	const evens = squares.filter((num) => num % 2 === 0);

	return evens;
};

console.log(double([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(squareAndFindEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

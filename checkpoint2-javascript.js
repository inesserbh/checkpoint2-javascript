

// 1. Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 2. Count Characters
function countCharacters(str) {
  return str.length;
}

// 3. Capitalize Words
function capitalizeWords(sentence) {
  return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

// Array Functions

// 1. Find Maximum and Minimum
function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

// 2. Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// 3. Filter Array
function filterArray(arr, condition) {
  return arr.filter(condition);
}

// Mathematical Functions

// 1. Factorial
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// 2. Prime Number Check
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 3. Fibonacci Sequence
function fibonacciSequence(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}

// Examples of usage:

// String Manipulation Examples
console.log(reverseString("hello"));              // "olleh"
console.log(countCharacters("hello world"));      // 11
console.log(capitalizeWords("hello world"));      // "Hello World"

// Array Functions Examples
console.log(findMax([1, 5, 3, 9, 2]));            // 9
console.log(findMin([1, 5, 3, 9, 2]));            // 1
console.log(sumArray([1, 2, 3, 4, 5]));           // 15
console.log(filterArray([1, 2, 3, 4, 5], num => num > 2)); // [3, 4, 5]

// Mathematical Functions Examples
console.log(factorial(5));                        // 120
console.log(isPrime(7));                          // true
console.log(fibonacciSequence(7));                // [0, 1, 1, 2, 3, 5, 8]

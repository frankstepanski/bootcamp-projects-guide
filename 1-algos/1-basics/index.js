/*
Question #1:

Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/

/*
Question #2:

Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/

/*
Question #3:

Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/

/*
Question #4:

Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/

/*
Question #5:

Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally past to "add"
Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/

/*
Question #6

Create a function "changeCase" that takes in a letter as an argument, and returns the letter in the opposite case.
Examples:
changeCase('a') -> 'A'
changeCase('B') -> 'b'
*/

/*
Question #7:

Create a function "effectString" that takes in two arguments (a string and a callback function).
"effectString" should apply that callback function to each letter in the string and return out a new string.
*/

/*
Question #8:

Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) The returned function should have the following behavior:
  If the function is invoked with an argument, the checker callback function is invoked and its boolean result is returned.
  If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false.
  Example:
  const isOdd = num => num % 2 === 1
  const oddCounter = checkerLogger(isOdd);
  oddCounter(); ->  { true: 0, false: 0 }
  oddCounter(3); -> true
  oddCounter(2); ->  false
  oddCounter(); -> { true: 1, false: 1 }
*/

/*
Question #9 (recursion):

Create a function "countChar" that takes two arguments (an input string and a target string).
  "countChar" will return the number of times the target string is found in the input string.
  Example:
  countChar('hello world', 'o'); -> 2
  countChar('javascript', 'j'); -> 1
  Note: Do not use any native JS methods, or loops.
*/

/*
Question #10
Write a function called 'transpose' that accepts a two dimensional array and returns a
transposed version of that array.
  Example:
  const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
  console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
*/

/*
Question #11:

Create a function 'minAndMax' that takes an array of numbers and returns both the smallest and largest number in an array, in that order.
NOTE: do not use the native Math.min or Math.max methods. For example minAndMax([7, 68, 2, 19]) should return the array  [2, 68]
*/

/*
Question #12:

Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

/*
Question #13:

Create a function 'doubleChar' that takes a string as an argument and returns a string in which each character is repeated once.
For example, if we pass the string 'Hello World!!' to 'doubleChar' it should return the string 'HHeelllloo  WWoorrlldd!!'
*/

/*
Question #14:

Create a function 'containsJ' that takes a string as an argument
'containsJ' should return a boolean value based off of whether or not the string being passed to it contains the letter 'j' or 'J.
For example, if the input is 'Cat' then your function should return false, and if the input is 'Jaguar' it should return true.
*/

/*
Question #15:

Create a function 'screen' that takes in two arguments an array and a callback function that will be applied to every element in the array.
The callback function will return a boolean value. When 'screen' is called it will apply the callback function on every element in the array.
If the result of the callback function is true then that element in the array will be added to a new array. The 'screen' function will return that new array.
For example, if we were to call 'screen' and pass to it an array containing the elements 1, 2, 3, 4, 5, and 6 as the first argument and a callback function that tested if its argument was even for the second argument, then we should get the result [2, 4, 6] from our call to 'screen'
*/

/*
Question #16:

Create a function "countChars" that takes argument (a string).
"countChars" should return the number of characters in the string. You should not count whitespace as characters.

Create a function "doToEachElement" that takes two arguments (an array and a callback function).
"doToEachElement" should return a new array containing the returned values from running the callback function on each element in the array.

Check that your "doToEachElement" function is working properly by calling it with the array containing the strings "hello world", "I love programming", and "Twin Snakes are my favorite candy" and your "countChars" function.
*/

/*
Question #17 (recursion):

Create a function "sumAllElements" that takes in two arguments (an array of numbers and a initial value). "sumAllElements" will return the sum of the elements in the array starting at the initial value.
Example:
sumAllElements([1,2,3,4], 10) -> 20
Note: Do NOT use any native JS methods, or loops
*/

/*
Question #18:

Create a function "fastCache" that takes one argument (a function) and returns a function. When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
example:
SINGLE ARGUMENT CASE
const multiplyBy2 = num => num * 2;
const cachedMultiplyBy2 = fastCache(multiplyBy2);
cachedMultiplyBy2(100); // -> 200
cachedMultiplyBy2(150); // -> 300
cachedMultiplyBy2(100); // -> 200 // from the cache object
MULTIPLE ARGUMENTS CASE
const sumMultiplyBy2 = (num1, num2) => 2 * (num1 + num2);
const cachedSumMultiplyBy2 = fastCacheMult(sumMultiplyBy2);
cachedSumMultiplyBy2(5, 10); // -> 30
cachedSumMultiplyBy2(1, 2); // -> 6
cachedSumMultiplyBy2(5, 10); // -> 30 // from the cache object
*/

/*
Question #19:

Write a function 'anagrams' that produces all possible anagrams of a string and outputs them as an array.
Example:
console.log(anagrams('aabc')); -> [ 'aabc', 'aacb', 'abac', 'abca', 'acab', 'acba', 'baac', 'baca', 'bcaa', 'caab', 'caba', 'cbaa' ]
*/

/*
Question #20

Declare function "itemRetriever" that returns function that when called,  will return one of my favorite authors.
The function "itemRetriever" will take two argument (an array of objects and a string that will represent a key).
When the returned function is called it should return the next object in the array at the key that was passed to "itemRetriever".
example.
const favoriteAuthors = [
  { name: 'Earnest Hemingway' },
  { name: 'Agatha Christie' },
  { name: 'J.K. Rowling' },
  { name: 'Steven King' },
];
const nextAuthor = itemRetriever(favoriteAuthors, 'name');
nextAuthor() -> 'Earnest Hemingway'
nextAuthor() -> 'Agatha Christie'
*/

/*
Question #21:

What is the difference between a parameter and an argument?
Can you explain the difference between backet notation and dot notation?
What is a callback? What is a higher-order function?
What is hoisting?
Can you describe closure to me?
var vs let vs const.
What is the difference between a console log and a return statement?
Can you explain the main parts of a recursive function?
Tail call optimization?
What is the difference between map, forEach, and a regular loop?
What is the difference between arrow function and regular function declaration?
What are some examples of primitive and composite data types?
What is the difference between return/break/continue?
*/

##  What are algorithms?

Whether you are aware of it or not, you have been using algorithms your whole life. For example, in elementary school, you learned a series of steps for multiplying two numbers. You learned that if you follow those steps precisely, you will always get the correct result. That series of steps is an algorithm.

An algorithm is defined as a well-defined sequence of steps for solving a computational problem. Even though this definition is simple, it covers a few concepts that may be expanded.

First, break down the idea of a computational problem. A computational problem is a problem that a computer might be able to solve. For example, the problem of sorting a sequence of numbers in ascending order is a computational problem.

Problems must be well specified. That is, the statement of the problem must specify the inputs, outputs, and the relationship between the inputs and outputs. For example, the search problem may be defined as follows:

> Given a sequence of `n` numbers and a number `x` as input, output the index of the first occurrence of the number `x` in the sequence. Output `-1` if the number `x` is not in the sequence.

There may be more than one way to solve that problem. An algorithm, then, is any sequence of steps that, if followed precisely, will solve the problem.

Next, note that the definition above specifies that the sequence of steps must be well defined. In other words, the steps must be unambiguous and complete. Here, unambiguous means that the instruction for a particular step can only mean one thing. And complete means that no steps are left out.

### The linear search algorithm

Here is an example of an algorithm that solves the search problem defined above.

    function linearSearch(sequence, x) { 
         for (let i = 0; i < sequence.length; i++) {
            if (sequence[i] === x) {
               return i;
            }
         }  return -1;
    }
    
This algorithm is complete and unambiguous. The statement `let i=0` can only mean one thing: declare a variable named `i` and initialize it to the value `0`. Similarly, each statement has a precise meaning.

###  A note on notation

In the study of algorithms, the programming language does not matter. An algorithm may be implemented in any programming language. What  _is_  relevant is what steps are needed to complete the task.

## An efficiency example

### The problem

Given an integer `n`, find the sum of all integers from `1` to `n` inclusively.

### The first solution

To solve this problem, you could use a loop to count every integer from `1` to `n` and sum as you go. At the end of the loop, you will have the required sum.

Here is one way that the solution may be written:

    function sumIntegers(n) { 
        let sum = 0; 
        for (let i = 1; i <= n; i++) {
           sum = sum + i;
        }
        return sum;
    }
    
What can you say about the way that the length of time that it takes to run the function changes as the size of the input changes?
 
### Linear growth

You may have noticed that as the size of the input increases, the running time of the function increases correspondingly. Given this observation, you could extrapolate and guess the running time for even larger input sizes.

This is an important concept. Although it is useful to know the running time for a specific input size, it is actually more useful to have a formula that tells you how that running time changes as the input size changes.

![linear growth](https://github.com/frankstepanski/codingthebasics/blob/main/algo-basics/assets/intro1.png)


Given that, you can say that the function that was written has a  _linear growth rate_. That is, the length of the running time changes proportionally to the size of the input.

This finding should be easy to see. In the function, there is a loop that goes from  `1`  to  `n`. As  `n`  increases, the function has correspondingly more work to do.

### A second solution

Is it possible to develop an algorithm that performs better than this first solution? And what exactly is meant by _better_ here? In this case, better would mean a growth rate that is slower than the linear function. If there were another solution that had a running time that grew slower than the linear function as `n` increases, then you could say that you have a more efficient algorithm. That is, you can calculate larger values of `n` in less time.

One way that it might be done was devised by the famous mathematician  [Carl Friedrich Gauss](https://en.wikipedia.org/wiki/Carl_Friedrich_Gauss)  when he was seven years old.  Gauss is considered one of the greatest mathematicians of the age, and he basically invented algebra as it is known today.

Gauss came up with the formula  `n(n+1)/2`. It is easy to verify that this is correct. For example, when  `n=100`, the expression is evaluated as follows:

    100 * (100 + 1) / 2
    => 100 * 101 / 2
    => 10100 / 2
    => 5050
This means that you can write a function to implement this formula like this:

    function sumIntegers2(n) {
       return (n * (n + 1)) / 2;
    }

### Running time of the second solution
You should have noticed that the running time remains roughly the same, no matter how large `n` is. That is, the running time remains constant as `n` increases. If you plot this on a graph, it may look like this:

![constant growth](https://github.com/frankstepanski/codingthebasics/blob/main/algo-basics/assets/intro2.png)	

This time, the blue line shows the constant function. That is, the value does not change as the size of  `n`  changes. The red line is the growth rate of the function. Notice that even though there are slight variations, the function closely mirrors the constant function line.

Again, it is easy to explain why this is so for this second algorithm. No matter the value of  `n`, you simply perform one multiplication operation, one addition operation, and one division operation to calculate the result. The same amount of work is done regardless of the size of  `n`.

When the running time of a function doesn't change with changes to the input size, you can say that it has a  _constant growth rate_.

### Comparing the growth rates

Now that it is known that the first algorithm has a linear growth rate and the second has a constant growth rate, which would you say is the more efficient algorithm? Plotting a constant function and a linear function on the same graph depicts the difference.

![comparing growth rates	](https://github.com/frankstepanski/codingthebasics/blob/main/algo-basics/assets/intro3.png)	

In this graph, you can see that the linear function increases and the distance between the two lines grows as `n` increases. Therefore, a constant growth rate is more efficient than a linear growth rate.

## Common Functions

The functions commonly used in the analysis of algorithms are presented here from "best" to "worst."

### The constant function

    f(n) = c
Here, `c` is some fixed constant. That is, for all values of `n`, the function `f(n)` remains equal to `c`. The most fundamental constant function is as follows:

    f(n) = 1
This is typically the function used to denote an algorithm with a constant order of growth.

For example, any basic operation, like adding two numbers together or assigning a value to a variable, is done in a single step. Therefore, it is constant.

    function sumIntegers(n) {
       return (n * (n + 1)) / 2;
    }

This algorithm had an order of growth of `O(1)`. The growth rate on a graph like this:

![growth 0(1)](https://github.com/frankstepanski/codingthebasics/blob/main/algo-basics/assets/constant_graph.png)

The meaning of `O(1)` is that the actual growth rate of this algorithm will be similar to the line `f(n)=1` on the graph for all `n`.

### The logarithmic function

This growth rate, where the number of steps needed increases by 1 every time that the input size doubles, can be described by a _logarithmic function_. The logarithmic function is denoted as follows:

    f(n) = log n

Graphically, it looks like this:

![logarithmic graph](https://github.com/frankstepanski/codingthebasics/blob/main/algo-basics/assets/logarithmic_function.png)

The red constant line was left in the diagram for comparison.

As you can see, the logarithmic curve continues to increase, but the curve gets flatter and flatter without ever being totally flat.

Algorithms like a "guess the random number" game, which tend to split the problem in half at each iteration, generally have a logarithmic growth rate. 

### The linear function
The _linear function_ is denoted as follows:

    f(n) = n
This describes a growth rate that is proportional to the size of the input. That is, as the size of the data input to the problem increases, the number of steps correspondingly increases.

Generally, algorithms that involve a loop through each item in an array take linear time.

![linear graph comparison](https://github.com/frankstepanski/codingthebasics/blob/main/algo-basics/assets/linear_compare.png)	

### The log-linear function

The _log-linear function_ is denoted as follows:

    f(n) = n log n
This describes a growth rate that grows slightly faster than linear.

![log linear graph](https://github.com/frankstepanski/codingthebasics/blob/main/algo-basics/assets/log_linear-graph.png)

### The quadratic function

The _quadratic function_ is denoted as follows:

    f(n) = n2
This describes a growth rate that grows at the square of the size of the input. This is significantly faster than any of the other functions so far.

![quadratic growth](https://github.com/frankstepanski/codingthebasics/blob/main/algo-basics/assets/quadratic_growth.png)

Typically, algorithms with a nested loop will yield a growth rate of  `O(n2)`.

Here is an example: Suppose that you are given the prices for a particular stock each day for a number of days. You are allowed to make one purchase on any of the given days and then sell the stock on any subsequent day. Find the best day to buy and the best day to sell to maximize your profit.

The prices are in an array like this:

    const prices = [113, 126, 123, 98, 118, 115, 99, 76, 94, 114, 107, 119, 114, 92, 107, 103, 110,];
One option is to use a brute-force approach and compare the price on every day to every other day, like this:

    function maxSubArray(prices) {
      let bestBuy = -1;
      let bestSell = -1;
      let bestProfit = Number.NEGATIVE_INFINITY;
      for (let i = 0; i < prices.length - 1; i++) {
         for (let j = i + 1; j < prices.length; j++) {
            const profit = prices[j] - prices[i];
            if (profit > bestProfit) {
               bestBuy = i;
               bestSell = j;
               bestProfit = profit;
           }
        }
      } 
      return [bestBuy, bestSell];
    }
To analyze the efficiency of this algorithm, you have to count the steps the same way as was done previously. The outer loop is straightforward to count.

![quadratic flowchart](https://github.com/frankstepanski/codingthebasics/blob/main/algo-basics/assets/quadratic-flowchart.png)

The inner loop, depicted in blue on the diagram, isn't so clear. On each iteration of the outer loop, the inner loop runs a different number of times. How can you determine the actual running time of those steps?

In the first iteration of the outer loop, the inner loop runs from  `1`  to  `n`. That is, it runs  `n`  times. In the second iteration, it runs from  `2`  to  `n`, or  `n-1`  times. In the third, it runs from  `3`  to  `n`, or  `n-2`  times. If the array was of length  `5`, for example, the inner loop would run  `5+4+3+2+1`  times.

Luckily, you already saw that the sum of all integers from  `1`  to  `n`  is given by the formula  `n(n+1)/2`. Therefore, you can say that each statement in the inner loop runs  `n(n+1)/2`  times.

So the order of growth of the running time of this algorithm is `O(n2)`.

## Space Complexity

_Space complexity_  is a measure of the amount of working storage that an algorithm needs. It answers the following question: in the worst case, how much memory is needed at any point in the algorithm?

Space complexity includes both auxiliary space and the space used by the input.  _Auxiliary space_  is the temporary or extra space used by the algorithm while it is being executed.

As with time complexity, you are mostly concerned with how the space needs grow, in big O terms, as the size of the input grows. Below are a few examples of expressing space complexity using big O notation, starting from slowest space growth (best) to fastest (worst):

-   `O(1)`:  **Constant complexity**  means that the algorithm takes the same amount of space regardless of the input size.
-   `O(log n)`:  **Logarithmic complexity**  means that the algorithm takes space proportional to the log of the input size.
-   `O(n)`:  **Linear complexity**  means that the algorithm takes space directly proportional to the input size.
-   `O(n log n)`  **Log-linear or quasilinear complexity**  (also called  _linearithmic_) means that the space complexity grows proportionally to the input size and a logarithmic factor.
-   `O(n2)`:  **Quadratic complexity**  means that the space complexity grows proportionally to the square of the input size.

### Constant space (`O(1)`)

    function sum(left, right) {
       return left + right;
    }
In this particular function, three variables are used and allocated in memory:

-   The first parameter,  `left`
-   The second parameter,  `right`
-   The return value

In JavaScript, a single number occupies eight bytes of memory. In the above function, there are three variables assumed to be numbers. Therefore, this algorithm always takes 24 bytes of memory to complete (3 times 8 bytes). As a result, the space complexity is  _constant_, so it can be expressed in big O notation as  `O(1)`.

### Logarithmic space (`O(log n)`)

_Logarithmic space complexity_  (`O(log n)`) is the next best thing after constant space. Although logarithmic space complexity algorithms do require more space with larger inputs, space usage increases slowly. For example, imagine that you have a function,  `quickSort()`, which takes 128 bytes to process an input of size 10. When you increase the input by 10 times, to 100, the space required only grows to 256 bytes. When you increase the input size to 1,000, the space only grows to 384 bytes.

It is also characteristic of logarithmic algorithms that they cut the problem size in half each round through.
### Linear space (`O(n)`)

Algorithms with  _linear space complexity_  (`O(n)`) use an amount of space directly proportional to the size of the input. Every time that you double the size of the input, the algorithms will require twice as much memory.

For example, look at the space complexity of a function that sums all of the elements in an array:

    function sum(numbers) {
       let total = 0;
       for (const number of numbers) {
          total += number;
       }
       return total;
    }
Again, list all variables present in the above code:

-   `numbers`: The space taken by the array is equal to  `8n`  bytes, where  `n`  is the length of the array
-   `number`: An 8-byte number
-   `total`: An 8-byte number

The total space needed for this algorithm is `8n+8+8` bytes. The highest order of `n` in this equation is just `n`. Thus, the space complexity of the above is `O(n)`.

### Space-time complexity tradeoff

An algorithm's efficiency is a combination of its time and space complexity. So an efficient algorithm is one that is fast and that takes the least amount of memory possible.

Space and time complexity are often linked. Usually, increasing speed leads to greater memory consumption, and vice versa. However, this isn't always the case; sometimes, space and time complexity aren't correlated. For example, bubble sort is a slow algorithm that occupies minimal space. 
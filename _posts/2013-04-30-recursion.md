---
layout: post
title: "Recursion"
description: "Introduction of how to understand and write recursion"
category: Algorithm 
tags: [Recursion]
---
{% include JB/setup %}

Recursion is one improtant concept in computer science. However, it's not easy to understand it and use it freely. So, let's make a clear mind on Recursion.


* [What's recursion?](#whats_recursion)  
* [More practice](#more_practice)  
* [Philosophy of recursion](#philosophy_of_recursion)  
* [Two elements in recursion](#two_elements_in_recursion)  
* [Recursive procedures](recursive_procedures)  
* [How to write recursion?](how_to_write_recursion)  


###What's Recursion?
####A function calls itself.
Example:

	void recurse(){
	  recurse();  //Function calls itself
	}
	
	int main(){
	  recurse();  //Fire off the recursion
	}
	
The above program will not run forever. The computer keeps a function calls on a stack and once too many are called without ending, the stack will crash.

Here is another example, which is the russian doll.  
![russian doll](/assets/images/russian_doll.jpg)

	void doll(int size){
	  if(size == 0){
	    return;
	  }
	  doll(size - 1);
	}
	
	int main(){
	  doll(10);
	}
	
The doll function has an end condition, when the condition is satisfied, the recursion will end. However, if the input is 0 or minus, there will be no recursion.

---
###More practice
####print out `123456789987654321`
One solution is: 

	void printnum(int num){
	  cout << num;
	  if (num < 9){
		printnum(num+1);
	  }
	  cout << num;
	}
	
####print out `12345678987654321`
One solution is:

	void printnum(int num){
	  cout << num;
	  if (num < 9){
	    printnum(num+1);
	    cout << num;
	  }
	}
	
####factorial
Code:

	int factorial(int num){
	  if (num == 1){
	    return 1;
	  }
	  return num * factorial(num - 1);
	}

---
###philosophy of recursion
####Divide and conquer
Divide a problem into sub-problems of the **same type as the original**, solve the sub-problems, and combine the results.

---
###Two elements in recursion

####1, Base cases, also called terminating cases
This is the cases which break the chain of recursion.
####2, Recursive cases
Where the recursion happen, the program recurs(call itself)

**Example:**

The above factorial, the base case is 0! = 1, and the recursive case is n > 0, n! = n(n-1)!.
the base case:

	if (num == 1){      //This is the base case
	  return 1;
	}
the recursive case:

	return num * factorial(num - 1);//This is the recursive, calling itself
	
So, it's natural to think of the base case and recursive case as using recursion.

---
###Recursive procedures
Take the factorial function for example:

assume the input number is `4`, then:

	f(4) = 4 * f(3)
	     = 4 * 3 * f(2)
	     = 4 * 3 * 2 * f(1)
	     = 4 * 3 * 2 * 1
	     = 4 * 3 * 2
	     = 4 * 6
	     = 24
	     
---
###How to write recursion?
**First, figure the recursion rule, that is the recursion case.**

  * Define the problem, write it down  
  * Find the sub-problem  
  * Decide the same logic between the problem and the sub-problem  

**Second, find the recursion base rule, the terminating rule.**

I divide the recursion into two phase. First one is the traverse, which means go through all the sub-problems. Second is the operation, which is the same between sub-problems. In short, to solve a problem using recursion, I need to traverse all the sub-problems, and for each sub-problem, do the same operation.

Let's take the previous `123456789987654321` and `12345678987654321` for an example:

For `123456789987654321`:

	void printnum(int num){
	  cout << num;                //operation
	  if (num < 9){               //base rule
		printnum(num+1);          //recursion call
	  }
	  cout << num;                //operation
	}

For `12345678987654321`:

	void printnum(int num){
	  cout << num;                //operation
	  if (num < 9){               //base rule
	    printnum(num+1);          //recursion call
	    cout << num;              //operation
	  }
	}

Including base rule and recursion, we need to think where the operation should happen. We can define a traverse phase and a back-traverse phase, like:

	f(4) = 4 * f(3)
	     = 4 * 3 * f(2)
	     = 4 * 3 * 2 * f(1)      //traverse phase end
	     = 4 * 3 * 2 * 1         //base rule
	     = 4 * 3 * 2             //back traverse phase start
	     = 4 * 6
	     = 24
So, we can perform the operation in traverse phase, base rule or back traverse phase.

Another we need to think about is **data**. In the factorial example, we use return value to save the data and do the operation. We also could use the parameter to save the data.

In conclusion, things we need to care are: **base rule**, **recursion call**, **operation**, **data**.

Let's take an example:

[Tower of Hanoi](http://en.wikipedia.org/wiki/Tower_of_Hanoi)

![Hanoi Tower](/assets/images/Tower_of_Hanoi.jpeg)



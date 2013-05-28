---
layout: post
title: "JavaScript变量作用域之殇"
description: "如果你爱上了JavaScript这门诡异的语言，那我相信你一定在与其恋爱期间饱受了其变量作用域所引发的一系列问题的不少摧残。对于任何一门编程语言，变量作用域都是一个关切的话题。正如David Herman在《Effective JavaScript》中的形象比喻..."
category: 编程语言
tags: [JavaScript, Variable Scope]
---
{% include JB/setup %}

如果你爱上了JavaScript这门诡异的语言，那我相信你一定在与其恋爱期间饱受了其变量作用域所引发的一系列问题的不少摧残。对于任何一门编程语言，变量作用域都是一个关切的话题。正如[David Herman](http://calculist.org/)在《Effective JavaScript》中的形象比喻，“Scope is like oxygen to a programmer”。当你“呼吸顺畅”的时候，你并不会意识到变量作用域的重要性；然而当你“呼吸受阻”的时候，你便会体会到它的轻重高低。

#全局作用域
绝大多数编程语言都有全局作用域的概念。全局作用域是指常量、变量、函数等对象的作用范围在整个应用程序中都是可见的。对于不同的编程语言，全局作用域承担着不同的角色，也因此遭受了不少的骂名。但对于JavaScript，我并不认为它一无是处。我们要做的便是理解它并正确地使用它。

考虑下这样一个场景。Bill和Peter在同一家公司工作，他们的薪水由两部分组成：a和b。以下是表示他们薪水组成的数据结构。
{% highlight javascript %}
var emps = [{name:"Bill", parts:[{name:"a", salary:3000}, {name:"b", salary:2000}]}, {name:"Peter", parts:[{name:"a", salary:2500}, {name:"b", salary:2000}]}];
{% endhighlight %}
现在，我们希望能计算出Bill和Peter的平均薪水。以下是一段可能的程序片段。
{% highlight javascript %}
var i, n, sum;
function salary(emp) {
  sum = 0; 
  for (i = 0, n = emp.parts.length; i < n; i++) {
    sum += emp.parts[i].salary;
  }
  return sum;
}
function averageSalary(emps) {
  sum = 0;  
  for (i = 0, n = emps.length; i < n; i++) {
	sum += salary(emps[i]);
  }
  return sum / n;
}
averageSalary(emps);
{% endhighlight %}

输出的结果并不是你口算的4750，而是2500。这是因为变量i、n和sum都是全局变量，在执行salary(emps[0])之后i的值变为了2，再回到averageSalary函数的循环体中时emps数组已然越界，最终sum的值只计算了emps数组中的第一个元素。

如果这样的全局作用域问题并不会困扰你，那下面的问题似乎应当引起你的一些警觉。因为与此相比，它有点意想不到。
{% highlight javascript %}
function swap(a, i, j) {
  temp = a[i]; // global
  a[i] = a[j];
  a[j] = temp;
}
{% endhighlight %}
问题并不是出在交换数组元素上，而是我们无意间创建了一个全局的变量temp。这要完全归功于JavaScript的语言规范——JavaScript会将未使用var声明的变量视为全局变量。庆幸的是，我们可以借助于类似Lint这样的代码检测工具帮我们尽早地发现这类问题。

虽然全局变量有很多问题，然而它在支撑JavaScript模块之间数据共享、协同合作方面确实承担了重要的角色。此外，程序员在某些不支持ECMAScript 5的环境中利用其特性检查的功能来填补一些ES5特有的特性确实受益良多。
{% highlight javascript %}
if (!this.JSON) {
  this.JSON = {
	parse: ...,
	stringify: ...
  };
}
{% endhighlight %}
#词法作用域和动态作用域

在程序设计语言中，变量可分为自由变量与约束变量两种。简单来说，局部变量和参数都被认为是约束变量；而不是约束变量的则是自由变量。 在冯·诺依曼计算机体系结构的内存中，变量的属性可以视为一个六元组：（名字，地址，值，类型，生命期，作用域）。地址属性具有明显的冯·诺依曼体系结构的色彩，代表变量所关联的存储器地址。类型规定了变量的取值范围和可能的操作。生命期表示变量与某个存储区地址绑定的过程。根据生命期的不同，变量可以被分为四类：静态、栈动态、显式堆动态和隐式堆动态。作用域表征变量在语句中的可见范围，分为词法作用域和动态作用域两种。

在词法作用域的环境中，变量的作用域与其在代码中所处的位置有关。由于代码可以静态决定（运行前就可以决定），所以变量的作用域也可以被静态决定，因此也将该作用域称为静态作用域。在动态作用域的环境中，变量的作用域与代码的执行顺序有关。下面这段代码的输出会是什么？
{% highlight javascript %}
x=1
function g () {
  echo $x ;
  x=2 ;
}
function f () {
  local x=3 ;
  g ;
}
f
echo $x
{% endhighlight %}
如果你的回答是1, 2或3, 1都没有错，因为这取决于该段代码所处的环境。如果处于词法作用域中，答案便是1, 2；如果处于动态作用域中，答案便是3, 1。

词法作用域允许程序员根据简单的名称替换就能推导出对象引用，例如常量、参数、函数等。这使得程序员在编写模块化的代码是多么的得心应手。同时，这可能也是动态作用域令人感觉到晦涩的原因之一。词法作用域最早可以追溯到ALGOL语言。尽管最早的Lisp解释器和早期的Lisp变种都采用动态作用域，但随后的动态作用域语言都支持了词法作用域。Common Lisp和Perl的语言演化就是最好的证明。JavaScript和C都是词法作用域语言。不过值得一提的是，不像JavaScript，深受ALGOL语言影响的C语言并不支持嵌套函数。这对后来的C族语言影响深远。除了晦涩难懂之外，现代程序设计语言很少支持动态作用域的原因是动态作用域使得引用透明的所有好处荡然无存。

#臭名昭著的with语句

如果你还在使用类似下面的代码为with语句找借口，那这正好是放弃它的真正原因。
{% highlight javascript %}
function status(info) {  
  var widget = new Widget();
  with (widget) {
    setFontSize(13);  
	setText("Status: " + info);
	show();
  }
}
{% endhighlight %}
JavaScript会将with语句中的对象插入到词法作用域的链表头。这将使得status函数非常脆弱。例如，
{% highlight javascript %}
status("connecting");
Widget.prototype.info = "[[widget info]]";
status("connected");
{% endhighlight %}
第二次status函数调用并不会得到预期的结果“Status:connected”而是“Status:[[widget info]]”。这是因为在第二次status函数调用之前，我们修改了widget的原型对象（增加了一个info属性）。这将导致status函数的参数info会被处于词法作用域链表头的widget对象的原型对象中的info属性所屏蔽。除此之外，with语句还会导致性能问题。这与在采用链地址法解决散列冲突的散列表中查找关键字是异曲同工的。下面是修正的代码。
{% highlight javascript %}
function status(info) {  
  var w = new Widget(); 
  w.setFontSize(13);  
  w.setText("Status: " + info);
  w.show();
}
{% endhighlight %}
#变量声明提升（hoisting）

JavaScript支持词法作用域，但并不支持块级作用域，即变量定义的作用域并不是离其最近的封闭语句或代码块，而是包含它们的函数。下面的代码片段诠释了这一特性。
{% highlight javascript %}
var emps = [{name:"Bill", salary: 5000}, {name:"Peter", salary: 3000}];
var ben = {name:"ben", salary: 6000}; 

function isHighestSalary(emp, others) {
   var highest = 0; 
  for (var i = 0, n = others.length; i < n; i++) {
	var emp = others[i]; 
	if (emp.salary > highest) {
	  highest = emp.salary;
	}
  }
  return emp.salary > highest;
}
isHighestSalary(ben, emps);
{% endhighlight %}
该代码段在for循环体内声明了一个局部变量emp。但是由于JavaScript中的变量是函数级作用域，而不是块级作用域，所以在内部声明的emp变量简单地重声明了一个已经在作用域内的变量(即参数emp)。该循环的每次迭代都会重写这一变量。因此，return语句将emp视为others的最后一个元素，而不是此函数最初的emp参数。

可以将JavaScript的变量声明行为看作由两部分组成，即声明和赋值。JavaScript隐式地提升(hoists)声明部分到封闭函数的顶部，而将赋值留在原地。

#闭包

可能有这样一个需求，程序需要计算一个数的平方。你可能定义下面这样一个函数。
{% highlight javascript %}
function square(num) {
  return Math.pow(num, 2);
}
{% endhighlight %}
程序又需要计算一个数的立方。你可能又会定义下面这样一个函数。
{% highlight javascript %}
function cube(num) {
  return Math.pow(num, 3);
}
{% endhighlight %}
当你还在考虑是否为计算一个数的四次方创建一个函数的时候，可能有人在草稿纸上写了这样的代码。
{% highlight javascript %}
function pow(power) {
  return function(num) {
 	return Math.pow(num, power);
  };
}
{% endhighlight %}
是的，这就是闭包。函数是一等公平，可以作为一个函数的返回对象。你可以像下面的代码一样计算一个数的平方和立方。
{% highlight javascript %}
var square = pow(2);
var cube = pow(3);
console.info(square(3));
console.info(cube(3));
{% endhighlight %}
掌握JavaScript的闭包，除了理解这样一个事实（即使外部函数已经返回，当前函数仍然可以引用在外部函数所定义的变量）外，还需要理解闭包存储的是外部变量的引用。我们来看这样一个例子。
{% highlight javascript %}
function doubleArray(a) {
  var result = [];
  for (var i = 0, n = a.length; i < n; i++) {
	(function(j) {
	  result[i] = function() { 
	    return a[j] * 2; 
	  }; 
	})(i);
  }
  return result;
}
doubleArray([1, 2, 3, 4, 5])[0]();
{% endhighlight %}
程序期望输出的结果是2，即给定数组第一个元素的2倍。但结果并不是这样。因为result数组中存储的所有闭包引用的都是同一个引用i。很容易想到的一个解决方法便是使用立即调用的函数表达式来提供类似块作用域的功能。
{% highlight javascript %}
function doubleArray(a) {
  var result = [];
  for (var i = 0, n = a.length; i < n; i++) {
	(function(j) { result[i] = function() { return a[j] * 2; }; })(i);
  }
  return result;
}
{% endhighlight %}
#ES6块作用域

在年底即将发布的ES6标准中将会发布一个新的关键字let。它在语法上与var相似，但不同的是，它将在当前块中定义变量。
{% highlight javascript %}
function log(msg) { ... }
function f(x) {
  if (...) {
	let { log, sin, cos } = Math;
	... log(x) ...
  }
  log("done computing f()");
}
{% endhighlight %}
上面闭包引用外部变量问题，也可以通过它解决。
{% highlight javascript %}
for (i = 0; i < n; i++) {
  let x = a[i];
  element.onclick = function() {
	... x ...
  };
}
{% endhighlight %}
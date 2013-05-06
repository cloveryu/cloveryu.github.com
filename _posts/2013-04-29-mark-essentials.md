---
layout: post
title: "Markdown Essentials"
description: "The is the markdown cookbook"
category: cookbook
tags: [markdown]
---
{% include JB/setup %}


This is a cookbook for markdown syntax. What is a cookbook? A cookbook is the recipe when you want to cook something. Kinds like a dictionary.

Here is a great Chinese page on markdown:  [markdown syntax Chinese](http://wowubuntu.com/markdown/). 
An English one is: [markdown syntax English](http://daringfireball.net/projects/markdown/syntax).

Let's Cook!
===========
<br />
![wine](/assets/images/wine.jpg)
<br />

* [How can I write a title?](#1_how_can_i_write_a_title)
* [How to make a paragraph or line break?](#2_how_to_make_a_paragraph_or_line_break)
* [How to display the original format(like code)?](#3_how_to_display_the_original_formatlike_code)
* [How can I insert a link?](#4_how_can_i_insert_a_link)
* [How to emphasis something?](#5_how_to_emphasis_something)
* [How to insert a code piece in a line?](#6_how_to_insert_a_code_piece_in_a_line)
* [How to insert a horizontal rules?](#7_how_to_insert_a_horizontal_rules)
* [How to escape the special characters?](#8_how_to_escape_the_special_characters)
* [How to write a list?](#9_how_to_write_a_list)

###1, How can I write a title?
####You can use multiple "="(highest level title) and "-"(secondary level).
example:

	This is the highest level title
	===============================
	This is the secondary level title
	-------------------------------
You can use as many "=" or "-" as you want.

The effect is:

"This is the highest level title"
===============================
"This is the secondary level title"
-------------------------------
  
<br />
####Another way to obtain title is to use multiple hashes(#)，different number of hashes renders different levels
We have six levels using "#":

	# this is H1
	## this is H2
	### this is H3
	#### this is H4
	##### this is H5
	###### this is H6
	
The effect is:

# this is H1
## this is H2
### this is H3
#### this is H4
##### this is H5
###### this is H6
	
<br />
###2, How to make a paragraph or line break?
####Type a blank one or more blank lines.
A blank line is any line that looks like a blank line -- a line containing nothing but spaces or tabs is considered blank.  

Example:

	
	The first paragraph.
	(one or more blank lines)
	
	The second paragraph.
	
####Another way is to insert a "br" break tag, which needs to end a line  with two or more spaces and type return.  
Example:

	Please type two or more spaces on the line end.(space)(space)(return)

<br />
###3, How to display the original format(like code)?
####You can use code block, which begins with 4 spaces or one tab

Example:

	(space)(space)(space)(space)This is a code block
	(tab)This is also a code block
	
The effect is:

    This is a code block
	This is also a code block

You can use code block to display any unformatted content. Like some contents contain "#", html tags, codes, etc.

<br />
###4, How can I insert a link?
####Need to use square brackets for the link text and followed parentheses for the url

Example:

	Welcome to [koly's blog](http://koly23.github.io/).
	
The effect is:

Welcome to [koly's blog](http://koly23.github.io/).

####Another way is wrap the url with "<>"
Example:

	<htp://koly23.github.io>
	
The effect is:

<http://koly23.github.io>
	
<br />

####For inner link, user`[](#id)`
Example:

	[goto 7](#7_how_to_insert_a_horizontal_rules)
	
This will link to the "7, How to insert a horizontal rules?"

Effect:  
[goto 7](#7_how_to_insert_a_horizontal_rules)

When a heading is created, an id will be created automatically. All the characters in the id is lowercase, and spaces are converted to underscore. For other rules, may **check the generated html**.

###5, How to emphasis something?
####You can use either a pair of single(double) "\*" or "\_".


Example:

	*a pair of single asterisks*
	_a pair of single underscores_
	**a pair of double asterisks**
	__a pair of double underscores__
	
The effect of the above content is:

*a pair of single asterisks*  
_a pair of single underscores_  
**a pair of double asterisks**  
__a pair of double underscores__  

single produces `<em>` and double produces `<strong>` in html.

<br />
###6, How to insert a code piece in a line?
####Wrap the piece with backtick quotes(\`)
Example:

	Use the `print()` function.
	
The effect is:

Use the `print()` function.

<br />
###7, How to insert a horizontal rules?
####Place three or more hyphens, asterisks, or underscores on a line by themselves.

Example:  
	***  
	---  
	___  

The effect is:

***
---
___

<br />
###8, How to insert an image?
####Like the link, use "\!\[image text]\(image link)"

Example:

	![Alt text](/path/to/img.jpg)

One example may be:

![cat](/assets/images/cat.jpg)

<br />
###9, How to escape the special characters?
####use backslash

Example:

	\*literal asterisks\*
The effect is:

\*literal asterisks\*

####Markdown provides backslash escapes for the following characters:
	\  backslash
	`  backtick
	*  asterisk
	_  underscore
	{} curly braces
	[] square brackets
	() parentheses
	#  hash mark
	+  plus sign
	-  minus sign (hyphen)
	.  dot
	!  exclamation mark


<br />
###10, How to write a list?
####For unordered lists, use asterisks, pluses, or hyphens

Example:

	* Red
	* Green
	* Blue
is equivalent to:

	+ Red
	+ Green
	+ Blue
and

	- Red
	- Green
	- Blue

**One note is you need to type a space before the text.**
	
The effect is:

  *  Red  
  *  Green  
  *  Blue  

####For ordered list, use numbers followed by periods:
Example:

	1. Bird
	2. Mchale
	3. Parish
The effect is:

  1. Bird  
  2. Mchale  
  3. Parish  

	


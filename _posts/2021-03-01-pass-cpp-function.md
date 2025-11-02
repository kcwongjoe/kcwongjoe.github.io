---
layout: post
title: Passing a function as a parameter in c++
date: 2021-03-01 00:00:00
description: Passing a function as a parameter in c++
tags: programming cpp lambda
categories: programming cpp
---

There are at least three methods to pass a function argument in c++. Before we start, let us review the concept of the lambda expression.

# Lambda expression

Lambda expression is an unnamed function that can be passed as a variable. Here is an example of a function in general form and lambda expression:

<script src="https://gist.github.com/kcwongjoe/3dceeb41975bebb0010a56bfae23cf3a.js"></script>

It is composited by [] **capture list**, () **argument list** and {} **function body**. Here is another example of a lambda expression:

<script src="https://gist.github.com/kcwongjoe/47eeb923653deeccbc869c2d16c45e03.js"></script>

# Passing function as a parameter

There are three ways to pass a function as a parameter:

1. Function Pointer
2. Declare by std::function
3. Function template

#### Method 1: Function Pointer

Con: Can not pass the local variable to the lambda function

<script src="https://gist.github.com/kcwongjoe/32c682e535b35787743c166fad1944de.js"></script>

```c++
void (*Func)(bool, int);
void is the return type which means nothing return.
(*Func) is the funciton pointer name.
(bool, int) is the arguments type.
```

#### Method 2: Declare by std::function

Pro: Valid to pass the local variable to the lambda function

Con: It may cause a performance drop but is not significant.

<script src="https://gist.github.com/kcwongjoe/2a5c1b3e18257084478898cadbb92130.js"></script>

Bonus: std::bind can be used if we would like to pass a function from one object to another object in the std::function parameter.

<script src="https://gist.github.com/kcwongjoe/0c4550ddc0aa6dd8fb9b43946d19ecc2.js"></script>

```c++
std::bind(&I_have_a_usefull_function::func, true, std::placeholders::_1)
The first parameter "&I_have_a_usefull_function::func" is the function pointer you want to pass.
Other parameters are the argument pass to the funciton pointer. In this example, "this" is passed to inside the function body. In this example, the first argument is fixed as true. The second argument and third are set as placeholders 1 and 2 which can be input later.
```

#### Method 3: Function template

Pro:
1. Valid to pass the local variable in the lambda function.
2. No performance drop

Con:

1. Template function must be written in the header file.
2. Increase the compile time

<script src="https://gist.github.com/kcwongjoe/68221bde5b3c2ac6429e14a5f33dc8c3.js"></script>

## References

[https://blog.demofox.org/2015/02/25/avoiding-the-performance-hazzards-of-stdfunction/](https://blog.demofox.org/2015/02/25/avoiding-the-performance-hazzards-of-stdfunction/)
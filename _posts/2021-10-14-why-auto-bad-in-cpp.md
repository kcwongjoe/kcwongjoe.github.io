---
layout: post
title: Why auto is bad in c++
date: 2021-10-14 00:00:00
description: Why auto is bad in c++
tags: programming cpp
categories: programming cpp
---

> When **auto** keyword is available in c++ 11, it becomes a modern c++ standard. Developer feels elegant to use it, but this elegant keyword is risky to your program.

When we use **auto**, that means we are not taking control of the variable type. The Right Hand Side (RHS) controls it.

<script src="https://gist.github.com/kcwongjoe/9c84196870b61036168fa4ab115b422d.js"></script>

The type of `sizeOfVar` is controlled by the `sizeof()` and the return type of `sizeof()` is dependent on the compiler. sizeOfVar may be **unsigned long** or **unsigned long long** and you have no idea on your code.

<hr>

The most common way of using auto keyword is in the for loop. We use auto (4 characters) to replace int (3 characters).

<script src="https://gist.github.com/kcwongjoe/fe946450b387268cc39492ee3c709687.js"></script>

The above code is fine. But if we reverse the iteration, the program will crash.

<script src="https://gist.github.com/kcwongjoe/e8493fdefcad707a20d90f02063c3249.js"></script>

`size()` returns a size_t type (**unsigned int**) which is never below zero. And so

> (unsigned int) 0–1 = 4294967295

The **i >= 0** condition will always be satisfied and the program will throw an out of range error in line 3. **auto** should be used very carefully. However, if we know it is an **int** type, why should we type one more character and get ourselves uncomfortable.

<hr>

However, **auto** sometimes is useful if the type name is significantly long, for instance:

```cpp
std::chrono::system_clock::time_point tim = getTime();
```

Even through we can see the type name on your code, you still have no clue what it is, right?

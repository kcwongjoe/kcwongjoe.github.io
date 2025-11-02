---
layout: post
title: How to debug local variable and lambda on c++ release build
date: 2022-07-21 00:00:00
description:
tags: programming cpp debug
categories: programming cpp
---

The solution is to turn the optimization off on your scripts using

```cpp
#pragma optimize("", off)
```

```cpp
#pragma optimize("", off)
bool a = true; // <-- This can be debugged in a release
#pragma optimize("", on)
bool b = false; // <-- This can't be debugged in a release
```
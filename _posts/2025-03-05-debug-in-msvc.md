---
layout: post
title: How to debug MSVC in release mode
date: 2025-03-05 00:00:00
description:
tags: programming cpp debug
categories: programming cpp
---

# Using DebugView

Step 1: Download DebugView: [DebugView](https://learn.microsoft.com/en-us/sysinternals/downloads/)

Step 2: Open DebugView and set the filter, for example:

<div class="row mt-3">
    {% include figure.liquid path="assets/img/blog/2025-03-05-debug-view/debugview_filter.png" class="img-fluid z-depth-1" zoomable=true %}
</div>

Step 3: Select the "Capture" Menu and try to enable all items except the last one for “Log Boot”

# Change in the code

Using the OutputDebugString(). For example:

```cpp

int testing_value = 5;

std::wostringstream ss;
ss << L"Joe: Testing Value" << testing_value << "." << std::endl;
OutputDebugString(ss.str().c_str());
```

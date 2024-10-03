---
layout: post
title: Deep Copy/Shadow Copy an Object in Java
date: 2021-05-12 00:00:00
description:
tags: programming java notes
categories: programming java notes
---

#### Method 1: Implement Cloneable

<script src="https://gist.github.com/kcwongjoe/22d78cd46465189d8446317c4d1d1600.js"></script>

#### Method 2: Creating a Copy constructor or copy factory

<script src="https://gist.github.com/kcwongjoe/c6b123697d40dcfb3d78ea09d4eb6d1e.js"></script>

<script src="https://gist.github.com/kcwongjoe/000662e99a4adad964410de7ac6c231a.js"></script>

#### Method 3: Using Serializable

This method copy all of the object and instance inside the class. But I personally not suggest using this method because of the performance concerns. This method converts the object into a ByteArray and then convert it back into a new object.

<script src="https://gist.github.com/kcwongjoe/08ce470fd14b43d082ff25e843cd8b28.js"></script>

We can also use apache utils to implement it:

<script src="https://gist.github.com/kcwongjoe/433f25733116e31e17316e789637905a.js"></script>

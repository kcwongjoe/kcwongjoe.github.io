---
layout: post
title: How to change the line endings in Linux
date: 2024-10-02 00:00:00
description:
tags: linux
categories: linux
---

# Check line endings 

Using file command
```shell
file abc.txt
```

Result:

- Unix:

```shell
abc.txt: ASCII text
```

- DOS:

```shell
abc.txt: ASCII text, with CRLF line terminators
```

# Change line endings

Using dos2unix command
```shell
dos2unix abc.txt
```

Using unix2dos command
```shell
unix2dos abc.txt
```

---
layout: post
title: How to find the vc runtime version from an exe
date: 2024-10-02 00:00:00
description:
tags: programming cpp debug
categories: programming cpp
---

# Using Dumpbin

Microsoft provided a build tool called `dumpbin` to display information from exe.

Step 1: Open the **Developer Command Prompt for VS 20XX**

Step 2: Run the following command

```shell
dumpbin /dependents <exe file>
```

Step 3: Looking for the MSVCPxxx.dll or VCRUNTIMExxx.dll. The xxx is the version number of the vc runtime.

- 70:  Visual Studio 2003
- 80:  Visual Studio 2005
- 100: Visual Studio 2010
- 120: Visual Studio 2013
- 140: Visual Studio 2015
- 141: Visual Studio 2017
- 142: Visual Studio 2019
- 143: Visual Studio 2022

# Python script to check the vc runtime version in entire folder

[https://github.com/kcwongjoe/check_msvc_runtime_version](https://github.com/kcwongjoe/check_msvc_runtime_version)

# References

[Dumpbin](https://learn.microsoft.com/en-us/cpp/build/reference/dumpbin-command-line)
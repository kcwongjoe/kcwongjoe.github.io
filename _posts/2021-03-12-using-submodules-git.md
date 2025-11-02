---
layout: post
title: Using submodules on git
date: 2021-03-12 00:00:00
description:
tags: git, notes, submodules
categories: git, notes
---

# Add a submodule

Run the following command, then you can commit and push it.

```bash
git submodule add <remote url> <destination folder>
```

# Update submodules

Run the following command to update your local configuration file.

```bash
git submodule update --init --recursive
```

Then you can pull all the submodules right now.

```bash
git submodule foreach --recursive git pull origin master
```

# Remove submodules

Run the following commands, then you can commit and push it.

```bash
git submodule deinit <submodule path>
git rm <submodule path>
```

# Add submodules summary to git status

```bash
git config --global status.submoduleSummary true
```

# Add submodules differences to git diff

```bash
git config --global diff.submodule log
```

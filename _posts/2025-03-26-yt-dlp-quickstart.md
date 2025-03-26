---
layout: post
title: yt-dlp Quickstart
date: 2025-03-26 00:00:00
description:
tags: tools
categories: tools
---

# Install yt-dlp

Step 1: Download and install yt-dlp: [yt-dlp](https://github.com/yt-dlp/yt-dlp)

Step 2: Download and place the ffmpeg.exe into the yt-dlp folder: [ffmpeg](https://ffmpeg.org/download.html)

# Check subtitle code

```bash
yt-dlp --list-subs --skip-download "video_url"
```

# Download video with subtitle

## Download video in mp4 which is h264 codec
The maximum resolution supported by h264 codec is 1080p.
h264 support by almost all device. If the video resolution is below or equal to 1080p, it is recommended to use h264 codec.
```bash
yt-dlp -S "vcodec:h264,res:1080,acodec:m4a" "video_url" --write-sub --sub-lang "en,zh-HK" --sub-format srt
```

## Download video in mp4 which is h265 codec
The maximum resolution supported by h265 codec is 4k.
```bash
yt-dlp -S "vcodec:h265,res:4k,acodec:m4a" "video_url" --write-sub --sub-lang "en,zh-HK" --sub-format srt
```

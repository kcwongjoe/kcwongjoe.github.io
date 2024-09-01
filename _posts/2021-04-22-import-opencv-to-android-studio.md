---
layout: post
title: How to import OpenCV 4.5.2 in android studio
date: 2021-04-22 00:00:00
description: How to import OpenCV 4.5.2 in android studio
tags: opencv android_studio cpp android jni
categories: android opencv
---

#### Step 1: Download OpenCV SDK

Download from https://opencv.org/releases/ and unzip it.

#### Step 2: Create your android project with JNI

File > New > New Project…

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0 px-md-5">
        {% include figure.liquid path="assets/img/blog/2021-04-22-opencv-android/create_project.png" class="img-fluid z-depth-1" zoomable=true %}
    </div>
</div>

#### Step 3: Import OpenCV

File > New > Import Module…

And choose the “*sdk*” folder in the OpenCV SDK.

*Some tutorials suggested to rename the folder before import. Don’t do that. It is because OpenCV hardcoded the path with the name of “sdk” in the native/jni/OpenCVConfig.cmake*

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0 px-md-5">
        {% include figure.liquid path="assets/img/blog/2021-04-22-opencv-android/import_opencv.png" class="img-fluid z-depth-1" zoomable=true %}
    </div>
</div>

#### Step 4: Edit setting.gradle

1. Open setting.gradle
2. Add a module with the name “opencv” and link to the folder “sdk”

```gradle
include "opencv"
project(":opencv").projectDir = file("sdk")
```

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0 px-md-5">
        {% include figure.liquid path="assets/img/blog/2021-04-22-opencv-android/add_modules.png" class="img-fluid z-depth-1" zoomable=true %}
    </div>
</div>

#### Step 5: Edit the application build.gradle

&#8291;1. Open the application build.gradle which is under the “*app*” folder.

&#8291;2. Add **OpenCV_DIR** cmake argument under
android > defaultConfig > externalNativeBuild > cmake

```gradle
arguments "-DOpenCV_DIR=" + file('../sdk').absolutePath + "/native/jni",
        "-DANDROID_TOOLCHAIN=clang",
        "-DANDROID_STL=c++_shared"
```
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0 px-md-5">
        {% include figure.liquid path="assets/img/blog/2021-04-22-opencv-android/setting_gradle.png" class="img-fluid z-depth-1" zoomable=true %}
    </div>
</div>

&#8291;3. Add OpenCV module dependency to application

```gradle
implementation project(':opencv')
```

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0 px-md-5">
        {% include figure.liquid path="assets/img/blog/2021-04-22-opencv-android/add_opencv_dep.png" class="img-fluid z-depth-1" zoomable=true %}
    </div>
</div>

#### Step 6: Modify the application cmake file

&#8291;1. Open CMakeLists.txt in app/src/main/cpp

&#8291;2. Add the following code to load the OpenCV package

```cmake
set(ANDROID_OPENCV_COMPONENTS "opencv_java" CACHE STRING "")
message(STATUS "ANDROID_ABI=${ANDROID_ABI}")
find_package(OpenCV REQUIRED COMPONENTS ${ANDROID_OPENCV_COMPONENTS})
```

&#8291;Link project with the library

```cmake
target_link_libraries(${PROJECT_NAME} ${ANDROID_OPENCV_COMPONENTS})
```

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0 px-md-5">
        {% include figure.liquid path="assets/img/blog/2021-04-22-opencv-android/edit_cmake.png" class="img-fluid z-depth-1" zoomable=true %}
    </div>
</div>

#### Final: Sync Gradle

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0 px-md-5">
        {% include figure.liquid path="assets/img/blog/2021-04-22-opencv-android/sync_gradle.png" class="img-fluid z-depth-1" zoomable=true %}
    </div>
</div>

And now you can import OpenCV library in JNI

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0 px-md-5">
        {% include figure.liquid path="assets/img/blog/2021-04-22-opencv-android/final_example_cpp.png" class="img-fluid z-depth-1" zoomable=true %}
    </div>
</div>

and in the java.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0 px-md-5">
        {% include figure.liquid path="assets/img/blog/2021-04-22-opencv-android/final_example_java.png" class="img-fluid z-depth-1" zoomable=true %}
    </div>
</div>

To study how to program OpenCV, read samples in the SDK folder you have downloaded. Enjoy~

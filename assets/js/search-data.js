// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-yt-dlp-quickstart",
        
          title: "yt-dlp Quickstart",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/yt-dlp-quickstart/";
          
        },
      },{id: "post-how-to-debug-msvc-in-release-mode",
        
          title: "How to debug MSVC in release mode",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/debug-in-msvc/";
          
        },
      },{id: "post-how-to-change-the-line-endings-in-linux",
        
          title: "How to change the line endings in Linux",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/change-line-end-in-linux/";
          
        },
      },{id: "post-how-to-find-the-vc-runtime-version-from-an-exe",
        
          title: "How to find the vc runtime version from an exe",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/check-vc-runtime-from-exe/";
          
        },
      },{id: "post-how-to-debug-local-variable-and-lambda-on-c-release-build",
        
          title: "How to debug local variable and lambda on c++ release build",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/cpp-debug-in-release/";
          
        },
      },{id: "post-why-auto-is-bad-in-c",
        
          title: "Why auto is bad in c++",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/why-auto-bad-in-cpp/";
          
        },
      },{id: "post-deep-copy-shadow-copy-an-object-in-java",
        
          title: "Deep Copy/Shadow Copy an Object in Java",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/deep-copy-in-java/";
          
        },
      },{id: "post-how-to-import-opencv-4-5-2-in-android-studio",
        
          title: "How to import OpenCV 4.5.2 in android studio",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/import-opencv-to-android-studio/";
          
        },
      },{id: "post-using-submodules-on-git",
        
          title: "Using submodules on git",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/using-submodules-git/";
          
        },
      },{id: "post-passing-a-function-as-a-parameter-in-c",
        
          title: "Passing a function as a parameter in c++",
        
        description: "Passing a function as a parameter in c++",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/pass-cpp-function/";
          
        },
      },{id: "post-homoscedasticity-and-heteroscedasticity",
        
          title: "Homoscedasticity and Heteroscedasticity",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/homoscedasticity-and-heteroscedasticity/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%63%77%6F%6E%67%6A%6F%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kcwongjoe", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kcwongjoe", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=emO1RusAAAAJ", "_blank");
        },
      },];

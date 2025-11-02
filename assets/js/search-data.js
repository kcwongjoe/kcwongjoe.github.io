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
        
          title: "Yt Dlp Quickstart",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/yt-dlp-quickstart/";
          
        },
      },{id: "post-debug-in-msvc",
        
          title: "Debug In Msvc",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/debug-in-msvc/";
          
        },
      },{id: "post-change-line-end-in-linux",
        
          title: "Change Line End In Linux",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/change-line-end-in-linux/";
          
        },
      },{id: "post-check-vc-runtime-from-exe",
        
          title: "Check Vc Runtime From Exe",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/check-vc-runtime-from-exe/";
          
        },
      },{id: "post-cpp-debug-in-release",
        
          title: "Cpp Debug In Release",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/cpp-debug-in-release/";
          
        },
      },{id: "post-why-auto-bad-in-cpp",
        
          title: "Why Auto Bad In Cpp",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/why-auto-bad-in-cpp/";
          
        },
      },{id: "post-deep-copy-in-java",
        
          title: "Deep Copy In Java",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/deep-copy-in-java/";
          
        },
      },{id: "post-import-opencv-to-android-studio",
        
          title: "Import Opencv To Android Studio",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/import-opencv-to-android-studio/";
          
        },
      },{id: "post-using-submodules-git",
        
          title: "Using Submodules Git",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/using-submodules-git/";
          
        },
      },{id: "post-pass-cpp-function",
        
          title: "Pass Cpp Function",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/pass-cpp-function/";
          
        },
      },{id: "post-homoscedasticity-and-heteroscedasticity",
        
          title: "Homoscedasticity And Heteroscedasticity",
        
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

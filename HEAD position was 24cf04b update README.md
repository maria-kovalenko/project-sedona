[33mcommit 24cf04ba7eec0f4cb69f36a316b8773f95cd1a0c[m[33m ([m[1;36mHEAD[m[33m)[m
Author: Maria <m1a2r3.kovalenko@gmail.com>
Date:   Fri May 13 17:15:12 2022 +0300

    update README.md

[1mdiff --git a/README.md b/README.md[m
[1mnew file mode 100644[m
[1mindex 0000000..a7220cb[m
[1m--- /dev/null[m
[1m+++ b/README.md[m
[36m@@ -0,0 +1 @@[m
[32m+[m[32mProject Sedona[m

[33mcommit c173d0333ed3fb94745218ab90819757e6c5e367[m
Author: Maria <m1a2r3.kovalenko@gmail.com>
Date:   Fri May 13 17:02:58 2022 +0300

    last version

[1mdiff --git a/README.md b/README.md[m
[1mdeleted file mode 100644[m
[1mindex e965047..0000000[m
[1m--- a/README.md[m
[1m+++ /dev/null[m
[36m@@ -1 +0,0 @@[m
[31m-Hello[m

[33mcommit 93ba71d6a5302a9560e69b73b54c4a5b19c0ae84[m
Author: Maria <m1a2r3.kovalenko@gmail.com>
Date:   Fri May 13 17:01:21 2022 +0300

    last version

[1mdiff --git a/INFO.md b/INFO.md[m
[1mdeleted file mode 100644[m
[1mindex 40f51f1..0000000[m
[1m--- a/INFO.md[m
[1m+++ /dev/null[m
[36m@@ -1,2 +0,0 @@[m
[31m-git is awesome![m
[31m-new line[m
[1mdiff --git a/app/css/sass/style.scss b/app/css/sass/style.scss[m
[1mindex 3f0bd09..9dd12df 100644[m
[1m--- a/app/css/sass/style.scss[m
[1m+++ b/app/css/sass/style.scss[m
[36m@@ -775,7 +775,6 @@[m [ma {[m
 [m
   .content-bottom__image-bridge {[m
     width: 100%;[m
[31m-    height: 100%;[m
     object-fit: cover;[m
   }[m
 }[m
[1mdiff --git a/app/css/style.css b/app/css/style.css[m
[1mindex 0fc1ef8..eb25ad9 100644[m
[1m--- a/app/css/style.css[m
[1m+++ b/app/css/style.css[m
[36m@@ -650,7 +650,6 @@[m [ma {[m
   }[m
   .content-bottom__image-bridge {[m
     width: 100%;[m
[31m-    height: 100%;[m
     -o-object-fit: cover;[m
     object-fit: cover[m
   }[m
[1mdiff --git a/app/index.html b/app/index.html[m
[1mindex 052570c..4cd42a3 100644[m
[1m--- a/app/index.html[m
[1m+++ b/app/index.html[m
[36m@@ -94,10 +94,6 @@[m
         </div>[m
         <div class="content-top__image-sity-wrapper">[m
     <picture>[m
[31m-      <!-- <source type="image/webp" media="(min-width: 1200px)" srcset="./img/index-image/webp/desktop-city@1x.webp 1x, ./img/index-image/webp/desktop-city@2x.webp 2x">[m
[31m-      <source type="image/webp" media="(min-width: 768px)" srcset="./img/index-image/webp/tablet-city@1x.webp 1x, ./img/index-image/webp/tablet-city@2x.webp 2x">[m
[31m-      <source type="image/webp" srcset="./img/index-image/webp/mobile-city@1x.webp 1x, ./img/index-image/webp/mobile-city@2x.webp 2x"> -->[m
[31m-[m
       <source media="(min-width: 1200px)" srcset="./img/index-image/desktop-city@1x.jpg 1x, ./img/index-image/desktop-city@2x.jpg 2x">[m
       <source media="(min-width: 768px)" srcset="./img/index-image/tablet-city@1x.jpg 1x, ./img/index-image/tablet-city@2x.jpg 2x">[m
         <img[m
[36m@@ -145,10 +141,6 @@[m
       </div>[m
         <div class="content-bottom__image-bridge-wrapper">[m
           <picture>[m
[31m-                  <!-- <source type="image/webp" media="(min-width: 1200px)" srcset="./img/index-image/webp/desktop-bridge@1x.webp 1x, ./img/index-image/webp/desktop-bridge@2x.webp 2x">[m
[31m-      <source type="img/webp" media="(min-width: 768px)" srcset="./img/index-image/webp/tablet-bridge@1x.webp 1x, ./img/index-image/webp/tablet-bridge@2x.webp 2x">[m
[31m-      <source type="img/webp" srcset="./img/index-image/webp/mobile-bridge@1x.webp 1x, ./img/index-image/webp/mobile-bridge@2x.webp 2x"> -->[m
[31m-[m
             <source media="(min-width: 1200px)" srcset="./img/index-image/desktop-bridge@1x.jpg 1x, ./img/index-image/desktop-bridge@2x.jpg 2x">[m
             <source media="(min-width: 768px)" srcset="./img/index-image/tablet-bridge@1x.jpg 1x, ./img/index-image/tablet-bridge@2x.jpg 2x">[m
         <img[m
[36m@@ -200,8 +192,6 @@[m
         <a href="#" class="hotel-search__button button">Найти гостиницу</a>[m
       </div>[m
       <picture>[m
[31m-      <!-- <source type="image/webp" srcset="./img/index-image/webp/map.webp 1x, ./img/index-image/webp/map@2x.webp 2x"> -->[m
[31m-[m
         <img[m
           src="./img/index-image/map.jpg"[m
           srcset="./img/index-image/map@2x.jpg 2x"[m
[36m@@ -235,9 +225,7 @@[m
                 </a>[m
             </li>[m
             <li class="social__item">[m
[31m-              <a class="social__link social__link--facebook" href="#">[m
[31m-                <!-- <img src="./img/icon-facebook.svg"><span class="visually-hidden">Мы в Фейсбуке</span> -->[m
[31m-               [m
[32m+[m[32m              <a class="social__link social__link--facebook" href="#">[m[41m               [m
                 <svg style="display: none;">[m
                   <symbol id="icon-facebook" viewBox="0 0 9 18">[m
                   <g transform="translate(-155 -3479)">[m
[36m@@ -252,7 +240,6 @@[m
             </li>[m
             <li class="social__item">[m
               <a class="social__link social__link--youtube" href="#">[m
[31m-                <!-- <img src="./img/icon-youtube.svg"><span class="visually-hidden">Мы в Ютубе</span> -->[m
                 <svg style="display: none;">[m
                   <symbol id="icon-youtube" viewBox="0 0 20 14">[m
                   <g transform="translate(-202 -3482)">[m
[36m@@ -282,8 +269,6 @@[m
               <use xlink:href="#html-logo">[m
               </use>[m
             </svg>[m
[31m-[m
[31m-[m
           </a>[m
         </div>[m
       </div>[m
[1mdiff --git a/app/js/main.js b/app/js/main.js[m
[1mindex e280845..4bde173 100644[m
[1m--- a/app/js/main.js[m
[1m+++ b/app/js/main.js[m
[36m@@ -7,9 +7,3 @@[m [mbuttonClose.addEventListener("click", function () {[m
   buttonClose.classList.add("page-header__toggle--opened");[m
   menu.classList.add("main-nav-opened");[m
 });[m
[31m-[m
[31m-buttonOpen.addEventListener("click", function () {[m
[31m-  buttonOpen.classList.remove("page-header__toggle--opened");[m
[31m-  buttonOpen.classList.add("page-header__toggle--closed");[m
[31m-  menu.classList.remove("main-nav-opened");[m
[31m-});[m

[33mcommit c1ccb7f4e6acfe62db61d6d2be16c87b870a3b46[m
Author: Maria <m1a2r3.kovalenko@gmail.com>
Date:   Thu May 12 12:16:25 2022 +0300

    fix INFO.md and README.md

[1mdiff --git a/INFO.md b/INFO.md[m
[1mindex d5225f8..40f51f1 100644[m
[1m--- a/INFO.md[m
[1m+++ b/INFO.md[m
[36m@@ -1 +1,2 @@[m
 git is awesome![m
[32m+[m[32mnew line[m
[1mdiff --git a/README.md b/README.md[m
[1mindex 8b13789..e965047 100644[m
[1m--- a/README.md[m
[1m+++ b/README.md[m
[36m@@ -1 +1 @@[m
[31m-[m
[32m+[m[32mHello[m

[33mcommit 16d4fc589454c1a583eecf8311067ed02b311210[m
Author: Maria <m1a2r3.kovalenko@gmail.com>
Date:   Thu May 12 11:57:48 2022 +0300

    INFO.md

[1mdiff --git a/INFO.md b/INFO.md[m
[1mnew file mode 100644[m
[1mindex 0000000..d5225f8[m
[1m--- /dev/null[m
[1m+++ b/INFO.md[m
[36m@@ -0,0 +1 @@[m
[32m+[m[32mgit is awesome![m

[33mcommit 01320a6a64a7bbb03c1c6d1489c21c7be02a2381[m
Author: Maria <m1a2r3.kovalenko@gmail.com>
Date:   Thu May 12 11:55:43 2022 +0300

    remove NEW.md

[1mdiff --git a/NEW.md b/NEW.md[m
[1mdeleted file mode 100644[m
[1mindex 9daeafb..0000000[m
[1m--- a/NEW.md[m
[1m+++ /dev/null[m
[36m@@ -1 +0,0 @@[m
[31m-test[m

[33mcommit 79e8bedfbb709da3ed0f32441bad70c4d3cc1c0c[m
Author: Maria <m1a2r3.kovalenko@gmail.com>
Date:   Thu May 12 11:09:24 2022 +0300

    add NEW.md

[1mdiff --git a/NEW.md b/NEW.md[m
[1mnew file mode 100644[m
[1mindex 0000000..9daeafb[m
[1m--- /dev/null[m
[1m+++ b/NEW.md[m
[36m@@ -0,0 +1 @@[m
[32m+[m[32mtest[m

[33mcommit 339b714d4a125c6afbdc681e4e0e36fe50a18876[m
Author: Maria Kovalenko <104978323+maria-kovalenko@users.noreply.github.com>
Date:   Fri May 6 11:55:06 2022 +0300

    Update README.md
    
    ..

[1mdiff --git a/README.md b/README.md[m
[1mindex ffe7ece..8b13789 100644[m
[1m--- a/README.md[m
[1m+++ b/README.md[m
[36m@@ -1 +1 @@[m
[31m-Hello, Hexlet![m
[32m+[m

[33mcommit 5e485c41796ce389b8fe822c15c62ac67e31d571[m
Author: Maria Kovalenko <104978323+maria-kovalenko@users.noreply.github.com>
Date:   Fri May 6 11:45:23 2022 +0300

    Delete PEOPLE.md
    
    first delete

[1mdiff --git a/PEOPLE.md b/PEOPLE.md[m
[1mdeleted file mode 100644[m
[1mindex cf6db53..0000000[m
[1m--- a/PEOPLE.md[m
[1m+++ /dev/null[m
[36m@@ -1 +0,0 @@[m
[31m-Haskell Curry[m

[33mcommit a77ee5039772ef4052a1279754cbe381f52fd55e[m
Author: Maria <m1a2r3.kovalenko@gmail.com>
Date:   Fri May 6 11:33:30 2022 +0300

    first commit

[1mdiff --git a/.gitignore b/.gitignore[m
[1mnew file mode 100644[m
[1mindex 0000000..2ccbe46[m
[1m--- /dev/null[m
[1m+++ b/.gitignore[m
[36m@@ -0,0 +1 @@[m
[32m+[m[32m/node_modules/[m
[1mdiff --git a/PEOPLE.md b/PEOPLE.md[m
[1mnew file mode 100644[m
[1mindex 0000000..cf6db53[m
[1m--- /dev/null[m
[1m+++ b/PEOPLE.md[m
[36m@@ -0,0 +1 @@[m
[32m+[m[32mHaskell Curry[m
[1mdiff --git a/README.md b/README.md[m
[1mnew file mode 100644[m
[1mindex 0000000..ffe7ece[m
[1m--- /dev/null[m
[1m+++ b/README.md[m
[36m@@ -0,0 +1 @@[m
[32m+[m[32mHello, Hexlet![m
[1mdiff --git a/app/css/sass/style.scss b/app/css/sass/style.scss[m
[1mnew file mode 100644[m
[1mindex 0000000..3f0bd09[m
[1m--- /dev/null[m
[1m+++ b/app/css/sass/style.scss[m
[36m@@ -0,0 +1,1137 @@[m
[32m+[m[32m//---------------------------  blocks/basic.less -------------------------[m
[32m+[m[32m@font-face {[m
[32m+[m[32m  font-family: "PT Sans";[m
[32m+[m[32m  src: url(/app/fonts/PTSans-Regular.ttf);[m
[32m+[m[32m  src: url(/app/fonts/PTSans-Bold.ttf);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m$bg-blue: #81b3d2;[m
[32m+[m[32m$bg-blue-hover: #669ec0;[m
[32m+[m[32m$bg-blue-down: #5496bd;[m
[32m+[m[32m$bg-lightgrey: #eeeeee;[m
[32m+[m[32m$tablet-width: 768px;[m
[32m+[m[32m$desktop-width: 1200px;[m
[32m+[m[32m$mobile-width-only: 767px;[m
[32m+[m[32m$retina-dpi: 144dpi;[m
[32m+[m[32m$retina-dppx: 1.5dppx;[m
[32m+[m
[32m+[m[32mbody {[m
[32m+[m[32m  min-width: 320px;[m
[32m+[m[32m  max-width: 1200px;[m
[32m+[m[32m  margin: 0 auto;[m
[32m+[m[32m  padding: 0;[m
[32m+[m[32m  background-color: #f2f2f2;[m
[32m+[m[32m  font-size: 14px;[m
[32m+[m[32m  line-height: 26px;[m
[32m+[m[32m  font-family: "PT Sans", Arial, sans-serif;[m
[32m+[m[32m  color: #333333;[m
[32m+[m[32m  font-style: normal;[m
[32m+[m[32m  text-transform: uppercase;[m
[32m+[m[32m  box-shadow: 0 0 20px 0.5px rgba(0, 0, 0, 0.2);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mimg {[m
[32m+[m[32m  max-width: 100%;[m
[32m+[m[32m  height: auto;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32ma {[m
[32m+[m[32m  text-decoration: none;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.button {[m
[32m+[m[32m  display: block;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  padding: 15px 46px;[m
[32m+[m[32m  background-color: $bg-blue;[m
[32m+[m[32m  color: white;[m
[32m+[m[32m  font-size: 18px;[m
[32m+[m[32m  font-weight: bold;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.visually-hidden:not(:focus):not(:active) {[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  width: 1px;[m
[32m+[m[32m  height: 1px;[m
[32m+[m[32m  margin: -1px;[m
[32m+[m[32m  border: 0;[m
[32m+[m[32m  padding: 0;[m
[32m+[m
[32m+[m[32m  white-space: nowrap;[m
[32m+[m[32m  clip-path: inset(100%);[m
[32m+[m[32m  clip: rect(0 0 0 0);[m
[32m+[m[32m  overflow: hidden;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m//---------------------------  blocks/page-header.less -------------------------[m
[32m+[m
[32m+[m[32m.page-header {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  flex-direction: column;[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  min-height: 56px;[m
[32m+[m
[32m+[m[32m  background-color: white;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.page-header__nav {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  width: 280px;[m
[32m+[m
[32m+[m[32m  margin: 0 auto;[m
[32m+[m[32m  padding: 0 20px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.page-header__logo {[m
[32m+[m[32m  height: 83px;[m
[32m+[m[32m  margin-left: auto;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  z-index: 1;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.page-header__logo-image {[m
[32m+[m[32m  height: 83px;[m
[32m+[m[32m  width: 102px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.page-header__toggle {[m
[32m+[m[32m  position: relative;[m
[32m+[m[32m  display: block;[m
[32m+[m[32m  width: 23px;[m
[32m+[m[32m  height: 22px;[m
[32m+[m[32m  margin-left: 66px;[m
[32m+[m[32m  margin-top: 17px;[m
[32m+[m
[32m+[m[32m  cursor: pointer;[m
[32m+[m[32m  border: none;[m
[32m+[m[32m  background-color: white;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.page-header__toggle--closed::before {[m
[32m+[m[32m  content: "";[m
[32m+[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  top: 0;[m
[32m+[m[32m  left: 0;[m
[32m+[m
[32m+[m[32m  width: 23px;[m
[32m+[m[32m  height: 4px;[m
[32m+[m
[32m+[m[32m  background-color: $bg-blue;[m
[32m+[m[32m  box-shadow: 0 8px 0 0 $bg-blue, 0 16px 0 0 $bg-blue;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.page-header__toggle--opened {[m
[32m+[m[32m  &::before {[m
[32m+[m[32m    content: "";[m
[32m+[m
[32m+[m[32m    position: absolute;[m
[32m+[m[32m    top: 9px;[m
[32m+[m[32m    left: 0;[m
[32m+[m
[32m+[m[32m    width: 23px;[m
[32m+[m[32m    height: 4px;[m
[32m+[m[32m    transform: rotate(45deg);[m
[32m+[m[32m    background-color: $bg-blue;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  &::after {[m
[32m+[m[32m    content: "";[m
[32m+[m
[32m+[m[32m    position: absolute;[m
[32m+[m[32m    top: 9px;[m
[32m+[m[32m    left: 0;[m
[32m+[m
[32m+[m[32m    width: 23px;[m
[32m+[m[32m    height: 4px;[m
[32m+[m[32m    transform: rotate(-45deg);[m
[32m+[m[32m    background-color: $bg-blue;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (min-width: $tablet-width) {[m
[32m+[m[32m  .page-header {[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .page-header__nav {[m
[32m+[m[32m    width: 102px;[m
[32m+[m[32m    padding: 0;[m
[32m+[m[32m    margin-top: -56px;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .page-header__toggle {[m
[32m+[m[32m    display: none;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .page-header__logo {[m
[32m+[m[32m    margin: 0 auto;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (min-width: $desktop-width) {[m
[32m+[m[32m  .page-header__nav {[m
[32m+[m[32m    width: 188px;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .page-header__logo-image {[m
[32m+[m[32m    width: 188px;[m
[32m+[m[32m    height: 96px;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m//---------------------------  blocks/main-nav.less -------------------------[m
[32m+[m[32m.page-main {[m
[32m+[m[32m  background-color: white;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.main-nav {[m
[32m+[m[32m  display: none;[m
[32m+[m[32m  width: 100%;[m
[32m+[m
[32m+[m[32m  &-opened {[m
[32m+[m[32m    display: block;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m.main-nav__list {[m
[32m+[m[32m  position: relative;[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  padding: 0;[m
[32m+[m[32m  list-style: none;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.main-nav__list::before {[m
[32m+[m[32m  content: "";[m
[32m+[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  bottom: 0;[m
[32m+[m[32m  left: 0;[m
[32m+[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  height: 10px;[m
[32m+[m[32m  box-shadow: inset 0 -8px 10px -10px rgba(0, 0, 0, 0.5);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (min-width: $tablet-width) {[m
[32m+[m[32m  .main-nav {[m
[32m+[m[32m    display: block;[m
[32m+[m[32m    min-height: 56px;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .main-nav__wrapper {[m
[32m+[m[32m    width: 100%;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .main-nav__list {[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    flex-wrap: wrap;[m
[32m+[m[32m    justify-content: space-between;[m
[32m+[m
[32m+[m[32m    &::before {[m
[32m+[m[32m      display: none;[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (min-width: $desktop-width) {[m
[32m+[m[32m  .main-nav__wrapper {[m
[32m+[m[32m    width: 1200px;[m
[32m+[m[32m    margin: 0 auto;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m//---------------------------  blocks/site-list.less -------------------------[m
[32m+[m
[32m+[m[32m.site-list__item {[m
[32m+[m[32m  font-weight: bold;[m
[32m+[m[32m  min-height: 56px;[m
[32m+[m[32m  word-wrap: break-word;[m
[32m+[m
[32m+[m[32m  background-color: $bg-blue;[m
[32m+[m[32m  border-top: 1px solid #9ac2db;[m
[32m+[m[32m  border-bottom: 1px solid #678fa8;[m
[32m+[m
[32m+[m[32m  &:nth-child(1) {[m
[32m+[m[32m    border-top: none;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  &:nth-child(4) {[m
[32m+[m[32m    border-bottom: none;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.site-list__item a {[m
[32m+[m[32m  display: block;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  padding: 18px 70px;[m
[32m+[m[32m  color: white;[m
[32m+[m[32m  font-size: 18px;[m
[32m+[m[32m  // line-height: 40px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.site-list__item a[href] {[m
[32m+[m[32m  &:hover {[m
[32m+[m[32m    color: #81b3d2;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  &:active {[m
[32m+[m[32m    color: #cacaca;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (min-width: $tablet-width) {[m
[32m+[m[32m  .site-list__item {[m
[32m+[m[32m    width: 166px;[m
[32m+[m[32m    min-height: 56px;[m
[32m+[m[32m    border: 0;[m
[32m+[m
[32m+[m[32m    background-color: white;[m
[32m+[m
[32m+[m[32m    &:nth-child(2) {[m
[32m+[m[32m      margin-right: 80px;[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    &:nth-child(3) {[m
[32m+[m[32m      margin-left: 80px;[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .site-list__item a {[m
[32m+[m[32m    font-size: 14px;[m
[32m+[m[32m    line-height: 24px;[m
[32m+[m[32m    padding: 15px 15px;[m
[32m+[m
[32m+[m[32m    color: #000;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .site-list__item--active a {[m
[32m+[m[32m    color: #766357;[m
[32m+[m
[32m+[m[32m    &:hover {[m
[32m+[m[32m      color: #604e43;[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    &:active {[m
[32m+[m[32m      color: #dbd8d5;[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (min-width: 767px) and (max-width: 824px) {[m
[32m+[m[32m  .site-list__item {[m
[32m+[m[32m    &:nth-child(2) {[m
[32m+[m[32m      margin-right: 51px;[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    &:nth-child(3) {[m
[32m+[m[32m      margin-left: 51px;[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (min-width: $desktop-width) {[m
[32m+[m[32m  .site-list__item {[m
[32m+[m[32m    width: 253px;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m//---------------------------  blocks/intro.less -------------------------[m
[32m+[m
[32m+[m[32m.intro__image-wrapper {[m
[32m+[m[32m  margin-top: -27px;[m
[32m+[m[32m  height: 389px;[m
[32m+[m
[32m+[m[32m  background-color: #e5f2fa;[m
[32m+[m[32m  background-image: url(../img/bg-image-intro/bg-image-intro.jpg);[m
[32m+[m[32m  background-repeat: no-repeat;[m
[32m+[m[32m  background-position: center 0;[m
[32m+[m[32m  background-size: cover;[m
[32m+[m
[32m+[m[32m  @media (min-resolution: $retina-dpi), (min-resolution: $retina-dppx) {[m
[32m+[m[32m    background-image: url(../img/bg-image-intro/bg-image-intro@2x.jpg);[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.intro__image {[m
[32m+[m[32m  display: block;[m
[32m+[m[32m  margin: 0 auto;[m
[32m+[m[32m  padding-top: 90px;[m
[32m+[m[32m  width: 282px;[m
[32m+[m[32m  height: auto;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.intro__wrapper {[m
[32m+[m[32m  margin: 0 auto;[m
[32m+[m[32m  padding: 0 6.25%;[m
[32m+[m[32m  padding-top: 43px;[m
[32m+[m[32m  padding-bottom: 32px;[m
[32m+[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.intro__slogan {[m
[32m+[m[32m  display: block;[m
[32m+[m[32m  margin-bottom: 33px;[m
[32m+[m[32m  font-size: 18px;[m
[32m+[m[32m  font-weight: bold;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.intro__reasons {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-top: 10px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (min-width: $tablet-width) {[m
[32m+[m[32m  .intro__image-wrapper {[m
[32m+[m[32m    height: 518px;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .intro__image {[m
[32m+[m[32m    padding-top: 77px;[m
[32m+[m[32m    width: 460px;[m
[32m+[m[32m    height: 350px;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .intro__wrapper {[m
[32m+[m[32m    max-width: 550px;[m
[32m+[m[32m    padding-top: 50px;[m
[32m+[m[32m    padding-bottom: 48px;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .intro__slogan {[m
[32m+[m[32m    margin-bottom: 30px;[m
[32m+[m[32m    font-size: 21px;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .intro__slogan br {[m
[32m+[m[32m    display: none;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m//---------------------------  blocks/content-top.less -------------------------[m
[32m+[m
[32m+[m[32m.content-top__habitation {[m
[32m+[m[32m  position: relative;[m
[32m+[m[32m  background-color: $bg-blue;[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  justify-content: center;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-top__habitation-layer {[m
[32m+[m[32m  background-color: $bg-blue;[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  top: 0;[m
[32m+[m[32m  left: 0;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-top__habitation-wrapper {[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  padding: 17% 20px 14% 20px;[m
[32m+[m[32m  color: white;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-top__title {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-bottom: 14px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-top__title br {[m
[32m+[m[32m  display: none;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-top__number {[m
[32m+[m[32m  position: relative;[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-bottom: 14px;[m
[32m+[m[32m  line-height: 21px;[m
[32m+[m
[32m+[m[32m  &::before {[m
[32m+[m[32m    content: "";[m
[32m+[m
[32m+[m[32m    position: absolute;[m
[32m+[m[32m    left: 40%;[m
[32m+[m[32m    top: 50%;[m
[32m+[m
[32m+[m[32m    width: 8px;[m
[32m+[m[32m    height: 2px;[m
[32m+[m
[32m+[m[32m    background-color: rgba($color: white, $alpha: 0.5);[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  &::after {[m
[32m+[m[32m    content: "";[m
[32m+[m
[32m+[m[32m    position: absolute;[m
[32m+[m[32m    right: 40%;[m
[32m+[m[32m    top: 50%;[m
[32m+[m
[32m+[m[32m    width: 8px;[m
[32m+[m[32m    height: 2px;[m
[32m+[m
[32m+[m[32m    background-color: rgba($color: white, $alpha: 0.5);[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-top__description {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-top: 10px;[m
[32m+[m[32m  line-height: 21px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-top__image-sity {[m
[32m+[m[32m  display: block;[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  height: 260px;[m
[32m+[m[32m  object-fit: cover;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (min-width: $tablet-width) {[m
[32m+[m[32m  .content-top__wrapper {[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-top__habitation {[m
[32m+[m[32m    width: 33%;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-top__habitation-wrapper {[m
[32m+[m[32m    padding: 45px;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-top__habitation-layer {[m
[32m+[m[32m    display: none;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-top__image-sity-wrapper {[m
[32m+[m[32m    width: 67%;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-top__title br {[m
[32m+[m[32m    display: block;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-top__number {[m
[32m+[m[32m    &::before {[m
[32m+[m[32m      left: 35%;[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    &::after {[m
[32m+[m[32m      right: 35%;[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-top__image-sity {[m
[32m+[m[32m    width: 100%;[m
[32m+[m[32m    height: 100%;[m
[32m+[m[32m    object-fit: cover;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (min-width: $desktop-width) {[m
[32m+[m[32m  .content-top__number {[m
[32m+[m[32m    &::before {[m
[32m+[m[32m      left: 40%;[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    &::after {[m
[32m+[m[32m      right: 40%;[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-top__habitation-wrapper {[m
[32m+[m[32m    padding: 45px 60px;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-top__advantages-wrapper {[m
[32m+[m[32m  padding: 0 6.25%;[m
[32m+[m[32m  margin-top: 40px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-top__advantages {[m
[32m+[m[32m  list-style: none;[m
[32m+[m[32m  margin-top: 25px;[m
[32m+[m[32m  margin-bottom: 40px;[m
[32m+[m[32m  padding: 0;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-top__item {[m
[32m+[m[32m  position: relative;[m
[32m+[m[32m  padding-left: 16%;[m
[32m+[m[32m  word-wrap: break-word;[m
[32m+[m
[32m+[m[32m  &--houses::before {[m
[32m+[m[32m    position: absolute;[m
[32m+[m[32m    content: "";[m
[32m+[m[32m    width: 39px;[m
[32m+[m[32m    height: 37px;[m
[32m+[m
[32m+[m[32m    top: -10px;[m
[32m+[m[32m    left: 0;[m
[32m+[m
[32m+[m[32m    background-image: url(../img/icon-house.svg);[m
[32m+[m[32m    background-repeat: no-repeat;[m
[32m+[m[32m    background-position: center;[m
[32m+[m[32m    background-size: contain;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  &--souvenirs::before {[m
[32m+[m[32m    position: absolute;[m
[32m+[m[32m    content: "";[m
[32m+[m[32m    width: 39px;[m
[32m+[m[32m    height: 37px;[m
[32m+[m
[32m+[m[32m    top: -10px;[m
[32m+[m[32m    left: 0;[m
[32m+[m
[32m+[m[32m    background-image: url(../img/icon-souvenirs.svg);[m
[32m+[m[32m    background-repeat: no-repeat;[m
[32m+[m[32m    background-position: center;[m
[32m+[m[32m    background-size: contain;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  &--eat::before {[m
[32m+[m[32m    position: absolute;[m
[32m+[m[32m    content: "";[m
[32m+[m[32m    width: 39px;[m
[32m+[m[32m    height: 37px;[m
[32m+[m
[32m+[m[32m    top: -10px;[m
[32m+[m[32m    left: 0;[m
[32m+[m
[32m+[m[32m    background-image: url(../img/icon-eat.svg);[m
[32m+[m[32m    background-repeat: no-repeat;[m
[32m+[m[32m    background-position: center;[m
[32m+[m[32m    background-size: contain;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-top__title-advantages {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-top__description-advantages {[m
[32m+[m[32m  margin-top: 24px;[m
[32m+[m[32m  margin-bottom: 40px;[m
[32m+[m[32m  line-height: 21px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (min-width: $tablet-width) {[m
[32m+[m[32m  .content-top__advantages-wrapper {[m
[32m+[m[32m    padding: 0;[m
[32m+[m[32m    margin: 0;[m
[32m+[m[32m    text-align: center;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-top__advantages {[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    min-height: 330px;[m
[32m+[m[32m    margin: 0;[m
[32m+[m[32m    padding: 0;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-top__item {[m
[32m+[m[32m    width: 33%;[m
[32m+[m[32m    padding-top: 160px;[m
[32m+[m[32m    padding-bottom: 55px;[m
[32m+[m[32m    padding-right: 45px;[m
[32m+[m[32m    padding-left: 45px;[m
[32m+[m
[32m+[m[32m    &::before {[m
[32m+[m[32m      width: 77px;[m
[32m+[m[32m      height: 75px;[m
[32m+[m[32m      top: 58px;[m
[32m+[m[32m      left: calc(50% - 38.5px);[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    &--souvenirs {[m
[32m+[m[32m      order: 1;[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  @media (min-width: $desktop-width) {[m
[32m+[m[32m    .content-top__item {[m
[32m+[m[32m      padding-right: 50px;[m
[32m+[m[32m      padding-left: 50px;[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-top__title-advantages {[m
[32m+[m[32m    margin-bottom: 20px;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-top__description-advantages {[m
[32m+[m[32m    margin-bottom: 10px;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m//---------------------------  blocks/content-bottom.less -------------------------[m
[32m+[m
[32m+[m[32m.content-bottom__bridge {[m
[32m+[m[32m  background-color: $bg-blue;[m
[32m+[m[32m  min-height: 191px;[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  justify-content: center;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-bottom__bridge-wrapper {[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  padding: 45px 6.25%;[m
[32m+[m[32m  color: #fff;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-bottom__title {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-bottom: 14px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-bottom__title br {[m
[32m+[m[32m  display: none;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-bottom__number {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-bottom: 14px;[m
[32m+[m[32m  line-height: 21px;[m
[32m+[m[32m  position: relative;[m
[32m+[m
[32m+[m[32m  &::before {[m
[32m+[m[32m    content: "";[m
[32m+[m
[32m+[m[32m    position: absolute;[m
[32m+[m[32m    left: 40%;[m
[32m+[m[32m    top: 50%;[m
[32m+[m
[32m+[m[32m    width: 8px;[m
[32m+[m[32m    height: 2px;[m
[32m+[m
[32m+[m[32m    background-color: rgba($color: white, $alpha: 0.5);[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  &::after {[m
[32m+[m[32m    content: "";[m
[32m+[m
[32m+[m[32m    position: absolute;[m
[32m+[m[32m    right: 40%;[m
[32m+[m[32m    top: 50%;[m
[32m+[m
[32m+[m[32m    width: 8px;[m
[32m+[m[32m    height: 2px;[m
[32m+[m
[32m+[m[32m    background-color: rgba($color: white, $alpha: 0.5);[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-bottom__description {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-top: 10px;[m
[32m+[m[32m  line-height: 21px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-bottom__image-bridge {[m
[32m+[m[32m  display: block;[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  height: 260px;[m
[32m+[m[32m  object-fit: cover;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (min-width: $tablet-width) {[m
[32m+[m[32m  .content-bottom {[m
[32m+[m[32m    width: 100%;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-bottom__wrapper {[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    min-height: 256px;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-bottom__bridge {[m
[32m+[m[32m    width: 33%;[m
[32m+[m[32m    order: 1;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-bottom__bridge-wrapper {[m
[32m+[m[32m    padding: 45px 45px 48px 45px;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-bottom__title br {[m
[32m+[m[32m    display: block;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-bottom__number {[m
[32m+[m[32m    &::before {[m
[32m+[m[32m      left: 35%;[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    &::after {[m
[32m+[m[32m      right: 35%;[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-bottom__image-bridge-wrapper {[m
[32m+[m[32m    width: 67%;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-bottom__image-bridge {[m
[32m+[m[32m    width: 100%;[m
[32m+[m[32m    height: 100%;[m
[32m+[m[32m    object-fit: cover;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (min-width: $desktop-width) {[m
[32m+[m[32m  .content-bottom__number {[m
[32m+[m[32m    &::before {[m
[32m+[m[32m      left: 40%;[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    &::after {[m
[32m+[m[32m      right: 40%;[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-bottom__bridge-wrapper {[m
[32m+[m[32m    padding: 45px 90px 48px;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-bottom__list-wrapper {[m
[32m+[m[32m  padding: 0 6.25%;[m
[32m+[m[32m  background-color: $bg-lightgrey;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-bottom__list {[m
[32m+[m[32m  position: relative;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  padding: 30px 5% 30px;[m
[32m+[m[32m  color: black;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-bottom__list:not(:last-child)::after {[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  content: "";[m
[32m+[m[32m  bottom: 0;[m
[32m+[m[32m  left: 0;[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  height: 1px;[m
[32m+[m[32m  background-color: rgba(0, 0, 0, 0.1);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-bottom__title-advantages {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-bottom: 17px;[m
[32m+[m
[32m+[m[32m  br {[m
[32m+[m[32m    display: none;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-bottom__number-advantages {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-bottom: 14px;[m
[32m+[m[32m  position: relative;[m
[32m+[m
[32m+[m[32m  &::before {[m
[32m+[m[32m    content: "";[m
[32m+[m
[32m+[m[32m    position: absolute;[m
[32m+[m[32m    left: 40%;[m
[32m+[m[32m    top: 50%;[m
[32m+[m
[32m+[m[32m    width: 8px;[m
[32m+[m[32m    height: 2px;[m
[32m+[m
[32m+[m[32m    background-color: rgba($color: black, $alpha: 0.5);[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  &::after {[m
[32m+[m[32m    content: "";[m
[32m+[m
[32m+[m[32m    position: absolute;[m
[32m+[m[32m    right: 40%;[m
[32m+[m[32m    top: 50%;[m
[32m+[m
[32m+[m[32m    width: 8px;[m
[32m+[m[32m    height: 2px;[m
[32m+[m
[32m+[m[32m    background-color: rgba($color: black, $alpha: 0.5);[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.content-bottom__description-advantages {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-top: 10px;[m
[32m+[m[32m  word-wrap: break-word;[m
[32m+[m[32m  line-height: 21px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (min-width: $tablet-width) {[m
[32m+[m[32m  .content-bottom__list-wrapper {[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    flex-wrap: wrap;[m
[32m+[m[32m    justify-content: center;[m
[32m+[m[32m    min-height: 256px;[m
[32m+[m[32m    padding: 0;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-bottom__list {[m
[32m+[m[32m    box-sizing: border-box;[m
[32m+[m[32m    width: 33%;[m
[32m+[m[32m    padding: 45px;[m
[32m+[m[32m    padding-bottom: 48px;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-bottom__list::after {[m
[32m+[m[32m    display: none;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-bottom__title-advantages br {[m
[32m+[m[32m    display: block;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .content-bottom__number-advantages {[m
[32m+[m[32m    &::before {[m
[32m+[m[32m      left: 35%;[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    &::after {[m
[32m+[m[32m      right: 35%;[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (min-width: $desktop-width) {[m
[32m+[m[32m  .content-bottom__number-advantages {[m
[32m+[m[32m    &::before {[m
[32m+[m[32m      left: 40%;[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    &::after {[m
[32m+[m[32m      right: 40%;[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m//---------------------------  blocks/hotel-search.less -------------------------[m
[32m+[m
[32m+[m[32m.hotel-search__wrapper {[m
[32m+[m[32m  padding: 0 6.25%;[m
[32m+[m[32m  margin-top: 31px;[m
[32m+[m[32m  margin-bottom: 49px;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  word-wrap: break-word;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.hotel-search__title {[m
[32m+[m[32m  font-size: 21px;[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-bottom: 20px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.hotel-search__description {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-top: 10px;[m
[32m+[m
[32m+[m[32m  br {[m
[32m+[m[32m    display: none;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.hotel-search__button {[m
[32m+[m[32m  margin-top: 40px;[m
[32m+[m[32m  font-size: 21px;[m
[32m+[m
[32m+[m[32m  &:hover {[m
[32m+[m[32m    background-color: $bg-blue-hover;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  &:active {[m
[32m+[m[32m    background-color: $bg-blue-down;[m
[32m+[m[32m    color: rgba($color: white, $alpha: 0.3);[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.hotel-search__map {[m
[32m+[m[32m  display: block;[m
[32m+[m[32m  min-height: 350px;[m
[32m+[m[32m  object-fit: cover;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (min-width: $tablet-width) {[m
[32m+[m[32m  .hotel-search__wrapper {[m
[32m+[m[32m    width: 59.8%;[m
[32m+[m[32m    max-width: 460px;[m
[32m+[m[32m    margin: 52px auto 58px;[m
[32m+[m[32m    padding: 0;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .hotel-search__title {[m
[32m+[m[32m    font-size: 30px;[m
[32m+[m[32m    line-height: 26px;[m
[32m+[m[32m    margin-bottom: 27px;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .hotel-search__description br {[m
[32m+[m[32m    display: block;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .hotel-search__button {[m
[32m+[m[32m    margin-top: 50px;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (min-width: $desktop-width) {[m
[32m+[m[32m  .hotel-search__wrapper {[m
[32m+[m[32m    margin: 56px auto 66px;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m//---------------------------  blocks/page-footer.less -------------------------[m
[32m+[m
[32m+[m[32m.page-footer {[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  background-color: white;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.page-footer__wrapper {[m
[32m+[m[32m  width: 280px;[m
[32m+[m[32m  margin: 0 auto;[m
[32m+[m[32m  padding: 40px 20px 20px;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  word-wrap: break-word;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.page-footer__hashtag {[m
[32m+[m[32m  min-width: 140px;[m
[32m+[m[32m  margin: 0 auto;[m
[32m+[m[32m  margin-bottom: 40px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.page-footer__hashtag {[m
[32m+[m[32m  font-size: 21px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.page-footer__social {[m
[32m+[m[32m  width: 151px;[m
[32m+[m[32m  margin: 0 auto;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.page-footer__copyright {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  justify-content: center;[m
[32m+[m[32m  flex-wrap: wrap;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (min-width: $tablet-width) {[m
[32m+[m[32m  .page-footer {[m
[32m+[m[32m    min-height: 120px;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .page-footer__wrapper {[m
[32m+[m[32m    width: 84%;[m
[32m+[m[32m    padding: 36px 0 36px;[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    align-items: center;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .page-footer__hashtag {[m
[32m+[m[32m    width: 196px;[m
[32m+[m[32m    margin: 0;[m
[32m+[m[32m    text-align: start;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .page-footer__social {[m
[32m+[m[32m    width: 33%;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  .page-footer__copyright {[m
[32m+[m[32m    margin: 0;[m
[32m+[m[32m    width: 196px;[m
[32m+[m[32m    justify-content: flex-end;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (min-width: $desktop-width) {[m
[32m+[m[32m  .page-footer__wrapper {[m
[32m+[m[32m    width: 80%;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m//---------------------------  blocks/social__list.less -------------------------[m
[32m+[m
[32m+[m[32m.social__list {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  justify-content: flex-start;[m
[32m+[m
[32m+[m[32m  flex-wrap: wrap;[m
[32m+[m
[32m+[m[32m  list-style: none;[m
[32m+[m[32m  padding: 0;[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-bottom: 40px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.social__item {[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  width: 46px;[m
[32m+[m[32m  height: 48px;[m
[32m+[m[32m  margin-right: 5px;[m
[32m+[m[32m  margin-bottom: 5px;[m
[32m+[m[32m  background-color: $bg-blue;[m
[32m+[m[32m  cursor: pointer;[m
[32m+[m
[32m+[m[32m  &:nth-child(3n) {[m
[32m+[m[32m    margin-right: 0;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  &:hover {[m
[32m+[m[32m    background-color: $bg-blue-hover;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  &:active {[m
[32m+[m[32m    background-color: $bg-blue-down;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.social__link {[m
[32m+[m[32m  display: inline-block;[m
[32m+[m[32m  position: relative;[m
[32m+[m[32m  top: 30%;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (min-width: $tablet-width) {[m
[32m+[m[32m  .social__list {[m
[32m+[m[32m    margin: 0 auto;[m
[32m+[m[32m    width: 151px;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m//---------------------------  blocks/copyright.less -------------------------[m
[32m+[m
[32m+[m[32m.copyright__link {[m
[32m+[m[32m  margin-left: 10px;[m
[32m+[m
[32m+[m[32m  &:hover {[m
[32m+[m[32m    path {[m
[32m+[m[32m      fill: $bg-blue;[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  &:active {[m
[32m+[m[32m    path {[m
[32m+[m[32m      fill: #b2b2b2;[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m.copyright__logo {[m
[32m+[m[32m  display: block;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.copyright__text {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (min-width: $tablet-width) {[m
[32m+[m[32m}[m
[1mdiff --git a/app/css/style.css b/app/css/style.css[m
[1mnew file mode 100644[m
[1mindex 0000000..0fc1ef8[m
[1m--- /dev/null[m
[1m+++ b/app/css/style.css[m
[36m@@ -0,0 +1,953 @@[m
[32m+[m[32m@font-face {[m
[32m+[m[32m  font-family: "PT Sans";[m
[32m+[m[32m  src: url(/app/fonts/PTSans-Regular.ttf);[m
[32m+[m[32m  src: url(/app/fonts/PTSans-Bold.ttf)[m
[32m+[m[32m}[m
[32m+[m[32mbody {[m
[32m+[m[32m  min-width: 320px;[m
[32m+[m[32m  max-width: 1200px;[m
[32m+[m[32m  margin: 0 auto;[m
[32m+[m[32m  padding: 0;[m
[32m+[m[32m  background-color: #f2f2f2;[m
[32m+[m[32m  font-size: 14px;[m
[32m+[m[32m  line-height: 26px;[m
[32m+[m[32m  font-family: "PT Sans",Arial,sans-serif;[m
[32m+[m[32m  color: #333;[m
[32m+[m[32m  font-style: normal;[m
[32m+[m[32m  text-transform: uppercase;[m
[32m+[m[32m  -webkit-box-shadow: 0 0 20px .5px rgba(0,0,0,.2);[m
[32m+[m[32m  box-shadow: 0 0 20px .5px rgba(0,0,0,.2)[m
[32m+[m[32m}[m
[32m+[m[32mimg {[m
[32m+[m[32m  max-width: 100%;[m
[32m+[m[32m  height: auto[m
[32m+[m[32m}[m
[32m+[m[32ma {[m
[32m+[m[32m  text-decoration: none[m
[32m+[m[32m}[m
[32m+[m[32m.button {[m
[32m+[m[32m  display: block;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  padding: 15px 46px;[m
[32m+[m[32m  background-color: #81b3d2;[m
[32m+[m[32m  color: #fff;[m
[32m+[m[32m  font-size: 18px;[m
[32m+[m[32m  font-weight: 700[m
[32m+[m[32m}[m
[32m+[m[32m.visually-hidden:not(:focus):not(:active) {[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  width: 1px;[m
[32m+[m[32m  height: 1px;[m
[32m+[m[32m  margin: -1px;[m
[32m+[m[32m  border: 0;[m
[32m+[m[32m  padding: 0;[m
[32m+[m[32m  white-space: nowrap;[m
[32m+[m[32m  -webkit-clip-path: inset(100%);[m
[32m+[m[32m  clip-path: inset(100%);[m
[32m+[m[32m  clip: rect(0 0 0 0);[m
[32m+[m[32m  overflow: hidden[m
[32m+[m[32m}[m
[32m+[m[32m.page-header {[m
[32m+[m[32m  display: -webkit-box;[m
[32m+[m[32m  display: -ms-flexbox;[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  -webkit-box-orient: vertical;[m
[32m+[m[32m  -webkit-box-direction: normal;[m
[32m+[m[32m  -ms-flex-direction: column;[m
[32m+[m[32m  flex-direction: column;[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  min-height: 56px;[m
[32m+[m[32m  background-color: #fff[m
[32m+[m[32m}[m
[32m+[m[32m.page-header__nav {[m
[32m+[m[32m  display: -webkit-box;[m
[32m+[m[32m  display: -ms-flexbox;[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  width: 280px;[m
[32m+[m[32m  margin: 0 auto;[m
[32m+[m[32m  padding: 0 20px[m
[32m+[m[32m}[m
[32m+[m[32m.page-header__logo {[m
[32m+[m[32m  height: 83px;[m
[32m+[m[32m  margin-left: auto;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  z-index: 1[m
[32m+[m[32m}[m
[32m+[m[32m.page-header__logo-image {[m
[32m+[m[32m  height: 83px;[m
[32m+[m[32m  width: 102px[m
[32m+[m[32m}[m
[32m+[m[32m.page-header__toggle {[m
[32m+[m[32m  position: relative;[m
[32m+[m[32m  display: block;[m
[32m+[m[32m  width: 23px;[m
[32m+[m[32m  height: 22px;[m
[32m+[m[32m  margin-left: 66px;[m
[32m+[m[32m  margin-top: 17px;[m
[32m+[m[32m  cursor: pointer;[m
[32m+[m[32m  border: none;[m
[32m+[m[32m  background-color: #fff[m
[32m+[m[32m}[m
[32m+[m[32m.page-header__toggle--closed::before {[m
[32m+[m[32m  content: "";[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  top: 0;[m
[32m+[m[32m  left: 0;[m
[32m+[m[32m  width: 23px;[m
[32m+[m[32m  height: 4px;[m
[32m+[m[32m  background-color: #81b3d2;[m
[32m+[m[32m  -webkit-box-shadow: 0 8px 0 0 #81b3d2,0 16px 0 0 #81b3d2;[m
[32m+[m[32m  box-shadow: 0 8px 0 0 #81b3d2,0 16px 0 0 #81b3d2[m
[32m+[m[32m}[m
[32m+[m[32m.page-header__toggle--opened::before {[m
[32m+[m[32m  content: "";[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  top: 9px;[m
[32m+[m[32m  left: 0;[m
[32m+[m[32m  width: 23px;[m
[32m+[m[32m  height: 4px;[m
[32m+[m[32m  -webkit-transform: rotate(45deg);[m
[32m+[m[32m  -ms-transform: rotate(45deg);[m
[32m+[m[32m  transform: rotate(45deg);[m
[32m+[m[32m  background-color: #81b3d2[m
[32m+[m[32m}[m
[32m+[m[32m.page-header__toggle--opened::after {[m
[32m+[m[32m  content: "";[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  top: 9px;[m
[32m+[m[32m  left: 0;[m
[32m+[m[32m  width: 23px;[m
[32m+[m[32m  height: 4px;[m
[32m+[m[32m  -webkit-transform: rotate(-45deg);[m
[32m+[m[32m  -ms-transform: rotate(-45deg);[m
[32m+[m[32m  transform: rotate(-45deg);[m
[32m+[m[32m  background-color: #81b3d2[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:768px) {[m
[32m+[m[32m  .page-header {[m
[32m+[m[32m    display: -webkit-box;[m
[32m+[m[32m    display: -ms-flexbox;[m
[32m+[m[32m    display: flex[m
[32m+[m[32m  }[m
[32m+[m[32m  .page-header__nav {[m
[32m+[m[32m    width: 102px;[m
[32m+[m[32m    padding: 0;[m
[32m+[m[32m    margin-top: -56px[m
[32m+[m[32m  }[m
[32m+[m[32m  .page-header__toggle {[m
[32m+[m[32m    display: none[m
[32m+[m[32m  }[m
[32m+[m[32m  .page-header__logo {[m
[32m+[m[32m    margin: 0 auto[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:1200px) {[m
[32m+[m[32m  .page-header__nav {[m
[32m+[m[32m    width: 188px[m
[32m+[m[32m  }[m
[32m+[m[32m  .page-header__logo-image {[m
[32m+[m[32m    width: 188px;[m
[32m+[m[32m    height: 96px[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m.page-main {[m
[32m+[m[32m  background-color: #fff[m
[32m+[m[32m}[m
[32m+[m[32m.main-nav {[m
[32m+[m[32m  display: none;[m
[32m+[m[32m  width: 100%[m
[32m+[m[32m}[m
[32m+[m[32m.main-nav-opened {[m
[32m+[m[32m  display: block[m
[32m+[m[32m}[m
[32m+[m[32m.main-nav__list {[m
[32m+[m[32m  position: relative;[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  padding: 0;[m
[32m+[m[32m  list-style: none[m
[32m+[m[32m}[m
[32m+[m[32m.main-nav__list::before {[m
[32m+[m[32m  content: "";[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  bottom: 0;[m
[32m+[m[32m  left: 0;[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  height: 10px;[m
[32m+[m[32m  -webkit-box-shadow: inset 0 -8px 10px -10px rgba(0,0,0,.5);[m
[32m+[m[32m  box-shadow: inset 0 -8px 10px -10px rgba(0,0,0,.5)[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:768px) {[m
[32m+[m[32m  .main-nav {[m
[32m+[m[32m    display: block;[m
[32m+[m[32m    min-height: 56px[m
[32m+[m[32m  }[m
[32m+[m[32m  .main-nav__wrapper {[m
[32m+[m[32m    width: 100%[m
[32m+[m[32m  }[m
[32m+[m[32m  .main-nav__list {[m
[32m+[m[32m    display: -webkit-box;[m
[32m+[m[32m    display: -ms-flexbox;[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    -ms-flex-wrap: wrap;[m
[32m+[m[32m    flex-wrap: wrap;[m
[32m+[m[32m    -webkit-box-pack: justify;[m
[32m+[m[32m    -ms-flex-pack: justify;[m
[32m+[m[32m    justify-content: space-between[m
[32m+[m[32m  }[m
[32m+[m[32m  .main-nav__list::before {[m
[32m+[m[32m    display: none[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:1200px) {[m
[32m+[m[32m  .main-nav__wrapper {[m
[32m+[m[32m    width: 1200px;[m
[32m+[m[32m    margin: 0 auto[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m.site-list__item {[m
[32m+[m[32m  font-weight: 700;[m
[32m+[m[32m  min-height: 56px;[m
[32m+[m[32m  word-wrap: break-word;[m
[32m+[m[32m  background-color: #81b3d2;[m
[32m+[m[32m  border-top: 1px solid #9ac2db;[m
[32m+[m[32m  border-bottom: 1px solid #678fa8[m
[32m+[m[32m}[m
[32m+[m[32m.site-list__item:nth-child(1) {[m
[32m+[m[32m  border-top: none[m
[32m+[m[32m}[m
[32m+[m[32m.site-list__item:nth-child(4) {[m
[32m+[m[32m  border-bottom: none[m
[32m+[m[32m}[m
[32m+[m[32m.site-list__item a {[m
[32m+[m[32m  display: block;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  padding: 18px 70px;[m
[32m+[m[32m  color: #fff;[m
[32m+[m[32m  font-size: 18px[m
[32m+[m[32m}[m
[32m+[m[32m.site-list__item a[href]:hover {[m
[32m+[m[32m  color: #81b3d2[m
[32m+[m[32m}[m
[32m+[m[32m.site-list__item a[href]:active {[m
[32m+[m[32m  color: #cacaca[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:768px) {[m
[32m+[m[32m  .site-list__item {[m
[32m+[m[32m    width: 166px;[m
[32m+[m[32m    min-height: 56px;[m
[32m+[m[32m    border: 0;[m
[32m+[m[32m    background-color: #fff[m
[32m+[m[32m  }[m
[32m+[m[32m  .site-list__item:nth-child(2) {[m
[32m+[m[32m    margin-right: 80px[m
[32m+[m[32m  }[m
[32m+[m[32m  .site-list__item:nth-child(3) {[m
[32m+[m[32m    margin-left: 80px[m
[32m+[m[32m  }[m
[32m+[m[32m  .site-list__item a {[m
[32m+[m[32m    font-size: 14px;[m
[32m+[m[32m    line-height: 24px;[m
[32m+[m[32m    padding: 15px 15px;[m
[32m+[m[32m    color: #000[m
[32m+[m[32m  }[m
[32m+[m[32m  .site-list__item--active a {[m
[32m+[m[32m    color: #766357[m
[32m+[m[32m  }[m
[32m+[m[32m  .site-list__item--active a:hover {[m
[32m+[m[32m    color: #604e43[m
[32m+[m[32m  }[m
[32m+[m[32m  .site-list__item--active a:active {[m
[32m+[m[32m    color: #dbd8d5[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:767px) and (max-width:824px) {[m
[32m+[m[32m  .site-list__item:nth-child(2) {[m
[32m+[m[32m    margin-right: 51px[m
[32m+[m[32m  }[m
[32m+[m[32m  .site-list__item:nth-child(3) {[m
[32m+[m[32m    margin-left: 51px[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:1200px) {[m
[32m+[m[32m  .site-list__item {[m
[32m+[m[32m    width: 253px[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m.intro__image-wrapper {[m
[32m+[m[32m  margin-top: -27px;[m
[32m+[m[32m  height: 389px;[m
[32m+[m[32m  background-color: #e5f2fa;[m
[32m+[m[32m  background-image: url(../img/bg-image-intro/bg-image-intro.jpg);[m
[32m+[m[32m  background-repeat: no-repeat;[m
[32m+[m[32m  background-position: center 0;[m
[32m+[m[32m  background-size: cover[m
[32m+[m[32m}[m
[32m+[m[32m@media (-webkit-min-device-pixel-ratio:1.5),[m
[32m+[m[32m(-o-min-device-pixel-ratio:3/2),[m
[32m+[m[32m(min-resolution:144dpi),[m
[32m+[m[32m(min-resolution:1.5dppx) {[m
[32m+[m[32m  .intro__image-wrapper {[m
[32m+[m[32m    background-image: url(../img/bg-image-intro/bg-image-intro@2x.jpg)[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m.intro__image {[m
[32m+[m[32m  display: block;[m
[32m+[m[32m  margin: 0 auto;[m
[32m+[m[32m  padding-top: 90px;[m
[32m+[m[32m  width: 282px;[m
[32m+[m[32m  height: auto[m
[32m+[m[32m}[m
[32m+[m[32m.intro__wrapper {[m
[32m+[m[32m  margin: 0 auto;[m
[32m+[m[32m  padding: 0 6.25%;[m
[32m+[m[32m  padding-top: 43px;[m
[32m+[m[32m  padding-bottom: 32px;[m
[32m+[m[32m  text-align: center[m
[32m+[m[32m}[m
[32m+[m[32m.intro__slogan {[m
[32m+[m[32m  display: block;[m
[32m+[m[32m  margin-bottom: 33px;[m
[32m+[m[32m  font-size: 18px;[m
[32m+[m[32m  font-weight: 700[m
[32m+[m[32m}[m
[32m+[m[32m.intro__reasons {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-top: 10px[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:768px) {[m
[32m+[m[32m  .intro__image-wrapper {[m
[32m+[m[32m    height: 518px[m
[32m+[m[32m  }[m
[32m+[m[32m  .intro__image {[m
[32m+[m[32m    padding-top: 77px;[m
[32m+[m[32m    width: 460px;[m
[32m+[m[32m    height: 350px[m
[32m+[m[32m  }[m
[32m+[m[32m  .intro__wrapper {[m
[32m+[m[32m    max-width: 550px;[m
[32m+[m[32m    padding-top: 50px;[m
[32m+[m[32m    padding-bottom: 48px[m
[32m+[m[32m  }[m
[32m+[m[32m  .intro__slogan {[m
[32m+[m[32m    margin-bottom: 30px;[m
[32m+[m[32m    font-size: 21px[m
[32m+[m[32m  }[m
[32m+[m[32m  .intro__slogan br {[m
[32m+[m[32m    display: none[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m.content-top__habitation {[m
[32m+[m[32m  position: relative;[m
[32m+[m[32m  background-color: #81b3d2;[m
[32m+[m[32m  display: -webkit-box;[m
[32m+[m[32m  display: -ms-flexbox;[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  -webkit-box-pack: center;[m
[32m+[m[32m  -ms-flex-pack: center;[m
[32m+[m[32m  justify-content: center;[m
[32m+[m[32m  -webkit-box-align: center;[m
[32m+[m[32m  -ms-flex-align: center;[m
[32m+[m[32m  align-items: center[m
[32m+[m[32m}[m
[32m+[m[32m.content-top__habitation-layer {[m
[32m+[m[32m  background-color: #81b3d2;[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  top: 0;[m
[32m+[m[32m  left: 0[m
[32m+[m[32m}[m
[32m+[m[32m.content-top__habitation-wrapper {[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  padding: 17% 20px 14% 20px;[m
[32m+[m[32m  color: #fff[m
[32m+[m[32m}[m
[32m+[m[32m.content-top__title {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-bottom: 14px[m
[32m+[m[32m}[m
[32m+[m[32m.content-top__title br {[m
[32m+[m[32m  display: none[m
[32m+[m[32m}[m
[32m+[m[32m.content-top__number {[m
[32m+[m[32m  position: relative;[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-bottom: 14px;[m
[32m+[m[32m  line-height: 21px[m
[32m+[m[32m}[m
[32m+[m[32m.content-top__number::before {[m
[32m+[m[32m  content: "";[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  left: 40%;[m
[32m+[m[32m  top: 50%;[m
[32m+[m[32m  width: 8px;[m
[32m+[m[32m  height: 2px;[m
[32m+[m[32m  background-color: rgba(255,255,255,.5)[m
[32m+[m[32m}[m
[32m+[m[32m.content-top__number::after {[m
[32m+[m[32m  content: "";[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  right: 40%;[m
[32m+[m[32m  top: 50%;[m
[32m+[m[32m  width: 8px;[m
[32m+[m[32m  height: 2px;[m
[32m+[m[32m  background-color: rgba(255,255,255,.5)[m
[32m+[m[32m}[m
[32m+[m[32m.content-top__description {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-top: 10px;[m
[32m+[m[32m  line-height: 21px[m
[32m+[m[32m}[m
[32m+[m[32m.content-top__image-sity {[m
[32m+[m[32m  display: block;[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  height: 260px;[m
[32m+[m[32m  -o-object-fit: cover;[m
[32m+[m[32m  object-fit: cover[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:768px) {[m
[32m+[m[32m  .content-top__wrapper {[m
[32m+[m[32m    display: -webkit-box;[m
[32m+[m[32m    display: -ms-flexbox;[m
[32m+[m[32m    display: flex[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-top__habitation {[m
[32m+[m[32m    width: 33%[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-top__habitation-wrapper {[m
[32m+[m[32m    padding: 45px[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-top__habitation-layer {[m
[32m+[m[32m    display: none[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-top__image-sity-wrapper {[m
[32m+[m[32m    width: 67%[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-top__title br {[m
[32m+[m[32m    display: block[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-top__number::before {[m
[32m+[m[32m    left: 35%[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-top__number::after {[m
[32m+[m[32m    right: 35%[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-top__image-sity {[m
[32m+[m[32m    width: 100%;[m
[32m+[m[32m    height: 100%;[m
[32m+[m[32m    -o-object-fit: cover;[m
[32m+[m[32m    object-fit: cover[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:1200px) {[m
[32m+[m[32m  .content-top__number::before {[m
[32m+[m[32m    left: 40%[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-top__number::after {[m
[32m+[m[32m    right: 40%[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-top__habitation-wrapper {[m
[32m+[m[32m    padding: 45px 60px[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m.content-top__advantages-wrapper {[m
[32m+[m[32m  padding: 0 6.25%;[m
[32m+[m[32m  margin-top: 40px[m
[32m+[m[32m}[m
[32m+[m[32m.content-top__advantages {[m
[32m+[m[32m  list-style: none;[m
[32m+[m[32m  margin-top: 25px;[m
[32m+[m[32m  margin-bottom: 40px;[m
[32m+[m[32m  padding: 0[m
[32m+[m[32m}[m
[32m+[m[32m.content-top__item {[m
[32m+[m[32m  position: relative;[m
[32m+[m[32m  padding-left: 16%;[m
[32m+[m[32m  word-wrap: break-word[m
[32m+[m[32m}[m
[32m+[m[32m.content-top__item--houses::before {[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  content: "";[m
[32m+[m[32m  width: 39px;[m
[32m+[m[32m  height: 37px;[m
[32m+[m[32m  top: -10px;[m
[32m+[m[32m  left: 0;[m
[32m+[m[32m  background-image: url(../img/icon-house.svg);[m
[32m+[m[32m  background-repeat: no-repeat;[m
[32m+[m[32m  background-position: center;[m
[32m+[m[32m  background-size: contain[m
[32m+[m[32m}[m
[32m+[m[32m.content-top__item--souvenirs::before {[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  content: "";[m
[32m+[m[32m  width: 39px;[m
[32m+[m[32m  height: 37px;[m
[32m+[m[32m  top: -10px;[m
[32m+[m[32m  left: 0;[m
[32m+[m[32m  background-image: url(../img/icon-souvenirs.svg);[m
[32m+[m[32m  background-repeat: no-repeat;[m
[32m+[m[32m  background-position: center;[m
[32m+[m[32m  background-size: contain[m
[32m+[m[32m}[m
[32m+[m[32m.content-top__item--eat::before {[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  content: "";[m
[32m+[m[32m  width: 39px;[m
[32m+[m[32m  height: 37px;[m
[32m+[m[32m  top: -10px;[m
[32m+[m[32m  left: 0;[m
[32m+[m[32m  background-image: url(../img/icon-eat.svg);[m
[32m+[m[32m  background-repeat: no-repeat;[m
[32m+[m[32m  background-position: center;[m
[32m+[m[32m  background-size: contain[m
[32m+[m[32m}[m
[32m+[m[32m.content-top__title-advantages {[m
[32m+[m[32m  margin: 0[m
[32m+[m[32m}[m
[32m+[m[32m.content-top__description-advantages {[m
[32m+[m[32m  margin-top: 24px;[m
[32m+[m[32m  margin-bottom: 40px;[m
[32m+[m[32m  line-height: 21px[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:768px) {[m
[32m+[m[32m  .content-top__advantages-wrapper {[m
[32m+[m[32m    padding: 0;[m
[32m+[m[32m    margin: 0;[m
[32m+[m[32m    text-align: center[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-top__advantages {[m
[32m+[m[32m    display: -webkit-box;[m
[32m+[m[32m    display: -ms-flexbox;[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    min-height: 330px;[m
[32m+[m[32m    margin: 0;[m
[32m+[m[32m    padding: 0[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-top__item {[m
[32m+[m[32m    width: 33%;[m
[32m+[m[32m    padding-top: 160px;[m
[32m+[m[32m    padding-bottom: 55px;[m
[32m+[m[32m    padding-right: 45px;[m
[32m+[m[32m    padding-left: 45px[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-top__item::before {[m
[32m+[m[32m    width: 77px;[m
[32m+[m[32m    height: 75px;[m
[32m+[m[32m    top: 58px;[m
[32m+[m[32m    left: calc(50% - 38.5px)[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-top__item--souvenirs {[m
[32m+[m[32m    -webkit-box-ordinal-group: 2;[m
[32m+[m[32m    -ms-flex-order: 1;[m
[32m+[m[32m    order: 1[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:768px) and (min-width:1200px) {[m
[32m+[m[32m  .content-top__item {[m
[32m+[m[32m    padding-right: 50px;[m
[32m+[m[32m    padding-left: 50px[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:768px) {[m
[32m+[m[32m  .content-top__title-advantages {[m
[32m+[m[32m    margin-bottom: 20px[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:768px) {[m
[32m+[m[32m  .content-top__description-advantages {[m
[32m+[m[32m    margin-bottom: 10px[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m.content-bottom__bridge {[m
[32m+[m[32m  background-color: #81b3d2;[m
[32m+[m[32m  min-height: 191px;[m
[32m+[m[32m  display: -webkit-box;[m
[32m+[m[32m  display: -ms-flexbox;[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  -webkit-box-pack: center;[m
[32m+[m[32m  -ms-flex-pack: center;[m
[32m+[m[32m  justify-content: center;[m
[32m+[m[32m  -webkit-box-align: center;[m
[32m+[m[32m  -ms-flex-align: center;[m
[32m+[m[32m  align-items: center[m
[32m+[m[32m}[m
[32m+[m[32m.content-bottom__bridge-wrapper {[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  padding: 45px 6.25%;[m
[32m+[m[32m  color: #fff[m
[32m+[m[32m}[m
[32m+[m[32m.content-bottom__title {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-bottom: 14px[m
[32m+[m[32m}[m
[32m+[m[32m.content-bottom__title br {[m
[32m+[m[32m  display: none[m
[32m+[m[32m}[m
[32m+[m[32m.content-bottom__number {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-bottom: 14px;[m
[32m+[m[32m  line-height: 21px;[m
[32m+[m[32m  position: relative[m
[32m+[m[32m}[m
[32m+[m[32m.content-bottom__number::before {[m
[32m+[m[32m  content: "";[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  left: 40%;[m
[32m+[m[32m  top: 50%;[m
[32m+[m[32m  width: 8px;[m
[32m+[m[32m  height: 2px;[m
[32m+[m[32m  background-color: rgba(255,255,255,.5)[m
[32m+[m[32m}[m
[32m+[m[32m.content-bottom__number::after {[m
[32m+[m[32m  content: "";[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  right: 40%;[m
[32m+[m[32m  top: 50%;[m
[32m+[m[32m  width: 8px;[m
[32m+[m[32m  height: 2px;[m
[32m+[m[32m  background-color: rgba(255,255,255,.5)[m
[32m+[m[32m}[m
[32m+[m[32m.content-bottom__description {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-top: 10px;[m
[32m+[m[32m  line-height: 21px[m
[32m+[m[32m}[m
[32m+[m[32m.content-bottom__image-bridge {[m
[32m+[m[32m  display: block;[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  height: 260px;[m
[32m+[m[32m  -o-object-fit: cover;[m
[32m+[m[32m  object-fit: cover[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:768px) {[m
[32m+[m[32m  .content-bottom {[m
[32m+[m[32m    width: 100%[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-bottom__wrapper {[m
[32m+[m[32m    display: -webkit-box;[m
[32m+[m[32m    display: -ms-flexbox;[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    min-height: 256px[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-bottom__bridge {[m
[32m+[m[32m    width: 33%;[m
[32m+[m[32m    -webkit-box-ordinal-group: 2;[m
[32m+[m[32m    -ms-flex-order: 1;[m
[32m+[m[32m    order: 1[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-bottom__bridge-wrapper {[m
[32m+[m[32m    padding: 45px 45px 48px 45px[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-bottom__title br {[m
[32m+[m[32m    display: block[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-bottom__number::before {[m
[32m+[m[32m    left: 35%[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-bottom__number::after {[m
[32m+[m[32m    right: 35%[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-bottom__image-bridge-wrapper {[m
[32m+[m[32m    width: 67%[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-bottom__image-bridge {[m
[32m+[m[32m    width: 100%;[m
[32m+[m[32m    height: 100%;[m
[32m+[m[32m    -o-object-fit: cover;[m
[32m+[m[32m    object-fit: cover[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:1200px) {[m
[32m+[m[32m  .content-bottom__number::before {[m
[32m+[m[32m    left: 40%[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-bottom__number::after {[m
[32m+[m[32m    right: 40%[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-bottom__bridge-wrapper {[m
[32m+[m[32m    padding: 45px 90px 48px[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m.content-bottom__list-wrapper {[m
[32m+[m[32m  padding: 0 6.25%;[m
[32m+[m[32m  background-color: #eee[m
[32m+[m[32m}[m
[32m+[m[32m.content-bottom__list {[m
[32m+[m[32m  position: relative;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  padding: 30px 5% 30px;[m
[32m+[m[32m  color: #000[m
[32m+[m[32m}[m
[32m+[m[32m.content-bottom__list:not(:last-child)::after {[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  content: "";[m
[32m+[m[32m  bottom: 0;[m
[32m+[m[32m  left: 0;[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  height: 1px;[m
[32m+[m[32m  background-color: rgba(0,0,0,.1)[m
[32m+[m[32m}[m
[32m+[m[32m.content-bottom__title-advantages {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-bottom: 17px[m
[32m+[m[32m}[m
[32m+[m[32m.content-bottom__title-advantages br {[m
[32m+[m[32m  display: none[m
[32m+[m[32m}[m
[32m+[m[32m.content-bottom__number-advantages {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-bottom: 14px;[m
[32m+[m[32m  position: relative[m
[32m+[m[32m}[m
[32m+[m[32m.content-bottom__number-advantages::before {[m
[32m+[m[32m  content: "";[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  left: 40%;[m
[32m+[m[32m  top: 50%;[m
[32m+[m[32m  width: 8px;[m
[32m+[m[32m  height: 2px;[m
[32m+[m[32m  background-color: rgba(0,0,0,.5)[m
[32m+[m[32m}[m
[32m+[m[32m.content-bottom__number-advantages::after {[m
[32m+[m[32m  content: "";[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  right: 40%;[m
[32m+[m[32m  top: 50%;[m
[32m+[m[32m  width: 8px;[m
[32m+[m[32m  height: 2px;[m
[32m+[m[32m  background-color: rgba(0,0,0,.5)[m
[32m+[m[32m}[m
[32m+[m[32m.content-bottom__description-advantages {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-top: 10px;[m
[32m+[m[32m  word-wrap: break-word;[m
[32m+[m[32m  line-height: 21px[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:768px) {[m
[32m+[m[32m  .content-bottom__list-wrapper {[m
[32m+[m[32m    display: -webkit-box;[m
[32m+[m[32m    display: -ms-flexbox;[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    -ms-flex-wrap: wrap;[m
[32m+[m[32m    flex-wrap: wrap;[m
[32m+[m[32m    -webkit-box-pack: center;[m
[32m+[m[32m    -ms-flex-pack: center;[m
[32m+[m[32m    justify-content: center;[m
[32m+[m[32m    min-height: 256px;[m
[32m+[m[32m    padding: 0[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-bottom__list {[m
[32m+[m[32m    -webkit-box-sizing: border-box;[m
[32m+[m[32m    box-sizing: border-box;[m
[32m+[m[32m    width: 33%;[m
[32m+[m[32m    padding: 45px;[m
[32m+[m[32m    padding-bottom: 48px[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-bottom__list::after {[m
[32m+[m[32m    display: none[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-bottom__title-advantages br {[m
[32m+[m[32m    display: block[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-bottom__number-advantages::before {[m
[32m+[m[32m    left: 35%[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-bottom__number-advantages::after {[m
[32m+[m[32m    right: 35%[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:1200px) {[m
[32m+[m[32m  .content-bottom__number-advantages::before {[m
[32m+[m[32m    left: 40%[m
[32m+[m[32m  }[m
[32m+[m[32m  .content-bottom__number-advantages::after {[m
[32m+[m[32m    right: 40%[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m.hotel-search__wrapper {[m
[32m+[m[32m  padding: 0 6.25%;[m
[32m+[m[32m  margin-top: 31px;[m
[32m+[m[32m  margin-bottom: 49px;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  word-wrap: break-word[m
[32m+[m[32m}[m
[32m+[m[32m.hotel-search__title {[m
[32m+[m[32m  font-size: 21px;[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-bottom: 20px[m
[32m+[m[32m}[m
[32m+[m[32m.hotel-search__description {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-top: 10px[m
[32m+[m[32m}[m
[32m+[m[32m.hotel-search__description br {[m
[32m+[m[32m  display: none[m
[32m+[m[32m}[m
[32m+[m[32m.hotel-search__button {[m
[32m+[m[32m  margin-top: 40px;[m
[32m+[m[32m  font-size: 21px[m
[32m+[m[32m}[m
[32m+[m[32m.hotel-search__button:hover {[m
[32m+[m[32m  background-color: #669ec0[m
[32m+[m[32m}[m
[32m+[m[32m.hotel-search__button:active {[m
[32m+[m[32m  background-color: #5496bd;[m
[32m+[m[32m  color: rgba(255,255,255,.3)[m
[32m+[m[32m}[m
[32m+[m[32m.hotel-search__map {[m
[32m+[m[32m  display: block;[m
[32m+[m[32m  min-height: 350px;[m
[32m+[m[32m  -o-object-fit: cover;[m
[32m+[m[32m  object-fit: cover[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:768px) {[m
[32m+[m[32m  .hotel-search__wrapper {[m
[32m+[m[32m    width: 59.8%;[m
[32m+[m[32m    max-width: 460px;[m
[32m+[m[32m    margin: 52px auto 58px;[m
[32m+[m[32m    padding: 0[m
[32m+[m[32m  }[m
[32m+[m[32m  .hotel-search__title {[m
[32m+[m[32m    font-size: 30px;[m
[32m+[m[32m    line-height: 26px;[m
[32m+[m[32m    margin-bottom: 27px[m
[32m+[m[32m  }[m
[32m+[m[32m  .hotel-search__description br {[m
[32m+[m[32m    display: block[m
[32m+[m[32m  }[m
[32m+[m[32m  .hotel-search__button {[m
[32m+[m[32m    margin-top: 50px[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:1200px) {[m
[32m+[m[32m  .hotel-search__wrapper {[m
[32m+[m[32m    margin: 56px auto 66px[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m.page-footer {[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  background-color: #fff[m
[32m+[m[32m}[m
[32m+[m[32m.page-footer__wrapper {[m
[32m+[m[32m  width: 280px;[m
[32m+[m[32m  margin: 0 auto;[m
[32m+[m[32m  padding: 40px 20px 20px;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  word-wrap: break-word[m
[32m+[m[32m}[m
[32m+[m[32m.page-footer__hashtag {[m
[32m+[m[32m  min-width: 140px;[m
[32m+[m[32m  margin: 0 auto;[m
[32m+[m[32m  margin-bottom: 40px[m
[32m+[m[32m}[m
[32m+[m[32m.page-footer__hashtag {[m
[32m+[m[32m  font-size: 21px[m
[32m+[m[32m}[m
[32m+[m[32m.page-footer__social {[m
[32m+[m[32m  width: 151px;[m
[32m+[m[32m  margin: 0 auto[m
[32m+[m[32m}[m
[32m+[m[32m.page-footer__copyright {[m
[32m+[m[32m  display: -webkit-box;[m
[32m+[m[32m  display: -ms-flexbox;[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  -webkit-box-pack: center;[m
[32m+[m[32m  -ms-flex-pack: center;[m
[32m+[m[32m  justify-content: center;[m
[32m+[m[32m  -ms-flex-wrap: wrap;[m
[32m+[m[32m  flex-wrap: wrap;[m
[32m+[m[32m  -webkit-box-align: center;[m
[32m+[m[32m  -ms-flex-align: center;[m
[32m+[m[32m  align-items: center[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:768px) {[m
[32m+[m[32m  .page-footer {[m
[32m+[m[32m    min-height: 120px[m
[32m+[m[32m  }[m
[32m+[m[32m  .page-footer__wrapper {[m
[32m+[m[32m    width: 84%;[m
[32m+[m[32m    padding: 36px 0 36px;[m
[32m+[m[32m    display: -webkit-box;[m
[32m+[m[32m    display: -ms-flexbox;[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    -webkit-box-align: center;[m
[32m+[m[32m    -ms-flex-align: center;[m
[32m+[m[32m    align-items: center[m
[32m+[m[32m  }[m
[32m+[m[32m  .page-footer__hashtag {[m
[32m+[m[32m    width: 196px;[m
[32m+[m[32m    margin: 0;[m
[32m+[m[32m    text-align: start[m
[32m+[m[32m  }[m
[32m+[m[32m  .page-footer__social {[m
[32m+[m[32m    width: 33%[m
[32m+[m[32m  }[m
[32m+[m[32m  .page-footer__copyright {[m
[32m+[m[32m    margin: 0;[m
[32m+[m[32m    width: 196px;[m
[32m+[m[32m    -webkit-box-pack: end;[m
[32m+[m[32m    -ms-flex-pack: end;[m
[32m+[m[32m    justify-content: flex-end[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:1200px) {[m
[32m+[m[32m  .page-footer__wrapper {[m
[32m+[m[32m    width: 80%[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m.social__list {[m
[32m+[m[32m  display: -webkit-box;[m
[32m+[m[32m  display: -ms-flexbox;[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  -webkit-box-pack: start;[m
[32m+[m[32m  -ms-flex-pack: start;[m
[32m+[m[32m  justify-content: flex-start;[m
[32m+[m[32m  -ms-flex-wrap: wrap;[m
[32m+[m[32m  flex-wrap: wrap;[m
[32m+[m[32m  list-style: none;[m
[32m+[m[32m  padding: 0;[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  margin-bottom: 40px[m
[32m+[m[32m}[m
[32m+[m[32m.social__item {[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  width: 46px;[m
[32m+[m[32m  height: 48px;[m
[32m+[m[32m  margin-right: 5px;[m
[32m+[m[32m  margin-bottom: 5px;[m
[32m+[m[32m  background-color: #81b3d2;[m
[32m+[m[32m  cursor: pointer[m
[32m+[m[32m}[m
[32m+[m[32m.social__item:nth-child(3n) {[m
[32m+[m[32m  margin-right: 0[m
[32m+[m[32m}[m
[32m+[m[32m.social__item:hover {[m
[32m+[m[32m  background-color: #669ec0[m
[32m+[m[32m}[m
[32m+[m[32m.social__item:active {[m
[32m+[m[32m  background-color: #5496bd[m
[32m+[m[32m}[m
[32m+[m[32m.social__link {[m
[32m+[m[32m  display: inline-block;[m
[32m+[m[32m  position: relative;[m
[32m+[m[32m  top: 30%[m
[32m+[m[32m}[m
[32m+[m[32m@media (min-width:768px) {[m
[32m+[m[32m  .social__list {[m
[32m+[m[32m    margin: 0 auto;[m
[32m+[m[32m    width: 151px[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m.copyright__link {[m
[32m+[m[32m  margin-left: 10px[m
[32m+[m[32m}[m
[32m+[m[32m.copyright__link:hover path {[m
[32m+[m[32m  fill: #81b3d2[m
[32m+[m[32m}[m
[32m+[m[32m.copyright__link:active path {[m
[32m+[m[32m  fill: #b2b2b2[m
[32m+[m[32m}[m
[32m+[m[32m.copyright__logo {[m
[32m+[m[32m  display: block[m
[32m+[m[32m}[m
[32m+[m[32m.copyright__text {[m
[32m+[m[32m  margin: 0[m
[32m+[m[32m}[m
\ No newline at end of file[m
[1mdiff --git a/app/fonts/OFL.txt b/app/fonts/OFL.txt[m
[1mnew file mode 100644[m
[1mindex 0000000..adf9d01[m
[1m--- /dev/null[m
[1m+++ b/app/fonts/OFL.txt[m
[36m@@ -0,0 +1,94 @@[m
[32m+[m[32m﻿Copyright (c) 2010, ParaType Ltd. (http://www.paratype.com/public),[m
[32m+[m[32mwith Reserved Font Names "PT Sans" and "ParaType".[m
[32m+[m
[32m+[m[32mThis Font Software is licensed under the SIL Open Font License, Version 1.1.[m
[32m+[m[32mThis license is copied below, and is also available with a FAQ at:[m
[32m+[m[32mhttp://scripts.sil.org/OFL[m
[32m+[m
[32m+[m
[32m+[m[32m-----------------------------------------------------------[m
[32m+[m[32mSIL OPEN FONT LICENSE Version 1.1 - 26 February 2007[m
[32m+[m[32m-----------------------------------------------------------[m
[32m+[m
[32m+[m[32mPREAMBLE[m
[32m+[m[32mThe goals of the Open Font License (OFL) are to stimulate worldwide[m
[32m+[m[32mdevelopment of collaborative font projects, to support the font creation[m
[32m+[m[32mefforts of academic and linguistic communities, and to provide a free and[m
[32m+[m[32mopen framework in which fonts may be shared and improved in partnership[m
[32m+[m[32mwith others.[m
[32m+[m
[32m+[m[32mThe OFL allows the licensed fonts to be used, studied, modified and[m
[32m+[m[32mredistributed freely as long as they are not sold by themselves. The[m
[32m+[m[32mfonts, including any derivative works, can be bundled, embedded,[m[41m [m
[32m+[m[32mredistributed and/or sold with any software provided that any reserved[m
[32m+[m[32mnames are not used by derivative works. The fonts and derivatives,[m
[32m+[m[32mhowever, cannot be released under any other type of license. The[m
[32m+[m[32mrequirement for fonts to remain under this license does not apply[m
[32m+[m[32mto any document created using the fonts or their derivatives.[m
[32m+[m
[32m+[m[32mDEFINITIONS[m
[32m+[m[32m"Font Software" refers to the set of files released by the Copyright[m
[32m+[m[32mHolder(s) under this license and clearly marked as such. This may[m
[32m+[m[32minclude source files, build scripts and documentation.[m
[32m+[m
[32m+[m[32m"Reserved Font Name" refers to any names specified as such after the[m
[32m+[m[32mcopyright statement(s).[m
[32m+[m
[32m+[m[32m"Original Version" refers to the collection of Font Software components as[m
[32m+[m[32mdistributed by the Copyright Holder(s).[m
[32m+[m
[32m+[m[32m"Modified Version" refers to any derivative made by adding to, deleting,[m
[32m+[m[32mor substituting -- in part or in whole -- any of the components of the[m
[32m+[m[32mOriginal Version, by changing formats or by porting the Font Software to a[m
[32m+[m[32mnew environment.[m
[32m+[m
[32m+[m[32m"Author" refers to any designer, engineer, programmer, technical[m
[32m+[m[32mwriter or other person who contributed to the Font Software.[m
[32m+[m
[32m+[m[32mPERMISSION & CONDITIONS[m
[32m+[m[32mPermission is hereby granted, free of charge, to any person obtaining[m
[32m+[m[32ma copy of the Font Software, to use, study, copy, merge, embed, modify,[m
[32m+[m[32mredistribute, and sell modified and unmodified copies of the Font[m
[32m+[m[32mSoftware, subject to the following conditions:[m
[32m+[m
[32m+[m[32m1) Neither the Font Software nor any of its individual components,[m
[32m+[m[32min Original or Modified Versions, may be sold by itself.[m
[32m+[m
[32m+[m[32m2) Original or Modified Versions of the Font Software may be bundled,[m
[32m+[m[32mredistributed and/or sold with any software, provided that each copy[m
[32m+[m[32mcontains the above copyright notice and this license. These can be[m
[32m+[m[32mincluded either as stand-alone text files, human-readable headers or[m
[32m+[m[32min the appropriate machine-readable metadata fields within text or[m
[32m+[m[32mbinary files as long as those fields can be easily viewed by the user.[m
[32m+[m
[32m+[m[32m3) No Modified Version of the Font Software may use the Reserved Font[m
[32m+[m[32mName(s) unless explicit written permission is granted by the corresponding[m
[32m+[m[32mCopyright Holder. This restriction only applies to the primary font name as[m
[32m+[m[32mpresented to the users.[m
[32m+[m
[32m+[m[32m4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font[m
[32m+[m[32mSoftware shall not be used to promote, endorse or advertise any[m
[32m+[m[32mModified Version, except to acknowledge the contribution(s) of the[m
[32m+[m[32mCopyright Holder(s) and the Author(s) or with their explicit written[m
[32m+[m[32mpermission.[m
[32m+[m
[32m+[m[32m5) The Font Software, modified or unmodified, in part or in whole,[m
[32m+[m[32mmust be distributed entirely under this license, and must not be[m
[32m+[m[32mdistributed under any other license. The requirement for fonts to[m
[32m+[m[32mremain under this license does not apply to any document created[m
[32m+[m[32musing the Font Software.[m
[32m+[m
[32m+[m[32mTERMINATION[m
[32m+[m[32mThis license becomes null and void if any of the above conditions are[m
[32m+[m[32mnot met.[m
[32m+[m
[32m+[m[32mDISCLAIMER[m
[32m+[m[32mTHE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,[m
[32m+[m[32mEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF[m
[32m+[m[32mMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT[m
[32m+[m[32mOF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE[m
[32m+[m[32mCOPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,[m
[32m+[m[32mINCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL[m
[32m+[m[32mDAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING[m
[32m+[m[32mFROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM[m
[32m+[m[32mOTHER DEALINGS IN THE FONT SOFTWARE.[m
[1mdiff --git a/app/fonts/PTSans-Bold.ttf b/app/fonts/PTSans-Bold.ttf[m
[1mnew file mode 100644[m
[1mindex 0000000..f82c3bd[m
Binary files /dev/null and b/app/fonts/PTSans-Bold.ttf differ
[1mdiff --git a/app/fonts/PTSans-BoldItalic.ttf b/app/fonts/PTSans-BoldItalic.ttf[m
[1mnew file mode 100644[m
[1mindex 0000000..3e6cf4e[m
Binary files /dev/null and b/app/fonts/PTSans-BoldItalic.ttf differ
[1mdiff --git a/app/fonts/PTSans-Italic.ttf b/app/fonts/PTSans-Italic.ttf[m
[1mnew file mode 100644[m
[1mindex 0000000..b06ce61[m
Binary files /dev/null and b/app/fonts/PTSans-Italic.ttf differ
[1mdiff --git a/app/fonts/PTSans-Regular.ttf b/app/fonts/PTSans-Regular.ttf[m
[1mnew file mode 100644[m
[1mindex 0000000..adaf671[m
Binary files /dev/null and b/app/fonts/PTSans-Regular.ttf differ
[1mdiff --git a/app/img/bg-image-intro/bg-image-intro.jpg b/app/img/bg-image-intro/bg-image-intro.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..7d75e09[m
Binary files /dev/null and b/app/img/bg-image-intro/bg-image-intro.jpg differ
[1mdiff --git a/app/img/bg-image-intro/bg-image-intro@2x.jpg b/app/img/bg-image-intro/bg-image-intro@2x.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..8715bc6[m
Binary files /dev/null and b/app/img/bg-image-intro/bg-image-intro@2x.jpg differ
[1mdiff --git a/app/img/bg-image-intro/intro-text-index.svg b/app/img/bg-image-intro/intro-text-index.svg[m
[1mnew file mode 100644[m
[1mindex 0000000..1c333f1[m
[1m--- /dev/null[m
[1m+++ b/app/img/bg-image-intro/intro-text-index.svg[m
[36m@@ -0,0 +1,44 @@[m
[32m+[m[32m<svg xmlns="http://www.w3.org/2000/svg" width="280.854" height="213.695" viewBox="0 0 280.854 213.695">[m
[32m+[m[32m  <g id="text-index.svg" transform="translate(-0.001)">[m
[32m+[m[32m    <g id="Сгруппировать_7" data-name="Сгруппировать 7">[m
[32m+[m[32m      <path id="Контур_24" data-name="Контур 24" d="M101.053,42.73l-.124.14a3.941,3.941,0,0,1-2.762,1.353l1.724-2.97c1.108-1.916.088-3.726-1.637-3.726-1.407,0-2.5.562-3.552,2.39l-.9,1.564-.75,1.281-.094.108c-1.319,1.53-2.6,2.741-3.412,2.741-.4,0-.633-.281-.211-1l3.923-6.837h1.494l.528-.879H93.77l1.724-2.987H93.665L91.941,36.9H90.287l-.528.879H91.43l-3.677,6.362c-.774,1.353-.228,2.6,1.249,2.6a5.54,5.54,0,0,0,3.367-1.883c0,2.329,3.236,2.785,5.216.283h.4a5.55,5.55,0,0,0,3.747-1.774A1.571,1.571,0,0,0,101.053,42.73Zm-3.9.124h-.089a1.08,1.08,0,0,0-1.073,1.09,1.2,1.2,0,0,0,.177.616l-.018.035c-.862,1.477-2.955,1.2-1.865-.7l1.389-2.408.88-1.494c1.284-2.179,3.042-1.318,1.934.58Z" fill="#766458"/>[m
[32m+[m[32m      <path id="Контур_25" data-name="Контур 25" d="M126.377,42.73l-.123.14c-1.319,1.53-3.008,2.741-4.291,2.741-1.126,0-1.795-.7-.95-2.179l.175-.317c1.179.493,3.4.264,4.767-2.109l.264-.457c.985-1.687.035-2.953-1.46-2.953a3.87,3.87,0,0,0-3.43,2.109l-1.775,3.042-.106.121c-1.319,1.528-2.6,2.741-3.412,2.741-.4,0-.633-.281-.211-1l2.638-4.622c.791-1.388.036-2.39-.985-2.39a3.7,3.7,0,0,0-2.55,1.388l2.919-5.079h-1.829l-5.1,8.846-.1.117c-1.319,1.53-2.6,2.741-3.412,2.741-.4,0-.633-.281-.211-1l3.922-6.837h1.495l.528-.879h-1.513l1.724-2.987h-1.829l-1.724,2.988h-1.653l-.528.879h1.671l-3.677,6.362c-.774,1.353-.228,2.6,1.249,2.6a4.1,4.1,0,0,0,2.334-.993l-.471.817h1.846l2.779-4.832c2.814-3.534,4.062-3.076,3.271-1.723l-2.375,4.131c-.774,1.354-.228,2.6,1.249,2.6,1.088,0,2.3-.839,3.449-1.964a2.223,2.223,0,0,0,2.477,1.964c2.075,0,4.133-1.617,5.646-3.375A1.558,1.558,0,0,0,126.377,42.73Zm-3.483-2.566c1.056-1.81,2.921-1.512,1.83.387l-.265.457a2.194,2.194,0,0,1-2.743,1.213Z" fill="#766458"/>[m
[32m+[m[32m      <path id="Контур_26" data-name="Контур 26" d="M193.066,42.73l-.123.14a11.472,11.472,0,0,1-2.2,1.986c.58-1.74.458-4.412,1.584-6.749l-1.372-.738c-.756,1.037-2.409,3.428-4.063,5.361h0l-.122.14c-1.318,1.53-2.6,2.741-3.413,2.741-.4,0-.632-.281-.21-1l3.9-6.837h-1.829l-3.254,5.677c-1.39,1.265-2.462,1.969-2.814,1.81-.457-.192,0-.878.229-1.265l3.571-6.221h-1.83l-2.868,4.959-.121.139a3.941,3.941,0,0,1-2.761,1.353l1.723-2.97c1.108-1.916.09-3.726-1.636-3.726-1.407,0-2.5.562-3.552,2.39l-.9,1.564-.749,1.28-.095.109c-1.318,1.53-3.007,2.741-4.291,2.741-1.126,0-1.795-.7-.951-2.179l.177-.317c1.178.493,3.4.264,4.767-2.109l.265-.457c.984-1.687.034-2.953-1.461-2.953a3.87,3.87,0,0,0-3.43,2.109l-1.773,3.042-.106.121a12.214,12.214,0,0,1-4.258,3.479l4.1-6.995h-1.073a1.934,1.934,0,0,0-1.917-1.757,4.063,4.063,0,0,0-3.131,2.109l-1.754,3.026,0,0-.123.14c-1.318,1.528-2.6,2.741-3.412,2.741-.405,0-.633-.281-.211-1l1.829-3.2a1.866,1.866,0,0,0-.265-2.478L152.123,37.7a.713.713,0,0,1,.106-1.055l-.949-1.037a1.941,1.941,0,0,0-.475,2.812l.159.211c-.809,1.143-1.9,2.688-3.1,4.1v0l-.122.14a3.947,3.947,0,0,1-2.762,1.353l1.723-2.97c1.109-1.916.089-3.726-1.636-3.726-1.406,0-2.5.563-3.552,2.39l-.9,1.564-.75,1.282-.093.107a12.213,12.213,0,0,1-4.257,3.479l4.1-6.995h-1.073A1.934,1.934,0,0,0,136.63,37.6a4.065,4.065,0,0,0-3.131,2.109l-2.568,4.429c-.775,1.353-.229,2.6,1.248,2.6a3.488,3.488,0,0,0,1.742-.615l-.51.861c-2.462.756-4.01,1.757-4.01,3.128,0,1.758,2.691,2.127,4.01-.123l1.389-2.408a11.149,11.149,0,0,0,4.386-2.735c-.013,2.339,3.234,2.8,5.217.292h.4a5.547,5.547,0,0,0,3.747-1.775h0c.878-1.019,1.564-1.934,3.024-3.919l.246.3a.9.9,0,0,1,.106,1.036L150,44.135c-.775,1.354-.229,2.6,1.249,2.6a4.887,4.887,0,0,0,2.933-1.484,1.409,1.409,0,0,0,1.586,1.484,3.49,3.49,0,0,0,1.742-.616l-.511.86c-2.462.756-4.009,1.757-4.009,3.128,0,1.758,2.691,2.126,4.009-.123l1.389-2.408a11.267,11.267,0,0,0,4.469-2.818,2.22,2.22,0,0,0,2.478,1.975,6.772,6.772,0,0,0,4.244-1.954c-.071,2.393,3.217,2.882,5.218.354h.4a5.131,5.131,0,0,0,2.034-.523c-.492,1.27-.039,2.123,1.007,2.123,1,0,2.128-.914,3.007-1.757a1.426,1.426,0,0,0,1.566,1.757c1.513,0,3.254-1.616,4.767-3.374h0c1.037-1.2,1.952-2.478,2.6-3.338-.721,1.9-.335,5.307-2.075,5.307a1.018,1.018,0,0,1-.861-.668l-1.144.6a1.994,1.994,0,0,0,2,1.477,4.6,4.6,0,0,0,.509-.037c.018,0,.036-.017.054-.017,1.863-.245,3.71-1.721,5.082-3.321A1.152,1.152,0,0,0,193.066,42.73Zm-26.257-2.566c1.056-1.81,2.919-1.512,1.828.387l-.264.457a2.195,2.195,0,0,1-2.744,1.213ZM131.881,49.69c-.387.686-1,.581-1,.089,0-.474.44-1.019,1.829-1.564Zm.845-4.078c-.4,0-.633-.281-.211-1l2.551-4.447c.984-1.7,2.938-1.265,2.04.387l-1.389,2.426C134.608,44.752,133.5,45.613,132.726,45.613Zm11.238-2.758h-.089a1.08,1.08,0,0,0-1.072,1.09,1.209,1.209,0,0,0,.175.616l-.017.035c-.861,1.477-2.955,1.2-1.864-.7l1.389-2.408.88-1.494c1.285-2.179,3.042-1.318,1.935.58Zm11.5,6.836c-.388.686-1,.581-1,.089,0-.474.44-1.019,1.829-1.564Zm.844-4.078c-.4,0-.632-.281-.211-1l2.551-4.447c.984-1.7,2.938-1.265,2.04.387L159.3,42.977C158.192,44.752,157.082,45.613,156.309,45.613Zm18.045-2.758h-.089a1.08,1.08,0,0,0-1.073,1.09,1.209,1.209,0,0,0,.175.616l-.017.035c-.861,1.477-2.955,1.2-1.864-.7l1.389-2.408.88-1.494c1.284-2.179,3.042-1.318,1.935.58Z" fill="#766458"/>[m
[32m+[m[32m    </g>[m
[32m+[m[32m    <rect id="Прямоугольник_17" data-name="Прямоугольник 17" width="17.665" height="1.194" transform="translate(61.956 40.79)" fill="#766458"/>[m
[32m+[m[32m    <rect id="Прямоугольник_18" data-name="Прямоугольник 18" width="17.665" height="1.194" transform="translate(200.626 40.79)" fill="#766458"/>[m
[32m+[m[32m    <g id="Сгруппировать_8" data-name="Сгруппировать 8">[m
[32m+[m[32m      <path id="Контур_27" data-name="Контур 27" d="M99.685,0h4.708l-.739,27.419H94.782L93.575,16.1l-1.206,11.32H83.456L82.756,0h4.67l.389,22.678h.506L91.24,0h4.631l3,22.678h.467Z" fill="#81b3d3"/>[m
[32m+[m[32m      <path id="Контур_28" data-name="Контур 28" d="M119.142,22.678v4.741H106.377V0h12.765V4.7h-8.095V11.32h6.46v4.7h-6.46v6.658Z" fill="#81b3d3"/>[m
[32m+[m[32m      <path id="Контур_29" data-name="Контур 29" d="M132.178,22.678v4.741H121.009V0h4.671V22.678Z" fill="#81b3d3"/>[m
[32m+[m[32m      <path id="Контур_30" data-name="Контур 30" d="M142.1,17.312l4.709-1.1v8.3a2.934,2.934,0,0,1-2.88,2.9h-7.006a2.908,2.908,0,0,1-2.879-2.9V2.9A2.883,2.883,0,0,1,136.924,0h7a2.908,2.908,0,0,1,2.88,2.9V8.461l-4.709,1.1V4.7h-3.386V22.678H142.1V17.312Z" fill="#81b3d3"/>[m
[32m+[m[32m      <path id="Контур_31" data-name="Контур 31" d="M159.494,0a2.908,2.908,0,0,1,2.881,2.9V24.52a2.934,2.934,0,0,1-2.881,2.9h-7.006a2.909,2.909,0,0,1-2.88-2.9V2.9a2.884,2.884,0,0,1,2.88-2.9Zm-1.828,4.7h-3.387V22.678h3.387Z" fill="#81b3d3"/>[m
[32m+[m[32m      <path id="Контур_32" data-name="Контур 32" d="M177.666,0h4.63V27.419h-4.671V13.944l-1.868,6.972H171.2l-1.829-6.972V27.419h-4.671V0h4.631L173.5,13.239Z" fill="#81b3d3"/>[m
[32m+[m[32m      <path id="Контур_33" data-name="Контур 33" d="M197.4,22.678v4.741H184.631V0H197.4V4.7h-8.1V11.32h6.46v4.7H189.3v6.658Z" fill="#81b3d3"/>[m
[32m+[m[32m    </g>[m
[32m+[m[32m    <g id="Сгруппировать_9" data-name="Сгруппировать 9">[m
[32m+[m[32m      <path id="Контур_34" data-name="Контур 34" d="M27.164,96.209a12.5,12.5,0,0,0-7.882-3.03c-2.182,0-5.094,1.272-5.094,3.817,0,2.666,3.214,3.7,5.276,4.362l3.032.909c6.367,1.878,11.277,5.089,11.277,12.481,0,4.545-1.092,9.21-4.729,12.3a20.061,20.061,0,0,1-12.975,4.3A28.228,28.228,0,0,1,0,126.139l5.094-9.573c2.972,2.605,6.488,4.726,10.55,4.726,2.789,0,5.761-1.394,5.761-4.606,0-3.332-4.669-4.484-7.216-5.21C6.732,109.355,1.82,107.418,1.82,98.57c0-9.271,6.608-15.329,15.765-15.329A31.291,31.291,0,0,1,31.9,87Z" fill="#fff"/>[m
[32m+[m[32m      <path id="Контур_35" data-name="Контур 35" d="M56.1,94.512v7.634H69.5v10.059H56.1v7.874H70.226v10.059H44.214V84.455H70.226V94.513H56.1Z" fill="#fff"/>[m
[32m+[m[32m      <path id="Контур_36" data-name="Контур 36" d="M79.059,84.454H95.915a22.845,22.845,0,1,1,0,45.683H79.059Zm11.885,35.627h2.668c7.094,0,13.158-3.877,13.158-12.784,0-8.18-5.4-12.784-13.037-12.784H90.943Z" fill="#fff"/>[m
[32m+[m[32m      <path id="Контур_37" data-name="Контур 37" d="M175.245,106.448c0,14.783-10.612,25.206-25.287,25.206s-25.284-10.421-25.284-25.206c0-13.815,12.127-23.509,25.284-23.509S175.245,92.633,175.245,106.448Zm-38.2.06c0,7.877,5.821,13.632,12.914,13.632s12.916-5.756,12.916-13.632c0-6.3-5.819-12.057-12.916-12.057S137.045,100.208,137.045,106.509Z" fill="#fff"/>[m
[32m+[m[32m      <path id="Контур_38" data-name="Контур 38" d="M181.577,84.454h11.884l21.769,27.931h.12V84.454h11.884v45.683H215.35l-21.768-27.991h-.121v27.991H181.577Z" fill="#fff"/>[m
[32m+[m[32m      <path id="Контур_39" data-name="Контур 39" d="M248.839,122.2l-3.152,7.937H233.075l17.584-45.683h12.976l17.219,45.683H268.182l-2.971-7.937Zm8.308-23.629h-.122l-4.911,14.543H262Z" fill="#fff"/>[m
[32m+[m[32m    </g>[m
[32m+[m[32m    <g id="Сгруппировать_10" data-name="Сгруппировать 10">[m
[32m+[m[32m      <path id="Контур_40" data-name="Контур 40" d="M66.024,175.643c4.678-1.58,5.035-7.435.423-7.435a4.77,4.77,0,0,0-3.831,2.715L56.378,181.7a8.956,8.956,0,0,1-.891,1.312,4.936,4.936,0,0,1,1.114-6.944l-.936-1.181c-4.856,3.094-3.431,12.02,4.679,12.02C67.272,186.907,70.48,178.6,66.024,175.643ZM60.3,185.126a6.676,6.676,0,0,1-3.342-.8,12.094,12.094,0,0,0,1.158-1.647l3.9-6.746.624.066C68.074,177.135,65.913,185.126,60.3,185.126Zm2.495-10.551,1.871-3.206c1.693-2.915,3.854-1.2,2.7.98C66.471,174.018,65.156,174.53,62.794,174.574Z" fill="#fff"/>[m
[32m+[m[32m      <path id="Контур_41" data-name="Контур 41" d="M85.621,183.128a1.827,1.827,0,0,0,1.922,2.488A5.664,5.664,0,0,0,90.75,184.1a1.8,1.8,0,0,0,2.006,1.513,6.469,6.469,0,0,0,3.905-2.049c-.257,1.25.33,2.049,1.472,2.049,1.271,0,2.7-1.157,3.809-2.226a1.805,1.805,0,0,0,1.983,2.226c1.916,0,4.122-2.047,6.037-4.274a.933.933,0,0,0-.062-.092c1.281-1.489,2.411-3.069,3.219-4.137-.914,2.4-.423,6.723-2.63,6.723a1.294,1.294,0,0,1-1.092-.847l-1.448.758a2.525,2.525,0,0,0,2.539,1.869c.223,0,.423-.023.646-.044.023,0,.045-.021.067-.021a9.52,9.52,0,0,0,4.852-2.58c.035,1.523,1.218,2.645,3.143,2.645,2.629,0,5.235-2.047,7.152-4.274a2,2,0,0,0-.869-.8l-.156.179c-1.671,1.936-3.809,3.471-5.435,3.471-1.426,0-2.273-.891-1.2-2.76l.223-.4c1.492.623,4.3.334,6.037-2.672l.334-.578c1.247-2.138.045-3.74-1.849-3.74a4.9,4.9,0,0,0-4.344,2.671l-2.25,3.857c-.021-.007-.043-.023-.064-.028l-.156.178a14.5,14.5,0,0,1-2.785,2.516c.735-2.2.579-5.587,2-8.548l-1.737-.935c-.958,1.312-3.052,4.34-5.147,6.789.02.028.045.055.068.084l-.083.095c-1.671,1.936-3.3,3.471-4.322,3.471-.512,0-.8-.355-.268-1.268l4.946-8.66h-2.317l-4.122,7.19c-1.76,1.6-3.118,2.493-3.564,2.293-.578-.245,0-1.113.29-1.6l4.522-7.881h-2.317L98.1,180.638a1.3,1.3,0,0,0-.176-.1l-.156.178c-1.671,1.936-3.3,3.471-4.322,3.471-.512,0-.8-.355-.268-1.268l3.743-6.546H95.607a2.407,2.407,0,0,0-2.428-2.338,5.144,5.144,0,0,0-3.965,2.672l-2.349,4.051a1.741,1.741,0,0,0-.352-.222l-.156.178c-1.671,1.936-3.809,3.471-5.435,3.471-1.426,0-2.273-.891-1.2-2.759l2.384-4.14c1.337-2.293,3.7-1.914,2.316.489l-.334.579h1.894l.334-.579c1.247-2.136.045-3.74-1.849-3.74a4.9,4.9,0,0,0-4.344,2.672l-2.3,3.948a1.476,1.476,0,0,0-.213-.118l-.156.178c-1.671,1.936-3.809,3.471-5.435,3.471-1.426,0-2.273-.891-1.2-2.759l.223-.4c1.492.624,4.3.334,6.037-2.671l.334-.579c1.247-2.136.045-3.74-1.849-3.74a4.9,4.9,0,0,0-4.343,2.672l-2.429,4.162c-1.448,2.471-.2,4.741,2.539,4.741,2.041,0,4.067-1.234,5.768-2.829-.06,1.616,1.139,2.829,3.141,2.829A8.567,8.567,0,0,0,85.621,183.128Zm35.449-5.837c1.337-2.292,3.7-1.914,2.316.49l-.334.579c-1.113,1.892-2.607,1.848-3.475,1.536Zm-33.1,5.632,3.23-5.632c1.247-2.16,3.72-1.6,2.583.49l-1.8,3.162c-1.4,2.2-2.786,3.249-3.743,3.249C87.722,184.191,87.431,183.835,87.966,182.923ZM73.192,177.29c1.337-2.292,3.7-1.914,2.316.49l-.334.579c-1.113,1.892-2.607,1.848-3.475,1.536Z" fill="#fff"/>[m
[32m+[m[32m      <path id="Контур_42" data-name="Контур 42" d="M151.741,185.616c2.629,0,5.237-2.047,7.152-4.274a1.992,1.992,0,0,0-.868-.8l-.155.179c-1.672,1.936-3.81,3.471-5.437,3.471-1.426,0-2.272-.891-1.2-2.76l.223-.4c1.493.623,4.3.334,6.037-2.672l.334-.578c1.247-2.138.045-3.74-1.849-3.74a4.9,4.9,0,0,0-4.343,2.671l-2.257,3.868c-.023-.011-.046-.029-.068-.038l-.156.179c-1.67,1.936-3.3,3.471-4.321,3.471-.513,0-.8-.356-.268-1.269l3.342-5.855c1-1.759.045-3.028-1.248-3.028a4.686,4.686,0,0,0-3.23,1.759l3.7-6.434h-2.317l-6.535,11.33a1.441,1.441,0,0,0-.265-.154l-.156.178c-1.671,1.936-3.3,3.472-4.322,3.472-.512,0-.8-.356-.268-1.269l4.968-8.66h1.894l.669-1.113h-1.916l2.183-3.784h-2.317l-2.183,3.784h-2.094l-.668,1.113h2.115l-4.656,8.06c-.98,1.714-.29,3.294,1.582,3.294a6.094,6.094,0,0,0,3.642-1.816l-.919,1.593h2.34l3.52-6.122c3.564-4.475,5.147-3.9,4.144-2.182l-3.007,5.233c-.98,1.713-.29,3.293,1.582,3.293,1.408,0,2.971-1.105,4.462-2.577C148.667,184.529,149.846,185.616,151.741,185.616Zm1.872-8.326c1.337-2.292,3.7-1.914,2.317.49l-.334.579c-1.114,1.892-2.608,1.848-3.476,1.536Z" fill="#fff"/>[m
[32m+[m[32m      <path id="Контур_43" data-name="Контур 43" d="M222,180.542l-.156.178c-1.668,1.936-3.3,3.472-4.321,3.472-.512,0-.8-.356-.268-1.269l7.842-13.557h-2.317l-3.408,5.877a2.512,2.512,0,0,0-2.117-1.2,5.143,5.143,0,0,0-3.965,2.671l-2.268,3.91a1.519,1.519,0,0,0-.144-.081l-.156.179c-1.67,1.936-3.3,3.471-4.321,3.471-.513,0-.8-.356-.268-1.269l3.342-5.855c1-1.759.045-3.028-1.247-3.028a4.606,4.606,0,0,0-3.208,1.737l.869-1.513h-2.317l-3.7,6.4a1.578,1.578,0,0,0-.221-.124l-.157.179c-1.67,1.936-3.3,3.471-4.321,3.471-.512,0-.8-.356-.268-1.269l3.743-6.545h-1.315a2.407,2.407,0,0,0-2.428-2.338,5.145,5.145,0,0,0-3.966,2.671l-2.239,3.864-.126.143c-1.67,1.936-3.3,3.471-4.321,3.471-.513,0-.8-.355-.268-1.268l2.317-4.051a2.366,2.366,0,0,0-.334-3.139l-1.292-1.559a.9.9,0,0,1,.134-1.336l-1.2-1.313c-1.315,1.181-1.426,2.493-.6,3.562l.2.267c-1.025,1.447-2.406,3.406-3.922,5.187a2.134,2.134,0,0,0,.158.2,15.386,15.386,0,0,1-5.353,4.389l2.94-5.031h-2.317l-.244.4c-1.225,2.16-2.63,3.7-4.434,3.7-1.582,0-1.871-1.58-.491-3.94l.647-1.135a8.347,8.347,0,0,0,1.313.111c8.243,0,12.231-11.018,4.97-11.018a4.77,4.77,0,0,0-3.833,2.715l-3.608,6.211a3.728,3.728,0,0,1-2.071-3.294,3.68,3.68,0,0,1,1.491-2.915l-.756-1.359a5.1,5.1,0,0,0,.535,8.927l-.691,1.2c-1.626,2.805-1.337,5.921,1.939,5.921a4.651,4.651,0,0,0,2.517-.735l-.6,1.047c-3.14.956-5.078,2.226-5.078,3.962,0,2.226,3.409,2.694,5.078-.156l1.783-3.05c2.407-.756,4.769-2.4,7.309-5.342a1.365,1.365,0,0,0-.144-.217c1.029-1.208,1.9-2.374,3.648-4.747l.311.379a1.136,1.136,0,0,1,.134,1.314l-2.451,4.251c-.98,1.713-.29,3.293,1.582,3.293a6.154,6.154,0,0,0,3.685-1.853,1.792,1.792,0,0,0,2.023,1.853,5.662,5.662,0,0,0,3.207-1.513,1.8,1.8,0,0,0,2.006,1.513,5.909,5.909,0,0,0,3.508-1.7l-.854,1.478h2.338l3.542-6.168c3.542-4.429,5.125-3.851,4.121-2.136l-3.007,5.232c-.979,1.714-.29,3.294,1.581,3.294a6.454,6.454,0,0,0,3.9-2.042,1.8,1.8,0,0,0,2.013,2.042,5.668,5.668,0,0,0,3.208-1.513,1.8,1.8,0,0,0,2,1.513c1.916,0,4.121-2.047,6.037-4.274A2.011,2.011,0,0,0,222,180.542ZM174.378,171.9c.691-1.179,1.448-1.691,2.1-1.691,3.676,0,1.092,7.48-4.968,7.48h-.468Zm-4.923,17.453c-.489.868-1.269.735-1.269.112,0-.6.535-1.291,2.317-1.981Zm24.248-8.414c-1.4,2.2-2.786,3.249-3.743,3.249-.513,0-.8-.356-.268-1.269l3.23-5.633c1.248-2.159,3.72-1.6,2.584.49Zm22.42-.134c-1.4,2.293-2.83,3.384-3.809,3.384-.512,0-.8-.356-.268-1.269l3.23-5.633c1.248-2.159,3.72-1.6,2.584.49h.021Z" fill="#fff"/>[m
[32m+[m[32m      <path id="Контур_44" data-name="Контур 44" d="M144.6,202.516l-.156.179c-1.67,1.936-3.3,3.472-4.321,3.472-.513,0-.8-.356-.268-1.269l3.342-5.855c1-1.759.043-3.028-1.248-3.028a4.606,4.606,0,0,0-3.208,1.737l.869-1.513H137.3l-3.733,6.455a1.625,1.625,0,0,0-.3-.178l-.156.179a5,5,0,0,1-3.5,1.714l2.183-3.762c1.4-2.427.112-4.719-2.072-4.719-1.783,0-3.163.712-4.5,3.028l-1.136,1.981-.993,1.7a1.471,1.471,0,0,0-.21-.117l-.156.179a15.469,15.469,0,0,1-5.369,4.408l6.35-10.864h-2.317l-4.1,7.124c-1.783,1.647-3.164,2.559-3.609,2.359-.579-.244,0-1.113.29-1.6l4.522-7.881h-2.317l-3.7,6.391a1.509,1.509,0,0,0-.2-.114l-.156.179c-1.671,1.936-3.3,3.472-4.322,3.472-.512,0-.8-.356-.268-1.269l3.342-5.855c1-1.759.045-3.028-1.247-3.028a4.606,4.606,0,0,0-3.208,1.737l.869-1.513h-2.318l-3.7,6.4a1.542,1.542,0,0,0-.22-.124l-.156.179c-1.67,1.936-3.3,3.472-4.322,3.472-.512,0-.8-.356-.268-1.269l3.743-6.544H98.735a2.408,2.408,0,0,0-2.429-2.338,5.142,5.142,0,0,0-3.965,2.672l-2.393,4.128a1.314,1.314,0,0,0-.508-.3l-.156.179c-1.671,1.936-3.72,3.472-6.016,3.472-1.581,0-2.539-1.58-1.158-3.94l.646-1.135a8.366,8.366,0,0,0,1.314.112,8.212,8.212,0,0,0,7.107-4.453,6.413,6.413,0,0,0,.935-3.116,3.156,3.156,0,0,0-3.074-3.45,4.769,4.769,0,0,0-3.831,2.716L81.6,199.114a3.73,3.73,0,0,1-2.073-3.294,3.678,3.678,0,0,1,1.492-2.915l-.757-1.359a5.1,5.1,0,0,0,.535,8.927l-.69,1.2c-1.626,2.8-.668,5.92,2.607,5.92a8.572,8.572,0,0,0,6.09-2.669A1.851,1.851,0,0,0,90.67,207.6a5.666,5.666,0,0,0,3.208-1.513,1.8,1.8,0,0,0,2,1.513,5.91,5.91,0,0,0,3.508-1.7l-.854,1.477h2.339l3.542-6.167c3.542-4.43,5.125-3.852,4.122-2.138l-3.007,5.229c-.98,1.715-.29,3.294,1.582,3.294,1.247,0,2.616-.87,3.949-2.089-.278,1.273.31,2.089,1.464,2.089,1.114,0,2.383-.935,3.431-1.87l-1.27,2.182c-3.141.934-5.1,2.226-5.1,3.962,0,2.226,3.409,2.694,5.078-.156l1.782-3.05a14.615,14.615,0,0,0,5.841-3.782c-.319,3.233,3.991,3.971,6.59.687h.512a6.774,6.774,0,0,0,3.026-.888l-1.558,2.692h2.34l3.542-6.167c3.542-4.43,5.125-3.852,4.122-2.138l-3.007,5.232c-.98,1.715-.29,3.294,1.582,3.294,1.917,0,4.121-2.047,6.037-4.274A2,2,0,0,0,144.6,202.516Zm-57.659-8.637c.69-1.18,1.448-1.691,2.094-1.691.869,0,1.27.578,1.27,1.425,0,2.16-2.629,6.055-6.238,6.055H83.6Zm8.158,9.038c-1.4,2.2-2.785,3.249-3.743,3.249-.512,0-.8-.356-.268-1.269l3.23-5.633c1.247-2.158,3.72-1.6,2.583.491Zm17.624,8.413c-.491.869-1.27.735-1.27.113,0-.6.557-1.291,2.339-1.981Zm15.595-8.659h-.112a1.369,1.369,0,0,0-1.359,1.381,1.51,1.51,0,0,0,.223.778l-.023.045c-1.091,1.869-3.743,1.513-2.361-.891l1.76-3.05,1.114-1.893c1.627-2.76,3.854-1.669,2.451.735Z" fill="#fff"/>[m
[32m+[m[32m      <path id="Контур_45" data-name="Контур 45" d="M198.3,203.317a1.462,1.462,0,0,0-.869-.8l-.156.179a14.437,14.437,0,0,1-2.785,2.515c.735-2.2.578-5.587,2-8.548l-1.739-.935c-.956,1.313-3.051,4.341-5.145,6.79a.114.114,0,0,0,.013.015.216.216,0,0,0-.029-.015l-.155.179c-1.671,1.936-3.3,3.472-4.323,3.472-.512,0-1-.512-1-1.558v-.957c1.627.2,3.342-.869,4.434-2.76l.624-1.068c2.159-3.695-1.36-4.92-3.721-2.759l3.3-5.721h-2.317L179.826,202.8a1.847,1.847,0,0,0-.423-.28l-.157.178c-1.67,1.937-3.809,3.473-5.436,3.473-1.426,0-2.271-.891-1.2-2.76l2.382-4.14c1.337-2.293,3.7-1.914,2.317.49l-.334.579h1.895l.335-.579c1.247-2.137.043-3.74-1.85-3.74a4.9,4.9,0,0,0-4.344,2.672l-2.28,3.909a1.4,1.4,0,0,0-.142-.082l-.157.179c-1.67,1.937-3.3,3.473-4.321,3.473-.513,0-.8-.356-.268-1.269l4.946-8.659h-2.318l-4.12,7.19c-1.762,1.6-3.118,2.493-3.565,2.292-.579-.244,0-1.112.29-1.6l4.522-7.88h-2.317l-4.5,7.779a13.764,13.764,0,0,1-1.5,1.192c.735-2.2.578-5.587,2-8.548l-1.737-.936c-.958,1.314-6.3,8.393-8.4,10.842a3.361,3.361,0,0,0,.869.8c1.313-1.514,5.725-7.191,6.55-8.281-.914,2.4-.424,6.723-2.63,6.723a1.294,1.294,0,0,1-1.092-.847l-1.448.756a2.525,2.525,0,0,0,2.539,1.87,6.414,6.414,0,0,0,.647-.044c.021,0,.044-.022.065-.022a8.05,8.05,0,0,0,3.44-1.452,1.4,1.4,0,0,0,1.533,1.518c1.268,0,2.7-1.158,3.808-2.226a1.806,1.806,0,0,0,1.983,2.226c1.439,0,3.042-1.156,4.561-2.674.02,1.538,1.206,2.674,3.142,2.674a8.564,8.564,0,0,0,5.361-2.461l-1.291,2.239h2.34l2.651-4.609v1.847c0,1.98.378,2.983,2.249,2.983,1.916,0,4.122-2.048,6.039-4.274,0-.007-.012-.013-.013-.021l.029.021c1.315-1.513,2.473-3.139,3.3-4.23-.912,2.4-.422,6.724-2.629,6.724a1.3,1.3,0,0,1-1.092-.847l-1.448.757a2.526,2.526,0,0,0,2.54,1.869c.221,0,.422-.022.648-.044.021,0,.042-.022.065-.022C194.227,207.212,196.567,205.343,198.3,203.317Zm-15.386-1.826.668-1.157c2.674-3.718,4.5-2.694,3.676-1.291l-1.113,1.914C185.456,202.16,183.429,203.005,182.918,201.492Z" fill="#fff"/>[m
[32m+[m[32m      <path id="Контур_46" data-name="Контур 46" d="M198.215,204.9a1.332,1.332,0,0,0-1.338,1.359,1.312,1.312,0,0,0,1.338,1.336,1.331,1.331,0,0,0,1.359-1.336A1.351,1.351,0,0,0,198.215,204.9Z" fill="#fff"/>[m
[32m+[m[32m      <path id="Контур_47" data-name="Контур 47" d="M198.326,203.985h2.34l7.261-12.645h-2.316Z" fill="#fff"/>[m
[32m+[m[32m    </g>[m
[32m+[m[32m    <g id="Сгруппировать_11" data-name="Сгруппировать 11">[m
[32m+[m[32m      <path id="Контур_48" data-name="Контур 48" d="M49.122,169.441a1.5,1.5,0,0,1-.1.537,1.459,1.459,0,0,1-.31.487,1.585,1.585,0,0,1-.506.35,1.613,1.613,0,0,1-.672.135,2.1,2.1,0,0,1-.8-.154,1.8,1.8,0,0,1-.65-.445,1.893,1.893,0,0,1-.351-.64,2.45,2.45,0,0,1-.124-.784,3.611,3.611,0,0,1,1.075-2.623,3.522,3.522,0,0,1,.517-.423,5.651,5.651,0,0,1,.547-.33q.257-.134.444-.215c.124-.056.2-.09.228-.1l.827,1.218c-.152.055-.32.128-.506.216a2.844,2.844,0,0,0-.526.33,1.8,1.8,0,0,0-.414.465,1.317,1.317,0,0,0-.186.62,1.674,1.674,0,0,1,1.054.351A1.2,1.2,0,0,1,49.122,169.441Zm4.805,0a1.479,1.479,0,0,1-.1.537,1.451,1.451,0,0,1-.309.486,1.572,1.572,0,0,1-.507.35,1.621,1.621,0,0,1-.672.135,2.1,2.1,0,0,1-.8-.154,1.793,1.793,0,0,1-.651-.444,1.913,1.913,0,0,1-.351-.64,2.467,2.467,0,0,1-.124-.784,3.611,3.611,0,0,1,1.075-2.623,3.425,3.425,0,0,1,.517-.422,5.508,5.508,0,0,1,.547-.33c.172-.089.32-.162.445-.216s.2-.089.227-.1l.827,1.218c-.152.055-.319.128-.506.215a2.8,2.8,0,0,0-.527.33,1.763,1.763,0,0,0-.413.465,1.3,1.3,0,0,0-.186.621,1.674,1.674,0,0,1,1.054.35A1.2,1.2,0,0,1,53.927,169.441Z" fill="#fff"/>[m
[32m+[m[32m    </g>[m
[32m+[m[32m    <g id="Сгруппировать_12" data-name="Сгруппировать 12">[m
[32m+[m[32m      <path id="Контур_49" data-name="Контур 49" d="M215.908,205.421a1.5,1.5,0,0,1,.1-.537,1.476,1.476,0,0,1,.31-.485,1.582,1.582,0,0,1,.506-.351,1.633,1.633,0,0,1,.672-.134,2.112,2.112,0,0,1,.8.154,1.787,1.787,0,0,1,.65.445,1.892,1.892,0,0,1,.352.64,2.468,2.468,0,0,1,.124.785,3.609,3.609,0,0,1-1.075,2.622,3.44,3.44,0,0,1-.519.423,4.882,4.882,0,0,1-.547.33c-.172.089-.319.162-.445.217s-.2.089-.227.1l-.827-1.218c.152-.055.32-.128.506-.217a2.817,2.817,0,0,0,.527-.33,1.793,1.793,0,0,0,.414-.466,1.294,1.294,0,0,0,.186-.618,1.671,1.671,0,0,1-1.053-.352A1.2,1.2,0,0,1,215.908,205.421Zm-4.806,0a1.477,1.477,0,0,1,.1-.537,1.453,1.453,0,0,1,.309-.485,1.587,1.587,0,0,1,.507-.351,1.629,1.629,0,0,1,.672-.134,2.113,2.113,0,0,1,.8.154,1.8,1.8,0,0,1,.651.445,1.921,1.921,0,0,1,.351.64,2.434,2.434,0,0,1,.124.785,3.611,3.611,0,0,1-1.074,2.622,3.483,3.483,0,0,1-.517.423,5.623,5.623,0,0,1-.547.33c-.172.089-.319.162-.445.217s-.2.089-.226.1l-.828-1.218a5.471,5.471,0,0,0,.507-.217,2.777,2.777,0,0,0,.527-.33,1.793,1.793,0,0,0,.414-.466,1.308,1.308,0,0,0,.186-.618,1.682,1.682,0,0,1-1.055-.352A1.2,1.2,0,0,1,211.1,205.421Z" fill="#fff"/>[m
[32m+[m[32m    </g>[m
[32m+[m[32m  </g>[m
[32m+[m[32m</svg>[m
[1mdiff --git a/app/img/icon-eat.svg b/app/img/icon-eat.svg[m
[1mnew file mode 100644[m
[1mindex 0000000..aafd5fc[m
[1m--- /dev/null[m
[1m+++ b/app/img/icon-eat.svg[m
[36m@@ -0,0 +1,5 @@[m
[32m+[m[32m<svg xmlns="http://www.w3.org/2000/svg" width="38.5" height="34" viewBox="0 0 38.5 34">[m
[32m+[m[32m  <g id="icon-burger.svg" transform="translate(-18.819 -1631.633)">[m
[32m+[m[32m    <path id="Color_Overlay" data-name="Color Overlay" d="M26.466,1665.634a4.969,4.969,0,0,1-5.015-4.892v-.511h-.483a2.13,2.13,0,0,1-2.149-2.1v-1.7a2.13,2.13,0,0,1,2.149-2.1h34.2a2.13,2.13,0,0,1,2.149,2.1v1.7a2.13,2.13,0,0,1-2.149,2.1h-.483v.511a4.97,4.97,0,0,1-5.015,4.892Zm-3.5-4.892a3.46,3.46,0,0,0,3.5,3.413H49.672a3.46,3.46,0,0,0,3.5-3.413v-.511h-30.2Zm-2.632-4.31v1.7a.634.634,0,0,0,.633.617h34.2a.634.634,0,0,0,.633-.617v-1.7a.634.634,0,0,0-.633-.617h-34.2A.634.634,0,0,0,20.336,1656.431Zm28.8-6.133-2.77,1.972L43.6,1650.3l-2.769,1.972-2.769-1.972-2.769,1.972-2.769-1.972-2.768,1.972-2.767-1.972-2.767,1.972L21,1649.98l.895-1.194,2.322,1.654,2.768-1.973,2.766,1.973,2.768-1.972,2.769,1.972,2.769-1.972,2.769,1.972,2.769-1.972,2.769,1.972,2.77-1.972,2.775,1.972,2.325-1.654.894,1.2-3.218,2.29Zm-27.652-3.335c-.022-.3-.028-1.29-.019-1.479.345-7.7,7.644-13.852,16.6-13.852s16.256,6.151,16.6,13.852c.009.189,0,1.178-.019,1.479Zm1.5-1.479H53.153c-.349-6.873-6.98-12.373-15.084-12.373S23.334,1638.612,22.984,1645.485Zm14.074-6.436a1.011,1.011,0,1,1,1.011.986A1,1,0,0,1,37.058,1639.049ZM41.1,1636.6a1.011,1.011,0,1,1,1.011.986A1,1,0,0,1,41.1,1636.6Zm-8.087,0a1.011,1.011,0,1,1,1.011.986A1,1,0,0,1,33.015,1636.6Z" fill="#81b3d2"/>[m
[32m+[m[32m  </g>[m
[32m+[m[32m</svg>[m
[1mdiff --git a/app/img/icon-facebook.svg b/app/img/icon-facebook.svg[m
[1mnew file mode 100644[m
[1mindex 0000000..4a95551[m
[1m--- /dev/null[m
[1m+++ b/app/img/icon-facebook.svg[m
[36m@@ -0,0 +1,8 @@[m
[32m+[m[32m<svg xmlns="http://www.w3.org/2000/svg" width="9.002" height="18" viewBox="0 0 9.002 18">[m
[32m+[m[32m  <g id="icon-facebook.svg" transform="translate(-155 -3479)">[m
[32m+[m[32m    <g id="icon-facebook.svg-2" data-name="icon-facebook.svg" transform="translate(155 3479)">[m
[32m+[m[32m      <path id="Контур_16" data-name="Контур 16" d="M6.512,3.188H9V0H6.014C2.757.172,1.6,2.268,2.022,5.81H0V9.152H2.033V18H6.015V9.152H8.979V5.81H6.006C5.984,4.816,5.968,3.524,6.512,3.188Z"/>[m
[32m+[m[32m    </g>[m
[32m+[m[32m    <path id="Color_Overlay" data-name="Color Overlay" d="M157.033,3497v-8.847H155v-3.343h2.022c-.424-3.542.734-5.639,3.992-5.811H164v3.189h-2.489c-.545.336-.528,1.627-.506,2.622h2.973v3.343h-2.964V3497Z" fill="#fff"/>[m
[32m+[m[32m  </g>[m
[32m+[m[32m</svg>[m
[1mdiff --git a/app/img/icon-house.svg b/app/img/icon-house.svg[m
[1mnew file mode 100644[m
[1mindex 0000000..e0127f7[m
[1m--- /dev/null[m
[1m+++ b/app/img/icon-house.svg[m
[36m@@ -0,0 +1,5 @@[m
[32m+[m[32m<svg xmlns="http://www.w3.org/2000/svg" width="37.499" height="36" viewBox="0 0 37.499 36">[m
[32m+[m[32m  <g id="icon-house.svg" transform="translate(-14.819 -1416.133)">[m
[32m+[m[32m    <path id="Color_Overlay" data-name="Color Overlay" d="M24.817,1422.133v-1.462h1.976v-18.81l-3.931,3.9-1.043-1.034,18.752-18.591,6.84,6.783v-6.549h6.934v13.425l4.973,4.932-1.041,1.034-3.932-3.9v18.81h2.54v1.462Zm3.451-21.733v20.271h24.6V1400.4l-12.3-12.192Zm20.617-6.021,3.985,3.952v-10.5H48.885Zm-12.255,24.27v-11.911h8.033v11.911Zm1.475-1.462h5.083V1408.2H38.105Zm11.218-5.5v-1.96h1.506v1.96Zm-2.981,0v-1.96h1.506v1.96Zm-13.054,0v-1.96h1.507v1.96Zm-2.981,0v-1.96h1.507v1.96Zm19.015-2.986v-1.959h1.506v1.959Zm-2.981,0v-1.959h1.506v1.959Zm-13.054,0v-1.959h1.507v1.959Zm-2.981,0v-1.959h1.507v1.959Zm6.448-9.024a3.891,3.891,0,1,1,3.891,3.856A3.874,3.874,0,0,1,36.756,1399.673Zm1.4,0a2.5,2.5,0,1,0,2.495-2.473A2.484,2.484,0,0,0,38.152,1399.674Z" transform="translate(-7 30)" fill="#81b3d2"/>[m
[32m+[m[32m  </g>[m
[32m+[m[32m</svg>[m
[1mdiff --git a/app/img/icon-htmlacademy.svg b/app/img/icon-htmlacademy.svg[m
[1mnew file mode 100644[m
[1mindex 0000000..d6d006f[m
[1m--- /dev/null[m
[1m+++ b/app/img/icon-htmlacademy.svg[m
[36m@@ -0,0 +1,8 @@[m
[32m+[m[32m<svg xmlns="http://www.w3.org/2000/svg" width="27.03" height="34.007" viewBox="0 0 27.03 34.007">[m
[32m+[m[32m  <g id="htmlacademy.svg" transform="translate(-196.94 -3552.972)">[m
[32m+[m[32m    <g id="htmlacademy.svg-2" data-name="htmlacademy.svg" transform="translate(98.399 3500.329)">[m
[32m+[m[32m      <path id="Контур_22" data-name="Контур 22" d="M112.2,52.746l-.141-.015-13.427,1.4V78.6l13.428,7.945L125.483,78.6V54.131Zm11.53,24.865-11.671,6.905-11.671-6.905V67.58l11.621,6.878.019,1.246-7.972-4.718-.012,1.21,8,4.783.02,1.28-8-4.733-.012,1.21,8,4.783,8.081-4.808V73.5l-.01.006V69.55l3.6-2.138Zm-.009-11.5-3.193,1.871-1.474.864-7.03-4.158-.012,1.21,6.008,3.553-.053.031-.129.076-.854.5-4.961-2.934-.012,1.21,3.915,2.315-.924.615-.022.013-2.958-1.732-.012,1.21,1.941,1.136-1.977,1.18L100.41,66.234l11.58-6.921h0Zm.009-1.217-11.734-6.878v0h0v0l-11.605,6.87V55.7l11.671-1.217L123.727,55.7Z" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.175"/>[m
[32m+[m[32m    </g>[m
[32m+[m[32m    <path id="Color_Overlay" data-name="Color Overlay" d="M197.027,3578.933V3554.46l13.428-1.4.141.014,13.287,1.385v24.473l-13.428,7.945Zm1.757-.993,11.671,6.905,11.671-6.905v-10.2l-3.6,2.138v3.953l.01-.006v1.215l-8.08,4.808-8-4.783.011-1.21,8,4.733-.02-1.28-8-4.783.013-1.211,7.972,4.718-.02-1.246-11.621-6.878Zm.025-11.377,11.563,6.835,1.977-1.18-1.94-1.137.011-1.21,2.958,1.733.023-.014.924-.615-3.915-2.315.011-1.21,4.961,2.935.853-.5.13-.076.053-.031-6.008-3.553.011-1.21,7.03,4.158,1.475-.863,3.193-1.87-11.728-6.8v0Zm11.583-8.219,11.734,6.878v-9.188l-11.671-1.217-11.671,1.217v9.18l11.605-6.87v0h0Z"/>[m
[32m+[m[32m  </g>[m
[32m+[m[32m</svg>[m
[1mdiff --git a/app/img/icon-souvenirs.svg b/app/img/icon-souvenirs.svg[m
[1mnew file mode 100644[m
[1mindex 0000000..92c2132[m
[1m--- /dev/null[m
[1m+++ b/app/img/icon-souvenirs.svg[m
[36m@@ -0,0 +1,5 @@[m
[32m+[m[32m<svg xmlns="http://www.w3.org/2000/svg" width="32" height="37.5" viewBox="0 0 32 37.5">[m
[32m+[m[32m  <g id="icon-gift.svg" transform="translate(-25 -1515)">[m
[32m+[m[32m    <path id="Color_Overlay" data-name="Color Overlay" d="M26.577,1552.5v-17.979H26.44A1.432,1.432,0,0,1,25,1533.1v-5.586a1.432,1.432,0,0,1,1.439-1.416H37.652c-2.446-1.339-6.165-3.016-7.291-5.669-1.173-2.763,1.716-5.243,3.73-5.418a3.687,3.687,0,0,1,2.884,1c2.176,1.936,3.107,5.757,4.069,8.752.753-2.96,1.538-7.055,4.325-8.086a3.972,3.972,0,0,1,5,2.668c.255,1.2-.3,3.349-7.205,6.753h12.4A1.433,1.433,0,0,1,57,1527.519v5.586a1.432,1.432,0,0,1-1.44,1.416h-.053V1552.5Zm17.752-1.466h9.688v-16.513H44.329Zm-16.259,0h9.687v-16.513H28.069Zm11.18,0h3.587V1527.6H39.249Zm5.08-18.011H55.476V1527.6H44.329Zm-17.8,0H37.756V1527.6H26.524Zm5.024-14c-.052,1.648,2.109,3.1,3.221,3.835a34.8,34.8,0,0,0,4.748,2.416c-.7-2.689-1.633-6.505-3.561-8.169a2.164,2.164,0,0,0-1.441-.511C33.1,1516.589,31.588,1517.721,31.548,1519.017Zm14.666-1.084c-2.284.333-3.118,4.933-3.56,6.753,1.181-.7,2.384-1.14,3.646-2,.843-.575,2.74-1.808,2.543-3.168a2.453,2.453,0,0,0-2.359-1.6A1.886,1.886,0,0,0,46.214,1517.933Z" fill="#81b3d2"/>[m
[32m+[m[32m  </g>[m
[32m+[m[32m</svg>[m
[1mdiff --git a/app/img/icon-twitter.svg b/app/img/icon-twitter.svg[m
[1mnew file mode 100644[m
[1mindex 0000000..55e5b0d[m
[1m--- /dev/null[m
[1m+++ b/app/img/icon-twitter.svg[m
[36m@@ -0,0 +1,12 @@[m
[32m+[m[32m<svg xmlns="http://www.w3.org/2000/svg" width="18" height="14.001" viewBox="0 0 18 14.001">[m
[32m+[m[32m  <g id="icon-twitter.svg" transform="translate(-98 -3482)">[m
[32m+[m[32m    <g id="icon-twitter.svg-2" data-name="icon-twitter.svg" transform="translate(98 3482)">[m
[32m+[m[32m      <g id="W6EeEF">[m
[32m+[m[32m        <g id="Сгруппировать_5" data-name="Сгруппировать 5">[m
[32m+[m[32m          <path id="Контур_18" data-name="Контур 18" d="M11.605.146a3.529,3.529,0,0,1,3.79,1.1c.714-.215,1.411-.449,2.131-.659a2.119,2.119,0,0,1-.908,1.65A1.755,1.755,0,0,0,18,1.776a2.828,2.828,0,0,1-1.657,1.888C16.1,9.958,12.977,14.124,5.664,14H5.191c-.434,0-4.413-.43-5.191-1.76a7.15,7.15,0,0,0,4.973-1.1c-1.017-.28-2.84-.443-3.158-2.75A2.362,2.362,0,0,0,3.079,8.5C1.807,7.7.4,7.033.474,4.982a2.2,2.2,0,0,0,1.42.44C1.149,5.2-.193,2.29.947.8c1.927,1.73,3.958,3.362,7.58,3.519A4.425,4.425,0,0,1,11.605.146Z"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m      </g>[m
[32m+[m[32m    </g>[m
[32m+[m[32m    <path id="Color_Overlay" data-name="Color Overlay" d="M103.665,3496h-.473c-.434,0-4.413-.43-5.191-1.76a7.15,7.15,0,0,0,4.973-1.1c-1.018-.28-2.84-.443-3.158-2.75a2.369,2.369,0,0,0,1.264.111c-1.272-.8-2.683-1.468-2.6-3.519a2.2,2.2,0,0,0,1.42.44c-.745-.224-2.088-3.133-.947-4.618,1.926,1.731,3.957,3.362,7.579,3.519a4.426,4.426,0,0,1,3.079-4.178,3.529,3.529,0,0,1,3.79,1.1c.714-.214,1.411-.448,2.131-.659a2.119,2.119,0,0,1-.908,1.651,1.754,1.754,0,0,0,1.381-.46,2.828,2.828,0,0,1-1.657,1.888c-.242,6.2-3.275,10.337-10.358,10.337C103.879,3496,103.773,3496,103.665,3496Z" fill="#fff"/>[m
[32m+[m[32m  </g>[m
[32m+[m[32m</svg>[m
[1mdiff --git a/app/img/icon-youtube.svg b/app/img/icon-youtube.svg[m
[1mnew file mode 100644[m
[1mindex 0000000..642dd87[m
[1m--- /dev/null[m
[1m+++ b/app/img/icon-youtube.svg[m
[36m@@ -0,0 +1,8 @@[m
[32m+[m[32m<svg xmlns="http://www.w3.org/2000/svg" width="20.001" height="14" viewBox="0 0 20.001 14">[m
[32m+[m[32m  <g id="icon-youtube.svg" transform="translate(-202 -3482)">[m
[32m+[m[32m    <g id="icon-youtube.svg-2" data-name="icon-youtube.svg" transform="translate(202 3482)">[m
[32m+[m[32m      <path id="Контур_20" data-name="Контур 20" d="M17.163,0H2.838A2.842,2.842,0,0,0,0,2.832v8.337A2.842,2.842,0,0,0,2.838,14H17.163A2.842,2.842,0,0,0,20,11.169V2.832A2.842,2.842,0,0,0,17.163,0ZM7.044,10.381V3.619L13.82,7Z"/>[m
[32m+[m[32m    </g>[m
[32m+[m[32m    <path id="Color_Overlay" data-name="Color Overlay" d="M204.838,3496a2.843,2.843,0,0,1-2.839-2.832v-8.337a2.842,2.842,0,0,1,2.839-2.831h14.325a2.842,2.842,0,0,1,2.837,2.831v8.337a2.842,2.842,0,0,1-2.837,2.832Zm4.206-3.619L215.82,3489l-6.776-3.38Z" fill="#fff"/>[m
[32m+[m[32m  </g>[m
[32m+[m[32m</svg>[m
[1mdiff --git a/app/img/index-image/desktop-bridge@1x.jpg b/app/img/index-image/desktop-bridge@1x.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..d331813[m
Binary files /dev/null and b/app/img/index-image/desktop-bridge@1x.jpg differ
[1mdiff --git a/app/img/index-image/desktop-bridge@2x.jpg b/app/img/index-image/desktop-bridge@2x.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..9cab6f3[m
Binary files /dev/null and b/app/img/index-image/desktop-bridge@2x.jpg differ
[1mdiff --git a/app/img/index-image/desktop-city@1x.jpg b/app/img/index-image/desktop-city@1x.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..9179250[m
Binary files /dev/null and b/app/img/index-image/desktop-city@1x.jpg differ
[1mdiff --git a/app/img/index-image/desktop-city@2x.jpg b/app/img/index-image/desktop-city@2x.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..eb4256d[m
Binary files /dev/null and b/app/img/index-image/desktop-city@2x.jpg differ
[1mdiff --git a/app/img/index-image/layer-under-intro.svg b/app/img/index-image/layer-under-intro.svg[m
[1mnew file mode 100644[m
[1mindex 0000000..348a159[m
[1m--- /dev/null[m
[1m+++ b/app/img/index-image/layer-under-intro.svg[m
[36m@@ -0,0 +1,4 @@[m
[32m+[m[32m<svg id="Сгруппировать_67" data-name="Сгруппировать 67" xmlns="http://www.w3.org/2000/svg" width="768" height="37.008" viewBox="0 0 768 37.008">[m
[32m+[m[32m  <path id="Shape_2" data-name="Shape 2" d="M0,0H384.01V37.008Z" fill="#fff"/>[m
[32m+[m[32m  <path id="Shape_2_copy" data-name="Shape 2 copy" d="M768,0H383.99V37.008Z" fill="#fff"/>[m
[32m+[m[32m</svg>[m
[1mdiff --git a/app/img/index-image/map.jpg b/app/img/index-image/map.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..b7355fc[m
Binary files /dev/null and b/app/img/index-image/map.jpg differ
[1mdiff --git a/app/img/index-image/map@2x.jpg b/app/img/index-image/map@2x.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..64f3ed3[m
Binary files /dev/null and b/app/img/index-image/map@2x.jpg differ
[1mdiff --git a/app/img/index-image/mobile-bridge@1x.jpg b/app/img/index-image/mobile-bridge@1x.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..c02c81b[m
Binary files /dev/null and b/app/img/index-image/mobile-bridge@1x.jpg differ
[1mdiff --git a/app/img/index-image/mobile-bridge@2x.jpg b/app/img/index-image/mobile-bridge@2x.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..ac9015e[m
Binary files /dev/null and b/app/img/index-image/mobile-bridge@2x.jpg differ
[1mdiff --git a/app/img/index-image/mobile-city@1x.jpg b/app/img/index-image/mobile-city@1x.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..23f1841[m
Binary files /dev/null and b/app/img/index-image/mobile-city@1x.jpg differ
[1mdiff --git a/app/img/index-image/mobile-city@2x.jpg b/app/img/index-image/mobile-city@2x.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..2a1b69b[m
Binary files /dev/null and b/app/img/index-image/mobile-city@2x.jpg differ
[1mdiff --git a/app/img/index-image/tablet-bridge@1x.jpg b/app/img/index-image/tablet-bridge@1x.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..c61629b[m
Binary files /dev/null and b/app/img/index-image/tablet-bridge@1x.jpg differ
[1mdiff --git a/app/img/index-image/tablet-bridge@2x.jpg b/app/img/index-image/tablet-bridge@2x.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..f396fc3[m
Binary files /dev/null and b/app/img/index-image/tablet-bridge@2x.jpg differ
[1mdiff --git a/app/img/index-image/tablet-city@1x.jpg b/app/img/index-image/tablet-city@1x.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..0cfb865[m
Binary files /dev/null and b/app/img/index-image/tablet-city@1x.jpg differ
[1mdiff --git a/app/img/index-image/tablet-city@2x.jpg b/app/img/index-image/tablet-city@2x.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..c88663d[m
Binary files /dev/null and b/app/img/index-image/tablet-city@2x.jpg differ
[1mdiff --git a/app/img/index-image/webp/desktop-bridge@1x.webp.webp b/app/img/index-image/webp/desktop-bridge@1x.webp.webp[m
[1mnew file mode 100644[m
[1mindex 0000000..b8048c0[m
Binary files /dev/null and b/app/img/index-image/webp/desktop-bridge@1x.webp.webp differ
[1mdiff --git a/app/img/index-image/webp/desktop-bridge@2x.webp.webp b/app/img/index-image/webp/desktop-bridge@2x.webp.webp[m
[1mnew file mode 100644[m
[1mindex 0000000..7e0115d[m
Binary files /dev/null and b/app/img/index-image/webp/desktop-bridge@2x.webp.webp differ
[1mdiff --git a/app/img/index-image/webp/desktop-city@1x.webp.webp b/app/img/index-image/webp/desktop-city@1x.webp.webp[m
[1mnew file mode 100644[m
[1mindex 0000000..997ef55[m
Binary files /dev/null and b/app/img/index-image/webp/desktop-city@1x.webp.webp differ
[1mdiff --git a/app/img/index-image/webp/desktop-city@2x.webp.webp b/app/img/index-image/webp/desktop-city@2x.webp.webp[m
[1mnew file mode 100644[m
[1mindex 0000000..537ecae[m
Binary files /dev/null and b/app/img/index-image/webp/desktop-city@2x.webp.webp differ
[1mdiff --git a/app/img/index-image/webp/map.webp.webp b/app/img/index-image/webp/map.webp.webp[m
[1mnew file mode 100644[m
[1mindex 0000000..3608d4f[m
Binary files /dev/null and b/app/img/index-image/webp/map.webp.webp differ
[1mdiff --git a/app/img/index-image/webp/map@2x.webp.webp b/app/img/index-image/webp/map@2x.webp.webp[m
[1mnew file mode 100644[m
[1mindex 0000000..2e4bc33[m
Binary files /dev/null and b/app/img/index-image/webp/map@2x.webp.webp differ
[1mdiff --git a/app/img/index-image/webp/mobile-bridge@1x.webp.webp b/app/img/index-image/webp/mobile-bridge@1x.webp.webp[m
[1mnew file mode 100644[m
[1mindex 0000000..fe034c7[m
Binary files /dev/null and b/app/img/index-image/webp/mobile-bridge@1x.webp.webp differ
[1mdiff --git a/app/img/index-image/webp/mobile-bridge@2x.webp.webp b/app/img/index-image/webp/mobile-bridge@2x.webp.webp[m
[1mnew file mode 100644[m
[1mindex 0000000..3eb94f8[m
Binary files /dev/null and b/app/img/index-image/webp/mobile-bridge@2x.webp.webp differ
[1mdiff --git a/app/img/index-image/webp/mobile-city@1x.webp.webp b/app/img/index-image/webp/mobile-city@1x.webp.webp[m
[1mnew file mode 100644[m
[1mindex 0000000..5da80b0[m
Binary files /dev/null and b/app/img/index-image/webp/mobile-city@1x.webp.webp differ
[1mdiff --git a/app/img/index-image/webp/mobile-city@2x.webp.webp b/app/img/index-image/webp/mobile-city@2x.webp.webp[m
[1mnew file mode 100644[m
[1mindex 0000000..f48cf0d[m
Binary files /dev/null and b/app/img/index-image/webp/mobile-city@2x.webp.webp differ
[1mdiff --git a/app/img/index-image/webp/tablet-bridge@1x.webp.webp b/app/img/index-image/webp/tablet-bridge@1x.webp.webp[m
[1mnew file mode 100644[m
[1mindex 0000000..e83425a[m
Binary files /dev/null and b/app/img/index-image/webp/tablet-bridge@1x.webp.webp differ
[1mdiff --git a/app/img/index-image/webp/tablet-bridge@2x.webp.webp b/app/img/index-image/webp/tablet-bridge@2x.webp.webp[m
[1mnew file mode 100644[m
[1mindex 0000000..4fbb5cd[m
Binary files /dev/null and b/app/img/index-image/webp/tablet-bridge@2x.webp.webp differ
[1mdiff --git a/app/img/index-image/webp/tablet-city@1x.webp.webp b/app/img/index-image/webp/tablet-city@1x.webp.webp[m
[1mnew file mode 100644[m
[1mindex 0000000..0325a80[m
Binary files /dev/null and b/app/img/index-image/webp/tablet-city@1x.webp.webp differ
[1mdiff --git a/app/img/index-image/webp/tablet-city@2x.webp.webp b/app/img/index-image/webp/tablet-city@2x.webp.webp[m
[1mnew file mode 100644[m
[1mindex 0000000..9f949e8[m
Binary files /dev/null and b/app/img/index-image/webp/tablet-city@2x.webp.webp differ
[1mdiff --git a/app/img/logotype/logotype-desktop.svg b/app/img/logotype/logotype-desktop.svg[m
[1mnew file mode 100644[m
[1mindex 0000000..39ad99e[m
[1m--- /dev/null[m
[1m+++ b/app/img/logotype/logotype-desktop.svg[m
[36m@@ -0,0 +1,102 @@[m
[32m+[m[32m<svg id="logotype-desktop.svg" xmlns="http://www.w3.org/2000/svg" width="187" height="96.001" viewBox="0 0 187 96.001">[m
[32m+[m[32m  <g id="Layer_2" data-name="Layer 2">[m
[32m+[m[32m    <path id="Контур_52" data-name="Контур 52" d="M187,0H0L80.64,90.075a16.916,16.916,0,0,0,25.719,0Z" fill="#81b3d3"/>[m
[32m+[m[32m    <g id="Сгруппировать_46" data-name="Сгруппировать 46">[m
[32m+[m[32m      <g id="Сгруппировать_14" data-name="Сгруппировать 14">[m
[32m+[m[32m        <path id="Контур_53" data-name="Контур 53" d="M43.325.718,92.942,58.81,142.361,1.069Z" fill="#23a9e1"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_15" data-name="Сгруппировать 15">[m
[32m+[m[32m        <path id="Контур_54" data-name="Контур 54" d="M122.256,17.256l-15.215.084c6.012-6.9,8.714-6.163,15.215-.084Z" fill="#fff"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_16" data-name="Сгруппировать 16">[m
[32m+[m[32m        <path id="Контур_55" data-name="Контур 55" d="M81,22.59h26.73c-1.989-1.228-6.721-7.028-9.325-4.871C98.2,17.9,90.89,8.91,86.09,13.239c-4.187,3.782-6.132-.5-10.879,2.5C69.8,19.294,78.338,21.389,81,22.59Z" fill="#fff"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <path id="Контур_56" data-name="Контур 56" d="M93.281.016H42.265V22.38L92.943,83.631l.339-.421,50.846-60.128V.016ZM55,1.785h5.472V18.9L55,12.44Zm-.784,9.727L49.239,5.634V1.785H54.22Zm19.341-2.7-5.75-7.031h5.75Zm-6.655,3.811L61.3,1.785h5.609Zm-5.644-9.2,5.535,10.7a58.33,58.33,0,0,0-5.535,4.833Zm6.428-.549,5.619,6.87c-1.119.644-2.161,1.294-3.106,1.923-.892.6-1.727,1.191-2.513,1.775Zm6.656-.2,4.774,4.2a48.748,48.748,0,0,0-4.774,2.283ZM79.93,6.556,74.513,1.785h5.97V6.348C80.3,6.418,80.113,6.485,79.93,6.556ZM99.085,1.785h5l-5,2.428Zm-5.8,0h4.448L93.283,3.831Zm-.94,1.954L88.094,1.785h4.249Zm-5.5.524-5.1-2.478h5.1ZM81.267,2.424,86,4.722a38.891,38.891,0,0,0-4.732,1.341Zm6.359,0,3.472,1.6a32.267,32.267,0,0,0-3.472.388Zm10.444.06V4.42a33.374,33.374,0,0,0-3.363-.386Zm6.486-.065V6.109a40.157,40.157,0,0,0-4.784-1.36Zm.786-.639H111.3l-5.445,4.8c-.168-.065-.341-.124-.511-.187V1.785Zm13.575,0h5.61l-5.61,10.828Zm-6.653,0h5.75l-5.75,6.977Zm-.785.883v6.5a51.054,51.054,0,0,0-4.815-2.262Zm6.654.2V13.329c-.714-.512-1.466-1.031-2.26-1.551-1.025-.672-2.16-1.368-3.387-2.056Zm6.428.55V18.595a63.214,63.214,0,0,0-5.488-4.58Zm.784,15.933V1.785h5.473V13.14l-5.4,6.285C125.4,19.405,125.376,19.381,125.347,19.354Zm6.259-17.569h4.98V6.433l-4.98,5.792Zm-83.151,0V4.708L45.98,1.785ZM61.366,19.949l.141.129a56.835,56.835,0,0,1,9.232-7.614C75.936,9,84,4.882,92.939,4.931c8.917.043,17.1,4.175,22.388,7.633a60.185,60.185,0,0,1,9.465,7.591l-3.882,4.516c-6.925.945-11.887,6.05-18.64,4.934-3.4-.562-3.5-2.5-4.478-4.436-.747-1.486-1.94-1.3-3.494-1.9-1.445-.563-2.281-1.73-5.172-1.056-2.533.59-2.812,4.5-5.963,4.274-1.693-.12-1.814-2.486-4.252-5.515-6.314-7.538-12.181-6.494-16.278.473L92.942,57.223Zm76-14.43V1.785h3.21Z" fill="#491213"/>[m
[32m+[m[32m      <g id="Сгруппировать_17" data-name="Сгруппировать 17">[m
[32m+[m[32m        <path id="Контур_57" data-name="Контур 57" d="M88.915,70.6l4.027-6.471L96.954,70.6l-4.012,6.486Z" fill="#23a9e1"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_24" data-name="Сгруппировать 24">[m
[32m+[m[32m        <g id="Сгруппировать_18" data-name="Сгруппировать 18">[m
[32m+[m[32m          <path id="Контур_58" data-name="Контур 58" d="M65.589,32.123a2.787,2.787,0,0,1,.807,2.107c-.058.576-.937,1.543-.27,1.838l2.246-2.822c-.6-.15-5.375-5.822-5.452-6.443l-3.165,1.726c.164.658,1.3,0,1.858.046a2.93,2.93,0,0,1,1.957,1.147c-1.73,1.443-5.941,4.995-6.386,5.068-.225.036-1.09-.6-1.1-.056-.006.261.853,1.01,1.016,1.2l2.233,2.641c.62-.281-.111-.729.205-1.238.231-.372,4.91-4.248,6.054-5.219Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_19" data-name="Сгруппировать 19">[m
[32m+[m[32m          <path id="Контур_59" data-name="Контур 59" d="M60.305,25.173c.445-.095.625.432.96-.056q-1.226-1.453-2.454-2.9c-.372-.44-.842-.912-.707.018.089.627-6.125,5.639-6.505,5.794-.48.2-.759-.415-1.111.1q1.1,1.3,2.2,2.6c.246.291.478.609.748.878.34.338.208-.669.224-.582-.091-.511.528-.944.857-1.223A60.808,60.808,0,0,1,60.305,25.173Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_20" data-name="Сгруппировать 20">[m
[32m+[m[32m          <path id="Контур_60" data-name="Контур 60" d="M51.518,24.261A3.226,3.226,0,0,1,47.3,22.228c-.544-1.827.615-3.74,2.075-4.78,1.443-1.027,3.6-.966,4.381.834a3.571,3.571,0,0,1-.094,2.491c-.16.5-.6,1,.056,1.283q1.292-1.637,2.586-3.272c-1.057-.63-1.52-1.676-2.3-2.584a5.879,5.879,0,0,0-3.489-2.274c-2.875-.4-5.585,2.545-5.806,5.222a5.707,5.707,0,0,0,1.248,3.983c.751.99,1.872,1.616,2.44,2.742a22.657,22.657,0,0,0,3.292-1.249,1.558,1.558,0,0,0-.17-.364Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_21" data-name="Сгруппировать 21">[m
[32m+[m[32m          <path id="Контур_61" data-name="Контур 61" d="M90.894,60.509c-1.153-.765-4.034-4.669-4.583-5.317q-.162-.194-.33-.39a2.328,2.328,0,0,0-.246.191c-.173.143.134.57-.052.86-.794,1.236-5.768,4.961-6.027,5.14-.557.382-1.166-.158-1.492.316a45.329,45.329,0,0,0,3.024,3.566c.481.078.149-.812.211-1a31.394,31.394,0,0,1,3.556-3.2c.337-.281.688.423.89.719a1.746,1.746,0,0,1,.3,1.562c-.116.368-.717.916-.25,1.168.621-.719,2.367-2.741,2.619-3.035s-.568-.037-.47-.087a.919.919,0,0,1-1.065-.029c-.1-.071-1.091-1.077-.993-1.161a4.626,4.626,0,0,1,1.52-1.094c.864-.212,1.585,1.508,1.712,2.12a3.426,3.426,0,0,1-.076,1.742c-.124.384-.489.693.017.925q1.07-1.453,2.135-2.907a.718.718,0,0,1-.4-.1C90.766,60.424,91.032,60.579,90.894,60.509Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_22" data-name="Сгруппировать 22">[m
[32m+[m[32m          <path id="Контур_62" data-name="Контур 62" d="M80.65,56.4a5.3,5.3,0,0,0,.77-7.307A5.414,5.414,0,0,0,73.6,48.042a5.263,5.263,0,0,0-.759,7.293A5.448,5.448,0,0,0,80.65,56.4C81.807,55.425,80.55,56.466,80.65,56.4Zm-.466-4.732a7.438,7.438,0,0,1-3.739,3.651c-1.822.712-3.106-.823-2.366-2.542a7.456,7.456,0,0,1,3.745-3.65c1.855-.732,3.072.842,2.36,2.541C79.8,52.55,80.255,51.5,80.184,51.664Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_23" data-name="Сгруппировать 23">[m
[32m+[m[32m          <path id="Контур_63" data-name="Контур 63" d="M74.194,41.852c.475.06.928.548,1.27.042l-2.231-2.625c-.6.268.047.547-.2.967s-2.564.778-3.181.886A15.622,15.622,0,0,1,71.016,38.3c.545-.443.885.43,1.285-.14q-1.375-1.619-2.748-3.239c-.311-.364-.56-1.023-.983-.677a8.3,8.3,0,0,1-.088,1.725c-.086.235-.938,3.622-1.93,4.45a21.556,21.556,0,0,1-2.707,2.088c-.542.188-.827-.6-1.222-.038l2.5,2.944c.125.147.6.859.768.889.522.094.059-.889.113-1.081.151-.429,2.5-2.707,3.5-2.846a19.538,19.538,0,0,1,4.69-.522Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_25" data-name="Сгруппировать 25">[m
[32m+[m[32m        <path id="Контур_64" data-name="Контур 64" d="M67.922,22.773c-4.051-.166-2.355-3.937.395-4.787,2.617-.809,8.1,1.709,9.862,3.383-2.788.851-6.4.729-9.465.87-.226-3.106-.959-2.023-.792.534Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_26" data-name="Сгруппировать 26">[m
[32m+[m[32m        <path id="Контур_65" data-name="Контур 65" d="M77.443,35.267C68.807,35.2,74.646,22,77.584,22.8c3.379,1.068,3,12.566-.141,12.466Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_27" data-name="Сгруппировать 27">[m
[32m+[m[32m        <path id="Контур_66" data-name="Контур 66" d="M83.56,30.957c-.841,2.49-2.366,2.955-2.2-.07.194-3.488,2.483-2.65,4.939-3.986,2.044-1.114,3.144-5.191,6.653-2.753,1.565,1.088,3.358.178,3.858,1.825-.026-.084-4.554,10.263-2.035,10.263-4.971,0-2.779-5.9-.876-9.855-1.851.881-4.851,6.659-2.387,7.609-1.283,1.679-5.2,3.928-7.249,2.288-1.552-1.243-.69-3.31-.708-5.32Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_28" data-name="Сгруппировать 28">[m
[32m+[m[32m        <path id="Контур_67" data-name="Контур 67" d="M87.673,40.517c-3.5,1.041-8.138-1.2-2.515-2.33,3.49-.7,7.2.775,2.515,2.33C87.813,40.476,87.544,40.56,87.673,40.517Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_29" data-name="Сгруппировать 29">[m
[32m+[m[32m        <path id="Контур_68" data-name="Контур 68" d="M92.051,40.377c-.737-1.651.562-3.619,2.685-2.189,1.85,1.246-.853,3.092-2.685,2.189Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_30" data-name="Сгруппировать 30">[m
[32m+[m[32m        <path id="Контур_69" data-name="Контур 69" d="M89.1,45.025c-2.416-.744-10.557-.559-5.228-2.752,1.643-.676,10.173.1,5.228,2.752Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_31" data-name="Сгруппировать 31">[m
[32m+[m[32m        <path id="Контур_70" data-name="Контур 70" d="M99.552,48.324c-1.439-1.222-2.9-1.289-4.237,0-1.8-3.278-8.335-2.18-11.388-2.639,1.642,4.01,14.893,4.759,15.625,2.639Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_32" data-name="Сгруппировать 32">[m
[32m+[m[32m        <path id="Контур_71" data-name="Контур 71" d="M97.647,50.737c-3.157-.145-6.684-.561-9.665.084,1.865.464,6.408,1.787,2.176,2.905,1.518,2.158,3.981,2.021,5.595.126A15.308,15.308,0,0,1,94.2,52.8c1.674-.3,3.24-1.262,3.449-2.064Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_33" data-name="Сгруппировать 33">[m
[32m+[m[32m        <path id="Контур_72" data-name="Контур 72" d="M101.25,46.877c-5.3-3.1-3.959-5.4.354-7.553,2.258-1.126,7.338-5.185,9.465-3.833q-4.91,5.693-9.819,11.386Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_34" data-name="Сгруппировать 34">[m
[32m+[m[32m        <path id="Контур_73" data-name="Контур 73" d="M97.477,39.633c-4.489-4.581,6.7-4.16,8.5-5.77,1.314.435,10.789-8.246,13.1-7.707-1.659,1.932-5.23,8.1-7.791,8.1-1.968,0-3.958-.291-5.481,1.1-2.229,2.039-5.921,3.076-8.328,4.275Z" fill="#f49774"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_35" data-name="Сгруппировать 35">[m
[32m+[m[32m        <path id="Контур_74" data-name="Контур 74" d="M98.947,34.032c-2.458,1.313-4.782-3.89-.538-3.383,2.818.337,5.673-.236,8.363.225a8.7,8.7,0,0,1-7.825,3.158Z" fill="#f4b1a4"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_45" data-name="Сгруппировать 45">[m
[32m+[m[32m        <g id="Сгруппировать_36" data-name="Сгруппировать 36">[m
[32m+[m[32m          <path id="Контур_75" data-name="Контур 75" d="M111.6,52.235a4.922,4.922,0,0,1,.214,2c-.107.869-.98,2.912-2.176,2.33a18.241,18.241,0,0,1-3.194-2.541c.8-.931,1.51-1.741,2.859-1.289.371.122.689-.036.3-.261-.406-.233-3.12-1.955-3.266-1.79-.272.309.529.864.22,1.466a6.988,6.988,0,0,1-.933,1.214c-.721-.6-1.927-1.247-1.059-2.246a3.7,3.7,0,0,1,2.1-1.336c.566-.113,1.845.387,2.01-.222L105.415,48c.177.8-3.355,4.505-4.139,5.44-.113.136-.659.607-.665.793-.009.427.623.1.658.084.487-.179,6.83,5.086,6.986,5.447.1.28-.221.571-.03.729-.01-.01.228.215.253.183.392-.466,4.532-5.949,5.384-6.19-.795-1.21-1.59-2.419-2.373-3.636C110.9,51.107,111.473,51.795,111.6,52.235Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_37" data-name="Сгруппировать 37">[m
[32m+[m[32m          <path id="Контур_76" data-name="Контур 76" d="M105.429,58.908c-2.081-1.333-5.606,1.274-6.137,1.525-1.041.49-1.792-.541-1.252-1.5a2.778,2.778,0,0,1,2.313-1.283c.278-.017,1.353.2,1.462.026.13-.2.228-.219.042-.343l-2.572-1.726c-.176,1.05-1.388,1.718-2.081,2.43a4.668,4.668,0,0,0-1.522,3.143,3.017,3.017,0,0,0,1.68,2.648,3.334,3.334,0,0,0,3.33-.509,19.265,19.265,0,0,1,1.928-1.166c1-.465,2.307-.062,1.957,1.264a3.592,3.592,0,0,1-2.41,2.329,3.317,3.317,0,0,1-1.876-.089c-.433-.141-1-.732-1.233-.112q1.745,1.263,3.49,2.526a2.325,2.325,0,0,1,1.087-1.557,11.652,11.652,0,0,0,2-2.121C106.8,62.712,107.177,60.354,105.429,58.908Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_38" data-name="Сгруппировать 38">[m
[32m+[m[32m          <path id="Контур_77" data-name="Контур 77" d="M105.429,58.908c.927.6-.591-.492,0,0Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_39" data-name="Сгруппировать 39">[m
[32m+[m[32m          <path id="Контур_78" data-name="Контур 78" d="M134.719,21.759Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_40" data-name="Сгруппировать 40">[m
[32m+[m[32m          <path id="Контур_79" data-name="Контур 79" d="M142.192,19.558c-.731.726-8.436-2.331-9-2.752-.291-.115-.3-1.315-.706-.829s-.811.972-1.217,1.457q-.628.754-1.258,1.506c-.26.313-.538.456-.038.717.839-.417,5.427,7.314,5.017,8.424-.725.374-6.928-5.035-7.095-5.391-.051-.145.275-1.016-.211-.941-.228.036-.744.892-.89,1.067-.3.355-.593.712-.891,1.067.333.483.518-.021.961.042a13.2,13.2,0,0,1,2.245,1.657c-.725.027-2.689.13-2.939.113-.906.112-.423-.66-1.017-.927l-2.281,2.752-1.329,1.6c-.054.065-.047.032.049.112.331.272.105.167.57.006.507-.176,6.571,4.909,6.789,5.167.378.448-.154.971.412,1.216q.9-1.087,1.8-2.174c.091-.11.141-.1.021-.2-.428-.351-.477.211-1,.153-.535-.089-4.4-3.354-5.906-4.59l8.215-.3c.3-.011,1.141.892,1.071,1.211-.081.376-.464.556.053.79.481-.572.988-1.144,1.459-1.726h0l.227-.281a.749.749,0,0,0,.21-.264l.168-.21c.426-.483,1.8-2,1.638-2.141-.462-.4-.686.464-1.3-.054a12.843,12.843,0,0,1-1.447-2.152c-.264-.447.61-.893.966-1.114.778-.48,3.253-1.178,3.49.346.04.257-.272.548-.084.7.044.037.2.241.27.162.163-.2,2.367-2.83,3.306-3.951A1.487,1.487,0,0,0,142.192,19.558ZM134.8,21.7h0l-.084.054.082-.052a5.727,5.727,0,0,0-.96.758q-.785-1.34-1.568-2.681,1.769.733,3.532,1.474A3.725,3.725,0,0,0,134.8,21.7Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_41" data-name="Сгруппировать 41">[m
[32m+[m[32m          <path id="Контур_80" data-name="Контур 80" d="M125.04,32.866a5.411,5.411,0,0,0-7.6.828,5.339,5.339,0,0,0,.606,7.581,5.4,5.4,0,0,0,7.588-.842A5.29,5.29,0,0,0,125.04,32.866Zm-.283,6.585a.208.208,0,0,1-.026.027c-1.234,1.286-3.364.1-4.514-.728s-3.117-2.559-1.86-4.086c1.057-1.281,3.13-.23,4.2.48,1.2.8,3.419,2.585,2.281,4.2C124.913,39.252,124.965,39.194,124.757,39.451Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_42" data-name="Сгруппировать 42">[m
[32m+[m[32m          <path id="Контур_81" data-name="Контур 81" d="M125.04,32.866c1.173.955-.253-.21,0,0Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_43" data-name="Сгруппировать 43">[m
[32m+[m[32m          <path id="Контур_82" data-name="Контур 82" d="M124.73,39.478l.027-.027c.029-.037.055-.073.08-.11A1.517,1.517,0,0,0,124.73,39.478Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_44" data-name="Сгруппировать 44">[m
[32m+[m[32m          <path id="Контур_83" data-name="Контур 83" d="M118.435,41.95c.112.094.274.223-.064-.057a5.906,5.906,0,0,0-8.418,1.152q-1.485,1.776-2.967,3.551c.352.51.764-.117,1.276.175.436.249,6.256,5.079,6.35,5.342.165.456-.254.546.144.871a41.272,41.272,0,0,0,4.944-6.164A4.3,4.3,0,0,0,118.435,41.95Zm-1.321,6.724c-.241.295-.044.054-.666.647-.307.292-6.45-4.654-6.2-4.922a4.374,4.374,0,0,1,3.584-1.291C116.023,43.666,119.052,46.354,117.115,48.674Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m      </g>[m
[32m+[m[32m    </g>[m
[32m+[m[32m  </g>[m
[32m+[m[32m</svg>[m
[1mdiff --git a/app/img/logotype/logotype-mobile.svg b/app/img/logotype/logotype-mobile.svg[m
[1mnew file mode 100644[m
[1mindex 0000000..86eea5b[m
[1m--- /dev/null[m
[1m+++ b/app/img/logotype/logotype-mobile.svg[m
[36m@@ -0,0 +1,156 @@[m
[32m+[m[32m<svg id="logotyle-mobile.svg" xmlns="http://www.w3.org/2000/svg" width="102" height="83" viewBox="0 0 102 83">[m
[32m+[m[32m  <g id="Layer_2" data-name="Layer 2">[m
[32m+[m[32m    <g id="Сгруппировать_66" data-name="Сгруппировать 66">[m
[32m+[m[32m      <g id="Layer_2-2" data-name="Layer 2">[m
[32m+[m[32m        <g id="Сгруппировать_34" data-name="Сгруппировать 34">[m
[32m+[m[32m          <g id="Сгруппировать_16" data-name="Сгруппировать 16">[m
[32m+[m[32m            <path id="Контур_52" data-name="Контур 52" d="M0,0,50.746,58.362,102,0Z" fill="#23a9e1"/>[m
[32m+[m[32m          </g>[m
[32m+[m[32m          <path id="Контур_53" data-name="Контур 53" d="M51.085,0H0V22.2L50.747,83l.339-.419L102,22.895V0Zm0,56.382-.339.405L3.72,1.755H98.446Z" fill="#491213"/>[m
[32m+[m[32m          <path id="Контур_54" data-name="Контур 54" d="M50.746,56.787l.339-.405L78.751,24.474c-6.935.938-11.9,6-18.665,4.9-3.407-.557-3.509-2.485-4.484-4.4-.748-1.476-1.945-1.288-3.5-1.889-1.448-.557-2.284-1.718-5.179-1.048-2.536.585-2.817,4.464-5.972,4.243-1.694-.12-1.816-2.469-4.258-5.474-6.322-7.482-12.2-6.448-16.3.468Z" fill="#491213"/>[m
[32m+[m[32m          <g id="Сгруппировать_23" data-name="Сгруппировать 23">[m
[32m+[m[32m            <g id="Сгруппировать_17" data-name="Сгруппировать 17">[m
[32m+[m[32m              <path id="Контур_55" data-name="Контур 55" d="M23.355,31.87a2.751,2.751,0,0,1,.809,2.091c-.06.572-.94,1.532-.272,1.825q1.127-1.4,2.25-2.8c-.6-.149-5.384-5.78-5.46-6.4L17.513,28.3c.165.652,1.3,0,1.86.045a2.939,2.939,0,0,1,1.96,1.138c-1.736,1.432-5.951,4.958-6.4,5.03-.228.037-1.093-.594-1.106-.054-.007.259.856,1,1.018,1.195q1.118,1.312,2.235,2.621c.621-.278-.108-.721.206-1.227.236-.371,4.921-4.216,6.064-5.181Z" fill="#fff"/>[m
[32m+[m[32m            </g>[m
[32m+[m[32m            <g id="Сгруппировать_18" data-name="Сгруппировать 18">[m
[32m+[m[32m              <path id="Контур_56" data-name="Контур 56" d="M18.066,24.973c.443-.094.625.428.96-.055q-1.226-1.444-2.455-2.884c-.373-.437-.844-.905-.709.018.088.623-6.134,5.6-6.515,5.752-.48.195-.759-.411-1.112.1l2.2,2.577c.247.29.48.6.749.873.34.335.209-.664.226-.579-.092-.506.528-.937.857-1.214A60.364,60.364,0,0,1,18.066,24.973Z" fill="#fff"/>[m
[32m+[m[32m            </g>[m
[32m+[m[32m            <g id="Сгруппировать_19" data-name="Сгруппировать 19">[m
[32m+[m[32m              <path id="Контур_57" data-name="Контур 57" d="M9.265,24.067a3.239,3.239,0,0,1-4.221-2.018c-.545-1.814.617-3.713,2.079-4.746,1.443-1.019,3.6-.958,4.387.828a3.525,3.525,0,0,1-.1,2.474c-.161.5-.6.988.057,1.273q1.293-1.625,2.589-3.247c-1.059-.626-1.524-1.664-2.309-2.566A5.893,5.893,0,0,0,8.26,13.809c-2.879-.4-5.592,2.525-5.813,5.183A5.632,5.632,0,0,0,3.7,22.947c.752.982,1.873,1.6,2.443,2.722a22.9,22.9,0,0,0,3.3-1.241,1.477,1.477,0,0,0-.171-.361Z" fill="#fff"/>[m
[32m+[m[32m            </g>[m
[32m+[m[32m            <g id="Сгруппировать_20" data-name="Сгруппировать 20">[m
[32m+[m[32m              <path id="Контур_58" data-name="Контур 58" d="M48.694,60.047c-1.154-.758-4.038-4.634-4.589-5.277-.108-.128-.221-.258-.329-.387a2.144,2.144,0,0,0-.247.187c-.175.145.134.567-.053.855-.8,1.224-5.778,4.923-6.037,5.1-.556.38-1.168-.157-1.492.31a43.865,43.865,0,0,0,3.03,3.54c.481.077.146-.8.211-.988a31.626,31.626,0,0,1,3.561-3.173c.337-.278.691.421.891.715a1.72,1.72,0,0,1,.3,1.55c-.117.367-.719.909-.251,1.16l2.621-3.013c.254-.29-.567-.037-.471-.085a.929.929,0,0,1-1.066-.029c-.1-.067-1.092-1.069-.993-1.152A4.663,4.663,0,0,1,45.3,58.273c.867-.211,1.587,1.5,1.715,2.1a3.361,3.361,0,0,1-.075,1.729c-.123.382-.488.689.018.919.714-.962,1.428-1.92,2.139-2.886a.685.685,0,0,1-.4-.093C48.566,59.964,48.834,60.117,48.694,60.047Z" fill="#fff"/>[m
[32m+[m[32m            </g>[m
[32m+[m[32m            <g id="Сгруппировать_21" data-name="Сгруппировать 21">[m
[32m+[m[32m              <path id="Контур_59" data-name="Контур 59" d="M38.436,55.965a5.226,5.226,0,0,0,.774-7.252,5.453,5.453,0,0,0-7.831-1.04,5.194,5.194,0,0,0-.759,7.238,5.485,5.485,0,0,0,7.817,1.054C39.6,55,38.337,56.035,38.436,55.965Zm-.466-4.7a7.415,7.415,0,0,1-3.745,3.623c-1.823.707-3.109-.816-2.366-2.522a7.422,7.422,0,0,1,3.747-3.623c1.858-.725,3.077.835,2.364,2.522C37.588,52.147,38.041,51.1,37.971,51.268Z" fill="#fff"/>[m
[32m+[m[32m            </g>[m
[32m+[m[32m            <g id="Сгруппировать_22" data-name="Сгруппировать 22">[m
[32m+[m[32m              <path id="Контур_60" data-name="Контур 60" d="M31.971,41.528c.478.061.93.545,1.273.042q-1.115-1.3-2.235-2.606c-.6.265.048.544-.195.96s-2.568.772-3.186.88A15.757,15.757,0,0,1,28.789,38c.545-.439.887.428,1.288-.139q-1.378-1.607-2.754-3.214c-.311-.363-.56-1.017-.982-.672a8.139,8.139,0,0,1-.088,1.711c-.086.233-.94,3.6-1.933,4.42a21.459,21.459,0,0,1-2.711,2.071c-.543.186-.827-.591-1.224-.037q1.249,1.462,2.5,2.922c.125.146.6.853.77.882.524.095.06-.882.113-1.073.151-.424,2.508-2.687,3.507-2.824a19.65,19.65,0,0,1,4.7-.521C32.311,41.57,31.62,41.485,31.971,41.528Z" fill="#fff"/>[m
[32m+[m[32m            </g>[m
[32m+[m[32m          </g>[m
[32m+[m[32m          <g id="Сгруппировать_33" data-name="Сгруппировать 33">[m
[32m+[m[32m            <g id="Сгруппировать_24" data-name="Сгруппировать 24">[m
[32m+[m[32m              <path id="Контур_61" data-name="Контур 61" d="M69.432,51.835a4.862,4.862,0,0,1,.216,1.985c-.108.863-.983,2.89-2.181,2.313a18.4,18.4,0,0,1-3.2-2.522c.8-.925,1.512-1.728,2.863-1.28.371.122.69-.036.3-.259-.405-.231-3.123-1.942-3.272-1.778-.271.307.529.857.223,1.456a6.948,6.948,0,0,1-.936,1.2c-.723-.6-1.93-1.236-1.059-2.229a3.7,3.7,0,0,1,2.1-1.326c.567-.112,1.847.384,2.014-.222q-1.639-.772-3.27-1.546c.178.79-3.36,4.47-4.144,5.4-.112.136-.66.6-.666.789-.009.423.623.095.659.083.488-.179,6.838,5.048,6.995,5.407.1.278-.221.567-.028.722-.011-.01.229.213.255.183.391-.464,4.535-5.906,5.391-6.144-.8-1.2-1.593-2.4-2.375-3.609C68.729,50.715,69.3,51.4,69.432,51.835Z" fill="#fff"/>[m
[32m+[m[32m            </g>[m
[32m+[m[32m            <g id="Сгруппировать_25" data-name="Сгруппировать 25">[m
[32m+[m[32m              <path id="Контур_62" data-name="Контур 62" d="M63.25,58.459c-2.083-1.324-5.615,1.264-6.145,1.513-1.042.484-1.795-.537-1.254-1.484a2.791,2.791,0,0,1,2.318-1.274c.277-.018,1.355.195,1.464.025.129-.2.229-.219.041-.343L57.1,55.183c-.178,1.045-1.391,1.709-2.083,2.411a4.627,4.627,0,0,0-1.526,3.119,2.989,2.989,0,0,0,1.682,2.629,3.356,3.356,0,0,0,3.334-.5,19.139,19.139,0,0,1,1.93-1.157c1-.462,2.314-.062,1.959,1.254a3.575,3.575,0,0,1-2.411,2.313,3.353,3.353,0,0,1-1.879-.089c-.434-.139-1-.725-1.234-.11l3.492,2.507a2.3,2.3,0,0,1,1.09-1.545,11.631,11.631,0,0,0,2-2.1C64.618,62.234,65,59.893,63.25,58.459Z" fill="#fff"/>[m
[32m+[m[32m            </g>[m
[32m+[m[32m            <g id="Сгруппировать_26" data-name="Сгруппировать 26">[m
[32m+[m[32m              <path id="Контур_63" data-name="Контур 63" d="M63.25,58.459c.929.59-.592-.488,0,0Z" fill="#fff"/>[m
[32m+[m[32m            </g>[m
[32m+[m[32m            <g id="Сгруппировать_27" data-name="Сгруппировать 27">[m
[32m+[m[32m              <path id="Контур_64" data-name="Контур 64" d="M92.578,21.582Z" fill="#fff"/>[m
[32m+[m[32m            </g>[m
[32m+[m[32m            <g id="Сгруппировать_28" data-name="Сгруппировать 28">[m
[32m+[m[32m              <path id="Контур_65" data-name="Контур 65" d="M100.06,19.4c-.73.719-8.447-2.315-9.01-2.733-.29-.115-.3-1.306-.707-.823s-.813.966-1.219,1.446q-.629.75-1.26,1.5c-.262.309-.539.452-.039.711.841-.413,5.436,7.26,5.024,8.362-.728.372-6.937-5-7.1-5.352-.053-.144.273-1.009-.212-.934-.231.036-.746.886-.893,1.059l-.892,1.06c.334.478.518-.022.962.042a13.259,13.259,0,0,1,2.248,1.644c-.728.027-2.7.13-2.945.112-.906.111-.423-.654-1.018-.92q-1.144,1.367-2.285,2.733c-.441.529-.888,1.058-1.329,1.587-.054.065-.047.033.051.112.331.269.1.166.569.006.509-.176,6.581,4.872,6.8,5.128.377.445-.156.965.413,1.207q.9-1.079,1.8-2.158c.091-.108.14-.1.021-.195-.43-.35-.48.209-1.005.151-.535-.088-4.409-3.329-5.914-4.556l8.224-.3c.3-.011,1.144.886,1.07,1.2-.079.375-.465.552.056.786.48-.569.986-1.137,1.46-1.715h0l.229-.279a.716.716,0,0,0,.21-.261l.169-.209c.427-.48,1.807-1.982,1.64-2.126-.463-.4-.685.461-1.3-.052a12.74,12.74,0,0,1-1.447-2.138c-.266-.444.608-.886.966-1.106.779-.475,3.259-1.168,3.492.345.041.255-.271.543-.084.695.045.037.206.239.272.161.165-.194,2.368-2.81,3.312-3.923A1.394,1.394,0,0,0,100.06,19.4Zm-7.4,2.13h0c-.051.032-.073.047-.084.053.015-.008.047-.029.082-.05a5.77,5.77,0,0,0-.962.751q-.783-1.33-1.568-2.661,1.773.729,3.536,1.465A3.786,3.786,0,0,0,92.663,21.529Z" fill="#fff"/>[m
[32m+[m[32m            </g>[m
[32m+[m[32m            <g id="Сгруппировать_29" data-name="Сгруппировать 29">[m
[32m+[m[32m              <path id="Контур_66" data-name="Контур 66" d="M82.885,32.609a5.451,5.451,0,0,0-7.611.821,5.271,5.271,0,0,0,.608,7.526,5.437,5.437,0,0,0,7.6-.836A5.216,5.216,0,0,0,82.885,32.609ZM82.6,39.145a.331.331,0,0,1-.025.026c-1.236,1.278-3.368.1-4.521-.722s-3.12-2.538-1.862-4.055c1.061-1.272,3.135-.229,4.206.475,1.2.795,3.423,2.567,2.282,4.167C82.757,38.946,82.812,38.891,82.6,39.145Z" fill="#fff"/>[m
[32m+[m[32m            </g>[m
[32m+[m[32m            <g id="Сгруппировать_30" data-name="Сгруппировать 30">[m
[32m+[m[32m              <path id="Контур_67" data-name="Контур 67" d="M82.885,32.609c1.177.948-.253-.21,0,0Z" fill="#fff"/>[m
[32m+[m[32m            </g>[m
[32m+[m[32m            <g id="Сгруппировать_31" data-name="Сгруппировать 31">[m
[32m+[m[32m              <path id="Контур_68" data-name="Контур 68" d="M82.577,39.173a.343.343,0,0,1,.025-.027c.028-.037.057-.072.08-.109A1.5,1.5,0,0,0,82.577,39.173Z" fill="#fff"/>[m
[32m+[m[32m            </g>[m
[32m+[m[32m            <g id="Сгруппировать_32" data-name="Сгруппировать 32">[m
[32m+[m[32m              <path id="Контур_69" data-name="Контур 69" d="M76.271,41.626c.112.093.275.222-.061-.056a5.949,5.949,0,0,0-8.429,1.143q-1.488,1.761-2.971,3.524c.352.506.765-.116,1.277.174.437.247,6.263,5.041,6.359,5.3.165.454-.255.542.144.865a41.006,41.006,0,0,0,4.953-6.116A4.252,4.252,0,0,0,76.271,41.626ZM74.95,48.3c-.241.293-.043.053-.666.642-.309.29-6.46-4.62-6.211-4.885a4.4,4.4,0,0,1,3.588-1.284C73.855,43.328,76.89,46,74.95,48.3Z" fill="#fff"/>[m
[32m+[m[32m            </g>[m
[32m+[m[32m          </g>[m
[32m+[m[32m        </g>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <path id="Контур_70" data-name="Контур 70" d="M50.745,56.8l.34-.4L78.751,24.49c-6.936.938-11.9,6.006-18.664,4.9-3.408-.557-3.51-2.485-4.485-4.4-.748-1.476-1.943-1.288-3.5-1.888-1.447-.558-2.284-1.718-5.179-1.049-2.536.586-2.816,4.465-5.971,4.243-1.695-.12-1.817-2.468-4.258-5.474-6.323-7.482-12.2-6.447-16.3.469Z" fill="#491213"/>[m
[32m+[m[32m      <g id="Сгруппировать_35" data-name="Сгруппировать 35">[m
[32m+[m[32m        <path id="Контур_71" data-name="Контур 71" d="M46.713,70.085l4.033-6.424,4.017,6.424-4.017,6.438Z" fill="#23a9e1"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_42" data-name="Сгруппировать 42">[m
[32m+[m[32m        <g id="Сгруппировать_36" data-name="Сгруппировать 36">[m
[32m+[m[32m          <path id="Контур_72" data-name="Контур 72" d="M23.355,31.887a2.754,2.754,0,0,1,.809,2.091c-.059.572-.939,1.532-.271,1.824l2.25-2.8c-.6-.149-5.384-5.779-5.461-6.4l-3.169,1.714c.165.653,1.3,0,1.86.045a2.941,2.941,0,0,1,1.96,1.139c-1.735,1.432-5.951,4.958-6.395,5.03-.228.036-1.093-.594-1.106-.055-.006.259.856,1,1.018,1.2q1.118,1.31,2.236,2.622c.621-.279-.11-.723.206-1.228.233-.37,4.918-4.217,6.062-5.181Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_37" data-name="Сгруппировать 37">[m
[32m+[m[32m          <path id="Контур_73" data-name="Контур 73" d="M18.065,24.989c.444-.094.626.429.961-.055L16.57,22.051c-.372-.437-.844-.905-.708.018.088.623-6.134,5.6-6.515,5.752-.481.195-.759-.412-1.113.1q1.1,1.288,2.2,2.577c.247.289.479.6.749.872.34.335.209-.664.225-.578-.091-.507.529-.937.858-1.214A60.554,60.554,0,0,1,18.065,24.989Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_38" data-name="Сгруппировать 38">[m
[32m+[m[32m          <path id="Контур_74" data-name="Контур 74" d="M9.265,24.083a3.238,3.238,0,0,1-4.221-2.018c-.545-1.814.617-3.713,2.079-4.745,1.443-1.02,3.6-.959,4.387.828a3.522,3.522,0,0,1-.1,2.473c-.161.5-.6.988.057,1.274q1.293-1.625,2.589-3.248c-1.059-.626-1.524-1.663-2.309-2.565A5.9,5.9,0,0,0,8.26,13.825c-2.879-.4-5.592,2.526-5.813,5.184A5.628,5.628,0,0,0,3.7,22.963c.752.982,1.873,1.6,2.442,2.722a22.768,22.768,0,0,0,3.3-1.24,1.5,1.5,0,0,0-.171-.362Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_39" data-name="Сгруппировать 39">[m
[32m+[m[32m          <path id="Контур_75" data-name="Контур 75" d="M48.693,60.065c-1.154-.759-4.038-4.635-4.588-5.278-.108-.128-.22-.258-.33-.387a2.342,2.342,0,0,0-.247.189c-.174.143.134.566-.052.854-.8,1.225-5.777,4.924-6.036,5.1-.557.379-1.168-.157-1.494.312a44.643,44.643,0,0,0,3.03,3.54c.48.077.147-.805.211-.988a31.431,31.431,0,0,1,3.561-3.173c.337-.279.69.42.891.714a1.719,1.719,0,0,1,.3,1.551c-.116.366-.719.909-.251,1.16l2.622-3.013c.253-.29-.568-.037-.471-.086a.929.929,0,0,1-1.066-.029c-.1-.069-1.093-1.069-.993-1.152A4.646,4.646,0,0,1,45.3,58.293c.866-.211,1.587,1.5,1.715,2.1a3.362,3.362,0,0,1-.076,1.729c-.124.381-.489.688.018.918Q48.03,61.6,49.095,60.16a.719.719,0,0,1-.4-.095C48.566,59.981,48.833,60.134,48.693,60.065Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_40" data-name="Сгруппировать 40">[m
[32m+[m[32m          <path id="Контур_76" data-name="Контур 76" d="M38.436,55.982a5.226,5.226,0,0,0,.772-7.253,5.452,5.452,0,0,0-7.829-1.04,5.192,5.192,0,0,0-.759,7.239,5.485,5.485,0,0,0,7.817,1.054C39.6,55.019,38.337,56.052,38.436,55.982Zm-.466-4.7a7.424,7.424,0,0,1-3.745,3.624c-1.824.707-3.109-.817-2.368-2.523a7.43,7.43,0,0,1,3.749-3.623c1.858-.726,3.077.836,2.364,2.522C37.587,52.165,38.041,51.118,37.971,51.285Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_41" data-name="Сгруппировать 41">[m
[32m+[m[32m          <path id="Контур_77" data-name="Контур 77" d="M31.971,41.545c.477.059.929.544,1.273.042q-1.115-1.3-2.235-2.606c-.6.266.047.543-.195.96s-2.568.772-3.186.88a15.651,15.651,0,0,1,1.161-2.8c.546-.44.886.427,1.288-.139l-2.753-3.215c-.311-.362-.561-1.016-.983-.672a8.177,8.177,0,0,1-.089,1.713c-.086.233-.939,3.6-1.932,4.418a21.565,21.565,0,0,1-2.711,2.072c-.543.187-.828-.591-1.224-.038q1.249,1.462,2.5,2.922c.125.146.6.853.769.883.524.093.06-.883.113-1.073.151-.426,2.508-2.687,3.508-2.826a19.734,19.734,0,0,1,4.7-.518Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_43" data-name="Сгруппировать 43">[m
[32m+[m[32m        <path id="Контур_78" data-name="Контур 78" d="M25.691,22.606c-4.056-.165-2.359-3.908.4-4.752,2.62-.8,8.115,1.7,9.875,3.358-2.791.845-6.407.723-9.478.864-.227-3.083-.961-2.008-.794.53Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_44" data-name="Сгруппировать 44">[m
[32m+[m[32m        <path id="Контур_79" data-name="Контур 79" d="M26.709,27.4c-2.047-1.561-1.4-5.2,1.769-4.1,4.019,2.06-.859,3.2-1.769,4.1Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_45" data-name="Сгруппировать 45">[m
[32m+[m[32m        <path id="Контур_80" data-name="Контур 80" d="M35.225,35.008c-8.648-.07-2.8-13.166.141-12.374,3.384,1.06,3,12.474-.141,12.374Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_46" data-name="Сгруппировать 46">[m
[32m+[m[32m        <path id="Контур_81" data-name="Контур 81" d="M41.351,30.73c-.843,2.472-2.369,2.933-2.2-.069C39.346,27.2,41.639,28.03,44.1,26.7c2.047-1.106,3.149-5.153,6.663-2.733,1.567,1.08,3.363.177,3.864,1.812C54.6,25.7,50.064,35.97,52.586,35.97c-4.977,0-2.781-5.853-.877-9.783-1.853.875-4.858,6.61-2.39,7.553-1.285,1.666-5.211,3.9-7.258,2.271-1.557-1.234-.694-3.286-.711-5.281Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_47" data-name="Сгруппировать 47">[m
[32m+[m[32m        <path id="Контур_82" data-name="Контур 82" d="M45.468,40.22c-3.5,1.034-8.149-1.193-2.518-2.313,3.494-.7,7.21.769,2.518,2.313C45.609,40.179,45.34,40.263,45.468,40.22Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_48" data-name="Сгруппировать 48">[m
[32m+[m[32m        <path id="Контур_83" data-name="Контур 83" d="M49.852,40.081c-.738-1.639.564-3.592,2.689-2.173,1.853,1.237-.854,3.07-2.689,2.173Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_49" data-name="Сгруппировать 49">[m
[32m+[m[32m        <path id="Контур_84" data-name="Контур 84" d="M46.9,44.694c-2.419-.738-10.571-.554-5.235-2.732,1.645-.671,10.188.1,5.235,2.732Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_50" data-name="Сгруппировать 50">[m
[32m+[m[32m        <path id="Контур_85" data-name="Контур 85" d="M50.122,44.345c-.007-.949-.514-2.648,1.358-1.923,2.242.869-1.358,2.62-1.358,1.923Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_51" data-name="Сгруппировать 51">[m
[32m+[m[32m        <path id="Контур_86" data-name="Контур 86" d="M57.365,47.969c-1.442-1.213-2.9-1.28-4.243,0-1.8-3.254-8.345-2.164-11.4-2.62,1.644,3.981,14.913,4.724,15.646,2.62Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_52" data-name="Сгруппировать 52">[m
[32m+[m[32m        <path id="Контур_87" data-name="Контур 87" d="M55.456,50.365c-3.161-.144-6.693-.556-9.678.083,1.866.461,6.417,1.774,2.179,2.884,1.52,2.143,3.986,2.006,5.6.126A15.355,15.355,0,0,1,52,52.414c1.677-.3,3.245-1.253,3.453-2.049Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_53" data-name="Сгруппировать 53">[m
[32m+[m[32m        <path id="Контур_88" data-name="Контур 88" d="M59.063,46.533c-5.305-3.076-3.963-5.363.356-7.5,2.26-1.118,7.347-5.147,9.477-3.8q-4.918,5.651-9.833,11.3Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_54" data-name="Сгруппировать 54">[m
[32m+[m[32m        <path id="Контур_89" data-name="Контур 89" d="M55.286,39.343C50.792,34.8,62,35.214,63.8,33.615c1.315.432,10.8-8.186,13.114-7.65C75.254,27.882,71.677,34,69.115,34c-1.971,0-3.964-.289-5.491,1.094-2.231,2.024-5.927,3.054-8.338,4.244Z" fill="#f49774"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_55" data-name="Сгруппировать 55">[m
[32m+[m[32m        <path id="Контур_90" data-name="Контур 90" d="M56.758,33.783c-2.461,1.3-4.788-3.861-.539-3.358,2.823.334,5.68-.234,8.375.223a8.756,8.756,0,0,1-7.837,3.135Z" fill="#f4b1a4"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_65" data-name="Сгруппировать 65">[m
[32m+[m[32m        <g id="Сгруппировать_56" data-name="Сгруппировать 56">[m
[32m+[m[32m          <path id="Контур_91" data-name="Контур 91" d="M69.431,51.851a4.847,4.847,0,0,1,.216,1.985c-.107.863-.982,2.891-2.18,2.313a18.234,18.234,0,0,1-3.2-2.522c.8-.924,1.511-1.729,2.862-1.28.371.122.69-.036.3-.259-.405-.231-3.123-1.941-3.272-1.777-.271.306.53.857.222,1.455a6.949,6.949,0,0,1-.935,1.2c-.722-.6-1.929-1.238-1.059-2.23a3.707,3.707,0,0,1,2.1-1.326c.568-.113,1.847.384,2.013-.221l-3.269-1.547c.178.79-3.359,4.472-4.144,5.4-.113.136-.66.6-.666.789-.008.424.624.1.66.083.487-.179,6.837,5.048,6.995,5.407.1.278-.222.567-.029.722-.011-.01.229.214.254.183.392-.463,4.537-5.906,5.392-6.144-.8-1.2-1.593-2.4-2.376-3.608C68.728,50.732,69.3,51.415,69.431,51.851Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_57" data-name="Сгруппировать 57">[m
[32m+[m[32m          <path id="Контур_92" data-name="Контур 92" d="M63.25,58.476c-2.084-1.323-5.614,1.265-6.145,1.514-1.042.485-1.795-.537-1.255-1.484a2.79,2.79,0,0,1,2.318-1.274c.278-.018,1.354.195,1.464.025.13-.2.229-.218.042-.342L57.1,55.2c-.177,1.044-1.39,1.707-2.083,2.411a4.626,4.626,0,0,0-1.525,3.12,2.991,2.991,0,0,0,1.682,2.629,3.359,3.359,0,0,0,3.335-.505,19.322,19.322,0,0,1,1.93-1.157c1-.462,2.312-.061,1.959,1.255a3.581,3.581,0,0,1-2.413,2.312,3.341,3.341,0,0,1-1.878-.088c-.433-.14-1-.726-1.234-.111l3.493,2.507a2.305,2.305,0,0,1,1.09-1.545,11.637,11.637,0,0,0,2-2.105C64.618,62.252,65,59.911,63.25,58.476Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_58" data-name="Сгруппировать 58">[m
[32m+[m[32m          <path id="Контур_93" data-name="Контур 93" d="M63.25,58.476c.928.591-.593-.488,0,0Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_59" data-name="Сгруппировать 59">[m
[32m+[m[32m          <path id="Контур_94" data-name="Контур 94" d="M92.578,21.6Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_60" data-name="Сгруппировать 60">[m
[32m+[m[32m          <path id="Контур_95" data-name="Контур 95" d="M100.061,19.415c-.731.72-8.447-2.314-9.011-2.732-.291-.115-.3-1.306-.707-.823s-.813.965-1.22,1.446q-.629.749-1.26,1.5c-.261.31-.539.453-.038.712.84-.414,5.435,7.26,5.024,8.362-.727.372-6.938-5-7.1-5.352-.052-.144.274-1.009-.212-.934-.23.036-.745.886-.892,1.059-.3.353-.594.707-.892,1.059.334.479.519-.021.962.042a13.214,13.214,0,0,1,2.248,1.645c-.727.027-2.694.129-2.944.112-.906.111-.423-.655-1.018-.92q-1.142,1.367-2.284,2.732c-.442.53-.888,1.059-1.33,1.588-.054.064-.047.032.05.111.331.27.1.166.57.006.508-.175,6.58,4.873,6.8,5.129.378.445-.155.964.413,1.207q.9-1.079,1.8-2.158c.091-.109.141-.1.021-.2-.428-.349-.478.21-1.005.152-.535-.088-4.409-3.33-5.914-4.556l8.226-.3c.3-.011,1.143.886,1.071,1.2-.081.374-.465.551.054.785.481-.568.988-1.136,1.461-1.714h0l.228-.279a.723.723,0,0,0,.211-.262l.169-.209c.426-.479,1.806-1.983,1.64-2.125-.463-.4-.686.461-1.3-.053a12.8,12.8,0,0,1-1.448-2.137c-.265-.444.61-.886.967-1.106.779-.476,3.258-1.169,3.493.344.04.255-.272.544-.084.7.044.037.2.239.271.161.164-.195,2.369-2.81,3.312-3.923A1.491,1.491,0,0,0,100.061,19.415Zm-7.4,2.131h0l-.084.053.082-.051a5.768,5.768,0,0,0-.961.752q-.784-1.33-1.569-2.661,1.773.728,3.536,1.464A3.775,3.775,0,0,0,92.663,21.546Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_61" data-name="Сгруппировать 61">[m
[32m+[m[32m          <path id="Контур_96" data-name="Контур 96" d="M82.886,32.625a5.451,5.451,0,0,0-7.611.822,5.269,5.269,0,0,0,.607,7.526,5.438,5.438,0,0,0,7.6-.836A5.218,5.218,0,0,0,82.886,32.625ZM82.6,39.162l-.025.027c-1.237,1.277-3.37.095-4.521-.722s-3.121-2.54-1.862-4.056c1.059-1.272,3.134-.228,4.206.476,1.2.794,3.422,2.566,2.282,4.167C82.758,38.964,82.811,38.907,82.6,39.162Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_62" data-name="Сгруппировать 62">[m
[32m+[m[32m          <path id="Контур_97" data-name="Контур 97" d="M82.886,32.625c1.175.948-.254-.209,0,0Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_63" data-name="Сгруппировать 63">[m
[32m+[m[32m          <path id="Контур_98" data-name="Контур 98" d="M82.577,39.188l.025-.027a1.257,1.257,0,0,0,.08-.109A1.5,1.5,0,0,0,82.577,39.188Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_64" data-name="Сгруппировать 64">[m
[32m+[m[32m          <path id="Контур_99" data-name="Контур 99" d="M76.272,41.642c.112.093.274.221-.063-.056a5.947,5.947,0,0,0-8.428,1.143q-1.488,1.763-2.971,3.525c.351.506.764-.117,1.276.174.438.247,6.264,5.041,6.36,5.3.165.453-.256.542.144.865a40.974,40.974,0,0,0,4.951-6.118A4.249,4.249,0,0,0,76.272,41.642ZM74.95,48.317c-.241.293-.044.053-.667.642-.307.29-6.459-4.62-6.211-4.886a4.4,4.4,0,0,1,3.588-1.282C73.856,43.345,76.89,46.014,74.95,48.317Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m      </g>[m
[32m+[m[32m    </g>[m
[32m+[m[32m  </g>[m
[32m+[m[32m</svg>[m
[1mdiff --git a/app/img/logotype/logotype-tablet.svg b/app/img/logotype/logotype-tablet.svg[m
[1mnew file mode 100644[m
[1mindex 0000000..b7802da[m
[1m--- /dev/null[m
[1m+++ b/app/img/logotype/logotype-tablet.svg[m
[36m@@ -0,0 +1,108 @@[m
[32m+[m[32m<svg id="logotype-tablet.svg" xmlns="http://www.w3.org/2000/svg" width="102" height="83" viewBox="0 0 102 83">[m
[32m+[m[32m  <g id="Layer_2" data-name="Layer 2">[m
[32m+[m[32m    <g id="Сгруппировать_48" data-name="Сгруппировать 48">[m
[32m+[m[32m      <g id="Сгруппировать_14" data-name="Сгруппировать 14">[m
[32m+[m[32m        <path id="Контур_52" data-name="Контур 52" d="M1.062.7,50.746,58.362,100.232,1.046Z" fill="#23a9e1"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_15" data-name="Сгруппировать 15">[m
[32m+[m[32m        <path id="Контур_53" data-name="Контур 53" d="M80.1,17.113,64.863,17.2c6.021-6.85,8.726-6.117,15.237-.083Z" fill="#fff"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_16" data-name="Сгруппировать 16">[m
[32m+[m[32m        <path id="Контур_54" data-name="Контур 54" d="M38.791,22.408H65.558c-1.991-1.219-6.73-6.976-9.338-4.836-.213.176-7.53-8.744-12.336-4.446-4.193,3.754-6.14-.492-10.892,2.482-5.417,3.528,3.13,5.608,5.8,6.8Z" fill="#fff"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <path id="Контур_55" data-name="Контур 55" d="M51.086,0H0V22.2L50.746,83l.34-.419L102,22.9V0Zm0,56.383-.34.4L3.72,1.756H98.447Z" fill="#491213"/>[m
[32m+[m[32m      <path id="Контур_56" data-name="Контур 56" d="M50.746,56.787l.34-.4L78.752,24.473c-6.936.938-11.9,6.006-18.664,4.9-3.408-.557-3.51-2.485-4.485-4.4-.748-1.475-1.943-1.288-3.5-1.888-1.447-.558-2.284-1.718-5.179-1.049-2.536.586-2.816,4.465-5.971,4.243-1.695-.12-1.817-2.468-4.258-5.474-6.323-7.482-12.2-6.446-16.3.469Z" fill="#491213"/>[m
[32m+[m[32m      <g id="Сгруппировать_17" data-name="Сгруппировать 17">[m
[32m+[m[32m        <path id="Контур_57" data-name="Контур 57" d="M46.714,70.068l4.033-6.424,4.017,6.424-4.017,6.438Z" fill="#23a9e1"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_24" data-name="Сгруппировать 24">[m
[32m+[m[32m        <g id="Сгруппировать_18" data-name="Сгруппировать 18">[m
[32m+[m[32m          <path id="Контур_58" data-name="Контур 58" d="M23.356,31.871a2.754,2.754,0,0,1,.809,2.091c-.059.572-.939,1.532-.271,1.824l2.25-2.8c-.6-.149-5.384-5.779-5.461-6.4L17.514,28.3c.165.653,1.3,0,1.86.045a2.941,2.941,0,0,1,1.96,1.138c-1.735,1.432-5.951,4.958-6.395,5.03-.228.036-1.093-.594-1.106-.055-.006.259.856,1,1.018,1.2q1.118,1.31,2.236,2.622c.621-.279-.11-.723.206-1.228.233-.37,4.918-4.217,6.062-5.18Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_19" data-name="Сгруппировать 19">[m
[32m+[m[32m          <path id="Контур_59" data-name="Контур 59" d="M18.066,24.973c.444-.094.626.429.961-.055l-2.456-2.883c-.372-.437-.844-.905-.708.018.088.623-6.134,5.6-6.515,5.752-.481.195-.759-.412-1.113.1q1.1,1.288,2.2,2.577c.248.289.479.6.749.872.34.335.209-.664.225-.578-.091-.507.529-.937.858-1.214A60.682,60.682,0,0,1,18.066,24.973Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_20" data-name="Сгруппировать 20">[m
[32m+[m[32m          <path id="Контур_60" data-name="Контур 60" d="M9.266,24.066a3.238,3.238,0,0,1-4.221-2.018c-.545-1.813.617-3.713,2.079-4.745,1.443-1.02,3.6-.959,4.387.828a3.522,3.522,0,0,1-.1,2.473c-.161.5-.6.988.057,1.274q1.293-1.625,2.589-3.247c-1.059-.626-1.524-1.663-2.309-2.565a5.9,5.9,0,0,0-3.493-2.257c-2.879-.4-5.592,2.526-5.813,5.183A5.627,5.627,0,0,0,3.7,22.947c.752.982,1.873,1.6,2.442,2.722a22.769,22.769,0,0,0,3.3-1.24,1.5,1.5,0,0,0-.171-.362Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_21" data-name="Сгруппировать 21">[m
[32m+[m[32m          <path id="Контур_61" data-name="Контур 61" d="M48.694,60.048c-1.154-.759-4.038-4.635-4.588-5.278-.108-.128-.22-.258-.33-.387a2.341,2.341,0,0,0-.247.189c-.174.143.134.566-.052.854-.8,1.225-5.777,4.924-6.036,5.1-.557.379-1.168-.157-1.494.311a44.692,44.692,0,0,0,3.03,3.541c.48.077.147-.805.211-.988a31.432,31.432,0,0,1,3.561-3.173c.337-.279.69.42.891.714a1.719,1.719,0,0,1,.3,1.551c-.116.366-.719.909-.251,1.159.621-.714,2.369-2.721,2.622-3.012s-.568-.038-.471-.086a.929.929,0,0,1-1.066-.029c-.1-.069-1.093-1.069-.993-1.152A4.631,4.631,0,0,1,45.3,58.276c.866-.21,1.587,1.5,1.715,2.1a3.362,3.362,0,0,1-.076,1.729c-.124.381-.489.688.018.918q1.073-1.442,2.138-2.886a.71.71,0,0,1-.4-.094C48.567,59.964,48.834,60.117,48.694,60.048Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_22" data-name="Сгруппировать 22">[m
[32m+[m[32m          <path id="Контур_62" data-name="Контур 62" d="M38.437,55.966a5.226,5.226,0,0,0,.772-7.253,5.452,5.452,0,0,0-7.829-1.04,5.191,5.191,0,0,0-.759,7.238,5.485,5.485,0,0,0,7.817,1.054C39.6,55,38.338,56.035,38.437,55.966Zm-.466-4.7a7.424,7.424,0,0,1-3.745,3.624c-1.824.707-3.109-.817-2.368-2.523a7.43,7.43,0,0,1,3.749-3.623c1.858-.726,3.077.836,2.364,2.522C37.588,52.148,38.042,51.1,37.972,51.268Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_23" data-name="Сгруппировать 23">[m
[32m+[m[32m          <path id="Контур_63" data-name="Контур 63" d="M31.972,41.528c.477.059.929.544,1.273.042q-1.115-1.3-2.235-2.606c-.6.266.047.543-.195.96s-2.568.772-3.186.88A15.651,15.651,0,0,1,28.79,38c.546-.44.886.427,1.288-.139l-2.753-3.215c-.311-.362-.561-1.016-.983-.672a8.177,8.177,0,0,1-.089,1.713c-.086.233-.939,3.6-1.932,4.418a21.564,21.564,0,0,1-2.711,2.072c-.543.187-.828-.591-1.224-.038q1.249,1.462,2.5,2.922c.125.146.6.853.769.883.524.093.06-.883.113-1.073.151-.426,2.508-2.687,3.509-2.825a19.72,19.72,0,0,1,4.7-.518Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_25" data-name="Сгруппировать 25">[m
[32m+[m[32m        <path id="Контур_64" data-name="Контур 64" d="M25.692,22.59c-4.056-.165-2.359-3.908.4-4.752,2.62-.8,8.115,1.7,9.875,3.358-2.791.845-6.407.723-9.478.864-.227-3.083-.961-2.008-.794.53Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_26" data-name="Сгруппировать 26">[m
[32m+[m[32m        <path id="Контур_65" data-name="Контур 65" d="M26.71,27.383c-2.047-1.56-1.4-5.2,1.769-4.1,4.019,2.06-.859,3.2-1.769,4.1Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_27" data-name="Сгруппировать 27">[m
[32m+[m[32m        <path id="Контур_66" data-name="Контур 66" d="M35.226,34.992c-8.648-.07-2.8-13.166.141-12.374,3.384,1.06,3,12.474-.141,12.374Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_28" data-name="Сгруппировать 28">[m
[32m+[m[32m        <path id="Контур_67" data-name="Контур 67" d="M41.352,30.713c-.843,2.472-2.369,2.933-2.2-.069.195-3.462,2.487-2.631,4.946-3.957,2.047-1.106,3.149-5.153,6.663-2.733,1.567,1.08,3.363.177,3.864,1.811-.025-.083-4.56,10.187-2.038,10.187-4.977,0-2.781-5.853-.877-9.783-1.853.875-4.858,6.61-2.39,7.553-1.285,1.666-5.211,3.9-7.258,2.271-1.557-1.234-.694-3.286-.711-5.281Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_29" data-name="Сгруппировать 29">[m
[32m+[m[32m        <path id="Контур_68" data-name="Контур 68" d="M45.469,40.2c-3.5,1.034-8.149-1.193-2.518-2.313,3.494-.7,7.21.769,2.518,2.313C45.61,40.162,45.341,40.246,45.469,40.2Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_30" data-name="Сгруппировать 30">[m
[32m+[m[32m        <path id="Контур_69" data-name="Контур 69" d="M49.853,40.064c-.738-1.639.564-3.592,2.689-2.173,1.853,1.237-.854,3.07-2.689,2.173Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_31" data-name="Сгруппировать 31">[m
[32m+[m[32m        <path id="Контур_70" data-name="Контур 70" d="M46.9,44.678c-2.419-.738-10.571-.554-5.235-2.732,1.645-.671,10.188.1,5.235,2.732Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_32" data-name="Сгруппировать 32">[m
[32m+[m[32m        <path id="Контур_71" data-name="Контур 71" d="M50.123,44.329c-.007-.949-.514-2.648,1.358-1.923,2.242.869-1.358,2.62-1.358,1.923Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_33" data-name="Сгруппировать 33">[m
[32m+[m[32m        <path id="Контур_72" data-name="Контур 72" d="M57.366,47.953c-1.442-1.213-2.9-1.28-4.243,0-1.8-3.254-8.345-2.164-11.4-2.62,1.644,3.981,14.913,4.724,15.646,2.62Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_34" data-name="Сгруппировать 34">[m
[32m+[m[32m        <path id="Контур_73" data-name="Контур 73" d="M55.457,50.348c-3.161-.144-6.693-.556-9.678.083,1.866.461,6.417,1.774,2.179,2.884,1.52,2.143,3.986,2.005,5.6.126A15.523,15.523,0,0,1,52,52.4c1.677-.3,3.245-1.253,3.453-2.049Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_35" data-name="Сгруппировать 35">[m
[32m+[m[32m        <path id="Контур_74" data-name="Контур 74" d="M59.064,46.517c-5.305-3.075-3.963-5.363.356-7.5,2.26-1.118,7.347-5.147,9.477-3.8q-4.918,5.651-9.833,11.3Z" fill="#dc6243"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_36" data-name="Сгруппировать 36">[m
[32m+[m[32m        <path id="Контур_75" data-name="Контур 75" d="M55.287,39.326C50.793,34.779,62,35.2,63.8,33.6c1.315.432,10.8-8.186,13.114-7.65-1.66,1.918-5.237,8.041-7.8,8.041-1.971,0-3.964-.289-5.491,1.094-2.231,2.024-5.927,3.054-8.338,4.244Z" fill="#f49774"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_37" data-name="Сгруппировать 37">[m
[32m+[m[32m        <path id="Контур_76" data-name="Контур 76" d="M56.759,33.766c-2.461,1.3-4.788-3.861-.539-3.358,2.823.334,5.68-.234,8.375.223a8.756,8.756,0,0,1-7.837,3.135Z" fill="#f4b1a4"/>[m
[32m+[m[32m      </g>[m
[32m+[m[32m      <g id="Сгруппировать_47" data-name="Сгруппировать 47">[m
[32m+[m[32m        <g id="Сгруппировать_38" data-name="Сгруппировать 38">[m
[32m+[m[32m          <path id="Контур_77" data-name="Контур 77" d="M69.432,51.835a4.847,4.847,0,0,1,.216,1.985c-.107.863-.982,2.891-2.18,2.313a18.235,18.235,0,0,1-3.2-2.522c.8-.925,1.511-1.728,2.862-1.28.371.122.69-.036.3-.259-.405-.231-3.123-1.941-3.272-1.777-.271.306.53.857.222,1.455a6.987,6.987,0,0,1-.935,1.2c-.722-.6-1.929-1.238-1.059-2.23a3.707,3.707,0,0,1,2.1-1.326c.568-.113,1.847.384,2.013-.221l-3.269-1.547c.178.79-3.359,4.472-4.144,5.4-.113.136-.66.6-.666.789-.008.424.624.1.66.083.487-.179,6.837,5.048,6.995,5.407.1.278-.222.567-.029.722-.011-.01.229.214.254.183.392-.463,4.537-5.906,5.392-6.144-.8-1.2-1.593-2.4-2.376-3.608C68.729,50.715,69.3,51.4,69.432,51.835Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_39" data-name="Сгруппировать 39">[m
[32m+[m[32m          <path id="Контур_78" data-name="Контур 78" d="M63.251,58.459c-2.084-1.324-5.614,1.265-6.145,1.514-1.042.485-1.795-.537-1.255-1.484a2.788,2.788,0,0,1,2.318-1.274c.278-.018,1.354.195,1.464.025.13-.2.229-.218.042-.342L57.1,55.185c-.177,1.043-1.39,1.707-2.083,2.411a4.626,4.626,0,0,0-1.525,3.119,2.992,2.992,0,0,0,1.682,2.63,3.362,3.362,0,0,0,3.335-.505,19.138,19.138,0,0,1,1.93-1.157c1-.462,2.312-.062,1.959,1.255a3.581,3.581,0,0,1-2.413,2.312,3.35,3.35,0,0,1-1.878-.088c-.433-.14-1-.726-1.234-.111l3.493,2.507a2.3,2.3,0,0,1,1.09-1.545,11.669,11.669,0,0,0,2-2.105C64.619,62.235,65,59.893,63.251,58.459Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_40" data-name="Сгруппировать 40">[m
[32m+[m[32m          <path id="Контур_79" data-name="Контур 79" d="M63.251,58.459c.928.591-.593-.488,0,0Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_41" data-name="Сгруппировать 41">[m
[32m+[m[32m          <path id="Контур_80" data-name="Контур 80" d="M92.579,21.583Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_42" data-name="Сгруппировать 42">[m
[32m+[m[32m          <path id="Контур_81" data-name="Контур 81" d="M100.062,19.4c-.731.72-8.447-2.314-9.011-2.732-.291-.115-.3-1.306-.707-.823s-.813.965-1.22,1.446q-.629.749-1.26,1.5c-.261.31-.539.453-.038.712.84-.414,5.435,7.26,5.024,8.362-.727.372-6.938-5-7.1-5.351-.052-.144.274-1.009-.212-.934-.23.036-.745.885-.892,1.059-.3.353-.594.707-.892,1.059.334.479.519-.021.962.042a13.214,13.214,0,0,1,2.248,1.644c-.727.027-2.694.129-2.944.112-.906.111-.423-.655-1.018-.92q-1.142,1.367-2.284,2.732c-.442.53-.888,1.059-1.33,1.588-.054.064-.047.032.05.111.331.27.1.166.57.006.508-.175,6.58,4.873,6.8,5.129.378.445-.155.964.413,1.207q.9-1.079,1.8-2.158c.091-.109.141-.1.021-.2-.428-.349-.478.21-1.005.152-.535-.088-4.409-3.329-5.914-4.556l8.226-.3c.3-.011,1.143.885,1.071,1.2-.081.374-.465.551.054.785.481-.568.988-1.136,1.461-1.714h0l.228-.279a.723.723,0,0,0,.211-.262l.169-.209c.426-.479,1.806-1.982,1.64-2.125-.463-.4-.686.461-1.3-.053a12.8,12.8,0,0,1-1.448-2.137c-.265-.444.61-.886.967-1.106.779-.476,3.258-1.169,3.493.344.04.255-.272.544-.084.7.044.037.2.239.271.161.164-.195,2.369-2.81,3.312-3.922A1.491,1.491,0,0,0,100.062,19.4Zm-7.4,2.131h0l-.084.053.082-.051a5.768,5.768,0,0,0-.961.752q-.784-1.33-1.569-2.661,1.773.728,3.536,1.464A3.775,3.775,0,0,0,92.664,21.529Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_43" data-name="Сгруппировать 43">[m
[32m+[m[32m          <path id="Контур_82" data-name="Контур 82" d="M82.887,32.609a5.451,5.451,0,0,0-7.611.822,5.269,5.269,0,0,0,.607,7.526,5.438,5.438,0,0,0,7.6-.836A5.218,5.218,0,0,0,82.887,32.609ZM82.6,39.145l-.025.027c-1.237,1.277-3.37.095-4.521-.722s-3.121-2.54-1.862-4.056c1.059-1.272,3.134-.228,4.206.476,1.2.794,3.422,2.566,2.282,4.167C82.759,38.948,82.812,38.89,82.6,39.145Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_44" data-name="Сгруппировать 44">[m
[32m+[m[32m          <path id="Контур_83" data-name="Контур 83" d="M82.887,32.609c1.175.948-.254-.209,0,0Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_45" data-name="Сгруппировать 45">[m
[32m+[m[32m          <path id="Контур_84" data-name="Контур 84" d="M82.578,39.172l.025-.027a1.259,1.259,0,0,0,.08-.109A1.5,1.5,0,0,0,82.578,39.172Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m        <g id="Сгруппировать_46" data-name="Сгруппировать 46">[m
[32m+[m[32m          <path id="Контур_85" data-name="Контур 85" d="M76.273,41.626c.112.093.274.221-.063-.056a5.947,5.947,0,0,0-8.428,1.143q-1.488,1.763-2.971,3.525c.351.506.764-.117,1.276.174.438.247,6.264,5.04,6.36,5.3.165.453-.256.542.144.865a40.973,40.973,0,0,0,4.951-6.118A4.249,4.249,0,0,0,76.273,41.626ZM74.951,48.3c-.241.293-.044.053-.667.642-.307.29-6.459-4.62-6.211-4.886a4.4,4.4,0,0,1,3.588-1.282C73.857,43.329,76.891,46,74.951,48.3Z" fill="#fff"/>[m
[32m+[m[32m        </g>[m
[32m+[m[32m      </g>[m
[32m+[m[32m    </g>[m
[32m+[m[32m  </g>[m
[32m+[m[32m</svg>[m
[1mdiff --git a/app/index.html b/app/index.html[m
[1mnew file mode 100644[m
[1mindex 0000000..052570c[m
[1m--- /dev/null[m
[1m+++ b/app/index.html[m
[36m@@ -0,0 +1,294 @@[m
[32m+[m[32m<!DOCTYPE html>[m
[32m+[m[32m<html lang="en">[m
[32m+[m[32m  <head>[m
[32m+[m[32m    <meta charset="UTF-8" />[m
[32m+[m[32m    <meta http-equiv="X-UA-Compatible" content="IE=edge" />[m
[32m+[m[32m    <meta name="viewport" content="width=device-width, initial-scale=1.0" />[m
[32m+[m[32m    <title>Sedona</title>[m
[32m+[m[32m    <link rel="stylesheet" href="./css/style.css" />[m
[32m+[m
[32m+[m[32m  </head>[m
[32m+[m[32m  <body>[m
[32m+[m[41m    [m
[32m+[m[32m    <header class="page-header">[m
[32m+[m[41m      [m
[32m+[m[32m      <nav class="main-nav">[m
[32m+[m[32m        <div class="main-nav__wrapper">[m
[32m+[m[32m          <ul class="main-nav__list site-list">[m
[32m+[m[32m            <li class="site-list__item site-list__item--active">[m
[32m+[m[32m              <a>Главная</a>[m
[32m+[m[32m            </li>[m
[32m+[m[32m            <li class="site-list__item">[m
[32m+[m[32m              <a href="#">Фото и видео</a>[m
[32m+[m[32m            </li>[m
[32m+[m[32m            <li class="site-list__item ">[m
[32m+[m[32m              <a  href="#">Форма отзыва</a>[m
[32m+[m[32m            </li>[m
[32m+[m[32m            <li class="site-list__item">[m
[32m+[m[32m              <a href="https://htmlacademy.ru/"[m
[32m+[m[32m                >HTML Academy</a[m
[32m+[m[32m              >[m
[32m+[m[32m            </li>[m
[32m+[m[41m            [m
[32m+[m[32m          </ul>[m
[32m+[m[32m        </div>[m
[32m+[m[32m      </nav>[m
[32m+[m
[32m+[m[32m      <div class="page-header__nav">[m
[32m+[m[32m      <a href="index.html" class="page-header__logo">[m
[32m+[m[32m        <picture>[m
[32m+[m[32m          <source media="(min-width: 1200px)" srcset="./img/logotype/logotype-desktop.svg">[m
[32m+[m[32m          <source media="(min-width: 768px)" srcset="./img/logotype/logotype-tablet.svg">[m
[32m+[m[32m        <img[m
[32m+[m[32m          class="page-header__logo-image"[m
[32m+[m[32m          src="./img/logotype/logotype-mobile.svg"[m
[32m+[m[32m          width="102"[m
[32m+[m[32m          height="83"[m
[32m+[m[32m          alt="Седона"[m
[32m+[m[32m        />[m
[32m+[m[32m      </picture>[m
[32m+[m[32m      </a>[m
[32m+[m[32m      <button class="page-header__toggle page-header__toggle--closed" type="button"><span class="visually-hidden">Открыть меню</span></button>[m
[32m+[m
[32m+[m[32m    </div>[m
[32m+[m[32m    </header>[m
[32m+[m
[32m+[m[32m    <main class="page-main">[m
[32m+[m[41m    [m
[32m+[m[32m      <section class="intro">[m
[32m+[m[32m    <div class="intro__image-wrapper">[m
[32m+[m[32m      <img[m
[32m+[m[32m      class="intro__image"[m
[32m+[m[32m      src="./img/bg-image-intro/intro-text-index.svg"[m
[32m+[m[32m      alt="Логотип Добро пожаловать в Седону"[m
[32m+[m[32m      width="282"[m
[32m+[m[32m      height="214"[m
[32m+[m[32m    />[m[41m [m
[32m+[m[32m  </div>[m
[32m+[m[32m      <div class="intro__wrapper">[m
[32m+[m[32m        <b class="intro__slogan">[m
[32m+[m[32m          Седона — небольшой<br> городок в аризоне, заслуживающий большего![m
[32m+[m[32m        </b>[m
[32m+[m[32m        <p class="intro__reasons">[m
[32m+[m[32m          рассмотрим 5 причин, по которым[m
[32m+[m[32m          седона круче, чем гранд каньон![m
[32m+[m[32m        </p>[m
[32m+[m[32m      </div>[m
[32m+[m[41m  [m
[32m+[m[32m  </section>[m
[32m+[m[32m      <section class="content-top">[m
[32m+[m
[32m+[m[32m         <div class="content-top__wrapper">[m
[32m+[m[32m        <div class="content-top__habitation">[m
[32m+[m[32m          <img[m
[32m+[m[32m            class="content-top__habitation-layer"[m
[32m+[m[32m            src=".//img/index-image/layer-under-intro.svg"[m
[32m+[m[32m          />[m
[32m+[m[32m          <div class="content-top__habitation-wrapper">[m
[32m+[m[32m            <h2 class="content-top__title">Настоящий<br> городок</h2>[m
[32m+[m[32m            <p class="content-top__number">№1</p>[m
[32m+[m[32m            <p class="content-top__description">[m
[32m+[m[32m              седона не аттракцион для туристов, там течет своя жизнь[m
[32m+[m[32m            </p>[m
[32m+[m[32m          </div>[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div class="content-top__image-sity-wrapper">[m
[32m+[m[32m    <picture>[m
[32m+[m[32m      <!-- <source type="image/webp" media="(min-width: 1200px)" srcset="./img/index-image/webp/desktop-city@1x.webp 1x, ./img/index-image/webp/desktop-city@2x.webp 2x">[m
[32m+[m[32m      <source type="image/webp" media="(min-width: 768px)" srcset="./img/index-image/webp/tablet-city@1x.webp 1x, ./img/index-image/webp/tablet-city@2x.webp 2x">[m
[32m+[m[32m      <source type="image/webp" srcset="./img/index-image/webp/mobile-city@1x.webp 1x, ./img/index-image/webp/mobile-city@2x.webp 2x"> -->[m
[32m+[m
[32m+[m[32m      <source media="(min-width: 1200px)" srcset="./img/index-image/desktop-city@1x.jpg 1x, ./img/index-image/desktop-city@2x.jpg 2x">[m
[32m+[m[32m      <source media="(min-width: 768px)" srcset="./img/index-image/tablet-city@1x.jpg 1x, ./img/index-image/tablet-city@2x.jpg 2x">[m
[32m+[m[32m        <img[m
[32m+[m[32m          class="content-top__image-sity"[m
[32m+[m[32m          src="./img/index-image/mobile-city@1x.jpg"[m
[32m+[m[32m          srcset="./img/index-image/mobile-city@2x.jpg 2x"[m
[32m+[m[32m          alt="Фото города"[m
[32m+[m[32m        />[m
[32m+[m[32m      </picture>[m
[32m+[m[32m      </div>[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div class="content-top__advantages-wrapper">[m
[32m+[m[32m          <ul class="content-top__advantages">[m
[32m+[m[32m            <li class="content-top__item content-top__item--houses">[m
[32m+[m[32m              <h2 class="content-top__title-advantages">Жилье</h2>[m
[32m+[m[32m              <p class="content-top__description-advantages">[m
[32m+[m[32m                рекомендуем пожить в настоящем мотеле, все как в кино![m[41m [m
[32m+[m[32m              </p>[m
[32m+[m[32m            </li>[m
[32m+[m[32m            <li class="content-top__item content-top__item--souvenirs">[m
[32m+[m[32m              <h2 class="content-top__title-advantages">Сувениры</h2>[m
[32m+[m[32m              <p class="content-top__description-advantages">[m
[32m+[m[32m                не только китайского, но и местного производства![m
[32m+[m[32m              </p>[m
[32m+[m[32m            </li>[m
[32m+[m[32m            <li class="content-top__item content-top__item--eat">[m
[32m+[m[32m              <h2 class="content-top__title-advantages">Еда</h2>[m
[32m+[m[32m              <p class="content-top__description-advantages">[m
[32m+[m[32m                всегда заказывайте фирменный бургер, вы не разочаруетесь![m
[32m+[m[32m              </p>[m
[32m+[m[32m            </li>[m
[32m+[m[32m          </ul>[m
[32m+[m[32m        </div>[m
[32m+[m[32m      </section>[m
[32m+[m[32m      <section class="content-bottom">[m
[32m+[m[32m        <div class="content-bottom__wrapper">[m
[32m+[m[32m        <div class="content-bottom__bridge">[m
[32m+[m[32m          <div class="content-bottom__bridge-wrapper">[m
[32m+[m[32m          <h2 class="content-bottom__title">Там есть<br> мост дьявола</h2>[m
[32m+[m[32m          <p class="content-bottom__number">№2</p>[m
[32m+[m[32m          <p class="content-bottom__description">[m
[32m+[m[32m            да, по нему можно пройти! если вы осмелитесь, конечно[m
[32m+[m[32m          </p>[m
[32m+[m[32m        </div>[m
[32m+[m[32m      </div>[m
[32m+[m[32m        <div class="content-bottom__image-bridge-wrapper">[m
[32m+[m[32m          <picture>[m
[32m+[m[32m                  <!-- <source type="image/webp" media="(min-width: 1200px)" srcset="./img/index-image/webp/desktop-bridge@1x.webp 1x, ./img/index-image/webp/desktop-bridge@2x.webp 2x">[m
[32m+[m[32m      <source type="img/webp" media="(min-width: 768px)" srcset="./img/index-image/webp/tablet-bridge@1x.webp 1x, ./img/index-image/webp/tablet-bridge@2x.webp 2x">[m
[32m+[m[32m      <source type="img/webp" srcset="./img/index-image/webp/mobile-bridge@1x.webp 1x, ./img/index-image/webp/mobile-bridge@2x.webp 2x"> -->[m
[32m+[m
[32m+[m[32m            <source media="(min-width: 1200px)" srcset="./img/index-image/desktop-bridge@1x.jpg 1x, ./img/index-image/desktop-bridge@2x.jpg 2x">[m
[32m+[m[32m            <source media="(min-width: 768px)" srcset="./img/index-image/tablet-bridge@1x.jpg 1x, ./img/index-image/tablet-bridge@2x.jpg 2x">[m
[32m+[m[32m        <img[m
[32m+[m[32m          class="content-bottom__image-bridge"[m
[32m+[m[32m          src="./img/index-image/mobile-bridge@1x.jpg 1x"[m
[32m+[m[32m          srcset="./img/index-image/mobile-bridge@2x.jpg 2x"[m
[32m+[m[32m          alt="Фото моста"[m
[32m+[m[32m        />[m
[32m+[m[32m      </picture>[m
[32m+[m[32m      </div>[m
[32m+[m[32m      </div>[m
[32m+[m[32m      </div>[m
[32m+[m[32m<div class="content-bottom__list-wrapper">[m
[32m+[m[32m        <div class="content-bottom__list">[m
[32m+[m[32m          <h2 class="content-bottom__title-advantages">Небольшая<br> площадь</h2>[m
[32m+[m[32m          <p class="content-bottom__number-advantages">№3</p>[m
[32m+[m[32m          <p class="content-bottom__description-advantages">[m
[32m+[m[32m            все интересные места находятся очень близко[m
[32m+[m[32m          </p>[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div class="content-bottom__list">[m
[32m+[m[32m          <h2 class="content-bottom__title-advantages">Красивая<br> дорога</h2>[m
[32m+[m[32m          <p class="content-bottom__number-advantages">№4</p>[m
[32m+[m[32m          <p class="content-bottom__description-advantages">[m
[32m+[m[32m            ехать в седону из лас-вегаса совсем не скучно![m[41m [m
[32m+[m[32m          </p>[m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div class="content-bottom__list">[m
[32m+[m[32m          <h2 class="content-bottom__title-advantages">Мало<br> туристов</h2>[m
[32m+[m[32m          <p class="content-bottom__number-advantages">№5</p>[m
[32m+[m[32m          <p class="content-bottom__description-advantages">[m
[32m+[m[32m            большинство едет в гранд каньон и толпится там[m
[32m+[m[32m          </p>[m
[32m+[m[32m        </div>[m
[32m+[m[41m        [m
[32m+[m[32m      </div>[m
[32m+[m[32m      </section>[m
[32m+[m
[32m+[m[32m      <section class="hotel-search">[m
[32m+[m[32m        <div class="hotel-search__wrapper">[m
[32m+[m[41m        [m
[32m+[m[32m        <h2 class="hotel-search__title">Заинтересовались?</h2>[m
[32m+[m[32m        <p class="hotel-search__description">[m
[32m+[m[32m          Укажите предполагаемые даты поездки,<br> и мы покажем вам лучшие[m
[32m+[m[32m          предложения гостиниц в седоне[m
[32m+[m[32m        </p>[m
[32m+[m[41m        [m
[32m+[m[41m        [m
[32m+[m[32m        <a href="#" class="hotel-search__button button">Найти гостиницу</a>[m
[32m+[m[32m      </div>[m
[32m+[m[32m      <picture>[m
[32m+[m[32m      <!-- <source type="image/webp" srcset="./img/index-image/webp/map.webp 1x, ./img/index-image/webp/map@2x.webp 2x"> -->[m
[32m+[m
[32m+[m[32m        <img[m
[32m+[m[32m          src="./img/index-image/map.jpg"[m
[32m+[m[32m          srcset="./img/index-image/map@2x.jpg 2x"[m
[32m+[m[32m          class="hotel-search__map"[m
[32m+[m[32m          alt="Карта местности"[m
[32m+[m[32m        />[m
[32m+[m[32m      </picture>[m
[32m+[m[32m      </section>[m
[32m+[m[32m    </main>[m
[32m+[m
[32m+[m[32m    <footer class="page-footer">[m
[32m+[m[32m      <div class="page-footer__wrapper">[m
[32m+[m[32m        <div class="page-footer__hashtag hashtag">[m
[32m+[m[32m          <b class="hashtag__text">#VISITCEDONA</b>[m
[32m+[m[32m        </div>[m
[32m+[m
[32m+[m[32m        <div class="page-footer__social social">[m
[32m+[m[32m          <ul class="social__list">[m
[32m+[m[32m            <li class="social__item">[m
[32m+[m[32m              <a class="social__link social__link--twitter" href="#">[m
[32m+[m[32m                <svg style="display: none;">[m
[32m+[m[32m                  <symbol id="icon-twitter" viewBox="0 0 18 14">[m
[32m+[m[32m                  <g transform="translate(-98 -3482)">[m
[32m+[m[32m                    <path d="M103.665,3496h-.473c-.434,0-4.413-.43-5.191-1.76a7.15,7.15,0,0,0,4.973-1.1c-1.018-.28-2.84-.443-3.158-2.75a2.369,2.369,0,0,0,1.264.111c-1.272-.8-2.683-1.468-2.6-3.519a2.2,2.2,0,0,0,1.42.44c-.745-.224-2.088-3.133-.947-4.618,1.926,1.731,3.957,3.362,7.579,3.519a4.426,4.426,0,0,1,3.079-4.178,3.529,3.529,0,0,1,3.79,1.1c.714-.214,1.411-.448,2.131-.659a2.119,2.119,0,0,1-.908,1.651,1.754,1.754,0,0,0,1.381-.46,2.828,2.828,0,0,1-1.657,1.888c-.242,6.2-3.275,10.337-10.358,10.337C103.879,3496,103.773,3496,103.665,3496Z" fill="#fff"/>[m
[32m+[m[32m                  </g>[m
[32m+[m[32m                </symbol>[m
[32m+[m[32m                </svg>[m
[32m+[m[32m                <svg width="18" height="14">[m
[32m+[m[32m                  <use xlink:href="#icon-twitter"></use>[m
[32m+[m[32m                </svg>[m
[32m+[m[32m                </a>[m
[32m+[m[32m            </li>[m
[32m+[m[32m            <li class="social__item">[m
[32m+[m[32m              <a class="social__link social__link--facebook" href="#">[m
[32m+[m[32m                <!-- <img src="./img/icon-facebook.svg"><span class="visually-hidden">Мы в Фейсбуке</span> -->[m
[32m+[m[41m               [m
[32m+[m[32m                <svg style="display: none;">[m
[32m+[m[32m                  <symbol id="icon-facebook" viewBox="0 0 9 18">[m
[32m+[m[32m                  <g transform="translate(-155 -3479)">[m
[32m+[m[32m                    <path d="M157.033,3497v-8.847H155v-3.343h2.022c-.424-3.542.734-5.639,3.992-5.811H164v3.189h-2.489c-.545.336-.528,1.627-.506,2.622h2.973v3.343h-2.964V3497Z" fill="#fff"/>[m[41m                 [m
[32m+[m[32m                   </g>[m
[32m+[m[32m                </symbol>[m
[32m+[m[32m                </svg>[m
[32m+[m[32m                <svg width="9" height="18">[m
[32m+[m[32m                  <use xlink:href="#icon-facebook"></use>[m
[32m+[m[32m                </svg>[m
[32m+[m[32m                </a>[m
[32m+[m[32m            </li>[m
[32m+[m[32m            <li class="social__item">[m
[32m+[m[32m              <a class="social__link social__link--youtube" href="#">[m
[32m+[m[32m                <!-- <img src="./img/icon-youtube.svg"><span class="visually-hidden">Мы в Ютубе</span> -->[m
[32m+[m[32m                <svg style="display: none;">[m
[32m+[m[32m                  <symbol id="icon-youtube" viewBox="0 0 20 14">[m
[32m+[m[32m                  <g transform="translate(-202 -3482)">[m
[32m+[m[32m                    <path d="M204.838,3496a2.843,2.843,0,0,1-2.839-2.832v-8.337a2.842,2.842,0,0,1,2.839-2.831h14.325a2.842,2.842,0,0,1,2.837,2.831v8.337a2.842,2.842,0,0,1-2.837,2.832Zm4.206-3.619L215.82,3489l-6.776-3.38Z" fill="#fff"/>[m
[32m+[m[32m                   </g>[m
[32m+[m[32m                </symbol>[m
[32m+[m[32m                </svg>[m
[32m+[m[32m                <svg width="20" height="14">[m
[32m+[m[32m                  <use xlink:href="#icon-youtube"></use>[m
[32m+[m[32m                </svg>[m
[32m+[m[32m                </a>[m
[32m+[m[32m            </li>[m
[32m+[m[32m          </ul>[m
[32m+[m[32m        </div>[m
[32m+[m
[32m+[m[32m        <div class="page-footer__copyright copyright">[m
[32m+[m[32m          <p class="copyright__text">Разработано</p>[m
[32m+[m[32m          <a class="copyright__link" href="https://htmlacademy.ru/">[m[41m            [m
[32m+[m[32m            <svg style="display: none;">[m
[32m+[m[32m               <symbol id="html-logo" viewBox="0 0 27 34">[m
[32m+[m[32m                 <g transform="translate(-196.94 -3552.972)">[m
[32m+[m[32m                   <path d="M197.027,3578.933V3554.46l13.428-1.4.141.014,13.287,1.385v24.473l-13.428,7.945Zm1.757-.993,11.671,6.905,11.671-6.905v-10.2l-3.6,2.138v3.953l.01-.006v1.215l-8.08,4.808-8-4.783.011-1.21,8,4.733-.02-1.28-8-4.783.013-1.211,7.972,4.718-.02-1.246-11.621-6.878Zm.025-11.377,11.563,6.835,1.977-1.18-1.94-1.137.011-1.21,2.958,1.733.023-.014.924-.615-3.915-2.315.011-1.21,4.961,2.935.853-.5.13-.076.053-.031-6.008-3.553.011-1.21,7.03,4.158,1.475-.863,3.193-1.87-11.728-6.8v0Zm11.583-8.219,11.734,6.878v-9.188l-11.671-1.217-11.671,1.217v9.18l11.605-6.87v0h0Z" fill="black"/>[m
[32m+[m[32m                 </g>[m
[32m+[m[32m               </symbol>[m
[32m+[m[32m            </svg>[m
[32m+[m[32m            <svg class="copyright__logo" width="27" height="34">[m
[32m+[m[32m              <use xlink:href="#html-logo">[m
[32m+[m[32m              </use>[m
[32m+[m[32m            </svg>[m
[32m+[m
[32m+[m
[32m+[m[32m          </a>[m
[32m+[m[32m        </div>[m
[32m+[m[32m      </div>[m
[32m+[m[32m    </footer>[m
[32m+[m[32m    <script src="./js/main.js"></script>[m
[32m+[m[32m  </body>[m
[32m+[m[32m</html>[m
[32m+[m
[1mdiff --git a/app/js/main.js b/app/js/main.js[m
[1mnew file mode 100644[m
[1mindex 0000000..e280845[m
[1m--- /dev/null[m
[1m+++ b/app/js/main.js[m
[36m@@ -0,0 +1,15 @@[m
[32m+[m[32mvar buttonOpen = document.querySelector(".page-header__toggle--opened");[m
[32m+[m[32mvar buttonClose = document.querySelector(".page-header__toggle--closed");[m
[32m+[m[32mvar menu = document.querySelector(".main-nav");[m
[32m+[m
[32m+[m[32mbuttonClose.addEventListener("click", function () {[m
[32m+[m[32m  buttonClose.classList.remove("page-header__toggle--closed");[m
[32m+[m[32m  buttonClose.classList.add("page-header__toggle--opened");[m
[32m+[m[32m  menu.classList.add("main-nav-opened");[m
[32m+[m[32m});[m
[32m+[m
[32m+[m[32mbuttonOpen.addEventListener("click", function () {[m
[32m+[m[32m  buttonOpen.classList.remove("page-header__toggle--opened");[m
[32m+[m[32m  buttonOpen.classList.add("page-header__toggle--closed");[m
[32m+[m[32m  menu.classList.remove("main-nav-opened");[m
[32m+[m[32m});[m
[1mdiff --git a/gulpfile.js b/gulpfile.js[m
[1mnew file mode 100644[m
[1mindex 0000000..dad9a80[m
[1m--- /dev/null[m
[1m+++ b/gulpfile.js[m
[36m@@ -0,0 +1,44 @@[m
[32m+[m[32m// Определяем константы Gulp[m
[32m+[m[32mconst gulp = require("gulp");[m
[32m+[m
[32m+[m[32m// Подключаем модули gulp-sass[m
[32m+[m[32mconst sass = require("gulp-sass")(require("sass"));[m
[32m+[m
[32m+[m[32m// Подключаем Autoprefixer[m
[32m+[m[32mconst autoprefixer = require("gulp-autoprefixer");[m
[32m+[m
[32m+[m[32m// Подключаем модуль gulp-clean-css[m
[32m+[m[32mconst cleancss = require("gulp-clean-css");[m
[32m+[m
[32m+[m[32m// Подключаем Browsersync[m
[32m+[m[32mconst browserSync = require("browser-sync").create();[m
[32m+[m
[32m+[m[32mfunction styles() {[m
[32m+[m[32m  return gulp[m
[32m+[m[32m    .src("./app/css/sass/*.scss") // Выбираем источник: "app/sass/main.sass"[m
[32m+[m[32m    .pipe(sass().on("error", sass.logError)) // Преобразуем значение переменной "preprocessor" в функцию[m
[32m+[m[32m    .pipe([m
[32m+[m[32m      autoprefixer({ overrideBrowserslist: ["last 10 versions"], grid: true })[m
[32m+[m[32m    ) // Создадим префиксы с помощью Autoprefixer[m
[32m+[m[32m    .pipe([m
[32m+[m[32m      cleancss({ level: { 1: { specialComments: 0 } }, format: "beautify" })[m
[32m+[m[32m    ) // Минифицируем стили[m
[32m+[m[32m    .pipe(gulp.dest("./app/css")) // Выгрузим результат в папку "app/css/"[m
[32m+[m[32m    .pipe(browserSync.stream());[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mfunction watch() {[m
[32m+[m[32m  browserSync.init({[m
[32m+[m[32m    // Инициализация Browsersync[m
[32m+[m[32m    server: { baseDir: "app/" }, // Указываем папку сервера[m
[32m+[m[32m    notify: false, // Отключаем уведомления[m
[32m+[m[32m    online: true, // Режим работы: true или false[m
[32m+[m[32m  });[m
[32m+[m[32m  // Мониторим файлы препроцессора на изменения[m
[32m+[m[32m  gulp.watch("./app/css/sass/*.scss", styles);[m
[32m+[m[32m  gulp.watch("./app/*.html").on("change", browserSync.reload);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m// Экспортируем функцию styles() в таск styles[m
[32m+[m[32mexports.styles = styles;[m
[32m+[m[32mexports.watch = watch;[m
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mnew file mode 100644[m
[1mindex 0000000..7327578[m
[1m--- /dev/null[m
[1m+++ b/package-lock.json[m
[36m@@ -0,0 +1,11410 @@[m
[32m+[m[32m{[m
[32m+[m[32m  "name": "sedona",[m
[32m+[m[32m  "version": "1.0.0",[m
[32m+[m[32m  "lockfileVersion": 2,[m
[32m+[m[32m  "requires": true,[m
[32m+[m[32m  "packages": {[m
[32m+[m[32m    "": {[m
[32m+[m[32m      "name": "sedona",[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "license": "ISC",[m
[32m+[m[32m      "devDependencies": {[m
[32m+[m[32m        "browser-sync": "^2.26.14",[m
[32m+[m[32m        "gulp": "^4.0.2",[m
[32m+[m[32m        "gulp-autoprefixer": "^7.0.1",[m
[32m+[m[32m        "gulp-clean-css": "^4.3.0",[m
[32m+[m[32m        "gulp-sass": "^5.1.0",[m
[32m+[m[32m        "sass": "^1.49.9"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@socket.io/base64-arraybuffer": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@socket.io/base64-arraybuffer/-/base64-arraybuffer-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-dOlCBKnDw4iShaIsH/bxujKTM18+2TOAsYz+KSc11Am38H4q5Xw8Bbz97ZYdrVNM+um3p7w86Bvvmcn9q+5+eQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.6.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@socket.io/component-emitter": {[m
[32m+[m[32m      "version": "3.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@socket.io/component-emitter/-/component-emitter-3.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-2pTGuibAXJswAPJjaKisthqS/NOK5ypG4LYT6tEAV0S/mxW0zOIvYvGK0V8w8+SHxAm6vRMSjqSalFXeBAqs+Q==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@types/component-emitter": {[m
[32m+[m[32m      "version": "1.2.11",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@types/component-emitter/-/component-emitter-1.2.11.tgz",[m
[32m+[m[32m      "integrity": "sha512-SRXjM+tfsSlA9VuG8hGO2nft2p8zjXCK1VcC6N4NXbBbYbSia9kzCChYQajIjzIqOOOuh5Ock6MmV2oux4jDZQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@types/cookie": {[m
[32m+[m[32m      "version": "0.4.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@types/cookie/-/cookie-0.4.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-XW/Aa8APYr6jSVVA1y/DEIZX0/GMKLEVekNG727R8cs56ahETkRAy/3DR7+fJyh7oUgGwNQaRfXCun0+KbWY7Q==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@types/cors": {[m
[32m+[m[32m      "version": "2.8.12",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@types/cors/-/cors-2.8.12.tgz",[m
[32m+[m[32m      "integrity": "sha512-vt+kDhq/M2ayberEtJcIN/hxXy1Pk+59g2FV/ZQceeaTyCtCucjL2Q7FXlFjtWn4n15KCr1NE2lNNFhp0lEThw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@types/node": {[m
[32m+[m[32m      "version": "17.0.22",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@types/node/-/node-17.0.22.tgz",[m
[32m+[m[32m      "integrity": "sha512-8FwbVoG4fy+ykY86XCAclKZDORttqE5/s7dyWZKLXTdv3vRy5HozBEinG5IqhvPXXzIZEcTVbuHlQEI6iuwcmw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/accepts": {[m
[32m+[m[32m      "version": "1.3.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",[m
[32m+[m[32m      "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "mime-types": "~2.1.34",[m
[32m+[m[32m        "negotiator": "0.6.3"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/ansi-colors": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-SFKX67auSNoVR38N3L+nvsPjOE0bybKTYbkf5tRvushrAPQ9V75huw0ZxBkKVeRU9kqH3d6HA4xTckbwZ4ixmA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ansi-wrap": "^0.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/ansi-gray": {[m
[32m+[m[32m      "version": "0.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ansi-gray/-/ansi-gray-0.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-KWLPVOyXksSFEKPetSRDaGHvclE=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ansi-wrap": "0.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/ansi-regex": {[m
[32m+[m[32m      "version": "5.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/ansi-styles": {[m
[32m+[m[32m      "version": "2.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/ansi-wrap": {[m
[32m+[m[32m      "version": "0.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ansi-wrap/-/ansi-wrap-0.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-qCJQ3bABXponyoLoLqYDu/pF768=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/anymatch": {[m
[32m+[m[32m      "version": "3.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "normalize-path": "^3.0.0",[m
[32m+[m[32m        "picomatch": "^2.0.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/append-buffer": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/append-buffer/-/append-buffer-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-2CIM9GYIFSXv6lBhTz3mUU36WPE=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "buffer-equal": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/archy": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/archy/-/archy-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-+cjBN1fMHde8N5rHeyxipcKGjEA=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/arr-diff": {[m
[32m+[m[32m      "version": "4.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/arr-filter": {[m
[32m+[m[32m      "version": "1.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/arr-filter/-/arr-filter-1.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-Q/3d0JHo7xGqTEXZzcGOLf8XEe4=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "make-iterator": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/arr-flatten": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/arr-map": {[m
[32m+[m[32m      "version": "2.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/arr-map/-/arr-map-2.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-Onc0X/wc814qkYJWAfnljy4kysQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "make-iterator": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/arr-union": {[m
[32m+[m[32m      "version": "3.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/array-each": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/array-each/-/array-each-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-p5SvDAWrF1KEbudTofIRoFugxE8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/array-initial": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/array-initial/-/array-initial-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-L6dLJnOTccOUe9enrcc74zSz15U=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "array-slice": "^1.0.0",[m
[32m+[m[32m        "is-number": "^4.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/array-initial/node_modules/is-number": {[m
[32m+[m[32m      "version": "4.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-number/-/is-number-4.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-rSklcAIlf1OmFdyAqbnWTLVelsQ58uvZ66S/ZyawjWqIviTWCjg2PzVGw8WUA+nNuPTqb4wgA+NszrJ+08LlgQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/array-last": {[m
[32m+[m[32m      "version": "1.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/array-last/-/array-last-1.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-eOCut5rXlI6aCOS7Z7kCplKRKyiFQ6dHFBem4PwlwKeNFk2/XxTrhRh5T9PyaEWGy/NHTZWbY+nsZlNFJu9rYg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-number": "^4.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/array-last/node_modules/is-number": {[m
[32m+[m[32m      "version": "4.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-number/-/is-number-4.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-rSklcAIlf1OmFdyAqbnWTLVelsQ58uvZ66S/ZyawjWqIviTWCjg2PzVGw8WUA+nNuPTqb4wgA+NszrJ+08LlgQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/array-slice": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/array-slice/-/array-slice-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-B1qMD3RBP7O8o0H2KbrXDyB0IccejMF15+87Lvlor12ONPRHP6gTjXMNkt/d3ZuOGbAe66hFmaCfECI24Ufp6w==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/array-sort": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/array-sort/-/array-sort-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-ihLeJkonmdiAsD7vpgN3CRcx2J2S0TiYW+IS/5zHBI7mKUq3ySvBdzzBfD236ubDBQFiiyG3SWCPc+msQ9KoYg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "default-compare": "^1.0.0",[m
[32m+[m[32m        "get-value": "^2.0.6",[m
[32m+[m[32m        "kind-of": "^5.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/array-unique": {[m
[32m+[m[32m      "version": "0.3.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/assign-symbols": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/async": {[m
[32m+[m[32m      "version": "1.5.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/async/-/async-1.5.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-7GphrlZIDAw8skHJVhjiCJL5Zyo=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/async-done": {[m
[32m+[m[32m      "version": "1.3.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/async-done/-/async-done-1.3.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-uYkTP8dw2og1tu1nmza1n1CMW0qb8gWWlwqMmLb7MhBVs4BXrFziT6HXUd+/RlRA/i4H9AkofYloUbs1fwMqlw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "end-of-stream": "^1.1.0",[m
[32m+[m[32m        "once": "^1.3.2",[m
[32m+[m[32m        "process-nextick-args": "^2.0.0",[m
[32m+[m[32m        "stream-exhaust": "^1.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/async-each": {[m
[32m+[m[32m      "version": "1.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/async-each/-/async-each-1.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-z/WhQ5FPySLdvREByI2vZiTWwCnF0moMJ1hK9YQwDTHKh6I7/uSckMetoRGb5UBZPC1z0jlw+n/XCgjeH7y1AQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/async-each-series": {[m
[32m+[m[32m      "version": "0.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/async-each-series/-/async-each-series-0.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-dhfBkXQB/Yykooqtzj266Yr+tDI=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.8.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/async-settle": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/async-settle/-/async-settle-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-HQqRS7Aldb7IqPOnTlCA9yssDGs=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "async-done": "^1.2.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/atob": {[m
[32m+[m[32m      "version": "2.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "atob": "bin/atob.js"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 4.5.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/autoprefixer": {[m
[32m+[m[32m      "version": "9.8.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-9.8.8.tgz",[m
[32m+[m[32m      "integrity": "sha512-eM9d/swFopRt5gdJ7jrpCwgvEMIayITpojhkkSMRsFHYuH5bkSQ4p/9qTEHtmNudUZh22Tehu7I6CxAW0IXTKA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "browserslist": "^4.12.0",[m
[32m+[m[32m        "caniuse-lite": "^1.0.30001109",[m
[32m+[m[32m        "normalize-range": "^0.1.2",[m
[32m+[m[32m        "num2fraction": "^1.2.2",[m
[32m+[m[32m        "picocolors": "^0.2.1",[m
[32m+[m[32m        "postcss": "^7.0.32",[m
[32m+[m[32m        "postcss-value-parser": "^4.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "autoprefixer": "bin/autoprefixer"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "type": "tidelift",[m
[32m+[m[32m        "url": "https://tidelift.com/funding/github/npm/autoprefixer"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/axios": {[m
[32m+[m[32m      "version": "0.21.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/axios/-/axios-0.21.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-ut5vewkiu8jjGBdqpM44XxjuCjq9LAKeHVmoVfHVzy8eHgxxq8SbAVQNovDA8mVi05kP0Ea/n/UzcSHcTJQfNg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "follow-redirects": "^1.14.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/bach": {[m
[32m+[m[32m      "version": "1.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/bach/-/bach-1.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-Szzpa/JxNPeaG0FKUcFONMO9mIA=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "arr-filter": "^1.1.1",[m
[32m+[m[32m        "arr-flatten": "^1.0.1",[m
[32m+[m[32m        "arr-map": "^2.0.0",[m
[32m+[m[32m        "array-each": "^1.0.0",[m
[32m+[m[32m        "array-initial": "^1.0.0",[m
[32m+[m[32m        "array-last": "^1.1.1",[m
[32m+[m[32m        "async-done": "^1.2.2",[m
[32m+[m[32m        "async-settle": "^1.0.0",[m
[32m+[m[32m        "now-and-later": "^2.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/backo2": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/backo2/-/backo2-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-MasayLEpNjRj41s+u2n038+6eUc=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/balanced-match": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/base": {[m
[32m+[m[32m      "version": "0.11.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "cache-base": "^1.0.1",[m
[32m+[m[32m        "class-utils": "^0.3.5",[m
[32m+[m[32m        "component-emitter": "^1.2.1",[m
[32m+[m[32m        "define-property": "^1.0.0",[m
[32m+[m[32m        "isobject": "^3.0.1",[m
[32m+[m[32m        "mixin-deep": "^1.2.0",[m
[32m+[m[32m        "pascalcase": "^0.1.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/base/node_modules/define-property": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-descriptor": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/base64id": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/base64id/-/base64id-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-lGe34o6EHj9y3Kts9R4ZYs/Gr+6N7MCaMlIFA3F1R2O5/m7K06AxfSeO5530PEERE6/WyEg3lsuyw4GHlPZHog==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": "^4.5.0 || >= 5.9"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/batch": {[m
[32m+[m[32m      "version": "0.6.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/batch/-/batch-0.6.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-3DQxT05nkxgJP8dgJyUl+UvyXBY=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/binary-extensions": {[m
[32m+[m[32m      "version": "2.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/bindings": {[m
[32m+[m[32m      "version": "1.5.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/bindings/-/bindings-1.5.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-p2q/t/mhvuOj/UeLlV6566GD/guowlr0hHxClI0W9m7MWYkL1F0hLo+0Aexs9HSPCtR1SXQ0TD3MMKrXZajbiQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "optional": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "file-uri-to-path": "1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/brace-expansion": {[m
[32m+[m[32m      "version": "1.1.11",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",[m
[32m+[m[32m      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "balanced-match": "^1.0.0",[m
[32m+[m[32m        "concat-map": "0.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/braces": {[m
[32m+[m[32m      "version": "3.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "fill-range": "^7.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/browser-sync": {[m
[32m+[m[32m      "version": "2.27.9",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/browser-sync/-/browser-sync-2.27.9.tgz",[m
[32m+[m[32m      "integrity": "sha512-3zBtggcaZIeU9so4ja9yxk7/CZu9B3DOL6zkxFpzHCHsQmkGBPVXg61jItbeoa+WXgNLnr1sYES/2yQwyEZ2+w==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "browser-sync-client": "^2.27.9",[m
[32m+[m[32m        "browser-sync-ui": "^2.27.9",[m
[32m+[m[32m        "bs-recipes": "1.3.4",[m
[32m+[m[32m        "bs-snippet-injector": "^2.0.1",[m
[32m+[m[32m        "chokidar": "^3.5.1",[m
[32m+[m[32m        "connect": "3.6.6",[m
[32m+[m[32m        "connect-history-api-fallback": "^1",[m
[32m+[m[32m        "dev-ip": "^1.0.1",[m
[32m+[m[32m        "easy-extender": "^2.3.4",[m
[32m+[m[32m        "eazy-logger": "3.1.0",[m
[32m+[m[32m        "etag": "^1.8.1",[m
[32m+[m[32m        "fresh": "^0.5.2",[m
[32m+[m[32m        "fs-extra": "3.0.1",[m
[32m+[m[32m        "http-proxy": "^1.18.1",[m
[32m+[m[32m        "immutable": "^3",[m
[32m+[m[32m        "localtunnel": "^2.0.1",[m
[32m+[m[32m        "micromatch": "^4.0.2",[m
[32m+[m[32m        "opn": "5.3.0",[m
[32m+[m[32m        "portscanner": "2.1.1",[m
[32m+[m[32m        "qs": "6.2.3",[m
[32m+[m[32m        "raw-body": "^2.3.2",[m
[32m+[m[32m        "resp-modifier": "6.0.2",[m
[32m+[m[32m        "rx": "4.1.0",[m
[32m+[m[32m        "send": "0.16.2",[m
[32m+[m[32m        "serve-index": "1.9.1",[m
[32m+[m[32m        "serve-static": "1.13.2",[m
[32m+[m[32m        "server-destroy": "1.0.1",[m
[32m+[m[32m        "socket.io": "^4.4.1",[m
[32m+[m[32m        "ua-parser-js": "1.0.2",[m
[32m+[m[32m        "yargs": "^17.3.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "browser-sync": "dist/bin.js"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 8.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/browser-sync-client": {[m
[32m+[m[32m      "version": "2.27.9",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/browser-sync-client/-/browser-sync-client-2.27.9.tgz",[m
[32m+[m[32m      "integrity": "sha512-FHW8kydp7FXo6jnX3gXJCpHAHtWNLK0nx839nnK+boMfMI1n4KZd0+DmTxHBsHsF3OHud4V4jwoN8U5HExMIdQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "etag": "1.8.1",[m
[32m+[m[32m        "fresh": "0.5.2",[m
[32m+[m[32m        "mitt": "^1.1.3",[m
[32m+[m[32m        "rxjs": "^5.5.6"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=8.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/browser-sync-ui": {[m
[32m+[m[32m      "version": "2.27.9",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/browser-sync-ui/-/browser-sync-ui-2.27.9.tgz",[m
[32m+[m[32m      "integrity": "sha512-rsduR2bRIwFvM8CX6iY/Nu5aWub0WB9zfSYg9Le/RV5N5DEyxJYey0VxdfWCnzDOoelassTDzYQo+r0iJno3qw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "async-each-series": "0.1.1",[m
[32m+[m[32m        "connect-history-api-fallback": "^1",[m
[32m+[m[32m        "immutable": "^3",[m
[32m+[m[32m        "server-destroy": "1.0.1",[m
[32m+[m[32m        "socket.io-client": "^4.4.1",[m
[32m+[m[32m        "stream-throttle": "^0.1.3"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/browserslist": {[m
[32m+[m[32m      "version": "4.20.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.20.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-CQOBCqp/9pDvDbx3xfMi+86pr4KXIf2FDkTTdeuYw8OxS9t898LA1Khq57gtufFILXpfgsSx5woNgsBgvGjpsA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "funding": [[m
[32m+[m[32m        {[m
[32m+[m[32m          "type": "opencollective",[m
[32m+[m[32m          "url": "https://opencollective.com/browserslist"[m
[32m+[m[32m        },[m
[32m+[m[32m        {[m
[32m+[m[32m          "type": "tidelift",[m
[32m+[m[32m          "url": "https://tidelift.com/funding/github/npm/browserslist"[m
[32m+[m[32m        }[m
[32m+[m[32m      ],[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "caniuse-lite": "^1.0.30001317",[m
[32m+[m[32m        "electron-to-chromium": "^1.4.84",[m
[32m+[m[32m        "escalade": "^3.1.1",[m
[32m+[m[32m        "node-releases": "^2.0.2",[m
[32m+[m[32m        "picocolors": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "browserslist": "cli.js"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/browserslist/node_modules/picocolors": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/bs-recipes": {[m
[32m+[m[32m      "version": "1.3.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/bs-recipes/-/bs-recipes-1.3.4.tgz",[m
[32m+[m[32m      "integrity": "sha1-DS1NSKcYyMBEdp/cT4lZLci2lYU=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/bs-snippet-injector": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/bs-snippet-injector/-/bs-snippet-injector-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-YbU5PxH1JVntEgaTEANDtu2wTdU=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/buffer-equal": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/buffer-equal/-/buffer-equal-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-WWFrSYME1Var1GaWayLu2j7KX74=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.4.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/buffer-from": {[m
[32m+[m[32m      "version": "1.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/bytes": {[m
[32m+[m[32m      "version": "3.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/cache-base": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "collection-visit": "^1.0.0",[m
[32m+[m[32m        "component-emitter": "^1.2.1",[m
[32m+[m[32m        "get-value": "^2.0.6",[m
[32m+[m[32m        "has-value": "^1.0.0",[m
[32m+[m[32m        "isobject": "^3.0.1",[m
[32m+[m[32m        "set-value": "^2.0.0",[m
[32m+[m[32m        "to-object-path": "^0.3.0",[m
[32m+[m[32m        "union-value": "^1.0.0",[m
[32m+[m[32m        "unset-value": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/call-bind": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "function-bind": "^1.1.1",[m
[32m+[m[32m        "get-intrinsic": "^1.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "url": "https://github.com/sponsors/ljharb"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/camelcase": {[m
[32m+[m[32m      "version": "3.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-3.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-MvxLn82vhF/N9+c7uXysImHwqwo=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/caniuse-lite": {[m
[32m+[m[32m      "version": "1.0.30001319",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001319.tgz",[m
[32m+[m[32m      "integrity": "sha512-xjlIAFHucBRSMUo1kb5D4LYgcN1M45qdKP++lhqowDpwJwGkpIRTt5qQqnhxjj1vHcI7nrJxWhCC1ATrCEBTcw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "funding": [[m
[32m+[m[32m        {[m
[32m+[m[32m          "type": "opencollective",[m
[32m+[m[32m          "url": "https://opencollective.com/browserslist"[m
[32m+[m[32m        },[m
[32m+[m[32m        {[m
[32m+[m[32m          "type": "tidelift",[m
[32m+[m[32m          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"[m
[32m+[m[32m        }[m
[32m+[m[32m      ][m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/chalk": {[m
[32m+[m[32m      "version": "1.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ansi-styles": "^2.2.1",[m
[32m+[m[32m        "escape-string-regexp": "^1.0.2",[m
[32m+[m[32m        "has-ansi": "^2.0.0",[m
[32m+[m[32m        "strip-ansi": "^3.0.0",[m
[32m+[m[32m        "supports-color": "^2.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/chalk/node_modules/ansi-regex": {[m
[32m+[m[32m      "version": "2.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/chalk/node_modules/strip-ansi": {[m
[32m+[m[32m      "version": "3.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ansi-regex": "^2.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/chokidar": {[m
[32m+[m[32m      "version": "3.5.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-Dr3sfKRP6oTcjf2JmUmFJfeVMvXBdegxB0iVQ5eb2V10uFJUCAS8OByZdVAyVb8xXNz3GjjTgj9kLWsZTqE6kw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "funding": [[m
[32m+[m[32m        {[m
[32m+[m[32m          "type": "individual",[m
[32m+[m[32m          "url": "https://paulmillr.com/funding/"[m
[32m+[m[32m        }[m
[32m+[m[32m      ],[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "anymatch": "~3.1.2",[m
[32m+[m[32m        "braces": "~3.0.2",[m
[32m+[m[32m        "glob-parent": "~5.1.2",[m
[32m+[m[32m        "is-binary-path": "~2.1.0",[m
[32m+[m[32m        "is-glob": "~4.0.1",[m
[32m+[m[32m        "normalize-path": "~3.0.0",[m
[32m+[m[32m        "readdirp": "~3.6.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 8.10.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "optionalDependencies": {[m
[32m+[m[32m        "fsevents": "~2.3.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/class-utils": {[m
[32m+[m[32m      "version": "0.3.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "arr-union": "^3.1.0",[m
[32m+[m[32m        "define-property": "^0.2.5",[m
[32m+[m[32m        "isobject": "^3.0.0",[m
[32m+[m[32m        "static-extend": "^0.1.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/class-utils/node_modules/define-property": {[m
[32m+[m[32m      "version": "0.2.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",[m
[32m+[m[32m      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-descriptor": "^0.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/class-utils/node_modules/is-accessor-descriptor": {[m
[32m+[m[32m      "version": "0.1.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",[m
[32m+[m[32m      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": "^3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/class-utils/node_modules/is-accessor-descriptor/node_modules/kind-of": {[m
[32m+[m[32m      "version": "3.2.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-buffer": "^1.1.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/class-utils/node_modules/is-data-descriptor": {[m
[32m+[m[32m      "version": "0.1.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",[m
[32m+[m[32m      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": "^3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/class-utils/node_modules/is-data-descriptor/node_modules/kind-of": {[m
[32m+[m[32m      "version": "3.2.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-buffer": "^1.1.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/class-utils/node_modules/is-descriptor": {[m
[32m+[m[32m      "version": "0.1.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-accessor-descriptor": "^0.1.6",[m
[32m+[m[32m        "is-data-descriptor": "^0.1.4",[m
[32m+[m[32m        "kind-of": "^5.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/clean-css": {[m
[32m+[m[32m      "version": "4.2.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/clean-css/-/clean-css-4.2.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-VcMWDN54ZN/DS+g58HYL5/n4Zrqe8vHJpGA8KdgUXFU4fuP/aHNw8eld9SyEIyabIMJX/0RaY/fplOo5hYLSFA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "source-map": "~0.6.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 4.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/cliui": {[m
[32m+[m[32m      "version": "7.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/cliui/-/cliui-7.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-OcRE68cOsVMXp1Yvonl/fzkQOyjLSu/8bhPDfQt0e0/Eb283TKP20Fs2MqoPsr9SwA595rRCA+QMzYc9nBP+JQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "string-width": "^4.2.0",[m
[32m+[m[32m        "strip-ansi": "^6.0.0",[m
[32m+[m[32m        "wrap-ansi": "^7.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/clone": {[m
[32m+[m[32m      "version": "2.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/clone/-/clone-2.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-G39Ln1kfHo+DZwQBYANFoCiHQ18=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/clone-buffer": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/clone-buffer/-/clone-buffer-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-4+JbIHrE5wGvch4staFnksrD3Fg=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/clone-stats": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/clone-stats/-/clone-stats-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-s3gt/4u1R04Yuba/D9/ngvh3doA=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/cloneable-readable": {[m
[32m+[m[32m      "version": "1.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/cloneable-readable/-/cloneable-readable-1.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-2EF8zTQOxYq70Y4XKtorQupqF0m49MBz2/yf5Bj+MHjvpG3Hy7sImifnqD6UA+TKYxeSV+u6qqQPawN5UvnpKQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "inherits": "^2.0.1",[m
[32m+[m[32m        "process-nextick-args": "^2.0.0",[m
[32m+[m[32m        "readable-stream": "^2.3.5"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/code-point-at": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/collection-map": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/collection-map/-/collection-map-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-rqDwb40mx4DCt1SUOFVEsiVa8Yw=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "arr-map": "^2.0.2",[m
[32m+[m[32m        "for-own": "^1.0.0",[m
[32m+[m[32m        "make-iterator": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/collection-visit": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "map-visit": "^1.0.0",[m
[32m+[m[32m        "object-visit": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/color-convert": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "color-name": "~1.1.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=7.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/color-name": {[m
[32m+[m[32m      "version": "1.1.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/color-support": {[m
[32m+[m[32m      "version": "1.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/color-support/-/color-support-1.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-qiBjkpbMLO/HL68y+lh4q0/O1MZFj2RX6X/KmMa3+gJD3z+WwI1ZzDHysvqHGS3mP6mznPckpXmw1nI9cJjyRg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "color-support": "bin.js"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/commander": {[m
[32m+[m[32m      "version": "2.20.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/component-emitter": {[m
[32m+[m[32m      "version": "1.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/concat-map": {[m
[32m+[m[32m      "version": "0.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/concat-stream": {[m
[32m+[m[32m      "version": "1.6.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": [[m
[32m+[m[32m        "node >= 0.8"[m
[32m+[m[32m      ],[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "buffer-from": "^1.0.0",[m
[32m+[m[32m        "inherits": "^2.0.3",[m
[32m+[m[32m        "readable-stream": "^2.2.2",[m
[32m+[m[32m        "typedarray": "^0.0.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/connect": {[m
[32m+[m[32m      "version": "3.6.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/connect/-/connect-3.6.6.tgz",[m
[32m+[m[32m      "integrity": "sha1-Ce/2xVr3I24TcTWnJXSFi2eG9SQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "debug": "2.6.9",[m
[32m+[m[32m        "finalhandler": "1.1.0",[m
[32m+[m[32m        "parseurl": "~1.3.2",[m
[32m+[m[32m        "utils-merge": "1.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/connect-history-api-fallback": {[m
[32m+[m[32m      "version": "1.6.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/connect-history-api-fallback/-/connect-history-api-fallback-1.6.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-e54B99q/OUoH64zYYRf3HBP5z24G38h5D3qXu23JGRoigpX5Ss4r9ZnDk3g0Z8uQC2x2lPaJ+UlWBc1ZWBWdLg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/convert-source-map": {[m
[32m+[m[32m      "version": "1.8.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.8.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-+OQdjP49zViI/6i7nIJpA8rAl4sV/JdPfU9nZs3VqOwGIgizICvuN2ru6fMd+4llL0tar18UYJXfZ/TWtmhUjA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "safe-buffer": "~5.1.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/cookie": {[m
[32m+[m[32m      "version": "0.4.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-aSWTXFzaKWkvHO1Ny/s+ePFpvKsPnjc551iI41v3ny/ow6tBG5Vd+FuqGNhh1LxOmVzOlGUriIlOaokOvhaStA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/copy-descriptor": {[m
[32m+[m[32m      "version": "0.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/copy-props": {[m
[32m+[m[32m      "version": "2.0.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/copy-props/-/copy-props-2.0.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-XBlx8HSqrT0ObQwmSzM7WE5k8FxTV75h1DX1Z3n6NhQ/UYYAvInWYmG06vFt7hQZArE2fuO62aihiWIVQwh1sw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "each-props": "^1.3.2",[m
[32m+[m[32m        "is-plain-object": "^5.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/core-util-is": {[m
[32m+[m[32m      "version": "1.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/cors": {[m
[32m+[m[32m      "version": "2.8.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "object-assign": "^4",[m
[32m+[m[32m        "vary": "^1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/d": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/d/-/d-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-m62ShEObQ39CfralilEQRjH6oAMtNCV1xJyEx5LpRYUVN+EviphDgUc/F3hnYbADmkiNs67Y+3ylmlG7Lnu+FA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "es5-ext": "^0.10.50",[m
[32m+[m[32m        "type": "^1.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/debug": {[m
[32m+[m[32m      "version": "2.6.9",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",[m
[32m+[m[32m      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ms": "2.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/decamelize": {[m
[32m+[m[32m      "version": "1.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/decode-uri-component": {[m
[32m+[m[32m      "version": "0.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/default-compare": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/default-compare/-/default-compare-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-QWfXlM0EkAbqOCbD/6HjdwT19j7WCkMyiRhWilc4H9/5h/RzTF9gv5LYh1+CmDV5d1rki6KAWLtQale0xt20eQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": "^5.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/default-resolution": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/default-resolution/-/default-resolution-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-vLgrqnKtebQmp2cy8aga1t8m1oQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/define-properties": {[m
[32m+[m[32m      "version": "1.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "object-keys": "^1.0.12"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.4"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/define-property": {[m
[32m+[m[32m      "version": "2.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-descriptor": "^1.0.2",[m
[32m+[m[32m        "isobject": "^3.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/depd": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/destroy": {[m
[32m+[m[32m      "version": "1.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/detect-file": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/detect-file/-/detect-file-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-8NZtA2cqglyxtzvbP+YjEMjlUrc=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/dev-ip": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/dev-ip/-/dev-ip-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-p2o+0YVb56ASu4rBbLgPPADcKPA=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "dev-ip": "lib/dev-ip.js"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.8.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/dlv": {[m
[32m+[m[32m      "version": "1.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/duplexify": {[m
[32m+[m[32m      "version": "3.7.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/duplexify/-/duplexify-3.7.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-07z8uv2wMyS51kKhD1KsdXJg5WQ6t93RneqRxUHnskXVtlYYkLqM0gqStQZ3pj073g687jPCHrqNfCzawLYh5g==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "end-of-stream": "^1.0.0",[m
[32m+[m[32m        "inherits": "^2.0.1",[m
[32m+[m[32m        "readable-stream": "^2.0.0",[m
[32m+[m[32m        "stream-shift": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/each-props": {[m
[32m+[m[32m      "version": "1.3.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/each-props/-/each-props-1.3.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-vV0Hem3zAGkJAyU7JSjixeU66rwdynTAa1vofCrSA5fEln+m67Az9CcnkVD776/fsN/UjIWmBDoNRS6t6G9RfA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-plain-object": "^2.0.1",[m
[32m+[m[32m        "object.defaults": "^1.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/each-props/node_modules/is-plain-object": {[m
[32m+[m[32m      "version": "2.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "isobject": "^3.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/easy-extender": {[m
[32m+[m[32m      "version": "2.3.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/easy-extender/-/easy-extender-2.3.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-8cAwm6md1YTiPpOvDULYJL4ZS6WfM5/cTeVVh4JsvyYZAoqlRVUpHL9Gr5Fy7HA6xcSZicUia3DeAgO3Us8E+Q==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "lodash": "^4.17.10"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 4.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/eazy-logger": {[m
[32m+[m[32m      "version": "3.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/eazy-logger/-/eazy-logger-3.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-/snsn2JqBtUSSstEl4R0RKjkisGHAhvYj89i7r3ytNUKW12y178KDZwXLXIgwDqLW6E/VRMT9qfld7wvFae8bQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "tfunk": "^4.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.8.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/ee-first": {[m
[32m+[m[32m      "version": "1.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/electron-to-chromium": {[m
[32m+[m[32m      "version": "1.4.89",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.4.89.tgz",[m
[32m+[m[32m      "integrity": "sha512-z1Axg0Fu54fse8wN4fd+GAINdU5mJmLtcl6bqIcYyzNVGONcfHAeeJi88KYMQVKalhXlYuVPzKkFIU5VD0raUw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/emoji-regex": {[m
[32m+[m[32m      "version": "8.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/encodeurl": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/end-of-stream": {[m
[32m+[m[32m      "version": "1.4.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "once": "^1.4.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/engine.io": {[m
[32m+[m[32m      "version": "6.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/engine.io/-/engine.io-6.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-rqs60YwkvWTLLnfazqgZqLa/aKo+9cueVfEi/dZ8PyGyaf8TLOxj++4QMIgeG3Gn0AhrWiFXvghsoY9L9h25GA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@types/cookie": "^0.4.1",[m
[32m+[m[32m        "@types/cors": "^2.8.12",[m
[32m+[m[32m        "@types/node": ">=10.0.0",[m
[32m+[m[32m        "accepts": "~1.3.4",[m
[32m+[m[32m        "base64id": "2.0.0",[m
[32m+[m[32m        "cookie": "~0.4.1",[m
[32m+[m[32m        "cors": "~2.8.5",[m
[32m+[m[32m        "debug": "~4.3.1",[m
[32m+[m[32m        "engine.io-parser": "~5.0.3",[m
[32m+[m[32m        "ws": "~8.2.3"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=10.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/engine.io-client": {[m
[32m+[m[32m      "version": "6.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/engine.io-client/-/engine.io-client-6.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-V05mmDo4gjimYW+FGujoGmmmxRaDsrVr7AXA3ZIfa04MWM1jOfZfUwou0oNqhNwy/votUDvGDt4JA4QF4e0b4g==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@socket.io/component-emitter": "~3.0.0",[m
[32m+[m[32m        "debug": "~4.3.1",[m
[32m+[m[32m        "engine.io-parser": "~5.0.0",[m
[32m+[m[32m        "has-cors": "1.1.0",[m
[32m+[m[32m        "parseqs": "0.0.6",[m
[32m+[m[32m        "parseuri": "0.0.6",[m
[32m+[m[32m        "ws": "~8.2.3",[m
[32m+[m[32m        "xmlhttprequest-ssl": "~2.0.0",[m
[32m+[m[32m        "yeast": "0.1.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/engine.io-client/node_modules/debug": {[m
[32m+[m[32m      "version": "4.3.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ms": "2.1.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependenciesMeta": {[m
[32m+[m[32m        "supports-color": {[m
[32m+[m[32m          "optional": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/engine.io-client/node_modules/ms": {[m
[32m+[m[32m      "version": "2.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/engine.io-parser": {[m
[32m+[m[32m      "version": "5.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/engine.io-parser/-/engine.io-parser-5.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-BtQxwF27XUNnSafQLvDi0dQ8s3i6VgzSoQMJacpIcGNrlUdfHSKbgm3jmjCVvQluGzqwujQMPAoMai3oYSTurg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@socket.io/base64-arraybuffer": "~1.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=10.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/engine.io/node_modules/debug": {[m
[32m+[m[32m      "version": "4.3.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ms": "2.1.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependenciesMeta": {[m
[32m+[m[32m        "supports-color": {[m
[32m+[m[32m          "optional": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/engine.io/node_modules/ms": {[m
[32m+[m[32m      "version": "2.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/error-ex": {[m
[32m+[m[32m      "version": "1.3.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-arrayish": "^0.2.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/es5-ext": {[m
[32m+[m[32m      "version": "0.10.59",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/es5-ext/-/es5-ext-0.10.59.tgz",[m
[32m+[m[32m      "integrity": "sha512-cOgyhW0tIJyQY1Kfw6Kr0viu9ZlUctVchRMZ7R0HiH3dxTSp5zJDLecwxUqPUrGKMsgBI1wd1FL+d9Jxfi4cLw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "hasInstallScript": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "es6-iterator": "^2.0.3",[m
[32m+[m[32m        "es6-symbol": "^3.1.3",[m
[32m+[m[32m        "next-tick": "^1.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/es6-iterator": {[m
[32m+[m[32m      "version": "2.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/es6-iterator/-/es6-iterator-2.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha1-p96IkUGgWpSwhUQDstCg+/qY87c=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "d": "1",[m
[32m+[m[32m        "es5-ext": "^0.10.35",[m
[32m+[m[32m        "es6-symbol": "^3.1.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/es6-symbol": {[m
[32m+[m[32m      "version": "3.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/es6-symbol/-/es6-symbol-3.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-NJ6Yn3FuDinBaBRWl/q5X/s4koRHBrgKAu+yGI6JCBeiu3qrcbJhwT2GeR/EXVfylRk8dpQVJoLEFhK+Mu31NA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "d": "^1.0.1",[m
[32m+[m[32m        "ext": "^1.1.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/es6-weak-map": {[m
[32m+[m[32m      "version": "2.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/es6-weak-map/-/es6-weak-map-2.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-p5um32HOTO1kP+w7PRnB+5lQ43Z6muuMuIMffvDN8ZB4GcnjLBV6zGStpbASIMk4DCAvEaamhe2zhyCb/QXXsA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "d": "1",[m
[32m+[m[32m        "es5-ext": "^0.10.46",[m
[32m+[m[32m        "es6-iterator": "^2.0.3",[m
[32m+[m[32m        "es6-symbol": "^3.1.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/escalade": {[m
[32m+[m[32m      "version": "3.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/escape-html": {[m
[32m+[m[32m      "version": "1.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/escape-string-regexp": {[m
[32m+[m[32m      "version": "1.0.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",[m
[32m+[m[32m      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.8.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/etag": {[m
[32m+[m[32m      "version": "1.8.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/eventemitter3": {[m
[32m+[m[32m      "version": "4.0.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-4.0.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-8guHBZCwKnFhYdHr2ysuRWErTwhoN2X8XELRlrRwpmfeY2jjuUN4taQMsULKUVo1K4DvZl+0pgfyoysHxvmvEw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/expand-brackets": {[m
[32m+[m[32m      "version": "2.1.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",[m
[32m+[m[32m      "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "debug": "^2.3.3",[m
[32m+[m[32m        "define-property": "^0.2.5",[m
[32m+[m[32m        "extend-shallow": "^2.0.1",[m
[32m+[m[32m        "posix-character-classes": "^0.1.0",[m
[32m+[m[32m        "regex-not": "^1.0.0",[m
[32m+[m[32m        "snapdragon": "^0.8.1",[m
[32m+[m[32m        "to-regex": "^3.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/expand-brackets/node_modules/define-property": {[m
[32m+[m[32m      "version": "0.2.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",[m
[32m+[m[32m      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-descriptor": "^0.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/expand-brackets/node_modules/extend-shallow": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-extendable": "^0.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/expand-brackets/node_modules/is-accessor-descriptor": {[m
[32m+[m[32m      "version": "0.1.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",[m
[32m+[m[32m      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": "^3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/expand-brackets/node_modules/is-accessor-descriptor/node_modules/kind-of": {[m
[32m+[m[32m      "version": "3.2.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-buffer": "^1.1.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/expand-brackets/node_modules/is-data-descriptor": {[m
[32m+[m[32m      "version": "0.1.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",[m
[32m+[m[32m      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": "^3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/expand-brackets/node_modules/is-data-descriptor/node_modules/kind-of": {[m
[32m+[m[32m      "version": "3.2.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-buffer": "^1.1.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/expand-brackets/node_modules/is-descriptor": {[m
[32m+[m[32m      "version": "0.1.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-accessor-descriptor": "^0.1.6",[m
[32m+[m[32m        "is-data-descriptor": "^0.1.4",[m
[32m+[m[32m        "kind-of": "^5.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/expand-brackets/node_modules/is-extendable": {[m
[32m+[m[32m      "version": "0.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/expand-tilde": {[m
[32m+[m[32m      "version": "2.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/expand-tilde/-/expand-tilde-2.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-l+gBqgUt8CRU3kawK/YhZCzchQI=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "homedir-polyfill": "^1.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/ext": {[m
[32m+[m[32m      "version": "1.6.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ext/-/ext-1.6.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-sdBImtzkq2HpkdRLtlLWDa6w4DX22ijZLKx8BMPUuKe1c5lbN6xwQDQCxSfxBQnHZ13ls/FH0MQZx/q/gr6FQg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "type": "^2.5.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/ext/node_modules/type": {[m
[32m+[m[32m      "version": "2.6.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/type/-/type-2.6.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-eiDBDOmkih5pMbo9OqsqPRGMljLodLcwd5XD5JbtNB0o89xZAwynY9EdCDsJU7LtcVCClu9DvM7/0Ep1hYX3EQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/extend": {[m
[32m+[m[32m      "version": "3.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/extend-shallow": {[m
[32m+[m[32m      "version": "3.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "assign-symbols": "^1.0.0",[m
[32m+[m[32m        "is-extendable": "^1.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/extglob": {[m
[32m+[m[32m      "version": "2.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "array-unique": "^0.3.2",[m
[32m+[m[32m        "define-property": "^1.0.0",[m
[32m+[m[32m        "expand-brackets": "^2.1.4",[m
[32m+[m[32m        "extend-shallow": "^2.0.1",[m
[32m+[m[32m        "fragment-cache": "^0.2.1",[m
[32m+[m[32m        "regex-not": "^1.0.0",[m
[32m+[m[32m        "snapdragon": "^0.8.1",[m
[32m+[m[32m        "to-regex": "^3.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/extglob/node_modules/define-property": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-descriptor": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/extglob/node_modules/extend-shallow": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-extendable": "^0.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/extglob/node_modules/is-extendable": {[m
[32m+[m[32m      "version": "0.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/fancy-log": {[m
[32m+[m[32m      "version": "1.3.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fancy-log/-/fancy-log-1.3.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-k9oEhlyc0FrVh25qYuSELjr8oxsCoc4/LEZfg2iJJrfEk/tZL9bCoJE47gqAvI2m/AUjluCS4+3I0eTx8n3AEw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ansi-gray": "^0.1.1",[m
[32m+[m[32m        "color-support": "^1.1.3",[m
[32m+[m[32m        "parse-node-version": "^1.0.0",[m
[32m+[m[32m        "time-stamp": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/fast-levenshtein": {[m
[32m+[m[32m      "version": "1.1.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-1.1.4.tgz",[m
[32m+[m[32m      "integrity": "sha1-5qdUzI8V5YmHqpy9J69m/W9OWvk=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/file-uri-to-path": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/file-uri-to-path/-/file-uri-to-path-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-0Zt+s3L7Vf1biwWZ29aARiVYLx7iMGnEUl9x33fbB/j3jR81u/O2LbqK+Bm1CDSNDKVtJ/YjwY7TUd5SkeLQLw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "optional": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/fill-range": {[m
[32m+[m[32m      "version": "7.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "to-regex-range": "^5.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/finalhandler": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-zgtoVbRYU+eRsvzGgARtiCU91/U=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "debug": "2.6.9",[m
[32m+[m[32m        "encodeurl": "~1.0.1",[m
[32m+[m[32m        "escape-html": "~1.0.3",[m
[32m+[m[32m        "on-finished": "~2.3.0",[m
[32m+[m[32m        "parseurl": "~1.3.2",[m
[32m+[m[32m        "statuses": "~1.3.1",[m
[32m+[m[32m        "unpipe": "~1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/find-up": {[m
[32m+[m[32m      "version": "1.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/find-up/-/find-up-1.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-ay6YIrGizgpgq2TWEOzK1TyyTQ8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "path-exists": "^2.0.0",[m
[32m+[m[32m        "pinkie-promise": "^2.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/findup-sync": {[m
[32m+[m[32m      "version": "3.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/findup-sync/-/findup-sync-3.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-YbffarhcicEhOrm4CtrwdKBdCuz576RLdhJDsIfvNtxUuhdRet1qZcsMjqbePtAseKdAnDyM/IyXbu7PRPRLYg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "detect-file": "^1.0.0",[m
[32m+[m[32m        "is-glob": "^4.0.0",[m
[32m+[m[32m        "micromatch": "^3.0.4",[m
[32m+[m[32m        "resolve-dir": "^1.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/findup-sync/node_modules/braces": {[m
[32m+[m[32m      "version": "2.3.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "arr-flatten": "^1.1.0",[m
[32m+[m[32m        "array-unique": "^0.3.2",[m
[32m+[m[32m        "extend-shallow": "^2.0.1",[m
[32m+[m[32m        "fill-range": "^4.0.0",[m
[32m+[m[32m        "isobject": "^3.0.1",[m
[32m+[m[32m        "repeat-element": "^1.1.2",[m
[32m+[m[32m        "snapdragon": "^0.8.1",[m
[32m+[m[32m        "snapdragon-node": "^2.0.1",[m
[32m+[m[32m        "split-string": "^3.0.2",[m
[32m+[m[32m        "to-regex": "^3.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/findup-sync/node_modules/braces/node_modules/extend-shallow": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-extendable": "^0.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/findup-sync/node_modules/fill-range": {[m
[32m+[m[32m      "version": "4.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "extend-shallow": "^2.0.1",[m
[32m+[m[32m        "is-number": "^3.0.0",[m
[32m+[m[32m        "repeat-string": "^1.6.1",[m
[32m+[m[32m        "to-regex-range": "^2.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/findup-sync/node_modules/fill-range/node_modules/extend-shallow": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-extendable": "^0.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/findup-sync/node_modules/is-extendable": {[m
[32m+[m[32m      "version": "0.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/findup-sync/node_modules/is-number": {[m
[32m+[m[32m      "version": "3.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": "^3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/findup-sync/node_modules/is-number/node_modules/kind-of": {[m
[32m+[m[32m      "version": "3.2.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-buffer": "^1.1.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/findup-sync/node_modules/kind-of": {[m
[32m+[m[32m      "version": "6.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/findup-sync/node_modules/micromatch": {[m
[32m+[m[32m      "version": "3.1.10",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",[m
[32m+[m[32m      "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "arr-diff": "^4.0.0",[m
[32m+[m[32m        "array-unique": "^0.3.2",[m
[32m+[m[32m        "braces": "^2.3.1",[m
[32m+[m[32m        "define-property": "^2.0.2",[m
[32m+[m[32m        "extend-shallow": "^3.0.2",[m
[32m+[m[32m        "extglob": "^2.0.4",[m
[32m+[m[32m        "fragment-cache": "^0.2.1",[m
[32m+[m[32m        "kind-of": "^6.0.2",[m
[32m+[m[32m        "nanomatch": "^1.2.9",[m
[32m+[m[32m        "object.pick": "^1.3.0",[m
[32m+[m[32m        "regex-not": "^1.0.0",[m
[32m+[m[32m        "snapdragon": "^0.8.1",[m
[32m+[m[32m        "to-regex": "^3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/findup-sync/node_modules/to-regex-range": {[m
[32m+[m[32m      "version": "2.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-number": "^3.0.0",[m
[32m+[m[32m        "repeat-string": "^1.6.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/fined": {[m
[32m+[m[32m      "version": "1.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fined/-/fined-1.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-ZYDqPLGxDkDhDZBjZBb+oD1+j0rA4E0pXY50eplAAOPg2N/gUBSSk5IM1/QhPfyVo19lJ+CvXpqfvk+b2p/8Ng==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "expand-tilde": "^2.0.2",[m
[32m+[m[32m        "is-plain-object": "^2.0.3",[m
[32m+[m[32m        "object.defaults": "^1.1.0",[m
[32m+[m[32m        "object.pick": "^1.2.0",[m
[32m+[m[32m        "parse-filepath": "^1.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/fined/node_modules/is-plain-object": {[m
[32m+[m[32m      "version": "2.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "isobject": "^3.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/flagged-respawn": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/flagged-respawn/-/flagged-respawn-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-lNaHNVymajmk0OJMBn8fVUAU1BtDeKIqKoVhk4xAALB57aALg6b4W0MfJ/cUE0g9YBXy5XhSlPIpYIJ7HaY/3Q==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/flush-write-stream": {[m
[32m+[m[32m      "version": "1.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/flush-write-stream/-/flush-write-stream-1.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-3Z4XhFZ3992uIq0XOqb9AreonueSYphE6oYbpt5+3u06JWklbsPkNv3ZKkP9Bz/r+1MWCaMoSQ28P85+1Yc77w==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "inherits": "^2.0.3",[m
[32m+[m[32m        "readable-stream": "^2.3.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/follow-redirects": {[m
[32m+[m[32m      "version": "1.14.9",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.14.9.tgz",[m
[32m+[m[32m      "integrity": "sha512-MQDfihBQYMcyy5dhRDJUHcw7lb2Pv/TuE6xP1vyraLukNDHKbDxDNaOE3NbCAdKQApno+GPRyo1YAp89yCjK4w==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "funding": [[m
[32m+[m[32m        {[m
[32m+[m[32m          "type": "individual",[m
[32m+[m[32m          "url": "https://github.com/sponsors/RubenVerborgh"[m
[32m+[m[32m        }[m
[32m+[m[32m      ],[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=4.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependenciesMeta": {[m
[32m+[m[32m        "debug": {[m
[32m+[m[32m          "optional": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/for-in": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/for-own": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/for-own/-/for-own-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-xjMy9BXO3EsE2/5wz4NklMU8tEs=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "for-in": "^1.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/fragment-cache": {[m
[32m+[m[32m      "version": "0.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "map-cache": "^0.2.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/fresh": {[m
[32m+[m[32m      "version": "0.5.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/fs-extra": {[m
[32m+[m[32m      "version": "3.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-3.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-N5TzeMWLNC6n27sjCVEJxLO2IpE=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "graceful-fs": "^4.1.2",[m
[32m+[m[32m        "jsonfile": "^3.0.0",[m
[32m+[m[32m        "universalify": "^0.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/fs-mkdirp-stream": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fs-mkdirp-stream/-/fs-mkdirp-stream-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-C3gV/DIBxqaeFNuYzgmMFpNSWes=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "graceful-fs": "^4.1.11",[m
[32m+[m[32m        "through2": "^2.0.3"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/fs-mkdirp-stream/node_modules/through2": {[m
[32m+[m[32m      "version": "2.0.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "readable-stream": "~2.3.6",[m
[32m+[m[32m        "xtend": "~4.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/fs.realpath": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/fsevents": {[m
[32m+[m[32m      "version": "2.3.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "hasInstallScript": true,[m
[32m+[m[32m      "optional": true,[m
[32m+[m[32m      "os": [[m
[32m+[m[32m        "darwin"[m
[32m+[m[32m      ],[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/function-bind": {[m
[32m+[m[32m      "version": "1.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/get-caller-file": {[m
[32m+[m[32m      "version": "2.0.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": "6.* || 8.* || >= 10.*"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/get-intrinsic": {[m
[32m+[m[32m      "version": "1.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-kWZrnVM42QCiEA2Ig1bG8zjoIMOgxWwYCEeNdwY6Tv/cOSeGpcoX4pXHfKUxNKVoArnrEr2e9srnAxxGIraS9Q==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "function-bind": "^1.1.1",[m
[32m+[m[32m        "has": "^1.0.3",[m
[32m+[m[32m        "has-symbols": "^1.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "url": "https://github.com/sponsors/ljharb"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/get-value": {[m
[32m+[m[32m      "version": "2.0.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",[m
[32m+[m[32m      "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob": {[m
[32m+[m[32m      "version": "7.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-lmLf6gtyrPq8tTjSmrO94wBeQbFR3HbLHbuyD69wuyQkImp2hWqMGB47OX65FBkPffO641IP9jWa1z4ivqG26Q==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "fs.realpath": "^1.0.0",[m
[32m+[m[32m        "inflight": "^1.0.4",[m
[32m+[m[32m        "inherits": "2",[m
[32m+[m[32m        "minimatch": "^3.0.4",[m
[32m+[m[32m        "once": "^1.3.0",[m
[32m+[m[32m        "path-is-absolute": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": "*"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "url": "https://github.com/sponsors/isaacs"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-parent": {[m
[32m+[m[32m      "version": "5.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-glob": "^4.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-stream": {[m
[32m+[m[32m      "version": "6.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/glob-stream/-/glob-stream-6.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-cEXJlBOz65SIjYOrRtC0BMx73eQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "extend": "^3.0.0",[m
[32m+[m[32m        "glob": "^7.1.1",[m
[32m+[m[32m        "glob-parent": "^3.1.0",[m
[32m+[m[32m        "is-negated-glob": "^1.0.0",[m
[32m+[m[32m        "ordered-read-streams": "^1.0.0",[m
[32m+[m[32m        "pumpify": "^1.3.5",[m
[32m+[m[32m        "readable-stream": "^2.1.5",[m
[32m+[m[32m        "remove-trailing-separator": "^1.0.1",[m
[32m+[m[32m        "to-absolute-glob": "^2.0.0",[m
[32m+[m[32m        "unique-stream": "^2.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-stream/node_modules/glob-parent": {[m
[32m+[m[32m      "version": "3.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-glob": "^3.1.0",[m
[32m+[m[32m        "path-dirname": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-stream/node_modules/is-glob": {[m
[32m+[m[32m      "version": "3.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-extglob": "^2.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-watcher": {[m
[32m+[m[32m      "version": "5.0.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/glob-watcher/-/glob-watcher-5.0.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-zOZgGGEHPklZNjZQaZ9f41i7F2YwE+tS5ZHrDhbBCk3stwahn5vQxnFmBJZHoYdusR6R1bLSXeGUy/BhctwKzw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "anymatch": "^2.0.0",[m
[32m+[m[32m        "async-done": "^1.2.0",[m
[32m+[m[32m        "chokidar": "^2.0.0",[m
[32m+[m[32m        "is-negated-glob": "^1.0.0",[m
[32m+[m[32m        "just-debounce": "^1.0.0",[m
[32m+[m[32m        "normalize-path": "^3.0.0",[m
[32m+[m[32m        "object.defaults": "^1.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-watcher/node_modules/anymatch": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "micromatch": "^3.1.4",[m
[32m+[m[32m        "normalize-path": "^2.1.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-watcher/node_modules/anymatch/node_modules/normalize-path": {[m
[32m+[m[32m      "version": "2.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "remove-trailing-separator": "^1.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-watcher/node_modules/binary-extensions": {[m
[32m+[m[32m      "version": "1.13.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-1.13.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-Un7MIEDdUC5gNpcGDV97op1Ywk748MpHcFTHoYs6qnj1Z3j7I53VG3nwZhKzoBZmbdRNnb6WRdFlwl7tSDuZGw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-watcher/node_modules/braces": {[m
[32m+[m[32m      "version": "2.3.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "arr-flatten": "^1.1.0",[m
[32m+[m[32m        "array-unique": "^0.3.2",[m
[32m+[m[32m        "extend-shallow": "^2.0.1",[m
[32m+[m[32m        "fill-range": "^4.0.0",[m
[32m+[m[32m        "isobject": "^3.0.1",[m
[32m+[m[32m        "repeat-element": "^1.1.2",[m
[32m+[m[32m        "snapdragon": "^0.8.1",[m
[32m+[m[32m        "snapdragon-node": "^2.0.1",[m
[32m+[m[32m        "split-string": "^3.0.2",[m
[32m+[m[32m        "to-regex": "^3.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-watcher/node_modules/braces/node_modules/extend-shallow": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-extendable": "^0.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-watcher/node_modules/chokidar": {[m
[32m+[m[32m      "version": "2.1.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-2.1.8.tgz",[m
[32m+[m[32m      "integrity": "sha512-ZmZUazfOzf0Nve7duiCKD23PFSCs4JPoYyccjUFF3aQkQadqBhfzhjkwBH2mNOG9cTBwhamM37EIsIkZw3nRgg==",[m
[32m+[m[32m      "deprecated": "Chokidar 2 does not receive security updates since 2019. Upgrade to chokidar 3 with 15x fewer dependencies",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "anymatch": "^2.0.0",[m
[32m+[m[32m        "async-each": "^1.0.1",[m
[32m+[m[32m        "braces": "^2.3.2",[m
[32m+[m[32m        "glob-parent": "^3.1.0",[m
[32m+[m[32m        "inherits": "^2.0.3",[m
[32m+[m[32m        "is-binary-path": "^1.0.0",[m
[32m+[m[32m        "is-glob": "^4.0.0",[m
[32m+[m[32m        "normalize-path": "^3.0.0",[m
[32m+[m[32m        "path-is-absolute": "^1.0.0",[m
[32m+[m[32m        "readdirp": "^2.2.1",[m
[32m+[m[32m        "upath": "^1.1.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "optionalDependencies": {[m
[32m+[m[32m        "fsevents": "^1.2.7"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-watcher/node_modules/fill-range": {[m
[32m+[m[32m      "version": "4.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "extend-shallow": "^2.0.1",[m
[32m+[m[32m        "is-number": "^3.0.0",[m
[32m+[m[32m        "repeat-string": "^1.6.1",[m
[32m+[m[32m        "to-regex-range": "^2.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-watcher/node_modules/fill-range/node_modules/extend-shallow": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-extendable": "^0.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-watcher/node_modules/fsevents": {[m
[32m+[m[32m      "version": "1.2.13",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-1.2.13.tgz",[m
[32m+[m[32m      "integrity": "sha512-oWb1Z6mkHIskLzEJ/XWX0srkpkTQ7vaopMQkyaEIoq0fmtFVxOthb8cCxeT+p3ynTdkk/RZwbgG4brR5BeWECw==",[m
[32m+[m[32m      "deprecated": "fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "hasInstallScript": true,[m
[32m+[m[32m      "optional": true,[m
[32m+[m[32m      "os": [[m
[32m+[m[32m        "darwin"[m
[32m+[m[32m      ],[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "bindings": "^1.5.0",[m
[32m+[m[32m        "nan": "^2.12.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 4.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-watcher/node_modules/glob-parent": {[m
[32m+[m[32m      "version": "3.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-glob": "^3.1.0",[m
[32m+[m[32m        "path-dirname": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-watcher/node_modules/glob-parent/node_modules/is-glob": {[m
[32m+[m[32m      "version": "3.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-extglob": "^2.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-watcher/node_modules/is-binary-path": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-dfFmQrSA8YenEcgUFh/TpKdlWJg=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "binary-extensions": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-watcher/node_modules/is-extendable": {[m
[32m+[m[32m      "version": "0.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-watcher/node_modules/is-number": {[m
[32m+[m[32m      "version": "3.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": "^3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-watcher/node_modules/kind-of": {[m
[32m+[m[32m      "version": "3.2.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-buffer": "^1.1.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-watcher/node_modules/micromatch": {[m
[32m+[m[32m      "version": "3.1.10",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",[m
[32m+[m[32m      "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "arr-diff": "^4.0.0",[m
[32m+[m[32m        "array-unique": "^0.3.2",[m
[32m+[m[32m        "braces": "^2.3.1",[m
[32m+[m[32m        "define-property": "^2.0.2",[m
[32m+[m[32m        "extend-shallow": "^3.0.2",[m
[32m+[m[32m        "extglob": "^2.0.4",[m
[32m+[m[32m        "fragment-cache": "^0.2.1",[m
[32m+[m[32m        "kind-of": "^6.0.2",[m
[32m+[m[32m        "nanomatch": "^1.2.9",[m
[32m+[m[32m        "object.pick": "^1.3.0",[m
[32m+[m[32m        "regex-not": "^1.0.0",[m
[32m+[m[32m        "snapdragon": "^0.8.1",[m
[32m+[m[32m        "to-regex": "^3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-watcher/node_modules/micromatch/node_modules/kind-of": {[m
[32m+[m[32m      "version": "6.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-watcher/node_modules/readdirp": {[m
[32m+[m[32m      "version": "2.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-2.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-1JU/8q+VgFZyxwrJ+SVIOsh+KywWGpds3NTqikiKpDMZWScmAYyKIgqkO+ARvNWJfXeXR1zxz7aHF4u4CyH6vQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "graceful-fs": "^4.1.11",[m
[32m+[m[32m        "micromatch": "^3.1.10",[m
[32m+[m[32m        "readable-stream": "^2.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glob-watcher/node_modules/to-regex-range": {[m
[32m+[m[32m      "version": "2.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-number": "^3.0.0",[m
[32m+[m[32m        "repeat-string": "^1.6.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/global-modules": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/global-modules/-/global-modules-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-sKzpEkf11GpOFuw0Zzjzmt4B4UZwjOcG757PPvrfhxcLFbq0wpsgpOqxpxtxFiCG4DtG93M6XRVbF2oGdev7bg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "global-prefix": "^1.0.1",[m
[32m+[m[32m        "is-windows": "^1.0.1",[m
[32m+[m[32m        "resolve-dir": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/global-prefix": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/global-prefix/-/global-prefix-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-2/dDxsFJklk8ZVVoy2btMsASLr4=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "expand-tilde": "^2.0.2",[m
[32m+[m[32m        "homedir-polyfill": "^1.0.1",[m
[32m+[m[32m        "ini": "^1.3.4",[m
[32m+[m[32m        "is-windows": "^1.0.1",[m
[32m+[m[32m        "which": "^1.2.14"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/glogg": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/glogg/-/glogg-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-5mwUoSuBk44Y4EshyiqcH95ZntbDdTQqA3QYSrxmzj28Ai0vXBGMH1ApSANH14j2sIRtqCEyg6PfsuP7ElOEDA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "sparkles": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/graceful-fs": {[m
[32m+[m[32m      "version": "4.2.9",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.9.tgz",[m
[32m+[m[32m      "integrity": "sha512-NtNxqUcXgpW2iMrfqSfR73Glt39K+BLwWsPs94yR63v45T0Wbej7eRmL5cWfwEgqXnmjQp3zaJTshdRW/qC2ZQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/gulp": {[m
[32m+[m[32m      "version": "4.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/gulp/-/gulp-4.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-dvEs27SCZt2ibF29xYgmnwwCYZxdxhQ/+LFWlbAW8y7jt68L/65402Lz3+CKy0Ov4rOs+NERmDq7YlZaDqUIfA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "glob-watcher": "^5.0.3",[m
[32m+[m[32m        "gulp-cli": "^2.2.0",[m
[32m+[m[32m        "undertaker": "^1.2.1",[m
[32m+[m[32m        "vinyl-fs": "^3.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "gulp": "bin/gulp.js"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/gulp-autoprefixer": {[m
[32m+[m[32m      "version": "7.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/gulp-autoprefixer/-/gulp-autoprefixer-7.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-QJGEmHw+bEt7FSqvmbAUTxbCuNLJYx4sz3ox9WouYqT/7j5FH5CQ8ZnpL1M7H5npX1bUJa7lUVY1w20jXxhOxg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "autoprefixer": "^9.6.1",[m
[32m+[m[32m        "fancy-log": "^1.3.2",[m
[32m+[m[32m        "plugin-error": "^1.0.1",[m
[32m+[m[32m        "postcss": "^7.0.17",[m
[32m+[m[32m        "through2": "^3.0.1",[m
[32m+[m[32m        "vinyl-sourcemaps-apply": "^0.2.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=8"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "gulp": ">=4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependenciesMeta": {[m
[32m+[m[32m        "gulp": {[m
[32m+[m[32m          "optional": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/gulp-clean-css": {[m
[32m+[m[32m      "version": "4.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/gulp-clean-css/-/gulp-clean-css-4.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-mGyeT3qqFXTy61j0zOIciS4MkYziF2U594t2Vs9rUnpkEHqfu6aDITMp8xOvZcvdX61Uz3y1mVERRYmjzQF5fg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "clean-css": "4.2.3",[m
[32m+[m[32m        "plugin-error": "1.0.1",[m
[32m+[m[32m        "through2": "3.0.1",[m
[32m+[m[32m        "vinyl-sourcemaps-apply": "0.2.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/gulp-clean-css/node_modules/through2": {[m
[32m+[m[32m      "version": "3.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/through2/-/through2-3.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-M96dvTalPT3YbYLaKaCuwu+j06D/8Jfib0o/PxbVt6Amhv3dUAtW6rTV1jPgJSBG83I/e04Y6xkVdVhSRhi0ww==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "readable-stream": "2 || 3"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/gulp-cli": {[m
[32m+[m[32m      "version": "2.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/gulp-cli/-/gulp-cli-2.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-zzGBl5fHo0EKSXsHzjspp3y5CONegCm8ErO5Qh0UzFzk2y4tMvzLWhoDokADbarfZRL2pGpRp7yt6gfJX4ph7A==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ansi-colors": "^1.0.1",[m
[32m+[m[32m        "archy": "^1.0.0",[m
[32m+[m[32m        "array-sort": "^1.0.0",[m
[32m+[m[32m        "color-support": "^1.1.3",[m
[32m+[m[32m        "concat-stream": "^1.6.0",[m
[32m+[m[32m        "copy-props": "^2.0.1",[m
[32m+[m[32m        "fancy-log": "^1.3.2",[m
[32m+[m[32m        "gulplog": "^1.0.0",[m
[32m+[m[32m        "interpret": "^1.4.0",[m
[32m+[m[32m        "isobject": "^3.0.1",[m
[32m+[m[32m        "liftoff": "^3.1.0",[m
[32m+[m[32m        "matchdep": "^2.0.0",[m
[32m+[m[32m        "mute-stdout": "^1.0.0",[m
[32m+[m[32m        "pretty-hrtime": "^1.0.0",[m
[32m+[m[32m        "replace-homedir": "^1.0.0",[m
[32m+[m[32m        "semver-greatest-satisfied-range": "^1.1.0",[m
[32m+[m[32m        "v8flags": "^3.2.0",[m
[32m+[m[32m        "yargs": "^7.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "gulp": "bin/gulp.js"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/gulp-cli/node_modules/ansi-regex": {[m
[32m+[m[32m      "version": "2.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/gulp-cli/node_modules/cliui": {[m
[32m+[m[32m      "version": "3.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/cliui/-/cliui-3.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-EgYBU3qRbSmUD5NNo7SNWFo5IT0=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "string-width": "^1.0.1",[m
[32m+[m[32m        "strip-ansi": "^3.0.1",[m
[32m+[m[32m        "wrap-ansi": "^2.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/gulp-cli/node_modules/get-caller-file": {[m
[32m+[m[32m      "version": "1.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-1.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-3t6rVToeoZfYSGd8YoLFR2DJkiQrIiUrGcjvFX2mDw3bn6k2OtwHN0TNCLbBO+w8qTvimhDkv+LSscbJY1vE6w==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/gulp-cli/node_modules/is-fullwidth-code-point": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "number-is-nan": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/gulp-cli/node_modules/string-width": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "code-point-at": "^1.0.0",[m
[32m+[m[32m        "is-fullwidth-code-point": "^1.0.0",[m
[32m+[m[32m        "strip-ansi": "^3.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/gulp-cli/node_modules/strip-ansi": {[m
[32m+[m[32m      "version": "3.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ansi-regex": "^2.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/gulp-cli/node_modules/wrap-ansi": {[m
[32m+[m[32m      "version": "2.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-2.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-2Pw9KE3QV5T+hJc8rs3Rz4JP3YU=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "string-width": "^1.0.1",[m
[32m+[m[32m        "strip-ansi": "^3.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/gulp-cli/node_modules/y18n": {[m
[32m+[m[32m      "version": "3.2.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/y18n/-/y18n-3.2.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-uGZHXkHnhF0XeeAPgnKfPv1bgKAYyVvmNL1xlKsPYZPaIHxGti2hHqvOCQv71XMsLxu1QjergkqogUnms5D3YQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/gulp-cli/node_modules/yargs": {[m
[32m+[m[32m      "version": "7.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/yargs/-/yargs-7.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-ZEjj/dQYQy0Zx0lgLMLR8QuaqTihnxirir7EwUHp1Axq4e3+k8jXU5K0VLbNvedv1f4EWtBonDIZm0NUr+jCcA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "camelcase": "^3.0.0",[m
[32m+[m[32m        "cliui": "^3.2.0",[m
[32m+[m[32m        "decamelize": "^1.1.1",[m
[32m+[m[32m        "get-caller-file": "^1.0.1",[m
[32m+[m[32m        "os-locale": "^1.4.0",[m
[32m+[m[32m        "read-pkg-up": "^1.0.1",[m
[32m+[m[32m        "require-directory": "^2.1.1",[m
[32m+[m[32m        "require-main-filename": "^1.0.1",[m
[32m+[m[32m        "set-blocking": "^2.0.0",[m
[32m+[m[32m        "string-width": "^1.0.2",[m
[32m+[m[32m        "which-module": "^1.0.0",[m
[32m+[m[32m        "y18n": "^3.2.1",[m
[32m+[m[32m        "yargs-parser": "^5.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/gulp-cli/node_modules/yargs-parser": {[m
[32m+[m[32m      "version": "5.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-5.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-wpav5XYiddjXxirPoCTUPbqM0PXvJ9hiBMvuJgInvo4/lAOTZzUprArw17q2O1P2+GHhbBr18/iQwjL5Z9BqfA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "camelcase": "^3.0.0",[m
[32m+[m[32m        "object.assign": "^4.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/gulp-sass": {[m
[32m+[m[32m      "version": "5.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/gulp-sass/-/gulp-sass-5.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-7VT0uaF+VZCmkNBglfe1b34bxn/AfcssquLKVDYnCDJ3xNBaW7cUuI3p3BQmoKcoKFrs9jdzUxyb+u+NGfL4OQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "lodash.clonedeep": "^4.5.0",[m
[32m+[m[32m        "picocolors": "^1.0.0",[m
[32m+[m[32m        "plugin-error": "^1.0.1",[m
[32m+[m[32m        "replace-ext": "^2.0.0",[m
[32m+[m[32m        "strip-ansi": "^6.0.1",[m
[32m+[m[32m        "vinyl-sourcemaps-apply": "^0.2.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=12"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/gulp-sass/node_modules/picocolors": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/gulplog": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/gulplog/-/gulplog-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-4oxNRdBey77YGDY86PnFkmIp/+U=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "glogg": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/has": {[m
[32m+[m[32m      "version": "1.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "function-bind": "^1.1.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.4.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/has-ansi": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/has-ansi/-/has-ansi-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-NPUEnOHs3ysGSa8+8k5F7TVBbZE=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ansi-regex": "^2.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/has-ansi/node_modules/ansi-regex": {[m
[32m+[m[32m      "version": "2.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/has-cors": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/has-cors/-/has-cors-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-XkdHk/fqmEPRu5nCPu9J/xJv/zk=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/has-symbols": {[m
[32m+[m[32m      "version": "1.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "url": "https://github.com/sponsors/ljharb"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/has-value": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "get-value": "^2.0.6",[m
[32m+[m[32m        "has-values": "^1.0.0",[m
[32m+[m[32m        "isobject": "^3.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/has-values": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-number": "^3.0.0",[m
[32m+[m[32m        "kind-of": "^4.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/has-values/node_modules/is-number": {[m
[32m+[m[32m      "version": "3.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": "^3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/has-values/node_modules/is-number/node_modules/kind-of": {[m
[32m+[m[32m      "version": "3.2.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-buffer": "^1.1.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/has-values/node_modules/kind-of": {[m
[32m+[m[32m      "version": "4.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-buffer": "^1.1.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/homedir-polyfill": {[m
[32m+[m[32m      "version": "1.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/homedir-polyfill/-/homedir-polyfill-1.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-eSmmWE5bZTK2Nou4g0AI3zZ9rswp7GRKoKXS1BLUkvPviOqs4YTN1djQIqrXy9k5gEtdLPy86JjRwsNM9tnDcA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "parse-passwd": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/hosted-git-info": {[m
[32m+[m[32m      "version": "2.8.9",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",[m
[32m+[m[32m      "integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/http-errors": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "depd": "2.0.0",[m
[32m+[m[32m        "inherits": "2.0.4",[m
[32m+[m[32m        "setprototypeof": "1.2.0",[m
[32m+[m[32m        "statuses": "2.0.1",[m
[32m+[m[32m        "toidentifier": "1.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/http-errors/node_modules/statuses": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/http-proxy": {[m
[32m+[m[32m      "version": "1.18.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/http-proxy/-/http-proxy-1.18.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-7mz/721AbnJwIVbnaSv1Cz3Am0ZLT/UBwkC92VlxhXv/k/BBQfM2fXElQNC27BVGr0uwUpplYPQM9LnaBMR5NQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "eventemitter3": "^4.0.0",[m
[32m+[m[32m        "follow-redirects": "^1.0.0",[m
[32m+[m[32m        "requires-port": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=8.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/iconv-lite": {[m
[32m+[m[32m      "version": "0.4.24",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",[m
[32m+[m[32m      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "safer-buffer": ">= 2.1.2 < 3"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/immutable": {[m
[32m+[m[32m      "version": "3.8.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/immutable/-/immutable-3.8.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-wkOZUUVbs5kT2vKBN28VMOEErfM=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/inflight": {[m
[32m+[m[32m      "version": "1.0.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",[m
[32m+[m[32m      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "once": "^1.3.0",[m
[32m+[m[32m        "wrappy": "1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/inherits": {[m
[32m+[m[32m      "version": "2.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/ini": {[m
[32m+[m[32m      "version": "1.3.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",[m
[32m+[m[32m      "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/interpret": {[m
[32m+[m[32m      "version": "1.4.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/interpret/-/interpret-1.4.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-agE4QfB2Lkp9uICn7BAqoscw4SZP9kTE2hxiFI3jBPmXJfdqiahTbUuKGsMoN2GtqL9AxhYioAcVvgsb1HvRbA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/invert-kv": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/invert-kv/-/invert-kv-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-EEqOSqym09jNFXqO+L+rLXo//bY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-absolute": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-absolute/-/is-absolute-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-dOWoqflvcydARa360Gvv18DZ/gRuHKi2NU/wU5X1ZFzdYfH29nkiNZsF3mp4OJ3H4yo9Mx8A/uAGNzpzPN3yBA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-relative": "^1.0.0",[m
[32m+[m[32m        "is-windows": "^1.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-accessor-descriptor": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": "^6.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-accessor-descriptor/node_modules/kind-of": {[m
[32m+[m[32m      "version": "6.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-arrayish": {[m
[32m+[m[32m      "version": "0.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-binary-path": {[m
[32m+[m[32m      "version": "2.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "binary-extensions": "^2.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-buffer": {[m
[32m+[m[32m      "version": "1.1.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-core-module": {[m
[32m+[m[32m      "version": "2.8.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.8.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-SdNCUs284hr40hFTFP6l0IfZ/RSrMXF3qgoRHd3/79unUTvrFO/JoXwkGm+5J/Oe3E/b5GsnG330uUNgRpu1PA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "has": "^1.0.3"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "url": "https://github.com/sponsors/ljharb"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-data-descriptor": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": "^6.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-data-descriptor/node_modules/kind-of": {[m
[32m+[m[32m      "version": "6.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-descriptor": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-accessor-descriptor": "^1.0.0",[m
[32m+[m[32m        "is-data-descriptor": "^1.0.0",[m
[32m+[m[32m        "kind-of": "^6.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-descriptor/node_modules/kind-of": {[m
[32m+[m[32m      "version": "6.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-extendable": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-plain-object": "^2.0.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-extendable/node_modules/is-plain-object": {[m
[32m+[m[32m      "version": "2.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "isobject": "^3.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-extglob": {[m
[32m+[m[32m      "version": "2.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-fullwidth-code-point": {[m
[32m+[m[32m      "version": "3.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-glob": {[m
[32m+[m[32m      "version": "4.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-extglob": "^2.1.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-negated-glob": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-negated-glob/-/is-negated-glob-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-aRC8pdqMleeEtXUbl2z1oQ/uNtI=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-number": {[m
[32m+[m[32m      "version": "7.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.12.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-number-like": {[m
[32m+[m[32m      "version": "1.0.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-number-like/-/is-number-like-1.0.8.tgz",[m
[32m+[m[32m      "integrity": "sha512-6rZi3ezCyFcn5L71ywzz2bS5b2Igl1En3eTlZlvKjpz1n3IZLAYMbKYAIQgFmEu0GENg92ziU/faEOA/aixjbA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "lodash.isfinite": "^3.3.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-plain-object": {[m
[32m+[m[32m      "version": "5.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-5.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-VRSzKkbMm5jMDoKLbltAkFQ5Qr7VDiTFGXxYFXXowVj387GeGNOCsOH6Msy00SGZ3Fp84b1Naa1psqgcCIEP5Q==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-relative": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-relative/-/is-relative-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-Kw/ReK0iqwKeu0MITLFuj0jbPAmEiOsIwyIXvvbfa6QfmN9pkD1M+8pdk7Rl/dTKbH34/XBFMbgD4iMJhLQbGA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-unc-path": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-unc-path": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-unc-path/-/is-unc-path-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-mrGpVd0fs7WWLfVsStvgF6iEJnbjDFZh9/emhRDcGWTduTfNHd9CHeUwH3gYIjdbwo4On6hunkztwOaAw0yllQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "unc-path-regex": "^0.1.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-utf8": {[m
[32m+[m[32m      "version": "0.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-utf8/-/is-utf8-0.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-Sw2hRCEE0bM2NA6AeX6GXPOffXI=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-valid-glob": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-valid-glob/-/is-valid-glob-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-Kb8+/3Ab4tTTFdusw5vDn+j2Aao=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-windows": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/is-wsl": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-HxbkqiKwTRM2tmGIpmrzxgDDpm0=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=4"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/isarray": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/isexe": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/isobject": {[m
[32m+[m[32m      "version": "3.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/json-stable-stringify-without-jsonify": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-nbe1lJatPzz+8wp1FC0tkwrXJlE=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/jsonfile": {[m
[32m+[m[32m      "version": "3.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-3.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-pezG9l9T9mLEQVx2daAzHQmS7GY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "optionalDependencies": {[m
[32m+[m[32m        "graceful-fs": "^4.1.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/just-debounce": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/just-debounce/-/just-debounce-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-qpcRocdkUmf+UTNBYx5w6dexX5J31AKK1OmPwH630a83DdVVUIngk55RSAiIGpQyoH0dlr872VHfPjnQnK1qDQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/kind-of": {[m
[32m+[m[32m      "version": "5.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/last-run": {[m
[32m+[m[32m      "version": "1.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/last-run/-/last-run-1.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-RblpQsF7HHnHchmCWbqUO+v4yls=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "default-resolution": "^2.0.0",[m
[32m+[m[32m        "es6-weak-map": "^2.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/lazystream": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/lazystream/-/lazystream-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-b94GiNHQNy6JNTrt5w6zNyffMrNkXZb3KTkCZJb2V1xaEGCk093vkZ2jk3tpaeP33/OiXC+WvK9AxUebnf5nbw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "readable-stream": "^2.0.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.6.3"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/lcid": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/lcid/-/lcid-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-MIrMr6C8SDo4Z7S28rlQYlHRuDU=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "invert-kv": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/lead": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/lead/-/lead-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-bxT5mje+Op3XhPVJVpDlkDRm7kI=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "flush-write-stream": "^1.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/liftoff": {[m
[32m+[m[32m      "version": "3.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/liftoff/-/liftoff-3.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-DlIPlJUkCV0Ips2zf2pJP0unEoT1kwYhiiPUGF3s/jtxTCjziNLoiVVh+jqWOWeFi6mmwQ5fNxvAUyPad4Dfog==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "extend": "^3.0.0",[m
[32m+[m[32m        "findup-sync": "^3.0.0",[m
[32m+[m[32m        "fined": "^1.0.1",[m
[32m+[m[32m        "flagged-respawn": "^1.0.0",[m
[32m+[m[32m        "is-plain-object": "^2.0.4",[m
[32m+[m[32m        "object.map": "^1.0.0",[m
[32m+[m[32m        "rechoir": "^0.6.2",[m
[32m+[m[32m        "resolve": "^1.1.7"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/liftoff/node_modules/is-plain-object": {[m
[32m+[m[32m      "version": "2.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "isobject": "^3.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/limiter": {[m
[32m+[m[32m      "version": "1.1.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/limiter/-/limiter-1.1.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-FWWMIEOxz3GwUI4Ts/IvgVy6LPvoMPgjMdQ185nN6psJyBJ4yOpzqm695/h5umdLJg2vW3GR5iG11MAkR2AzJA==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/load-json-file": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-lWkFcI1YtLq0wiYbBPWfMcmTdMA=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "graceful-fs": "^4.1.2",[m
[32m+[m[32m        "parse-json": "^2.2.0",[m
[32m+[m[32m        "pify": "^2.0.0",[m
[32m+[m[32m        "pinkie-promise": "^2.0.0",[m
[32m+[m[32m        "strip-bom": "^2.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/localtunnel": {[m
[32m+[m[32m      "version": "2.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/localtunnel/-/localtunnel-2.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-n418Cn5ynvJd7m/N1d9WVJISLJF/ellZnfsLnx8WBWGzxv/ntNcFkJ1o6se5quUhCplfLGBNL5tYHiq5WF3Nug==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "axios": "0.21.4",[m
[32m+[m[32m        "debug": "4.3.2",[m
[32m+[m[32m        "openurl": "1.1.1",[m
[32m+[m[32m        "yargs": "17.1.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "lt": "bin/lt.js"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=8.3.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/localtunnel/node_modules/debug": {[m
[32m+[m[32m      "version": "4.3.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-mOp8wKcvj7XxC78zLgw/ZA+6TSgkoE2C/ienthhRD298T7UNwAg9diBpLRxC0mOezLl4B0xV7M0cCO6P/O0Xhw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ms": "2.1.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependenciesMeta": {[m
[32m+[m[32m        "supports-color": {[m
[32m+[m[32m          "optional": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/localtunnel/node_modules/ms": {[m
[32m+[m[32m      "version": "2.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/localtunnel/node_modules/yargs": {[m
[32m+[m[32m      "version": "17.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/yargs/-/yargs-17.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-c2k48R0PwKIqKhPMWjeiF6y2xY/gPMUlro0sgxqXpbOIohWiLNXWslsootttv7E1e73QPAMQSg5FeySbVcpsPQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "cliui": "^7.0.2",[m
[32m+[m[32m        "escalade": "^3.1.1",[m
[32m+[m[32m        "get-caller-file": "^2.0.5",[m
[32m+[m[32m        "require-directory": "^2.1.1",[m
[32m+[m[32m        "string-width": "^4.2.0",[m
[32m+[m[32m        "y18n": "^5.0.5",[m
[32m+[m[32m        "yargs-parser": "^20.2.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=12"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/localtunnel/node_modules/yargs-parser": {[m
[32m+[m[32m      "version": "20.2.9",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.9.tgz",[m
[32m+[m[32m      "integrity": "sha512-y11nGElTIV+CT3Zv9t7VKl+Q3hTQoT9a1Qzezhhl6Rp21gJ/IVTW7Z3y9EWXhuUBC2Shnf+DX0antecpAwSP8w==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/lodash": {[m
[32m+[m[32m      "version": "4.17.21",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",[m
[32m+[m[32m      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/lodash.clonedeep": {[m
[32m+[m[32m      "version": "4.5.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/lodash.clonedeep/-/lodash.clonedeep-4.5.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-4j8/nE+Pvd6HJSnBBxhXoIblzO8=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/lodash.isfinite": {[m
[32m+[m[32m      "version": "3.3.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/lodash.isfinite/-/lodash.isfinite-3.3.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-+4m2WpqAKBgz8LdHizpRBPiY67M=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/make-iterator": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/make-iterator/-/make-iterator-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-pxiuXh0iVEq7VM7KMIhs5gxsfxCux2URptUQaXo4iZZJxBAzTPOLE2BumO5dbfVYq/hBJFBR/a1mFDmOx5AGmw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": "^6.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/make-iterator/node_modules/kind-of": {[m
[32m+[m[32m      "version": "6.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/map-cache": {[m
[32m+[m[32m      "version": "0.2.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/map-visit": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "object-visit": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/matchdep": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/matchdep/-/matchdep-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-xvNINKDY28OzfCfui7yyfHd1WC4=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "findup-sync": "^2.0.0",[m
[32m+[m[32m        "micromatch": "^3.0.4",[m
[32m+[m[32m        "resolve": "^1.4.0",[m
[32m+[m[32m        "stack-trace": "0.0.10"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/matchdep/node_modules/braces": {[m
[32m+[m[32m      "version": "2.3.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "arr-flatten": "^1.1.0",[m
[32m+[m[32m        "array-unique": "^0.3.2",[m
[32m+[m[32m        "extend-shallow": "^2.0.1",[m
[32m+[m[32m        "fill-range": "^4.0.0",[m
[32m+[m[32m        "isobject": "^3.0.1",[m
[32m+[m[32m        "repeat-element": "^1.1.2",[m
[32m+[m[32m        "snapdragon": "^0.8.1",[m
[32m+[m[32m        "snapdragon-node": "^2.0.1",[m
[32m+[m[32m        "split-string": "^3.0.2",[m
[32m+[m[32m        "to-regex": "^3.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/matchdep/node_modules/braces/node_modules/extend-shallow": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-extendable": "^0.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/matchdep/node_modules/fill-range": {[m
[32m+[m[32m      "version": "4.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "extend-shallow": "^2.0.1",[m
[32m+[m[32m        "is-number": "^3.0.0",[m
[32m+[m[32m        "repeat-string": "^1.6.1",[m
[32m+[m[32m        "to-regex-range": "^2.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/matchdep/node_modules/fill-range/node_modules/extend-shallow": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-extendable": "^0.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/matchdep/node_modules/findup-sync": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/findup-sync/-/findup-sync-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-kyaxSIwi0aYIhlCoaQGy2akKLLw=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "detect-file": "^1.0.0",[m
[32m+[m[32m        "is-glob": "^3.1.0",[m
[32m+[m[32m        "micromatch": "^3.0.4",[m
[32m+[m[32m        "resolve-dir": "^1.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/matchdep/node_modules/is-extendable": {[m
[32m+[m[32m      "version": "0.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/matchdep/node_modules/is-glob": {[m
[32m+[m[32m      "version": "3.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-extglob": "^2.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/matchdep/node_modules/is-number": {[m
[32m+[m[32m      "version": "3.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": "^3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/matchdep/node_modules/is-number/node_modules/kind-of": {[m
[32m+[m[32m      "version": "3.2.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-buffer": "^1.1.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/matchdep/node_modules/kind-of": {[m
[32m+[m[32m      "version": "6.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/matchdep/node_modules/micromatch": {[m
[32m+[m[32m      "version": "3.1.10",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",[m
[32m+[m[32m      "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "arr-diff": "^4.0.0",[m
[32m+[m[32m        "array-unique": "^0.3.2",[m
[32m+[m[32m        "braces": "^2.3.1",[m
[32m+[m[32m        "define-property": "^2.0.2",[m
[32m+[m[32m        "extend-shallow": "^3.0.2",[m
[32m+[m[32m        "extglob": "^2.0.4",[m
[32m+[m[32m        "fragment-cache": "^0.2.1",[m
[32m+[m[32m        "kind-of": "^6.0.2",[m
[32m+[m[32m        "nanomatch": "^1.2.9",[m
[32m+[m[32m        "object.pick": "^1.3.0",[m
[32m+[m[32m        "regex-not": "^1.0.0",[m
[32m+[m[32m        "snapdragon": "^0.8.1",[m
[32m+[m[32m        "to-regex": "^3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/matchdep/node_modules/to-regex-range": {[m
[32m+[m[32m      "version": "2.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-number": "^3.0.0",[m
[32m+[m[32m        "repeat-string": "^1.6.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/micromatch": {[m
[32m+[m[32m      "version": "4.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-pRmzw/XUcwXGpD9aI9q/0XOwLNygjETJ8y0ao0wdqprrzDa4YnxLcz7fQRZr8voh8V10kGhABbNcHVk5wHgWwg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "braces": "^3.0.1",[m
[32m+[m[32m        "picomatch": "^2.2.3"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=8.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/mime": {[m
[32m+[m[32m      "version": "1.4.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/mime/-/mime-1.4.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-KI1+qOZu5DcW6wayYHSzR/tXKCDC5Om4s1z2QJjDULzLcmf3DvzS7oluY4HCTrc+9FiKmWUgeNLg7W3uIQvxtQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "mime": "cli.js"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/mime-db": {[m
[32m+[m[32m      "version": "1.52.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/mime-types": {[m
[32m+[m[32m      "version": "2.1.35",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",[m
[32m+[m[32m      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "mime-db": "1.52.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/minimatch": {[m
[32m+[m[32m      "version": "3.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "brace-expansion": "^1.1.7"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": "*"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/mitt": {[m
[32m+[m[32m      "version": "1.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/mitt/-/mitt-1.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-r6lj77KlwqLhIUku9UWYes7KJtsczvolZkzp8hbaDPPaE24OmWl5s539Mytlj22siEQKosZ26qCBgda2PKwoJw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/mixin-deep": {[m
[32m+[m[32m      "version": "1.3.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "for-in": "^1.0.2",[m
[32m+[m[32m        "is-extendable": "^1.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/ms": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/mute-stdout": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/mute-stdout/-/mute-stdout-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-kDcwXR4PS7caBpuRYYBUz9iVixUk3anO3f5OYFiIPwK/20vCzKCHyKoulbiDY1S53zD2bxUpxN/IJ+TnXjfvxg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/nan": {[m
[32m+[m[32m      "version": "2.15.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/nan/-/nan-2.15.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-8ZtvEnA2c5aYCZYd1cvgdnU6cqwixRoYg70xPLWUws5ORTa/lnw+u4amixRS/Ac5U5mQVgp9pnlSUnbNWFaWZQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "optional": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/nanomatch": {[m
[32m+[m[32m      "version": "1.2.13",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz",[m
[32m+[m[32m      "integrity": "sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "arr-diff": "^4.0.0",[m
[32m+[m[32m        "array-unique": "^0.3.2",[m
[32m+[m[32m        "define-property": "^2.0.2",[m
[32m+[m[32m        "extend-shallow": "^3.0.2",[m
[32m+[m[32m        "fragment-cache": "^0.2.1",[m
[32m+[m[32m        "is-windows": "^1.0.2",[m
[32m+[m[32m        "kind-of": "^6.0.2",[m
[32m+[m[32m        "object.pick": "^1.3.0",[m
[32m+[m[32m        "regex-not": "^1.0.0",[m
[32m+[m[32m        "snapdragon": "^0.8.1",[m
[32m+[m[32m        "to-regex": "^3.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/nanomatch/node_modules/kind-of": {[m
[32m+[m[32m      "version": "6.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/negotiator": {[m
[32m+[m[32m      "version": "0.6.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/next-tick": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/next-tick/-/next-tick-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-CXdUiJembsNjuToQvxayPZF9Vqht7hewsvy2sOWafLvi2awflj9mOC6bHIg50orX8IJvWKY9wYQ/zB2kogPslQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/node-releases": {[m
[32m+[m[32m      "version": "2.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-XxYDdcQ6eKqp/YjI+tb2C5WM2LgjnZrfYg4vgQt49EK268b6gYCHsBLrK2qvJo4FmCtqmKezb0WZFK4fkrZNsg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/normalize-package-data": {[m
[32m+[m[32m      "version": "2.5.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "hosted-git-info": "^2.1.4",[m
[32m+[m[32m        "resolve": "^1.10.0",[m
[32m+[m[32m        "semver": "2 || 3 || 4 || 5",[m
[32m+[m[32m        "validate-npm-package-license": "^3.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/normalize-path": {[m
[32m+[m[32m      "version": "3.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/normalize-range": {[m
[32m+[m[32m      "version": "0.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-LRDAa9/TEuqXd2laTShDlFa3WUI=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/now-and-later": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/now-and-later/-/now-and-later-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-KGvQ0cB70AQfg107Xvs/Fbu+dGmZoTRJp2TaPwcwQm3/7PteUyN2BCgk8KBMPGBUXZdVwyWS8fDCGFygBm19UQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "once": "^1.3.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/num2fraction": {[m
[32m+[m[32m      "version": "1.2.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/num2fraction/-/num2fraction-1.2.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-b2gragJ6Tp3fpFZM0lidHU5mnt4=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/number-is-nan": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/object-assign": {[m
[32m+[m[32m      "version": "4.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/object-copy": {[m
[32m+[m[32m      "version": "0.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "copy-descriptor": "^0.1.0",[m
[32m+[m[32m        "define-property": "^0.2.5",[m
[32m+[m[32m        "kind-of": "^3.0.3"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/object-copy/node_modules/define-property": {[m
[32m+[m[32m      "version": "0.2.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",[m
[32m+[m[32m      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-descriptor": "^0.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/object-copy/node_modules/is-accessor-descriptor": {[m
[32m+[m[32m      "version": "0.1.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",[m
[32m+[m[32m      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": "^3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/object-copy/node_modules/is-data-descriptor": {[m
[32m+[m[32m      "version": "0.1.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",[m
[32m+[m[32m      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": "^3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/object-copy/node_modules/is-descriptor": {[m
[32m+[m[32m      "version": "0.1.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-accessor-descriptor": "^0.1.6",[m
[32m+[m[32m        "is-data-descriptor": "^0.1.4",[m
[32m+[m[32m        "kind-of": "^5.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/object-copy/node_modules/is-descriptor/node_modules/kind-of": {[m
[32m+[m[32m      "version": "5.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/object-copy/node_modules/kind-of": {[m
[32m+[m[32m      "version": "3.2.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-buffer": "^1.1.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/object-keys": {[m
[32m+[m[32m      "version": "1.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.4"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/object-visit": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "isobject": "^3.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/object.assign": {[m
[32m+[m[32m      "version": "4.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-ixT2L5THXsApyiUPYKmW+2EHpXXe5Ii3M+f4e+aJFAHao5amFRW6J0OO6c/LU8Be47utCx2GL89hxGB6XSmKuQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "call-bind": "^1.0.0",[m
[32m+[m[32m        "define-properties": "^1.1.3",[m
[32m+[m[32m        "has-symbols": "^1.0.1",[m
[32m+[m[32m        "object-keys": "^1.1.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "url": "https://github.com/sponsors/ljharb"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/object.defaults": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/object.defaults/-/object.defaults-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-On+GgzS0B96gbaFtiNXNKeQ1/s8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "array-each": "^1.0.1",[m
[32m+[m[32m        "array-slice": "^1.0.0",[m
[32m+[m[32m        "for-own": "^1.0.0",[m
[32m+[m[32m        "isobject": "^3.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/object.map": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/object.map/-/object.map-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-z4Plncj8wK1fQlDh94s7gb2AHTc=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "for-own": "^1.0.0",[m
[32m+[m[32m        "make-iterator": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/object.pick": {[m
[32m+[m[32m      "version": "1.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "isobject": "^3.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/object.reduce": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/object.reduce/-/object.reduce-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-b+NI8qx/oPlcpiEiZZkJaCW7A60=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "for-own": "^1.0.0",[m
[32m+[m[32m        "make-iterator": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/on-finished": {[m
[32m+[m[32m      "version": "2.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ee-first": "1.1.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/once": {[m
[32m+[m[32m      "version": "1.4.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "wrappy": "1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/openurl": {[m
[32m+[m[32m      "version": "1.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/openurl/-/openurl-1.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-OHW0sO96UsFW8NtB1GCduw+Us4c=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/opn": {[m
[32m+[m[32m      "version": "5.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/opn/-/opn-5.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-bYJHo/LOmoTd+pfiYhfZDnf9zekVJrY+cnS2a5F2x+w5ppvTqObojTP7WiFG+kVZs9Inw+qQ/lw7TroWwhdd2g==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-wsl": "^1.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=4"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/ordered-read-streams": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ordered-read-streams/-/ordered-read-streams-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-d8DLN8QVJdZBZtmQ/61+xqDhNj4=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "readable-stream": "^2.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/os-locale": {[m
[32m+[m[32m      "version": "1.4.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/os-locale/-/os-locale-1.4.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-IPnxeuKe00XoveWDsT0gCYA8FNk=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "lcid": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/parse-filepath": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/parse-filepath/-/parse-filepath-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-pjISf1Oq89FYdvWHLz/6x2PWyJE=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-absolute": "^1.0.0",[m
[32m+[m[32m        "map-cache": "^0.2.0",[m
[32m+[m[32m        "path-root": "^0.1.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/parse-json": {[m
[32m+[m[32m      "version": "2.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "error-ex": "^1.2.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/parse-node-version": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/parse-node-version/-/parse-node-version-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-3YHlOa/JgH6Mnpr05jP9eDG254US9ek25LyIxZlDItp2iJtwyaXQb57lBYLdT3MowkUFYEV2XXNAYIPlESvJlA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/parse-passwd": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/parse-passwd/-/parse-passwd-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-bVuTSkVpk7I9N/QKOC1vFmao5cY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/parseqs": {[m
[32m+[m[32m      "version": "0.0.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/parseqs/-/parseqs-0.0.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-jeAGzMDbfSHHA091hr0r31eYfTig+29g3GKKE/PPbEQ65X0lmMwlEoqmhzu0iztID5uJpZsFlUPDP8ThPL7M8w==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/parseuri": {[m
[32m+[m[32m      "version": "0.0.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/parseuri/-/parseuri-0.0.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-AUjen8sAkGgao7UyCX6Ahv0gIK2fABKmYjvP4xmy5JaKvcbTRueIqIPHLAfq30xJddqSE033IOMUSOMCcK3Sow==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/parseurl": {[m
[32m+[m[32m      "version": "1.3.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/pascalcase": {[m
[32m+[m[32m      "version": "0.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/path-dirname": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/path-dirname/-/path-dirname-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-zDPSTVJeCZpTiMAzbG4yuRYGCeA=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/path-exists": {[m
[32m+[m[32m      "version": "2.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-2.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-D+tsZPD8UY2adU3V77YscCJ2H0s=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "pinkie-promise": "^2.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/path-is-absolute": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/path-parse": {[m
[32m+[m[32m      "version": "1.0.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/path-root": {[m
[32m+[m[32m      "version": "0.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/path-root/-/path-root-0.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-mkpoFMrBwM1zNgqV8yCDyOpHRbc=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "path-root-regex": "^0.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/path-root-regex": {[m
[32m+[m[32m      "version": "0.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/path-root-regex/-/path-root-regex-0.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-v8zcjfWxLcUsi0PsONGNcsBLqW0=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/path-type": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/path-type/-/path-type-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-WcRPfuSR2nBNpBXaWkBwuk+P5EE=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "graceful-fs": "^4.1.2",[m
[32m+[m[32m        "pify": "^2.0.0",[m
[32m+[m[32m        "pinkie-promise": "^2.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/picocolors": {[m
[32m+[m[32m      "version": "0.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-0.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-cMlDqaLEqfSaW8Z7N5Jw+lyIW869EzT73/F5lhtY9cLGoVxSXznfgfXMO0Z5K0o0Q2TkTXq+0KFsdnSe3jDViA==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/picomatch": {[m
[32m+[m[32m      "version": "2.3.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=8.6"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "url": "https://github.com/sponsors/jonschlinkert"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/pify": {[m
[32m+[m[32m      "version": "2.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/pinkie": {[m
[32m+[m[32m      "version": "2.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha1-clVrgM+g1IqXToDnckjoDtT3+HA=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/pinkie-promise": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-ITXW36ejWMBprJsXh3YogihFD/o=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "pinkie": "^2.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/plugin-error": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/plugin-error/-/plugin-error-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-L1zP0dk7vGweZME2i+EeakvUNqSrdiI3F91TwEoYiGrAfUXmVv6fJIq4g82PAXxNsWOp0J7ZqQy/3Szz0ajTxA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ansi-colors": "^1.0.1",[m
[32m+[m[32m        "arr-diff": "^4.0.0",[m
[32m+[m[32m        "arr-union": "^3.1.0",[m
[32m+[m[32m        "extend-shallow": "^3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/portscanner": {[m
[32m+[m[32m      "version": "2.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/portscanner/-/portscanner-2.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-6rtAnk3iSVD1oqUW01rnaTQ/u5Y=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "async": "1.5.2",[m
[32m+[m[32m        "is-number-like": "^1.0.3"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.4",[m
[32m+[m[32m        "npm": ">=1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/posix-character-classes": {[m
[32m+[m[32m      "version": "0.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/postcss": {[m
[32m+[m[32m      "version": "7.0.39",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/postcss/-/postcss-7.0.39.tgz",[m
[32m+[m[32m      "integrity": "sha512-yioayjNbHn6z1/Bywyb2Y4s3yvDAeXGOyxqD+LnVOinq6Mdmd++SW2wUNVzavyyHxd6+DxzWGIuosg6P1Rj8uA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "picocolors": "^0.2.1",[m
[32m+[m[32m        "source-map": "^0.6.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "type": "opencollective",[m
[32m+[m[32m        "url": "https://opencollective.com/postcss/"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/postcss-value-parser": {[m
[32m+[m[32m      "version": "4.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/pretty-hrtime": {[m
[32m+[m[32m      "version": "1.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/pretty-hrtime/-/pretty-hrtime-1.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha1-t+PqQkNaTJsnWdmeDyAesZWALuE=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/process-nextick-args": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/pump": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/pump/-/pump-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-ruPMNRkN3MHP1cWJc9OWr+T/xDP0jhXYCLfJcBuX54hhfIBnaQmAUMfDcG4DM5UMWByBbJY69QSphm3jtDKIkA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "end-of-stream": "^1.1.0",[m
[32m+[m[32m        "once": "^1.3.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/pumpify": {[m
[32m+[m[32m      "version": "1.5.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/pumpify/-/pumpify-1.5.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-oClZI37HvuUJJxSKKrC17bZ9Cu0ZYhEAGPsPUy9KlMUmv9dKX2o77RUmq7f3XjIxbwyGwYzbzQ1L2Ks8sIradQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "duplexify": "^3.6.0",[m
[32m+[m[32m        "inherits": "^2.0.3",[m
[32m+[m[32m        "pump": "^2.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/qs": {[m
[32m+[m[32m      "version": "6.2.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/qs/-/qs-6.2.3.tgz",[m
[32m+[m[32m      "integrity": "sha1-HPyyXBCpsrSDBT/zn138kjOQjP4=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/range-parser": {[m
[32m+[m[32m      "version": "1.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/raw-body": {[m
[32m+[m[32m      "version": "2.5.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-qqJBtEyVgS0ZmPGdCFPWJ3FreoqvG4MVQln/kCgF7Olq95IbOp0/BWyMwbdtn4VTvkM8Y7khCQ2Xgk/tcrCXig==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "bytes": "3.1.2",[m
[32m+[m[32m        "http-errors": "2.0.0",[m
[32m+[m[32m        "iconv-lite": "0.4.24",[m
[32m+[m[32m        "unpipe": "1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/read-pkg": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-9f+qXs0pyzHAR0vKfXVra7KePyg=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "load-json-file": "^1.0.0",[m
[32m+[m[32m        "normalize-package-data": "^2.3.2",[m
[32m+[m[32m        "path-type": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/read-pkg-up": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-nWPBMnbAZZGNV/ACpX9AobZD+wI=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "find-up": "^1.0.0",[m
[32m+[m[32m        "read-pkg": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/readable-stream": {[m
[32m+[m[32m      "version": "2.3.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "core-util-is": "~1.0.0",[m
[32m+[m[32m        "inherits": "~2.0.3",[m
[32m+[m[32m        "isarray": "~1.0.0",[m
[32m+[m[32m        "process-nextick-args": "~2.0.0",[m
[32m+[m[32m        "safe-buffer": "~5.1.1",[m
[32m+[m[32m        "string_decoder": "~1.1.1",[m
[32m+[m[32m        "util-deprecate": "~1.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/readdirp": {[m
[32m+[m[32m      "version": "3.6.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "picomatch": "^2.2.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=8.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/rechoir": {[m
[32m+[m[32m      "version": "0.6.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/rechoir/-/rechoir-0.6.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-hSBLVNuoLVdC4oyWdW70OvUOM4Q=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "resolve": "^1.1.6"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/regex-not": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "extend-shallow": "^3.0.2",[m
[32m+[m[32m        "safe-regex": "^1.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/remove-bom-buffer": {[m
[32m+[m[32m      "version": "3.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/remove-bom-buffer/-/remove-bom-buffer-3.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-8v2rWhaakv18qcvNeli2mZ/TMTL2nEyAKRvzo1WtnZBl15SHyEhrCu2/xKlJyUFKHiHgfXIyuY6g2dObJJycXQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-buffer": "^1.1.5",[m
[32m+[m[32m        "is-utf8": "^0.2.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/remove-bom-stream": {[m
[32m+[m[32m      "version": "1.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/remove-bom-stream/-/remove-bom-stream-1.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-BfGlk/FuQuH7kOv1nejlaVJflSM=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "remove-bom-buffer": "^3.0.0",[m
[32m+[m[32m        "safe-buffer": "^5.1.0",[m
[32m+[m[32m        "through2": "^2.0.3"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/remove-bom-stream/node_modules/through2": {[m
[32m+[m[32m      "version": "2.0.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "readable-stream": "~2.3.6",[m
[32m+[m[32m        "xtend": "~4.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/remove-trailing-separator": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-wkvOKig62tW8P1jg1IJJuSN52O8=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/repeat-element": {[m
[32m+[m[32m      "version": "1.1.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-LFiNfRcSu7KK3evMyYOuCzv3L10TW7yC1G2/+StMjK8Y6Vqd2MG7r/Qjw4ghtuCOjFvlnms/iMmLqpvW/ES/WQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/repeat-string": {[m
[32m+[m[32m      "version": "1.6.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/replace-ext": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/replace-ext/-/replace-ext-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-UszKE5KVK6JvyD92nzMn9cDapSk6w/CaFZ96CnmDMUqH9oowfxF/ZjRITD25H4DnOQClLA4/j7jLGXXLVKxAug==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/replace-homedir": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/replace-homedir/-/replace-homedir-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-6H9tUTuSjd6AgmDBK+f+xv9ueYw=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "homedir-polyfill": "^1.0.1",[m
[32m+[m[32m        "is-absolute": "^1.0.0",[m
[32m+[m[32m        "remove-trailing-separator": "^1.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/require-directory": {[m
[32m+[m[32m      "version": "2.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/require-main-filename": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-l/cXtp1IeE9fUmpsWqj/3aBVpNE=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/requires-port": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/requires-port/-/requires-port-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-kl0mAdOaxIXgkc8NpcbmlNw9yv8=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/resolve": {[m
[32m+[m[32m      "version": "1.22.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-Hhtrw0nLeSrFQ7phPp4OOcVjLPIeMnRlr5mcnVuMe7M/7eBn98A3hmFRLoFo3DLZkivSYwhRUJTyPyWAk56WLw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-core-module": "^2.8.1",[m
[32m+[m[32m        "path-parse": "^1.0.7",[m
[32m+[m[32m        "supports-preserve-symlinks-flag": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "resolve": "bin/resolve"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "url": "https://github.com/sponsors/ljharb"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/resolve-dir": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/resolve-dir/-/resolve-dir-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-eaQGRMNivoLybv/nOcm7U4IEb0M=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "expand-tilde": "^2.0.0",[m
[32m+[m[32m        "global-modules": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/resolve-options": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/resolve-options/-/resolve-options-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-MrueOcBtZzONyTeMDW1gdFZq0TE=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "value-or-function": "^3.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/resolve-url": {[m
[32m+[m[32m      "version": "0.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo=",[m
[32m+[m[32m      "deprecated": "https://github.com/lydell/resolve-url#deprecated",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/resp-modifier": {[m
[32m+[m[32m      "version": "6.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/resp-modifier/-/resp-modifier-6.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-sSTeXE+6/LpUH0j/pzlw9KpFa08=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "debug": "^2.2.0",[m
[32m+[m[32m        "minimatch": "^3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.8.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/ret": {[m
[32m+[m[32m      "version": "0.1.15",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ret/-/ret-0.1.15.tgz",[m
[32m+[m[32m      "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.12"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/rx": {[m
[32m+[m[32m      "version": "4.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/rx/-/rx-4.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-pfE/957zt0D+MKqAP7CfmIBdR4I=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/rxjs": {[m
[32m+[m[32m      "version": "5.5.12",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-5.5.12.tgz",[m
[32m+[m[32m      "integrity": "sha512-xx2itnL5sBbqeeiVgNPVuQQ1nC8Jp2WfNJhXWHmElW9YmrpS9UVnNzhP3EH3HFqexO5Tlp8GhYY+WEcqcVMvGw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "symbol-observable": "1.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "npm": ">=2.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/safe-buffer": {[m
[32m+[m[32m      "version": "5.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/safe-regex": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ret": "~0.1.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/safer-buffer": {[m
[32m+[m[32m      "version": "2.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/sass": {[m
[32m+[m[32m      "version": "1.49.9",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/sass/-/sass-1.49.9.tgz",[m
[32m+[m[32m      "integrity": "sha512-YlYWkkHP9fbwaFRZQRXgDi3mXZShslVmmo+FVK3kHLUELHHEYrCmL1x6IUjC7wLS6VuJSAFXRQS/DxdsC4xL1A==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "chokidar": ">=3.0.0 <4.0.0",[m
[32m+[m[32m        "immutable": "^4.0.0",[m
[32m+[m[32m        "source-map-js": ">=0.6.2 <2.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "sass": "sass.js"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=12.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/sass/node_modules/immutable": {[m
[32m+[m[32m      "version": "4.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/immutable/-/immutable-4.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-zIE9hX70qew5qTUjSS7wi1iwj/l7+m54KWU247nhM3v806UdGj1yDndXj+IOYxxtW9zyLI+xqFNZjTuDaLUqFw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/semver": {[m
[32m+[m[32m      "version": "5.7.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "semver": "bin/semver"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/semver-greatest-satisfied-range": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/semver-greatest-satisfied-range/-/semver-greatest-satisfied-range-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-E+jCZYq5aRywzXEJMkAoDTb3els=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "sver-compat": "^1.5.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/send": {[m
[32m+[m[32m      "version": "0.16.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/send/-/send-0.16.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-E64YFPUssFHEFBvpbbjr44NCLtI1AohxQ8ZSiJjQLskAdKuriYEP6VyGEsRDH8ScozGpkaX1BGvhanqCwkcEZw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "debug": "2.6.9",[m
[32m+[m[32m        "depd": "~1.1.2",[m
[32m+[m[32m        "destroy": "~1.0.4",[m
[32m+[m[32m        "encodeurl": "~1.0.2",[m
[32m+[m[32m        "escape-html": "~1.0.3",[m
[32m+[m[32m        "etag": "~1.8.1",[m
[32m+[m[32m        "fresh": "0.5.2",[m
[32m+[m[32m        "http-errors": "~1.6.2",[m
[32m+[m[32m        "mime": "1.4.1",[m
[32m+[m[32m        "ms": "2.0.0",[m
[32m+[m[32m        "on-finished": "~2.3.0",[m
[32m+[m[32m        "range-parser": "~1.2.0",[m
[32m+[m[32m        "statuses": "~1.4.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.8.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/send/node_modules/depd": {[m
[32m+[m[32m      "version": "1.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/send/node_modules/http-errors": {[m
[32m+[m[32m      "version": "1.6.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.6.3.tgz",[m
[32m+[m[32m      "integrity": "sha1-i1VoC7S+KDoLW/TqLjhYC+HZMg0=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "depd": "~1.1.2",[m
[32m+[m[32m        "inherits": "2.0.3",[m
[32m+[m[32m        "setprototypeof": "1.1.0",[m
[32m+[m[32m        "statuses": ">= 1.4.0 < 2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/send/node_modules/inherits": {[m
[32m+[m[32m      "version": "2.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/send/node_modules/setprototypeof": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-BvE/TwpZX4FXExxOxZyRGQQv651MSwmWKZGqvmPcRIjDqWub67kTKuIMx43cZZrS/cBBzwBcNDWoFxt2XEFIpQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/send/node_modules/statuses": {[m
[32m+[m[32m      "version": "1.4.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.4.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-zhSCtt8v2NDrRlPQpCNtw/heZLtfUDqxBM1udqikb/Hbk52LK4nQSwr10u77iopCW5LsyHpuXS0GnEc48mLeew==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/serve-index": {[m
[32m+[m[32m      "version": "1.9.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/serve-index/-/serve-index-1.9.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-03aNabHn2C5c4FD/9bRTvqEqkjk=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "accepts": "~1.3.4",[m
[32m+[m[32m        "batch": "0.6.1",[m
[32m+[m[32m        "debug": "2.6.9",[m
[32m+[m[32m        "escape-html": "~1.0.3",[m
[32m+[m[32m        "http-errors": "~1.6.2",[m
[32m+[m[32m        "mime-types": "~2.1.17",[m
[32m+[m[32m        "parseurl": "~1.3.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.8.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/serve-index/node_modules/depd": {[m
[32m+[m[32m      "version": "1.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/serve-index/node_modules/http-errors": {[m
[32m+[m[32m      "version": "1.6.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.6.3.tgz",[m
[32m+[m[32m      "integrity": "sha1-i1VoC7S+KDoLW/TqLjhYC+HZMg0=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "depd": "~1.1.2",[m
[32m+[m[32m        "inherits": "2.0.3",[m
[32m+[m[32m        "setprototypeof": "1.1.0",[m
[32m+[m[32m        "statuses": ">= 1.4.0 < 2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/serve-index/node_modules/inherits": {[m
[32m+[m[32m      "version": "2.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/serve-index/node_modules/setprototypeof": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-BvE/TwpZX4FXExxOxZyRGQQv651MSwmWKZGqvmPcRIjDqWub67kTKuIMx43cZZrS/cBBzwBcNDWoFxt2XEFIpQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/serve-index/node_modules/statuses": {[m
[32m+[m[32m      "version": "1.5.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/serve-static": {[m
[32m+[m[32m      "version": "1.13.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.13.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-p/tdJrO4U387R9oMjb1oj7qSMaMfmOyd4j9hOFoxZe2baQszgHcSWjuya/CiT5kgZZKRudHNOA0pYXOl8rQ5nw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "encodeurl": "~1.0.2",[m
[32m+[m[32m        "escape-html": "~1.0.3",[m
[32m+[m[32m        "parseurl": "~1.3.2",[m
[32m+[m[32m        "send": "0.16.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.8.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/server-destroy": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/server-destroy/-/server-destroy-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-8Tv5KOQrnD55OD5hzDmYtdFObN0=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/set-blocking": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/set-value": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/set-value/-/set-value-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-JxHc1weCN68wRY0fhCoXpyK55m/XPHafOmK4UWD7m2CI14GMcFypt4w/0+NV5f/ZMby2F6S2wwA7fgynh9gWSw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "extend-shallow": "^2.0.1",[m
[32m+[m[32m        "is-extendable": "^0.1.1",[m
[32m+[m[32m        "is-plain-object": "^2.0.3",[m
[32m+[m[32m        "split-string": "^3.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/set-value/node_modules/extend-shallow": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-extendable": "^0.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/set-value/node_modules/is-extendable": {[m
[32m+[m[32m      "version": "0.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/set-value/node_modules/is-plain-object": {[m
[32m+[m[32m      "version": "2.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "isobject": "^3.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/setprototypeof": {[m
[32m+[m[32m      "version": "1.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/snapdragon": {[m
[32m+[m[32m      "version": "0.8.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "base": "^0.11.1",[m
[32m+[m[32m        "debug": "^2.2.0",[m
[32m+[m[32m        "define-property": "^0.2.5",[m
[32m+[m[32m        "extend-shallow": "^2.0.1",[m
[32m+[m[32m        "map-cache": "^0.2.2",[m
[32m+[m[32m        "source-map": "^0.5.6",[m
[32m+[m[32m        "source-map-resolve": "^0.5.0",[m
[32m+[m[32m        "use": "^3.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/snapdragon-node": {[m
[32m+[m[32m      "version": "2.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "define-property": "^1.0.0",[m
[32m+[m[32m        "isobject": "^3.0.0",[m
[32m+[m[32m        "snapdragon-util": "^3.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/snapdragon-node/node_modules/define-property": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-descriptor": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/snapdragon-util": {[m
[32m+[m[32m      "version": "3.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": "^3.2.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/snapdragon-util/node_modules/kind-of": {[m
[32m+[m[32m      "version": "3.2.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-buffer": "^1.1.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/snapdragon/node_modules/define-property": {[m
[32m+[m[32m      "version": "0.2.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",[m
[32m+[m[32m      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-descriptor": "^0.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/snapdragon/node_modules/extend-shallow": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-extendable": "^0.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/snapdragon/node_modules/is-accessor-descriptor": {[m
[32m+[m[32m      "version": "0.1.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",[m
[32m+[m[32m      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": "^3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/snapdragon/node_modules/is-accessor-descriptor/node_modules/kind-of": {[m
[32m+[m[32m      "version": "3.2.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-buffer": "^1.1.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/snapdragon/node_modules/is-data-descriptor": {[m
[32m+[m[32m      "version": "0.1.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",[m
[32m+[m[32m      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": "^3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/snapdragon/node_modules/is-data-descriptor/node_modules/kind-of": {[m
[32m+[m[32m      "version": "3.2.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-buffer": "^1.1.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/snapdragon/node_modules/is-descriptor": {[m
[32m+[m[32m      "version": "0.1.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-accessor-descriptor": "^0.1.6",[m
[32m+[m[32m        "is-data-descriptor": "^0.1.4",[m
[32m+[m[32m        "kind-of": "^5.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/snapdragon/node_modules/is-extendable": {[m
[32m+[m[32m      "version": "0.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/snapdragon/node_modules/source-map": {[m
[32m+[m[32m      "version": "0.5.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",[m
[32m+[m[32m      "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/socket.io": {[m
[32m+[m[32m      "version": "4.4.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/socket.io/-/socket.io-4.4.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-s04vrBswdQBUmuWJuuNTmXUVJhP0cVky8bBDhdkf8y0Ptsu7fKU2LuLbts9g+pdmAdyMMn8F/9Mf1/wbtUN0fg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "accepts": "~1.3.4",[m
[32m+[m[32m        "base64id": "~2.0.0",[m
[32m+[m[32m        "debug": "~4.3.2",[m
[32m+[m[32m        "engine.io": "~6.1.0",[m
[32m+[m[32m        "socket.io-adapter": "~2.3.3",[m
[32m+[m[32m        "socket.io-parser": "~4.0.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=10.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/socket.io-adapter": {[m
[32m+[m[32m      "version": "2.3.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/socket.io-adapter/-/socket.io-adapter-2.3.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-Qd/iwn3VskrpNO60BeRyCyr8ZWw9CPZyitW4AQwmRZ8zCiyDiL+znRnWX6tDHXnWn1sJrM1+b6Mn6wEDJJ4aYQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/socket.io-client": {[m
[32m+[m[32m      "version": "4.4.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/socket.io-client/-/socket.io-client-4.4.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-N5C/L5fLNha5Ojd7Yeb/puKcPWWcoB/A09fEjjNsg91EDVr5twk/OEyO6VT9dlLSUNY85NpW6KBhVMvaLKQ3vQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@socket.io/component-emitter": "~3.0.0",[m
[32m+[m[32m        "backo2": "~1.0.2",[m
[32m+[m[32m        "debug": "~4.3.2",[m
[32m+[m[32m        "engine.io-client": "~6.1.1",[m
[32m+[m[32m        "parseuri": "0.0.6",[m
[32m+[m[32m        "socket.io-parser": "~4.1.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=10.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/socket.io-client/node_modules/debug": {[m
[32m+[m[32m      "version": "4.3.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ms": "2.1.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependenciesMeta": {[m
[32m+[m[32m        "supports-color": {[m
[32m+[m[32m          "optional": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/socket.io-client/node_modules/ms": {[m
[32m+[m[32m      "version": "2.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/socket.io-client/node_modules/socket.io-parser": {[m
[32m+[m[32m      "version": "4.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/socket.io-parser/-/socket.io-parser-4.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-j3kk71QLJuyQ/hh5F/L2t1goqzdTL0gvDzuhTuNSwihfuFUrcSji0qFZmJJPtG6Rmug153eOPsUizeirf1IIog==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@socket.io/component-emitter": "~3.0.0",[m
[32m+[m[32m        "debug": "~4.3.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=10.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/socket.io-parser": {[m
[32m+[m[32m      "version": "4.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/socket.io-parser/-/socket.io-parser-4.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-t+b0SS+IxG7Rxzda2EVvyBZbvFPBCjJoyHuE0P//7OAsN23GItzDRdWa6ALxZI/8R5ygK7jAR6t028/z+7295g==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@types/component-emitter": "^1.2.10",[m
[32m+[m[32m        "component-emitter": "~1.3.0",[m
[32m+[m[32m        "debug": "~4.3.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=10.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/socket.io-parser/node_modules/debug": {[m
[32m+[m[32m      "version": "4.3.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ms": "2.1.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependenciesMeta": {[m
[32m+[m[32m        "supports-color": {[m
[32m+[m[32m          "optional": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/socket.io-parser/node_modules/ms": {[m
[32m+[m[32m      "version": "2.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/socket.io/node_modules/debug": {[m
[32m+[m[32m      "version": "4.3.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ms": "2.1.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependenciesMeta": {[m
[32m+[m[32m        "supports-color": {[m
[32m+[m[32m          "optional": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/socket.io/node_modules/ms": {[m
[32m+[m[32m      "version": "2.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/source-map": {[m
[32m+[m[32m      "version": "0.6.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/source-map-js": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-R0XvVJ9WusLiqTCEiGCmICCMplcCkIwwR11mOSD9CR5u+IXYdiseeEuXCVAjS54zqwkLcPNnmU4OeJ6tUrWhDw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/source-map-resolve": {[m
[32m+[m[32m      "version": "0.5.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-Htz+RnsXWk5+P2slx5Jh3Q66vhQj1Cllm0zvnaY98+NFx+Dv2CF/f5O/t8x+KaNdrdIAsruNzoh/KpialbqAnw==",[m
[32m+[m[32m      "deprecated": "See https://github.com/lydell/source-map-resolve#deprecated",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "atob": "^2.1.2",[m
[32m+[m[32m        "decode-uri-component": "^0.2.0",[m
[32m+[m[32m        "resolve-url": "^0.2.1",[m
[32m+[m[32m        "source-map-url": "^0.4.0",[m
[32m+[m[32m        "urix": "^0.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/source-map-url": {[m
[32m+[m[32m      "version": "0.4.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-cPiFOTLUKvJFIg4SKVScy4ilPPW6rFgMgfuZJPNoDuMs3nC1HbMUycBoJw77xFIp6z1UJQJOfx6C9GMH80DiTw==",[m
[32m+[m[32m      "deprecated": "See https://github.com/lydell/source-map-url#deprecated",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/sparkles": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/sparkles/-/sparkles-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-dSO0DDYUahUt/0/pD/Is3VIm5TGJjludZ0HVymmhYF6eNA53PVLhnUk0znSYbH8IYBuJdCE+1luR22jNLMaQdw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/spdx-correct": {[m
[32m+[m[32m      "version": "3.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-cOYcUWwhCuHCXi49RhFRCyJEK3iPj1Ziz9DpViV3tbZOwXD49QzIN3MpOLJNxh2qwq2lJJZaKMVw9qNi4jTC0w==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "spdx-expression-parse": "^3.0.0",[m
[32m+[m[32m        "spdx-license-ids": "^3.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/spdx-exceptions": {[m
[32m+[m[32m      "version": "2.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-/tTrYOC7PPI1nUAgx34hUpqXuyJG+DTHJTnIULG4rDygi4xu/tfgmq1e1cIRwRzwZgo4NLySi+ricLkZkw4i5A==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/spdx-expression-parse": {[m
[32m+[m[32m      "version": "3.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "spdx-exceptions": "^2.1.0",[m
[32m+[m[32m        "spdx-license-ids": "^3.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/spdx-license-ids": {[m
[32m+[m[32m      "version": "3.0.11",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.11.tgz",[m
[32m+[m[32m      "integrity": "sha512-Ctl2BrFiM0X3MANYgj3CkygxhRmr9mi6xhejbdO960nF6EDJApTYpn0BQnDKlnNBULKiCN1n3w9EBkHK8ZWg+g==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/split-string": {[m
[32m+[m[32m      "version": "3.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "extend-shallow": "^3.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/stack-trace": {[m
[32m+[m[32m      "version": "0.0.10",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/stack-trace/-/stack-trace-0.0.10.tgz",[m
[32m+[m[32m      "integrity": "sha1-VHxws0fo0ytOEI6hoqFZ5f3eGcA=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": "*"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/static-extend": {[m
[32m+[m[32m      "version": "0.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "define-property": "^0.2.5",[m
[32m+[m[32m        "object-copy": "^0.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/static-extend/node_modules/define-property": {[m
[32m+[m[32m      "version": "0.2.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",[m
[32m+[m[32m      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-descriptor": "^0.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/static-extend/node_modules/is-accessor-descriptor": {[m
[32m+[m[32m      "version": "0.1.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",[m
[32m+[m[32m      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": "^3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/static-extend/node_modules/is-accessor-descriptor/node_modules/kind-of": {[m
[32m+[m[32m      "version": "3.2.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-buffer": "^1.1.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/static-extend/node_modules/is-data-descriptor": {[m
[32m+[m[32m      "version": "0.1.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",[m
[32m+[m[32m      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": "^3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/static-extend/node_modules/is-data-descriptor/node_modules/kind-of": {[m
[32m+[m[32m      "version": "3.2.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-buffer": "^1.1.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/static-extend/node_modules/is-descriptor": {[m
[32m+[m[32m      "version": "0.1.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-accessor-descriptor": "^0.1.6",[m
[32m+[m[32m        "is-data-descriptor": "^0.1.4",[m
[32m+[m[32m        "kind-of": "^5.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/statuses": {[m
[32m+[m[32m      "version": "1.3.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.3.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-+vUbnrdKrvOzrPStX2Gr8ky3uT4=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/stream-exhaust": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/stream-exhaust/-/stream-exhaust-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-b/qaq/GlBK5xaq1yrK9/zFcyRSTNxmcZwFLGSTG0mXgZl/4Z6GgiyYOXOvY7N3eEvFRAG1bkDRz5EPGSvPYQlw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/stream-shift": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/stream-shift/-/stream-shift-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-AiisoFqQ0vbGcZgQPY1cdP2I76glaVA/RauYR4G4thNFgkTqr90yXTo4LYX60Jl+sIlPNHHdGSwo01AvbKUSVQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/stream-throttle": {[m
[32m+[m[32m      "version": "0.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/stream-throttle/-/stream-throttle-0.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha1-rdV8jXzHOoFjDTHNVdOWHPr7qcM=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "commander": "^2.2.0",[m
[32m+[m[32m        "limiter": "^1.0.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "throttleproxy": "bin/throttleproxy.js"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/string_decoder": {[m
[32m+[m[32m      "version": "1.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "safe-buffer": "~5.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/string-width": {[m
[32m+[m[32m      "version": "4.2.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "emoji-regex": "^8.0.0",[m
[32m+[m[32m        "is-fullwidth-code-point": "^3.0.0",[m
[32m+[m[32m        "strip-ansi": "^6.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/strip-ansi": {[m
[32m+[m[32m      "version": "6.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ansi-regex": "^5.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/strip-bom": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-YhmoVhZSBJHzV4i9vxRHqZx+aw4=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-utf8": "^0.2.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/supports-color": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.8.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/supports-preserve-symlinks-flag": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "url": "https://github.com/sponsors/ljharb"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/sver-compat": {[m
[32m+[m[32m      "version": "1.5.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/sver-compat/-/sver-compat-1.5.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-PPh9/rTQe0o/FIJ7wYaz/QxkXNg=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "es6-iterator": "^2.0.1",[m
[32m+[m[32m        "es6-symbol": "^3.1.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/symbol-observable": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/symbol-observable/-/symbol-observable-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-g0D8RwLDEi310iKI+IKD9RPT/dQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/tfunk": {[m
[32m+[m[32m      "version": "4.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/tfunk/-/tfunk-4.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-eJQ0dGfDIzWNiFNYFVjJ+Ezl/GmwHaFTBTjrtqNPW0S7cuVDBrZrmzUz6VkMeCR4DZFqhd4YtLwsw3i2wYHswQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "chalk": "^1.1.3",[m
[32m+[m[32m        "dlv": "^1.1.3"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/through2": {[m
[32m+[m[32m      "version": "3.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/through2/-/through2-3.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-enaDQ4MUyP2W6ZyT6EsMzqBPZaM/avg8iuo+l2d3QCs0J+6RaqkHV/2/lOwDTueBHeJ/2LG9lrLW3d5rWPucuQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "inherits": "^2.0.4",[m
[32m+[m[32m        "readable-stream": "2 || 3"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/through2-filter": {[m
[32m+[m[32m      "version": "3.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/through2-filter/-/through2-filter-3.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-jaRjI2WxN3W1V8/FMZ9HKIBXixtiqs3SQSX4/YGIiP3gL6djW48VoZq9tDqeCWs3MT8YY5wb/zli8VW8snY1CA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "through2": "~2.0.0",[m
[32m+[m[32m        "xtend": "~4.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/through2-filter/node_modules/through2": {[m
[32m+[m[32m      "version": "2.0.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "readable-stream": "~2.3.6",[m
[32m+[m[32m        "xtend": "~4.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/time-stamp": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/time-stamp/-/time-stamp-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-dkpaEa9QVhkhsTPztE5hhofg9cM=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/to-absolute-glob": {[m
[32m+[m[32m      "version": "2.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/to-absolute-glob/-/to-absolute-glob-2.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-GGX0PZ50sIItufFFt4z/fQ98hJs=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-absolute": "^1.0.0",[m
[32m+[m[32m        "is-negated-glob": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/to-object-path": {[m
[32m+[m[32m      "version": "0.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": "^3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/to-object-path/node_modules/kind-of": {[m
[32m+[m[32m      "version": "3.2.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-buffer": "^1.1.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/to-regex": {[m
[32m+[m[32m      "version": "3.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "define-property": "^2.0.2",[m
[32m+[m[32m        "extend-shallow": "^3.0.2",[m
[32m+[m[32m        "regex-not": "^1.0.2",[m
[32m+[m[32m        "safe-regex": "^1.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/to-regex-range": {[m
[32m+[m[32m      "version": "5.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-number": "^7.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=8.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/to-through": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/to-through/-/to-through-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-/JKtq6ByZHvAtn1rA2ZKoZUJOvY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "through2": "^2.0.3"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/to-through/node_modules/through2": {[m
[32m+[m[32m      "version": "2.0.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "readable-stream": "~2.3.6",[m
[32m+[m[32m        "xtend": "~4.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/toidentifier": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/type": {[m
[32m+[m[32m      "version": "1.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/type/-/type-1.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-+5nt5AAniqsCnu2cEQQdpzCAh33kVx8n0VoFidKpB1dVVLAN/F+bgVOqOJqOnEnrhp222clB5p3vUlD+1QAnfg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/typedarray": {[m
[32m+[m[32m      "version": "0.0.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",[m
[32m+[m[32m      "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/ua-parser-js": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ua-parser-js/-/ua-parser-js-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-00y/AXhx0/SsnI51fTc0rLRmafiGOM4/O+ny10Ps7f+j/b8p/ZY11ytMgznXkOVo4GQ+KwQG5UQLkLGirsACRg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "funding": [[m
[32m+[m[32m        {[m
[32m+[m[32m          "type": "opencollective",[m
[32m+[m[32m          "url": "https://opencollective.com/ua-parser-js"[m
[32m+[m[32m        },[m
[32m+[m[32m        {[m
[32m+[m[32m          "type": "paypal",[m
[32m+[m[32m          "url": "https://paypal.me/faisalman"[m
[32m+[m[32m        }[m
[32m+[m[32m      ],[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": "*"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/unc-path-regex": {[m
[32m+[m[32m      "version": "0.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/unc-path-regex/-/unc-path-regex-0.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-5z3T17DXxe2G+6xrCufYxqadUPo=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/undertaker": {[m
[32m+[m[32m      "version": "1.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/undertaker/-/undertaker-1.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-/RXwi5m/Mu3H6IHQGww3GNt1PNXlbeCuclF2QYR14L/2CHPz3DFZkvB5hZ0N/QUkiXWCACML2jXViIQEQc2MLg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "arr-flatten": "^1.0.1",[m
[32m+[m[32m        "arr-map": "^2.0.0",[m
[32m+[m[32m        "bach": "^1.0.0",[m
[32m+[m[32m        "collection-map": "^1.0.0",[m
[32m+[m[32m        "es6-weak-map": "^2.0.1",[m
[32m+[m[32m        "fast-levenshtein": "^1.0.0",[m
[32m+[m[32m        "last-run": "^1.1.0",[m
[32m+[m[32m        "object.defaults": "^1.0.0",[m
[32m+[m[32m        "object.reduce": "^1.0.0",[m
[32m+[m[32m        "undertaker-registry": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/undertaker-registry": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/undertaker-registry/-/undertaker-registry-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-XkvaMI5KiirlhPm5pDWaSZglzFA=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/union-value": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-tJfXmxMeWYnczCVs7XAEvIV7ieppALdyepWMkHkwciRpZraG/xwT+s2JN8+pr1+8jCRf80FFzvr+MpQeeoF4Xg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "arr-union": "^3.1.0",[m
[32m+[m[32m        "get-value": "^2.0.6",[m
[32m+[m[32m        "is-extendable": "^0.1.1",[m
[32m+[m[32m        "set-value": "^2.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/union-value/node_modules/is-extendable": {[m
[32m+[m[32m      "version": "0.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/unique-stream": {[m
[32m+[m[32m      "version": "2.3.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/unique-stream/-/unique-stream-2.3.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-2nY4TnBE70yoxHkDli7DMazpWiP7xMdCYqU2nBRO0UB+ZpEkGsSija7MvmvnZFUeC+mrgiUfcHSr3LmRFIg4+A==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "json-stable-stringify-without-jsonify": "^1.0.1",[m
[32m+[m[32m        "through2-filter": "^3.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/universalify": {[m
[32m+[m[32m      "version": "0.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 4.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/unpipe": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/unset-value": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "has-value": "^0.3.1",[m
[32m+[m[32m        "isobject": "^3.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/unset-value/node_modules/has-value": {[m
[32m+[m[32m      "version": "0.3.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "get-value": "^2.0.3",[m
[32m+[m[32m        "has-values": "^0.1.4",[m
[32m+[m[32m        "isobject": "^2.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/unset-value/node_modules/has-value/node_modules/isobject": {[m
[32m+[m[32m      "version": "2.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "isarray": "1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/unset-value/node_modules/has-values": {[m
[32m+[m[32m      "version": "0.1.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz",[m
[32m+[m[32m      "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/upath": {[m
[32m+[m[32m      "version": "1.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/upath/-/upath-1.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-aZwGpamFO61g3OlfT7OQCHqhGnW43ieH9WZeP7QxN/G/jS4jfqUkZxoryvJgVPEcrl5NL/ggHsSmLMHuH64Lhg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=4",[m
[32m+[m[32m        "yarn": "*"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/urix": {[m
[32m+[m[32m      "version": "0.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/urix/-/urix-0.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI=",[m
[32m+[m[32m      "deprecated": "Please see https://github.com/lydell/urix#deprecated",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/use": {[m
[32m+[m[32m      "version": "3.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/use/-/use-3.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-cwESVXlO3url9YWlFW/TA9cshCEhtu7IKJ/p5soJ/gGpj7vbvFrAY/eIioQ6Dw23KjZhYgiIo8HOs1nQ2vr/oQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/util-deprecate": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/utils-merge": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.4.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/v8flags": {[m
[32m+[m[32m      "version": "3.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/v8flags/-/v8flags-3.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-mH8etigqMfiGWdeXpaaqGfs6BndypxusHHcv2qSHyZkGEznCd/qAXCWWRzeowtL54147cktFOC4P5y+kl8d8Jg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "homedir-polyfill": "^1.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/validate-npm-package-license": {[m
[32m+[m[32m      "version": "3.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "spdx-correct": "^3.0.0",[m
[32m+[m[32m        "spdx-expression-parse": "^3.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/value-or-function": {[m
[32m+[m[32m      "version": "3.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/value-or-function/-/value-or-function-3.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-HCQ6ULWVwb5Up1S/7OhWO5/42BM=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/vary": {[m
[32m+[m[32m      "version": "1.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.8"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/vinyl": {[m
[32m+[m[32m      "version": "2.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/vinyl/-/vinyl-2.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-LII3bXRFBZLlezoG5FfZVcXflZgWP/4dCwKtxd5ky9+LOtM4CS3bIRQsmR1KMnMW07jpE8fqR2lcxPZ+8sJIcw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "clone": "^2.1.1",[m
[32m+[m[32m        "clone-buffer": "^1.0.0",[m
[32m+[m[32m        "clone-stats": "^1.0.0",[m
[32m+[m[32m        "cloneable-readable": "^1.0.0",[m
[32m+[m[32m        "remove-trailing-separator": "^1.0.1",[m
[32m+[m[32m        "replace-ext": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/vinyl-fs": {[m
[32m+[m[32m      "version": "3.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/vinyl-fs/-/vinyl-fs-3.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-vIu34EkyNyJxmP0jscNzWBSygh7VWhqun6RmqVfXePrOwi9lhvRs//dOaGOTRUQr4tx7/zd26Tk5WeSVZitgng==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "fs-mkdirp-stream": "^1.0.0",[m
[32m+[m[32m        "glob-stream": "^6.1.0",[m
[32m+[m[32m        "graceful-fs": "^4.0.0",[m
[32m+[m[32m        "is-valid-glob": "^1.0.0",[m
[32m+[m[32m        "lazystream": "^1.0.0",[m
[32m+[m[32m        "lead": "^1.0.0",[m
[32m+[m[32m        "object.assign": "^4.0.4",[m
[32m+[m[32m        "pumpify": "^1.3.5",[m
[32m+[m[32m        "readable-stream": "^2.3.3",[m
[32m+[m[32m        "remove-bom-buffer": "^3.0.0",[m
[32m+[m[32m        "remove-bom-stream": "^1.2.0",[m
[32m+[m[32m        "resolve-options": "^1.1.0",[m
[32m+[m[32m        "through2": "^2.0.0",[m
[32m+[m[32m        "to-through": "^2.0.0",[m
[32m+[m[32m        "value-or-function": "^3.0.0",[m
[32m+[m[32m        "vinyl": "^2.0.0",[m
[32m+[m[32m        "vinyl-sourcemap": "^1.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/vinyl-fs/node_modules/through2": {[m
[32m+[m[32m      "version": "2.0.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "readable-stream": "~2.3.6",[m
[32m+[m[32m        "xtend": "~4.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/vinyl-sourcemap": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/vinyl-sourcemap/-/vinyl-sourcemap-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-kqgAWTo4cDqM2xHYswCtS+Y7PhY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "append-buffer": "^1.0.2",[m
[32m+[m[32m        "convert-source-map": "^1.5.0",[m
[32m+[m[32m        "graceful-fs": "^4.1.6",[m
[32m+[m[32m        "normalize-path": "^2.1.1",[m
[32m+[m[32m        "now-and-later": "^2.0.0",[m
[32m+[m[32m        "remove-bom-buffer": "^3.0.0",[m
[32m+[m[32m        "vinyl": "^2.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/vinyl-sourcemap/node_modules/normalize-path": {[m
[32m+[m[32m      "version": "2.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "remove-trailing-separator": "^1.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/vinyl-sourcemaps-apply": {[m
[32m+[m[32m      "version": "0.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/vinyl-sourcemaps-apply/-/vinyl-sourcemaps-apply-0.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-q2VJ1h0XLCsbh75cUI0jnI74dwU=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "source-map": "^0.5.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/vinyl-sourcemaps-apply/node_modules/source-map": {[m
[32m+[m[32m      "version": "0.5.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",[m
[32m+[m[32m      "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.10.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/vinyl/node_modules/replace-ext": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/replace-ext/-/replace-ext-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-yD5BHCe7quCgBph4rMQ+0KkIRKwWCrHDOX1p1Gp6HwjPM5kVoCdKGNhN7ydqqsX6lJEnQDKZ/tFMiEdQ1dvPEw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 0.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/which": {[m
[32m+[m[32m      "version": "1.3.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "isexe": "^2.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "which": "bin/which"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/which-module": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/which-module/-/which-module-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-u6Y8qGGUiZT/MHc2CJ47lgJsKk8=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/wrap-ansi": {[m
[32m+[m[32m      "version": "7.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ansi-styles": "^4.0.0",[m
[32m+[m[32m        "string-width": "^4.1.0",[m
[32m+[m[32m        "strip-ansi": "^6.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=10"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/wrap-ansi/node_modules/ansi-styles": {[m
[32m+[m[32m      "version": "4.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "color-convert": "^2.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=8"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "url": "https://github.com/chalk/ansi-styles?sponsor=1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/wrappy": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/ws": {[m
[32m+[m[32m      "version": "8.2.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ws/-/ws-8.2.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-wBuoj1BDpC6ZQ1B7DWQBYVLphPWkm8i9Y0/3YdHjHKHiohOJ1ws+3OccDWtH+PoC9DZD5WOTrJvNbWvjS6JWaA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=10.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "bufferutil": "^4.0.1",[m
[32m+[m[32m        "utf-8-validate": "^5.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependenciesMeta": {[m
[32m+[m[32m        "bufferutil": {[m
[32m+[m[32m          "optional": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "utf-8-validate": {[m
[32m+[m[32m          "optional": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/xmlhttprequest-ssl": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/xmlhttprequest-ssl/-/xmlhttprequest-ssl-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-QKxVRxiRACQcVuQEYFsI1hhkrMlrXHPegbbd1yn9UHOmRxY+si12nQYzri3vbzt8VdTTRviqcKxcyllFas5z2A==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.4.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/xtend": {[m
[32m+[m[32m      "version": "4.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=0.4"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/y18n": {[m
[32m+[m[32m      "version": "5.0.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",[m
[32m+[m[32m      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/yargs": {[m
[32m+[m[32m      "version": "17.4.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/yargs/-/yargs-17.4.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-WJudfrk81yWFSOkZYpAZx4Nt7V4xp7S/uJkX0CnxovMCt1wCE8LNftPpNuF9X/u9gN5nsD7ycYtRcDf2pL3UiA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "cliui": "^7.0.2",[m
[32m+[m[32m        "escalade": "^3.1.1",[m
[32m+[m[32m        "get-caller-file": "^2.0.5",[m
[32m+[m[32m        "require-directory": "^2.1.1",[m
[32m+[m[32m        "string-width": "^4.2.3",[m
[32m+[m[32m        "y18n": "^5.0.5",[m
[32m+[m[32m        "yargs-parser": "^21.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=12"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/yargs-parser": {[m
[32m+[m[32m      "version": "21.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-9BK1jFpLzJROCI5TzwZL/TU4gqjK5xiHV/RfWLOahrjAko/e4DJkRDZQXfvqAsiZzzYhgAzbgz6lg48jcm4GLg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=12"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/yeast": {[m
[32m+[m[32m      "version": "0.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/yeast/-/yeast-0.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-AI4G2AlDIMNy28L47XagymyKxBk=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    }[m
[32m+[m[32m  },[m
[32m+[m[32m  "dependencies": {[m
[32m+[m[32m    "@socket.io/base64-arraybuffer": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@socket.io/base64-arraybuffer/-/base64-arraybuffer-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-dOlCBKnDw4iShaIsH/bxujKTM18+2TOAsYz+KSc11Am38H4q5Xw8Bbz97ZYdrVNM+um3p7w86Bvvmcn9q+5+eQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "@socket.io/component-emitter": {[m
[32m+[m[32m      "version": "3.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@socket.io/component-emitter/-/component-emitter-3.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-2pTGuibAXJswAPJjaKisthqS/NOK5ypG4LYT6tEAV0S/mxW0zOIvYvGK0V8w8+SHxAm6vRMSjqSalFXeBAqs+Q==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "@types/component-emitter": {[m
[32m+[m[32m      "version": "1.2.11",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@types/component-emitter/-/component-emitter-1.2.11.tgz",[m
[32m+[m[32m      "integrity": "sha512-SRXjM+tfsSlA9VuG8hGO2nft2p8zjXCK1VcC6N4NXbBbYbSia9kzCChYQajIjzIqOOOuh5Ock6MmV2oux4jDZQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "@types/cookie": {[m
[32m+[m[32m      "version": "0.4.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@types/cookie/-/cookie-0.4.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-XW/Aa8APYr6jSVVA1y/DEIZX0/GMKLEVekNG727R8cs56ahETkRAy/3DR7+fJyh7oUgGwNQaRfXCun0+KbWY7Q==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "@types/cors": {[m
[32m+[m[32m      "version": "2.8.12",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@types/cors/-/cors-2.8.12.tgz",[m
[32m+[m[32m      "integrity": "sha512-vt+kDhq/M2ayberEtJcIN/hxXy1Pk+59g2FV/ZQceeaTyCtCucjL2Q7FXlFjtWn4n15KCr1NE2lNNFhp0lEThw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "@types/node": {[m
[32m+[m[32m      "version": "17.0.22",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@types/node/-/node-17.0.22.tgz",[m
[32m+[m[32m      "integrity": "sha512-8FwbVoG4fy+ykY86XCAclKZDORttqE5/s7dyWZKLXTdv3vRy5HozBEinG5IqhvPXXzIZEcTVbuHlQEI6iuwcmw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "accepts": {[m
[32m+[m[32m      "version": "1.3.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",[m
[32m+[m[32m      "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "mime-types": "~2.1.34",[m
[32m+[m[32m        "negotiator": "0.6.3"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "ansi-colors": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-SFKX67auSNoVR38N3L+nvsPjOE0bybKTYbkf5tRvushrAPQ9V75huw0ZxBkKVeRU9kqH3d6HA4xTckbwZ4ixmA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "ansi-wrap": "^0.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "ansi-gray": {[m
[32m+[m[32m      "version": "0.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ansi-gray/-/ansi-gray-0.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-KWLPVOyXksSFEKPetSRDaGHvclE=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "ansi-wrap": "0.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "ansi-regex": {[m
[32m+[m[32m      "version": "5.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "ansi-styles": {[m
[32m+[m[32m      "version": "2.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "ansi-wrap": {[m
[32m+[m[32m      "version": "0.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ansi-wrap/-/ansi-wrap-0.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-qCJQ3bABXponyoLoLqYDu/pF768=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "anymatch": {[m
[32m+[m[32m      "version": "3.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "normalize-path": "^3.0.0",[m
[32m+[m[32m        "picomatch": "^2.0.4"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "append-buffer": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/append-buffer/-/append-buffer-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-2CIM9GYIFSXv6lBhTz3mUU36WPE=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "buffer-equal": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "archy": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/archy/-/archy-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-+cjBN1fMHde8N5rHeyxipcKGjEA=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "arr-diff": {[m
[32m+[m[32m      "version": "4.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "arr-filter": {[m
[32m+[m[32m      "version": "1.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/arr-filter/-/arr-filter-1.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-Q/3d0JHo7xGqTEXZzcGOLf8XEe4=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "make-iterator": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "arr-flatten": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "arr-map": {[m
[32m+[m[32m      "version": "2.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/arr-map/-/arr-map-2.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-Onc0X/wc814qkYJWAfnljy4kysQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "make-iterator": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "arr-union": {[m
[32m+[m[32m      "version": "3.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "array-each": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/array-each/-/array-each-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-p5SvDAWrF1KEbudTofIRoFugxE8=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "array-initial": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/array-initial/-/array-initial-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-L6dLJnOTccOUe9enrcc74zSz15U=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "array-slice": "^1.0.0",[m
[32m+[m[32m        "is-number": "^4.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-number": {[m
[32m+[m[32m          "version": "4.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-number/-/is-number-4.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha512-rSklcAIlf1OmFdyAqbnWTLVelsQ58uvZ66S/ZyawjWqIviTWCjg2PzVGw8WUA+nNuPTqb4wgA+NszrJ+08LlgQ==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "array-last": {[m
[32m+[m[32m      "version": "1.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/array-last/-/array-last-1.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-eOCut5rXlI6aCOS7Z7kCplKRKyiFQ6dHFBem4PwlwKeNFk2/XxTrhRh5T9PyaEWGy/NHTZWbY+nsZlNFJu9rYg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "is-number": "^4.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-number": {[m
[32m+[m[32m          "version": "4.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-number/-/is-number-4.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha512-rSklcAIlf1OmFdyAqbnWTLVelsQ58uvZ66S/ZyawjWqIviTWCjg2PzVGw8WUA+nNuPTqb4wgA+NszrJ+08LlgQ==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "array-slice": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/array-slice/-/array-slice-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-B1qMD3RBP7O8o0H2KbrXDyB0IccejMF15+87Lvlor12ONPRHP6gTjXMNkt/d3ZuOGbAe66hFmaCfECI24Ufp6w==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "array-sort": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/array-sort/-/array-sort-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-ihLeJkonmdiAsD7vpgN3CRcx2J2S0TiYW+IS/5zHBI7mKUq3ySvBdzzBfD236ubDBQFiiyG3SWCPc+msQ9KoYg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "default-compare": "^1.0.0",[m
[32m+[m[32m        "get-value": "^2.0.6",[m
[32m+[m[32m        "kind-of": "^5.0.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "array-unique": {[m
[32m+[m[32m      "version": "0.3.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "assign-symbols": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "async": {[m
[32m+[m[32m      "version": "1.5.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/async/-/async-1.5.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-7GphrlZIDAw8skHJVhjiCJL5Zyo=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "async-done": {[m
[32m+[m[32m      "version": "1.3.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/async-done/-/async-done-1.3.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-uYkTP8dw2og1tu1nmza1n1CMW0qb8gWWlwqMmLb7MhBVs4BXrFziT6HXUd+/RlRA/i4H9AkofYloUbs1fwMqlw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "end-of-stream": "^1.1.0",[m
[32m+[m[32m        "once": "^1.3.2",[m
[32m+[m[32m        "process-nextick-args": "^2.0.0",[m
[32m+[m[32m        "stream-exhaust": "^1.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "async-each": {[m
[32m+[m[32m      "version": "1.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/async-each/-/async-each-1.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-z/WhQ5FPySLdvREByI2vZiTWwCnF0moMJ1hK9YQwDTHKh6I7/uSckMetoRGb5UBZPC1z0jlw+n/XCgjeH7y1AQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "async-each-series": {[m
[32m+[m[32m      "version": "0.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/async-each-series/-/async-each-series-0.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-dhfBkXQB/Yykooqtzj266Yr+tDI=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "async-settle": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/async-settle/-/async-settle-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-HQqRS7Aldb7IqPOnTlCA9yssDGs=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "async-done": "^1.2.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "atob": {[m
[32m+[m[32m      "version": "2.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "autoprefixer": {[m
[32m+[m[32m      "version": "9.8.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-9.8.8.tgz",[m
[32m+[m[32m      "integrity": "sha512-eM9d/swFopRt5gdJ7jrpCwgvEMIayITpojhkkSMRsFHYuH5bkSQ4p/9qTEHtmNudUZh22Tehu7I6CxAW0IXTKA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "browserslist": "^4.12.0",[m
[32m+[m[32m        "caniuse-lite": "^1.0.30001109",[m
[32m+[m[32m        "normalize-range": "^0.1.2",[m
[32m+[m[32m        "num2fraction": "^1.2.2",[m
[32m+[m[32m        "picocolors": "^0.2.1",[m
[32m+[m[32m        "postcss": "^7.0.32",[m
[32m+[m[32m        "postcss-value-parser": "^4.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "axios": {[m
[32m+[m[32m      "version": "0.21.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/axios/-/axios-0.21.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-ut5vewkiu8jjGBdqpM44XxjuCjq9LAKeHVmoVfHVzy8eHgxxq8SbAVQNovDA8mVi05kP0Ea/n/UzcSHcTJQfNg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "follow-redirects": "^1.14.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "bach": {[m
[32m+[m[32m      "version": "1.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/bach/-/bach-1.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-Szzpa/JxNPeaG0FKUcFONMO9mIA=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "arr-filter": "^1.1.1",[m
[32m+[m[32m        "arr-flatten": "^1.0.1",[m
[32m+[m[32m        "arr-map": "^2.0.0",[m
[32m+[m[32m        "array-each": "^1.0.0",[m
[32m+[m[32m        "array-initial": "^1.0.0",[m
[32m+[m[32m        "array-last": "^1.1.1",[m
[32m+[m[32m        "async-done": "^1.2.2",[m
[32m+[m[32m        "async-settle": "^1.0.0",[m
[32m+[m[32m        "now-and-later": "^2.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "backo2": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/backo2/-/backo2-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-MasayLEpNjRj41s+u2n038+6eUc=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "balanced-match": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "base": {[m
[32m+[m[32m      "version": "0.11.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "cache-base": "^1.0.1",[m
[32m+[m[32m        "class-utils": "^0.3.5",[m
[32m+[m[32m        "component-emitter": "^1.2.1",[m
[32m+[m[32m        "define-property": "^1.0.0",[m
[32m+[m[32m        "isobject": "^3.0.1",[m
[32m+[m[32m        "mixin-deep": "^1.2.0",[m
[32m+[m[32m        "pascalcase": "^0.1.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "define-property": {[m
[32m+[m[32m          "version": "1.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-descriptor": "^1.0.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "base64id": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/base64id/-/base64id-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-lGe34o6EHj9y3Kts9R4ZYs/Gr+6N7MCaMlIFA3F1R2O5/m7K06AxfSeO5530PEERE6/WyEg3lsuyw4GHlPZHog==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "batch": {[m
[32m+[m[32m      "version": "0.6.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/batch/-/batch-0.6.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-3DQxT05nkxgJP8dgJyUl+UvyXBY=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "binary-extensions": {[m
[32m+[m[32m      "version": "2.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "bindings": {[m
[32m+[m[32m      "version": "1.5.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/bindings/-/bindings-1.5.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-p2q/t/mhvuOj/UeLlV6566GD/guowlr0hHxClI0W9m7MWYkL1F0hLo+0Aexs9HSPCtR1SXQ0TD3MMKrXZajbiQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "optional": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "file-uri-to-path": "1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "brace-expansion": {[m
[32m+[m[32m      "version": "1.1.11",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",[m
[32m+[m[32m      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "balanced-match": "^1.0.0",[m
[32m+[m[32m        "concat-map": "0.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "braces": {[m
[32m+[m[32m      "version": "3.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "fill-range": "^7.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "browser-sync": {[m
[32m+[m[32m      "version": "2.27.9",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/browser-sync/-/browser-sync-2.27.9.tgz",[m
[32m+[m[32m      "integrity": "sha512-3zBtggcaZIeU9so4ja9yxk7/CZu9B3DOL6zkxFpzHCHsQmkGBPVXg61jItbeoa+WXgNLnr1sYES/2yQwyEZ2+w==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "browser-sync-client": "^2.27.9",[m
[32m+[m[32m        "browser-sync-ui": "^2.27.9",[m
[32m+[m[32m        "bs-recipes": "1.3.4",[m
[32m+[m[32m        "bs-snippet-injector": "^2.0.1",[m
[32m+[m[32m        "chokidar": "^3.5.1",[m
[32m+[m[32m        "connect": "3.6.6",[m
[32m+[m[32m        "connect-history-api-fallback": "^1",[m
[32m+[m[32m        "dev-ip": "^1.0.1",[m
[32m+[m[32m        "easy-extender": "^2.3.4",[m
[32m+[m[32m        "eazy-logger": "3.1.0",[m
[32m+[m[32m        "etag": "^1.8.1",[m
[32m+[m[32m        "fresh": "^0.5.2",[m
[32m+[m[32m        "fs-extra": "3.0.1",[m
[32m+[m[32m        "http-proxy": "^1.18.1",[m
[32m+[m[32m        "immutable": "^3",[m
[32m+[m[32m        "localtunnel": "^2.0.1",[m
[32m+[m[32m        "micromatch": "^4.0.2",[m
[32m+[m[32m        "opn": "5.3.0",[m
[32m+[m[32m        "portscanner": "2.1.1",[m
[32m+[m[32m        "qs": "6.2.3",[m
[32m+[m[32m        "raw-body": "^2.3.2",[m
[32m+[m[32m        "resp-modifier": "6.0.2",[m
[32m+[m[32m        "rx": "4.1.0",[m
[32m+[m[32m        "send": "0.16.2",[m
[32m+[m[32m        "serve-index": "1.9.1",[m
[32m+[m[32m        "serve-static": "1.13.2",[m
[32m+[m[32m        "server-destroy": "1.0.1",[m
[32m+[m[32m        "socket.io": "^4.4.1",[m
[32m+[m[32m        "ua-parser-js": "1.0.2",[m
[32m+[m[32m        "yargs": "^17.3.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "browser-sync-client": {[m
[32m+[m[32m      "version": "2.27.9",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/browser-sync-client/-/browser-sync-client-2.27.9.tgz",[m
[32m+[m[32m      "integrity": "sha512-FHW8kydp7FXo6jnX3gXJCpHAHtWNLK0nx839nnK+boMfMI1n4KZd0+DmTxHBsHsF3OHud4V4jwoN8U5HExMIdQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "etag": "1.8.1",[m
[32m+[m[32m        "fresh": "0.5.2",[m
[32m+[m[32m        "mitt": "^1.1.3",[m
[32m+[m[32m        "rxjs": "^5.5.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "browser-sync-ui": {[m
[32m+[m[32m      "version": "2.27.9",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/browser-sync-ui/-/browser-sync-ui-2.27.9.tgz",[m
[32m+[m[32m      "integrity": "sha512-rsduR2bRIwFvM8CX6iY/Nu5aWub0WB9zfSYg9Le/RV5N5DEyxJYey0VxdfWCnzDOoelassTDzYQo+r0iJno3qw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "async-each-series": "0.1.1",[m
[32m+[m[32m        "connect-history-api-fallback": "^1",[m
[32m+[m[32m        "immutable": "^3",[m
[32m+[m[32m        "server-destroy": "1.0.1",[m
[32m+[m[32m        "socket.io-client": "^4.4.1",[m
[32m+[m[32m        "stream-throttle": "^0.1.3"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "browserslist": {[m
[32m+[m[32m      "version": "4.20.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.20.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-CQOBCqp/9pDvDbx3xfMi+86pr4KXIf2FDkTTdeuYw8OxS9t898LA1Khq57gtufFILXpfgsSx5woNgsBgvGjpsA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "caniuse-lite": "^1.0.30001317",[m
[32m+[m[32m        "electron-to-chromium": "^1.4.84",[m
[32m+[m[32m        "escalade": "^3.1.1",[m
[32m+[m[32m        "node-releases": "^2.0.2",[m
[32m+[m[32m        "picocolors": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "picocolors": {[m
[32m+[m[32m          "version": "1.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "bs-recipes": {[m
[32m+[m[32m      "version": "1.3.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/bs-recipes/-/bs-recipes-1.3.4.tgz",[m
[32m+[m[32m      "integrity": "sha1-DS1NSKcYyMBEdp/cT4lZLci2lYU=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "bs-snippet-injector": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/bs-snippet-injector/-/bs-snippet-injector-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-YbU5PxH1JVntEgaTEANDtu2wTdU=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "buffer-equal": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/buffer-equal/-/buffer-equal-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-WWFrSYME1Var1GaWayLu2j7KX74=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "buffer-from": {[m
[32m+[m[32m      "version": "1.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "bytes": {[m
[32m+[m[32m      "version": "3.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "cache-base": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "collection-visit": "^1.0.0",[m
[32m+[m[32m        "component-emitter": "^1.2.1",[m
[32m+[m[32m        "get-value": "^2.0.6",[m
[32m+[m[32m        "has-value": "^1.0.0",[m
[32m+[m[32m        "isobject": "^3.0.1",[m
[32m+[m[32m        "set-value": "^2.0.0",[m
[32m+[m[32m        "to-object-path": "^0.3.0",[m
[32m+[m[32m        "union-value": "^1.0.0",[m
[32m+[m[32m        "unset-value": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "call-bind": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "function-bind": "^1.1.1",[m
[32m+[m[32m        "get-intrinsic": "^1.0.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "camelcase": {[m
[32m+[m[32m      "version": "3.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-3.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-MvxLn82vhF/N9+c7uXysImHwqwo=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "caniuse-lite": {[m
[32m+[m[32m      "version": "1.0.30001319",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001319.tgz",[m
[32m+[m[32m      "integrity": "sha512-xjlIAFHucBRSMUo1kb5D4LYgcN1M45qdKP++lhqowDpwJwGkpIRTt5qQqnhxjj1vHcI7nrJxWhCC1ATrCEBTcw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "chalk": {[m
[32m+[m[32m      "version": "1.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "ansi-styles": "^2.2.1",[m
[32m+[m[32m        "escape-string-regexp": "^1.0.2",[m
[32m+[m[32m        "has-ansi": "^2.0.0",[m
[32m+[m[32m        "strip-ansi": "^3.0.0",[m
[32m+[m[32m        "supports-color": "^2.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ansi-regex": {[m
[32m+[m[32m          "version": "2.1.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "strip-ansi": {[m
[32m+[m[32m          "version": "3.0.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "ansi-regex": "^2.0.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "chokidar": {[m
[32m+[m[32m      "version": "3.5.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-Dr3sfKRP6oTcjf2JmUmFJfeVMvXBdegxB0iVQ5eb2V10uFJUCAS8OByZdVAyVb8xXNz3GjjTgj9kLWsZTqE6kw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "anymatch": "~3.1.2",[m
[32m+[m[32m        "braces": "~3.0.2",[m
[32m+[m[32m        "fsevents": "~2.3.2",[m
[32m+[m[32m        "glob-parent": "~5.1.2",[m
[32m+[m[32m        "is-binary-path": "~2.1.0",[m
[32m+[m[32m        "is-glob": "~4.0.1",[m
[32m+[m[32m        "normalize-path": "~3.0.0",[m
[32m+[m[32m        "readdirp": "~3.6.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "class-utils": {[m
[32m+[m[32m      "version": "0.3.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "arr-union": "^3.1.0",[m
[32m+[m[32m        "define-property": "^0.2.5",[m
[32m+[m[32m        "isobject": "^3.0.0",[m
[32m+[m[32m        "static-extend": "^0.1.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "define-property": {[m
[32m+[m[32m          "version": "0.2.5",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",[m
[32m+[m[32m          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-descriptor": "^0.1.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-accessor-descriptor": {[m
[32m+[m[32m          "version": "0.1.6",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",[m
[32m+[m[32m          "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "kind-of": "^3.0.2"[m
[32m+[m[32m          },[m
[32m+[m[32m          "dependencies": {[m
[32m+[m[32m            "kind-of": {[m
[32m+[m[32m              "version": "3.2.2",[m
[32m+[m[32m              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m              "dev": true,[m
[32m+[m[32m              "requires": {[m
[32m+[m[32m                "is-buffer": "^1.1.5"[m
[32m+[m[32m              }[m
[32m+[m[32m            }[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-data-descriptor": {[m
[32m+[m[32m          "version": "0.1.4",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",[m
[32m+[m[32m          "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "kind-of": "^3.0.2"[m
[32m+[m[32m          },[m
[32m+[m[32m          "dependencies": {[m
[32m+[m[32m            "kind-of": {[m
[32m+[m[32m              "version": "3.2.2",[m
[32m+[m[32m              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m              "dev": true,[m
[32m+[m[32m              "requires": {[m
[32m+[m[32m                "is-buffer": "^1.1.5"[m
[32m+[m[32m              }[m
[32m+[m[32m            }[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-descriptor": {[m
[32m+[m[32m          "version": "0.1.6",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",[m
[32m+[m[32m          "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-accessor-descriptor": "^0.1.6",[m
[32m+[m[32m            "is-data-descriptor": "^0.1.4",[m
[32m+[m[32m            "kind-of": "^5.0.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "clean-css": {[m
[32m+[m[32m      "version": "4.2.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/clean-css/-/clean-css-4.2.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-VcMWDN54ZN/DS+g58HYL5/n4Zrqe8vHJpGA8KdgUXFU4fuP/aHNw8eld9SyEIyabIMJX/0RaY/fplOo5hYLSFA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "source-map": "~0.6.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "cliui": {[m
[32m+[m[32m      "version": "7.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/cliui/-/cliui-7.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-OcRE68cOsVMXp1Yvonl/fzkQOyjLSu/8bhPDfQt0e0/Eb283TKP20Fs2MqoPsr9SwA595rRCA+QMzYc9nBP+JQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "string-width": "^4.2.0",[m
[32m+[m[32m        "strip-ansi": "^6.0.0",[m
[32m+[m[32m        "wrap-ansi": "^7.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "clone": {[m
[32m+[m[32m      "version": "2.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/clone/-/clone-2.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-G39Ln1kfHo+DZwQBYANFoCiHQ18=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "clone-buffer": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/clone-buffer/-/clone-buffer-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-4+JbIHrE5wGvch4staFnksrD3Fg=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "clone-stats": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/clone-stats/-/clone-stats-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-s3gt/4u1R04Yuba/D9/ngvh3doA=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "cloneable-readable": {[m
[32m+[m[32m      "version": "1.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/cloneable-readable/-/cloneable-readable-1.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-2EF8zTQOxYq70Y4XKtorQupqF0m49MBz2/yf5Bj+MHjvpG3Hy7sImifnqD6UA+TKYxeSV+u6qqQPawN5UvnpKQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "inherits": "^2.0.1",[m
[32m+[m[32m        "process-nextick-args": "^2.0.0",[m
[32m+[m[32m        "readable-stream": "^2.3.5"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "code-point-at": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "collection-map": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/collection-map/-/collection-map-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-rqDwb40mx4DCt1SUOFVEsiVa8Yw=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "arr-map": "^2.0.2",[m
[32m+[m[32m        "for-own": "^1.0.0",[m
[32m+[m[32m        "make-iterator": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "collection-visit": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "map-visit": "^1.0.0",[m
[32m+[m[32m        "object-visit": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "color-convert": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "color-name": "~1.1.4"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "color-name": {[m
[32m+[m[32m      "version": "1.1.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "color-support": {[m
[32m+[m[32m      "version": "1.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/color-support/-/color-support-1.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-qiBjkpbMLO/HL68y+lh4q0/O1MZFj2RX6X/KmMa3+gJD3z+WwI1ZzDHysvqHGS3mP6mznPckpXmw1nI9cJjyRg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "commander": {[m
[32m+[m[32m      "version": "2.20.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "component-emitter": {[m
[32m+[m[32m      "version": "1.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "concat-map": {[m
[32m+[m[32m      "version": "0.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "concat-stream": {[m
[32m+[m[32m      "version": "1.6.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "buffer-from": "^1.0.0",[m
[32m+[m[32m        "inherits": "^2.0.3",[m
[32m+[m[32m        "readable-stream": "^2.2.2",[m
[32m+[m[32m        "typedarray": "^0.0.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "connect": {[m
[32m+[m[32m      "version": "3.6.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/connect/-/connect-3.6.6.tgz",[m
[32m+[m[32m      "integrity": "sha1-Ce/2xVr3I24TcTWnJXSFi2eG9SQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "debug": "2.6.9",[m
[32m+[m[32m        "finalhandler": "1.1.0",[m
[32m+[m[32m        "parseurl": "~1.3.2",[m
[32m+[m[32m        "utils-merge": "1.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "connect-history-api-fallback": {[m
[32m+[m[32m      "version": "1.6.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/connect-history-api-fallback/-/connect-history-api-fallback-1.6.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-e54B99q/OUoH64zYYRf3HBP5z24G38h5D3qXu23JGRoigpX5Ss4r9ZnDk3g0Z8uQC2x2lPaJ+UlWBc1ZWBWdLg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "convert-source-map": {[m
[32m+[m[32m      "version": "1.8.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.8.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-+OQdjP49zViI/6i7nIJpA8rAl4sV/JdPfU9nZs3VqOwGIgizICvuN2ru6fMd+4llL0tar18UYJXfZ/TWtmhUjA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "safe-buffer": "~5.1.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "cookie": {[m
[32m+[m[32m      "version": "0.4.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-aSWTXFzaKWkvHO1Ny/s+ePFpvKsPnjc551iI41v3ny/ow6tBG5Vd+FuqGNhh1LxOmVzOlGUriIlOaokOvhaStA==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "copy-descriptor": {[m
[32m+[m[32m      "version": "0.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "copy-props": {[m
[32m+[m[32m      "version": "2.0.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/copy-props/-/copy-props-2.0.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-XBlx8HSqrT0ObQwmSzM7WE5k8FxTV75h1DX1Z3n6NhQ/UYYAvInWYmG06vFt7hQZArE2fuO62aihiWIVQwh1sw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "each-props": "^1.3.2",[m
[32m+[m[32m        "is-plain-object": "^5.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "core-util-is": {[m
[32m+[m[32m      "version": "1.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "cors": {[m
[32m+[m[32m      "version": "2.8.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "object-assign": "^4",[m
[32m+[m[32m        "vary": "^1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "d": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/d/-/d-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-m62ShEObQ39CfralilEQRjH6oAMtNCV1xJyEx5LpRYUVN+EviphDgUc/F3hnYbADmkiNs67Y+3ylmlG7Lnu+FA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "es5-ext": "^0.10.50",[m
[32m+[m[32m        "type": "^1.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "debug": {[m
[32m+[m[32m      "version": "2.6.9",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",[m
[32m+[m[32m      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "ms": "2.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "decamelize": {[m
[32m+[m[32m      "version": "1.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "decode-uri-component": {[m
[32m+[m[32m      "version": "0.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "default-compare": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/default-compare/-/default-compare-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-QWfXlM0EkAbqOCbD/6HjdwT19j7WCkMyiRhWilc4H9/5h/RzTF9gv5LYh1+CmDV5d1rki6KAWLtQale0xt20eQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "kind-of": "^5.0.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "default-resolution": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/default-resolution/-/default-resolution-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-vLgrqnKtebQmp2cy8aga1t8m1oQ=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "define-properties": {[m
[32m+[m[32m      "version": "1.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "object-keys": "^1.0.12"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "define-property": {[m
[32m+[m[32m      "version": "2.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "is-descriptor": "^1.0.2",[m
[32m+[m[32m        "isobject": "^3.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "depd": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "destroy": {[m
[32m+[m[32m      "version": "1.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "detect-file": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/detect-file/-/detect-file-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-8NZtA2cqglyxtzvbP+YjEMjlUrc=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "dev-ip": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/dev-ip/-/dev-ip-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-p2o+0YVb56ASu4rBbLgPPADcKPA=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "dlv": {[m
[32m+[m[32m      "version": "1.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "duplexify": {[m
[32m+[m[32m      "version": "3.7.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/duplexify/-/duplexify-3.7.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-07z8uv2wMyS51kKhD1KsdXJg5WQ6t93RneqRxUHnskXVtlYYkLqM0gqStQZ3pj073g687jPCHrqNfCzawLYh5g==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "end-of-stream": "^1.0.0",[m
[32m+[m[32m        "inherits": "^2.0.1",[m
[32m+[m[32m        "readable-stream": "^2.0.0",[m
[32m+[m[32m        "stream-shift": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "each-props": {[m
[32m+[m[32m      "version": "1.3.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/each-props/-/each-props-1.3.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-vV0Hem3zAGkJAyU7JSjixeU66rwdynTAa1vofCrSA5fEln+m67Az9CcnkVD776/fsN/UjIWmBDoNRS6t6G9RfA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "is-plain-object": "^2.0.1",[m
[32m+[m[32m        "object.defaults": "^1.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-plain-object": {[m
[32m+[m[32m          "version": "2.0.4",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",[m
[32m+[m[32m          "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "isobject": "^3.0.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "easy-extender": {[m
[32m+[m[32m      "version": "2.3.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/easy-extender/-/easy-extender-2.3.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-8cAwm6md1YTiPpOvDULYJL4ZS6WfM5/cTeVVh4JsvyYZAoqlRVUpHL9Gr5Fy7HA6xcSZicUia3DeAgO3Us8E+Q==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "lodash": "^4.17.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "eazy-logger": {[m
[32m+[m[32m      "version": "3.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/eazy-logger/-/eazy-logger-3.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-/snsn2JqBtUSSstEl4R0RKjkisGHAhvYj89i7r3ytNUKW12y178KDZwXLXIgwDqLW6E/VRMT9qfld7wvFae8bQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "tfunk": "^4.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "ee-first": {[m
[32m+[m[32m      "version": "1.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "electron-to-chromium": {[m
[32m+[m[32m      "version": "1.4.89",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.4.89.tgz",[m
[32m+[m[32m      "integrity": "sha512-z1Axg0Fu54fse8wN4fd+GAINdU5mJmLtcl6bqIcYyzNVGONcfHAeeJi88KYMQVKalhXlYuVPzKkFIU5VD0raUw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "emoji-regex": {[m
[32m+[m[32m      "version": "8.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "encodeurl": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "end-of-stream": {[m
[32m+[m[32m      "version": "1.4.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "once": "^1.4.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "engine.io": {[m
[32m+[m[32m      "version": "6.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/engine.io/-/engine.io-6.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-rqs60YwkvWTLLnfazqgZqLa/aKo+9cueVfEi/dZ8PyGyaf8TLOxj++4QMIgeG3Gn0AhrWiFXvghsoY9L9h25GA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@types/cookie": "^0.4.1",[m
[32m+[m[32m        "@types/cors": "^2.8.12",[m
[32m+[m[32m        "@types/node": ">=10.0.0",[m
[32m+[m[32m        "accepts": "~1.3.4",[m
[32m+[m[32m        "base64id": "2.0.0",[m
[32m+[m[32m        "cookie": "~0.4.1",[m
[32m+[m[32m        "cors": "~2.8.5",[m
[32m+[m[32m        "debug": "~4.3.1",[m
[32m+[m[32m        "engine.io-parser": "~5.0.3",[m
[32m+[m[32m        "ws": "~8.2.3"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "debug": {[m
[32m+[m[32m          "version": "4.3.4",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",[m
[32m+[m[32m          "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "ms": "2.1.2"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "ms": {[m
[32m+[m[32m          "version": "2.1.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",[m
[32m+[m[32m          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "engine.io-client": {[m
[32m+[m[32m      "version": "6.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/engine.io-client/-/engine.io-client-6.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-V05mmDo4gjimYW+FGujoGmmmxRaDsrVr7AXA3ZIfa04MWM1jOfZfUwou0oNqhNwy/votUDvGDt4JA4QF4e0b4g==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@socket.io/component-emitter": "~3.0.0",[m
[32m+[m[32m        "debug": "~4.3.1",[m
[32m+[m[32m        "engine.io-parser": "~5.0.0",[m
[32m+[m[32m        "has-cors": "1.1.0",[m
[32m+[m[32m        "parseqs": "0.0.6",[m
[32m+[m[32m        "parseuri": "0.0.6",[m
[32m+[m[32m        "ws": "~8.2.3",[m
[32m+[m[32m        "xmlhttprequest-ssl": "~2.0.0",[m
[32m+[m[32m        "yeast": "0.1.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "debug": {[m
[32m+[m[32m          "version": "4.3.4",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",[m
[32m+[m[32m          "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "ms": "2.1.2"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "ms": {[m
[32m+[m[32m          "version": "2.1.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",[m
[32m+[m[32m          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "engine.io-parser": {[m
[32m+[m[32m      "version": "5.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/engine.io-parser/-/engine.io-parser-5.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-BtQxwF27XUNnSafQLvDi0dQ8s3i6VgzSoQMJacpIcGNrlUdfHSKbgm3jmjCVvQluGzqwujQMPAoMai3oYSTurg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@socket.io/base64-arraybuffer": "~1.0.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "error-ex": {[m
[32m+[m[32m      "version": "1.3.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "is-arrayish": "^0.2.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "es5-ext": {[m
[32m+[m[32m      "version": "0.10.59",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/es5-ext/-/es5-ext-0.10.59.tgz",[m
[32m+[m[32m      "integrity": "sha512-cOgyhW0tIJyQY1Kfw6Kr0viu9ZlUctVchRMZ7R0HiH3dxTSp5zJDLecwxUqPUrGKMsgBI1wd1FL+d9Jxfi4cLw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "es6-iterator": "^2.0.3",[m
[32m+[m[32m        "es6-symbol": "^3.1.3",[m
[32m+[m[32m        "next-tick": "^1.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "es6-iterator": {[m
[32m+[m[32m      "version": "2.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/es6-iterator/-/es6-iterator-2.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha1-p96IkUGgWpSwhUQDstCg+/qY87c=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "d": "1",[m
[32m+[m[32m        "es5-ext": "^0.10.35",[m
[32m+[m[32m        "es6-symbol": "^3.1.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "es6-symbol": {[m
[32m+[m[32m      "version": "3.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/es6-symbol/-/es6-symbol-3.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-NJ6Yn3FuDinBaBRWl/q5X/s4koRHBrgKAu+yGI6JCBeiu3qrcbJhwT2GeR/EXVfylRk8dpQVJoLEFhK+Mu31NA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "d": "^1.0.1",[m
[32m+[m[32m        "ext": "^1.1.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "es6-weak-map": {[m
[32m+[m[32m      "version": "2.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/es6-weak-map/-/es6-weak-map-2.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-p5um32HOTO1kP+w7PRnB+5lQ43Z6muuMuIMffvDN8ZB4GcnjLBV6zGStpbASIMk4DCAvEaamhe2zhyCb/QXXsA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "d": "1",[m
[32m+[m[32m        "es5-ext": "^0.10.46",[m
[32m+[m[32m        "es6-iterator": "^2.0.3",[m
[32m+[m[32m        "es6-symbol": "^3.1.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "escalade": {[m
[32m+[m[32m      "version": "3.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "escape-html": {[m
[32m+[m[32m      "version": "1.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "escape-string-regexp": {[m
[32m+[m[32m      "version": "1.0.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",[m
[32m+[m[32m      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "etag": {[m
[32m+[m[32m      "version": "1.8.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "eventemitter3": {[m
[32m+[m[32m      "version": "4.0.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-4.0.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-8guHBZCwKnFhYdHr2ysuRWErTwhoN2X8XELRlrRwpmfeY2jjuUN4taQMsULKUVo1K4DvZl+0pgfyoysHxvmvEw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "expand-brackets": {[m
[32m+[m[32m      "version": "2.1.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",[m
[32m+[m[32m      "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "debug": "^2.3.3",[m
[32m+[m[32m        "define-property": "^0.2.5",[m
[32m+[m[32m        "extend-shallow": "^2.0.1",[m
[32m+[m[32m        "posix-character-classes": "^0.1.0",[m
[32m+[m[32m        "regex-not": "^1.0.0",[m
[32m+[m[32m        "snapdragon": "^0.8.1",[m
[32m+[m[32m        "to-regex": "^3.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "define-property": {[m
[32m+[m[32m          "version": "0.2.5",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",[m
[32m+[m[32m          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-descriptor": "^0.1.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "extend-shallow": {[m
[32m+[m[32m          "version": "2.0.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-extendable": "^0.1.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-accessor-descriptor": {[m
[32m+[m[32m          "version": "0.1.6",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",[m
[32m+[m[32m          "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "kind-of": "^3.0.2"[m
[32m+[m[32m          },[m
[32m+[m[32m          "dependencies": {[m
[32m+[m[32m            "kind-of": {[m
[32m+[m[32m              "version": "3.2.2",[m
[32m+[m[32m              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m              "dev": true,[m
[32m+[m[32m              "requires": {[m
[32m+[m[32m                "is-buffer": "^1.1.5"[m
[32m+[m[32m              }[m
[32m+[m[32m            }[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-data-descriptor": {[m
[32m+[m[32m          "version": "0.1.4",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",[m
[32m+[m[32m          "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "kind-of": "^3.0.2"[m
[32m+[m[32m          },[m
[32m+[m[32m          "dependencies": {[m
[32m+[m[32m            "kind-of": {[m
[32m+[m[32m              "version": "3.2.2",[m
[32m+[m[32m              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m              "dev": true,[m
[32m+[m[32m              "requires": {[m
[32m+[m[32m                "is-buffer": "^1.1.5"[m
[32m+[m[32m              }[m
[32m+[m[32m            }[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-descriptor": {[m
[32m+[m[32m          "version": "0.1.6",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",[m
[32m+[m[32m          "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-accessor-descriptor": "^0.1.6",[m
[32m+[m[32m            "is-data-descriptor": "^0.1.4",[m
[32m+[m[32m            "kind-of": "^5.0.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-extendable": {[m
[32m+[m[32m          "version": "0.1.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "expand-tilde": {[m
[32m+[m[32m      "version": "2.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/expand-tilde/-/expand-tilde-2.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-l+gBqgUt8CRU3kawK/YhZCzchQI=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "homedir-polyfill": "^1.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "ext": {[m
[32m+[m[32m      "version": "1.6.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ext/-/ext-1.6.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-sdBImtzkq2HpkdRLtlLWDa6w4DX22ijZLKx8BMPUuKe1c5lbN6xwQDQCxSfxBQnHZ13ls/FH0MQZx/q/gr6FQg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "type": "^2.5.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "type": {[m
[32m+[m[32m          "version": "2.6.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/type/-/type-2.6.0.tgz",[m
[32m+[m[32m          "integrity": "sha512-eiDBDOmkih5pMbo9OqsqPRGMljLodLcwd5XD5JbtNB0o89xZAwynY9EdCDsJU7LtcVCClu9DvM7/0Ep1hYX3EQ==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "extend": {[m
[32m+[m[32m      "version": "3.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "extend-shallow": {[m
[32m+[m[32m      "version": "3.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "assign-symbols": "^1.0.0",[m
[32m+[m[32m        "is-extendable": "^1.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "extglob": {[m
[32m+[m[32m      "version": "2.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "array-unique": "^0.3.2",[m
[32m+[m[32m        "define-property": "^1.0.0",[m
[32m+[m[32m        "expand-brackets": "^2.1.4",[m
[32m+[m[32m        "extend-shallow": "^2.0.1",[m
[32m+[m[32m        "fragment-cache": "^0.2.1",[m
[32m+[m[32m        "regex-not": "^1.0.0",[m
[32m+[m[32m        "snapdragon": "^0.8.1",[m
[32m+[m[32m        "to-regex": "^3.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "define-property": {[m
[32m+[m[32m          "version": "1.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-descriptor": "^1.0.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "extend-shallow": {[m
[32m+[m[32m          "version": "2.0.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-extendable": "^0.1.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-extendable": {[m
[32m+[m[32m          "version": "0.1.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "fancy-log": {[m
[32m+[m[32m      "version": "1.3.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fancy-log/-/fancy-log-1.3.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-k9oEhlyc0FrVh25qYuSELjr8oxsCoc4/LEZfg2iJJrfEk/tZL9bCoJE47gqAvI2m/AUjluCS4+3I0eTx8n3AEw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "ansi-gray": "^0.1.1",[m
[32m+[m[32m        "color-support": "^1.1.3",[m
[32m+[m[32m        "parse-node-version": "^1.0.0",[m
[32m+[m[32m        "time-stamp": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "fast-levenshtein": {[m
[32m+[m[32m      "version": "1.1.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-1.1.4.tgz",[m
[32m+[m[32m      "integrity": "sha1-5qdUzI8V5YmHqpy9J69m/W9OWvk=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "file-uri-to-path": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/file-uri-to-path/-/file-uri-to-path-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-0Zt+s3L7Vf1biwWZ29aARiVYLx7iMGnEUl9x33fbB/j3jR81u/O2LbqK+Bm1CDSNDKVtJ/YjwY7TUd5SkeLQLw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "optional": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "fill-range": {[m
[32m+[m[32m      "version": "7.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "to-regex-range": "^5.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "finalhandler": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-zgtoVbRYU+eRsvzGgARtiCU91/U=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "debug": "2.6.9",[m
[32m+[m[32m        "encodeurl": "~1.0.1",[m
[32m+[m[32m        "escape-html": "~1.0.3",[m
[32m+[m[32m        "on-finished": "~2.3.0",[m
[32m+[m[32m        "parseurl": "~1.3.2",[m
[32m+[m[32m        "statuses": "~1.3.1",[m
[32m+[m[32m        "unpipe": "~1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "find-up": {[m
[32m+[m[32m      "version": "1.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/find-up/-/find-up-1.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-ay6YIrGizgpgq2TWEOzK1TyyTQ8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "path-exists": "^2.0.0",[m
[32m+[m[32m        "pinkie-promise": "^2.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "findup-sync": {[m
[32m+[m[32m      "version": "3.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/findup-sync/-/findup-sync-3.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-YbffarhcicEhOrm4CtrwdKBdCuz576RLdhJDsIfvNtxUuhdRet1qZcsMjqbePtAseKdAnDyM/IyXbu7PRPRLYg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "detect-file": "^1.0.0",[m
[32m+[m[32m        "is-glob": "^4.0.0",[m
[32m+[m[32m        "micromatch": "^3.0.4",[m
[32m+[m[32m        "resolve-dir": "^1.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "braces": {[m
[32m+[m[32m          "version": "2.3.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",[m
[32m+[m[32m          "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "arr-flatten": "^1.1.0",[m
[32m+[m[32m            "array-unique": "^0.3.2",[m
[32m+[m[32m            "extend-shallow": "^2.0.1",[m
[32m+[m[32m            "fill-range": "^4.0.0",[m
[32m+[m[32m            "isobject": "^3.0.1",[m
[32m+[m[32m            "repeat-element": "^1.1.2",[m
[32m+[m[32m            "snapdragon": "^0.8.1",[m
[32m+[m[32m            "snapdragon-node": "^2.0.1",[m
[32m+[m[32m            "split-string": "^3.0.2",[m
[32m+[m[32m            "to-regex": "^3.0.1"[m
[32m+[m[32m          },[m
[32m+[m[32m          "dependencies": {[m
[32m+[m[32m            "extend-shallow": {[m
[32m+[m[32m              "version": "2.0.1",[m
[32m+[m[32m              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",[m
[32m+[m[32m              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",[m
[32m+[m[32m              "dev": true,[m
[32m+[m[32m              "requires": {[m
[32m+[m[32m                "is-extendable": "^0.1.0"[m
[32m+[m[32m              }[m
[32m+[m[32m            }[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "fill-range": {[m
[32m+[m[32m          "version": "4.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "extend-shallow": "^2.0.1",[m
[32m+[m[32m            "is-number": "^3.0.0",[m
[32m+[m[32m            "repeat-string": "^1.6.1",[m
[32m+[m[32m            "to-regex-range": "^2.1.0"[m
[32m+[m[32m          },[m
[32m+[m[32m          "dependencies": {[m
[32m+[m[32m            "extend-shallow": {[m
[32m+[m[32m              "version": "2.0.1",[m
[32m+[m[32m              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",[m
[32m+[m[32m              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",[m
[32m+[m[32m              "dev": true,[m
[32m+[m[32m              "requires": {[m
[32m+[m[32m                "is-extendable": "^0.1.0"[m
[32m+[m[32m              }[m
[32m+[m[32m            }[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-extendable": {[m
[32m+[m[32m          "version": "0.1.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-number": {[m
[32m+[m[32m          "version": "3.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "kind-of": "^3.0.2"[m
[32m+[m[32m          },[m
[32m+[m[32m          "dependencies": {[m
[32m+[m[32m            "kind-of": {[m
[32m+[m[32m              "version": "3.2.2",[m
[32m+[m[32m              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m              "dev": true,[m
[32m+[m[32m              "requires": {[m
[32m+[m[32m                "is-buffer": "^1.1.5"[m
[32m+[m[32m              }[m
[32m+[m[32m            }[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "kind-of": {[m
[32m+[m[32m          "version": "6.0.3",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",[m
[32m+[m[32m          "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "micromatch": {[m
[32m+[m[32m          "version": "3.1.10",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",[m
[32m+[m[32m          "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "arr-diff": "^4.0.0",[m
[32m+[m[32m            "array-unique": "^0.3.2",[m
[32m+[m[32m            "braces": "^2.3.1",[m
[32m+[m[32m            "define-property": "^2.0.2",[m
[32m+[m[32m            "extend-shallow": "^3.0.2",[m
[32m+[m[32m            "extglob": "^2.0.4",[m
[32m+[m[32m            "fragment-cache": "^0.2.1",[m
[32m+[m[32m            "kind-of": "^6.0.2",[m
[32m+[m[32m            "nanomatch": "^1.2.9",[m
[32m+[m[32m            "object.pick": "^1.3.0",[m
[32m+[m[32m            "regex-not": "^1.0.0",[m
[32m+[m[32m            "snapdragon": "^0.8.1",[m
[32m+[m[32m            "to-regex": "^3.0.2"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "to-regex-range": {[m
[32m+[m[32m          "version": "2.1.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-number": "^3.0.0",[m
[32m+[m[32m            "repeat-string": "^1.6.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "fined": {[m
[32m+[m[32m      "version": "1.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fined/-/fined-1.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-ZYDqPLGxDkDhDZBjZBb+oD1+j0rA4E0pXY50eplAAOPg2N/gUBSSk5IM1/QhPfyVo19lJ+CvXpqfvk+b2p/8Ng==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "expand-tilde": "^2.0.2",[m
[32m+[m[32m        "is-plain-object": "^2.0.3",[m
[32m+[m[32m        "object.defaults": "^1.1.0",[m
[32m+[m[32m        "object.pick": "^1.2.0",[m
[32m+[m[32m        "parse-filepath": "^1.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-plain-object": {[m
[32m+[m[32m          "version": "2.0.4",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",[m
[32m+[m[32m          "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "isobject": "^3.0.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "flagged-respawn": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/flagged-respawn/-/flagged-respawn-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-lNaHNVymajmk0OJMBn8fVUAU1BtDeKIqKoVhk4xAALB57aALg6b4W0MfJ/cUE0g9YBXy5XhSlPIpYIJ7HaY/3Q==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "flush-write-stream": {[m
[32m+[m[32m      "version": "1.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/flush-write-stream/-/flush-write-stream-1.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-3Z4XhFZ3992uIq0XOqb9AreonueSYphE6oYbpt5+3u06JWklbsPkNv3ZKkP9Bz/r+1MWCaMoSQ28P85+1Yc77w==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "inherits": "^2.0.3",[m
[32m+[m[32m        "readable-stream": "^2.3.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "follow-redirects": {[m
[32m+[m[32m      "version": "1.14.9",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.14.9.tgz",[m
[32m+[m[32m      "integrity": "sha512-MQDfihBQYMcyy5dhRDJUHcw7lb2Pv/TuE6xP1vyraLukNDHKbDxDNaOE3NbCAdKQApno+GPRyo1YAp89yCjK4w==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "for-in": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "for-own": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/for-own/-/for-own-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-xjMy9BXO3EsE2/5wz4NklMU8tEs=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "for-in": "^1.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "fragment-cache": {[m
[32m+[m[32m      "version": "0.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "map-cache": "^0.2.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "fresh": {[m
[32m+[m[32m      "version": "0.5.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "fs-extra": {[m
[32m+[m[32m      "version": "3.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-3.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-N5TzeMWLNC6n27sjCVEJxLO2IpE=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "graceful-fs": "^4.1.2",[m
[32m+[m[32m        "jsonfile": "^3.0.0",[m
[32m+[m[32m        "universalify": "^0.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "fs-mkdirp-stream": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fs-mkdirp-stream/-/fs-mkdirp-stream-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-C3gV/DIBxqaeFNuYzgmMFpNSWes=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "graceful-fs": "^4.1.11",[m
[32m+[m[32m        "through2": "^2.0.3"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "through2": {[m
[32m+[m[32m          "version": "2.0.5",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",[m
[32m+[m[32m          "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "readable-stream": "~2.3.6",[m
[32m+[m[32m            "xtend": "~4.0.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "fs.realpath": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "fsevents": {[m
[32m+[m[32m      "version": "2.3.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "optional": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "function-bind": {[m
[32m+[m[32m      "version": "1.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "get-caller-file": {[m
[32m+[m[32m      "version": "2.0.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "get-intrinsic": {[m
[32m+[m[32m      "version": "1.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-kWZrnVM42QCiEA2Ig1bG8zjoIMOgxWwYCEeNdwY6Tv/cOSeGpcoX4pXHfKUxNKVoArnrEr2e9srnAxxGIraS9Q==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "function-bind": "^1.1.1",[m
[32m+[m[32m        "has": "^1.0.3",[m
[32m+[m[32m        "has-symbols": "^1.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "get-value": {[m
[32m+[m[32m      "version": "2.0.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",[m
[32m+[m[32m      "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "glob": {[m
[32m+[m[32m      "version": "7.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-lmLf6gtyrPq8tTjSmrO94wBeQbFR3HbLHbuyD69wuyQkImp2hWqMGB47OX65FBkPffO641IP9jWa1z4ivqG26Q==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "fs.realpath": "^1.0.0",[m
[32m+[m[32m        "inflight": "^1.0.4",[m
[32m+[m[32m        "inherits": "2",[m
[32m+[m[32m        "minimatch": "^3.0.4",[m
[32m+[m[32m        "once": "^1.3.0",[m
[32m+[m[32m        "path-is-absolute": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "glob-parent": {[m
[32m+[m[32m      "version": "5.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "is-glob": "^4.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "glob-stream": {[m
[32m+[m[32m      "version": "6.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/glob-stream/-/glob-stream-6.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-cEXJlBOz65SIjYOrRtC0BMx73eQ=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "extend": "^3.0.0",[m
[32m+[m[32m        "glob": "^7.1.1",[m
[32m+[m[32m        "glob-parent": "^3.1.0",[m
[32m+[m[32m        "is-negated-glob": "^1.0.0",[m
[32m+[m[32m        "ordered-read-streams": "^1.0.0",[m
[32m+[m[32m        "pumpify": "^1.3.5",[m
[32m+[m[32m        "readable-stream": "^2.1.5",[m
[32m+[m[32m        "remove-trailing-separator": "^1.0.1",[m
[32m+[m[32m        "to-absolute-glob": "^2.0.0",[m
[32m+[m[32m        "unique-stream": "^2.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "glob-parent": {[m
[32m+[m[32m          "version": "3.1.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz",[m
[32m+[m[32m          "integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-glob": "^3.1.0",[m
[32m+[m[32m            "path-dirname": "^1.0.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-glob": {[m
[32m+[m[32m          "version": "3.1.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",[m
[32m+[m[32m          "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-extglob": "^2.1.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "glob-watcher": {[m
[32m+[m[32m      "version": "5.0.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/glob-watcher/-/glob-watcher-5.0.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-zOZgGGEHPklZNjZQaZ9f41i7F2YwE+tS5ZHrDhbBCk3stwahn5vQxnFmBJZHoYdusR6R1bLSXeGUy/BhctwKzw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "anymatch": "^2.0.0",[m
[32m+[m[32m        "async-done": "^1.2.0",[m
[32m+[m[32m        "chokidar": "^2.0.0",[m
[32m+[m[32m        "is-negated-glob": "^1.0.0",[m
[32m+[m[32m        "just-debounce": "^1.0.0",[m
[32m+[m[32m        "normalize-path": "^3.0.0",[m
[32m+[m[32m        "object.defaults": "^1.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "anymatch": {[m
[32m+[m[32m          "version": "2.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "micromatch": "^3.1.4",[m
[32m+[m[32m            "normalize-path": "^2.1.1"[m
[32m+[m[32m          },[m
[32m+[m[32m          "dependencies": {[m
[32m+[m[32m            "normalize-path": {[m
[32m+[m[32m              "version": "2.1.1",[m
[32m+[m[32m              "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",[m
[32m+[m[32m              "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",[m
[32m+[m[32m              "dev": true,[m
[32m+[m[32m              "requires": {[m
[32m+[m[32m                "remove-trailing-separator": "^1.0.1"[m
[32m+[m[32m              }[m
[32m+[m[32m            }[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "binary-extensions": {[m
[32m+[m[32m          "version": "1.13.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-1.13.1.tgz",[m
[32m+[m[32m          "integrity": "sha512-Un7MIEDdUC5gNpcGDV97op1Ywk748MpHcFTHoYs6qnj1Z3j7I53VG3nwZhKzoBZmbdRNnb6WRdFlwl7tSDuZGw==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "braces": {[m
[32m+[m[32m          "version": "2.3.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",[m
[32m+[m[32m          "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "arr-flatten": "^1.1.0",[m
[32m+[m[32m            "array-unique": "^0.3.2",[m
[32m+[m[32m            "extend-shallow": "^2.0.1",[m
[32m+[m[32m            "fill-range": "^4.0.0",[m
[32m+[m[32m            "isobject": "^3.0.1",[m
[32m+[m[32m            "repeat-element": "^1.1.2",[m
[32m+[m[32m            "snapdragon": "^0.8.1",[m
[32m+[m[32m            "snapdragon-node": "^2.0.1",[m
[32m+[m[32m            "split-string": "^3.0.2",[m
[32m+[m[32m            "to-regex": "^3.0.1"[m
[32m+[m[32m          },[m
[32m+[m[32m          "dependencies": {[m
[32m+[m[32m            "extend-shallow": {[m
[32m+[m[32m              "version": "2.0.1",[m
[32m+[m[32m              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",[m
[32m+[m[32m              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",[m
[32m+[m[32m              "dev": true,[m
[32m+[m[32m              "requires": {[m
[32m+[m[32m                "is-extendable": "^0.1.0"[m
[32m+[m[32m              }[m
[32m+[m[32m            }[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "chokidar": {[m
[32m+[m[32m          "version": "2.1.8",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-2.1.8.tgz",[m
[32m+[m[32m          "integrity": "sha512-ZmZUazfOzf0Nve7duiCKD23PFSCs4JPoYyccjUFF3aQkQadqBhfzhjkwBH2mNOG9cTBwhamM37EIsIkZw3nRgg==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "anymatch": "^2.0.0",[m
[32m+[m[32m            "async-each": "^1.0.1",[m
[32m+[m[32m            "braces": "^2.3.2",[m
[32m+[m[32m            "fsevents": "^1.2.7",[m
[32m+[m[32m            "glob-parent": "^3.1.0",[m
[32m+[m[32m            "inherits": "^2.0.3",[m
[32m+[m[32m            "is-binary-path": "^1.0.0",[m
[32m+[m[32m            "is-glob": "^4.0.0",[m
[32m+[m[32m            "normalize-path": "^3.0.0",[m
[32m+[m[32m            "path-is-absolute": "^1.0.0",[m
[32m+[m[32m            "readdirp": "^2.2.1",[m
[32m+[m[32m            "upath": "^1.1.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "fill-range": {[m
[32m+[m[32m          "version": "4.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "extend-shallow": "^2.0.1",[m
[32m+[m[32m            "is-number": "^3.0.0",[m
[32m+[m[32m            "repeat-string": "^1.6.1",[m
[32m+[m[32m            "to-regex-range": "^2.1.0"[m
[32m+[m[32m          },[m
[32m+[m[32m          "dependencies": {[m
[32m+[m[32m            "extend-shallow": {[m
[32m+[m[32m              "version": "2.0.1",[m
[32m+[m[32m              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",[m
[32m+[m[32m              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",[m
[32m+[m[32m              "dev": true,[m
[32m+[m[32m              "requires": {[m
[32m+[m[32m                "is-extendable": "^0.1.0"[m
[32m+[m[32m              }[m
[32m+[m[32m            }[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "fsevents": {[m
[32m+[m[32m          "version": "1.2.13",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-1.2.13.tgz",[m
[32m+[m[32m          "integrity": "sha512-oWb1Z6mkHIskLzEJ/XWX0srkpkTQ7vaopMQkyaEIoq0fmtFVxOthb8cCxeT+p3ynTdkk/RZwbgG4brR5BeWECw==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "optional": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "bindings": "^1.5.0",[m
[32m+[m[32m            "nan": "^2.12.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "glob-parent": {[m
[32m+[m[32m          "version": "3.1.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz",[m
[32m+[m[32m          "integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-glob": "^3.1.0",[m
[32m+[m[32m            "path-dirname": "^1.0.0"[m
[32m+[m[32m          },[m
[32m+[m[32m          "dependencies": {[m
[32m+[m[32m            "is-glob": {[m
[32m+[m[32m              "version": "3.1.0",[m
[32m+[m[32m              "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",[m
[32m+[m[32m              "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",[m
[32m+[m[32m              "dev": true,[m
[32m+[m[32m              "requires": {[m
[32m+[m[32m                "is-extglob": "^2.1.0"[m
[32m+[m[32m              }[m
[32m+[m[32m            }[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-binary-path": {[m
[32m+[m[32m          "version": "1.0.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-1.0.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-dfFmQrSA8YenEcgUFh/TpKdlWJg=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "binary-extensions": "^1.0.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-extendable": {[m
[32m+[m[32m          "version": "0.1.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-number": {[m
[32m+[m[32m          "version": "3.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "kind-of": "^3.0.2"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "kind-of": {[m
[32m+[m[32m          "version": "3.2.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-buffer": "^1.1.5"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "micromatch": {[m
[32m+[m[32m          "version": "3.1.10",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",[m
[32m+[m[32m          "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "arr-diff": "^4.0.0",[m
[32m+[m[32m            "array-unique": "^0.3.2",[m
[32m+[m[32m            "braces": "^2.3.1",[m
[32m+[m[32m            "define-property": "^2.0.2",[m
[32m+[m[32m            "extend-shallow": "^3.0.2",[m
[32m+[m[32m            "extglob": "^2.0.4",[m
[32m+[m[32m            "fragment-cache": "^0.2.1",[m
[32m+[m[32m            "kind-of": "^6.0.2",[m
[32m+[m[32m            "nanomatch": "^1.2.9",[m
[32m+[m[32m            "object.pick": "^1.3.0",[m
[32m+[m[32m            "regex-not": "^1.0.0",[m
[32m+[m[32m            "snapdragon": "^0.8.1",[m
[32m+[m[32m            "to-regex": "^3.0.2"[m
[32m+[m[32m          },[m
[32m+[m[32m          "dependencies": {[m
[32m+[m[32m            "kind-of": {[m
[32m+[m[32m              "version": "6.0.3",[m
[32m+[m[32m              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",[m
[32m+[m[32m              "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",[m
[32m+[m[32m              "dev": true[m
[32m+[m[32m            }[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "readdirp": {[m
[32m+[m[32m          "version": "2.2.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-2.2.1.tgz",[m
[32m+[m[32m          "integrity": "sha512-1JU/8q+VgFZyxwrJ+SVIOsh+KywWGpds3NTqikiKpDMZWScmAYyKIgqkO+ARvNWJfXeXR1zxz7aHF4u4CyH6vQ==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "graceful-fs": "^4.1.11",[m
[32m+[m[32m            "micromatch": "^3.1.10",[m
[32m+[m[32m            "readable-stream": "^2.0.2"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "to-regex-range": {[m
[32m+[m[32m          "version": "2.1.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-number": "^3.0.0",[m
[32m+[m[32m            "repeat-string": "^1.6.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "global-modules": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/global-modules/-/global-modules-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-sKzpEkf11GpOFuw0Zzjzmt4B4UZwjOcG757PPvrfhxcLFbq0wpsgpOqxpxtxFiCG4DtG93M6XRVbF2oGdev7bg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "global-prefix": "^1.0.1",[m
[32m+[m[32m        "is-windows": "^1.0.1",[m
[32m+[m[32m        "resolve-dir": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "global-prefix": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/global-prefix/-/global-prefix-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-2/dDxsFJklk8ZVVoy2btMsASLr4=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "expand-tilde": "^2.0.2",[m
[32m+[m[32m        "homedir-polyfill": "^1.0.1",[m
[32m+[m[32m        "ini": "^1.3.4",[m
[32m+[m[32m        "is-windows": "^1.0.1",[m
[32m+[m[32m        "which": "^1.2.14"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "glogg": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/glogg/-/glogg-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-5mwUoSuBk44Y4EshyiqcH95ZntbDdTQqA3QYSrxmzj28Ai0vXBGMH1ApSANH14j2sIRtqCEyg6PfsuP7ElOEDA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "sparkles": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "graceful-fs": {[m
[32m+[m[32m      "version": "4.2.9",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.9.tgz",[m
[32m+[m[32m      "integrity": "sha512-NtNxqUcXgpW2iMrfqSfR73Glt39K+BLwWsPs94yR63v45T0Wbej7eRmL5cWfwEgqXnmjQp3zaJTshdRW/qC2ZQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "gulp": {[m
[32m+[m[32m      "version": "4.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/gulp/-/gulp-4.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-dvEs27SCZt2ibF29xYgmnwwCYZxdxhQ/+LFWlbAW8y7jt68L/65402Lz3+CKy0Ov4rOs+NERmDq7YlZaDqUIfA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "glob-watcher": "^5.0.3",[m
[32m+[m[32m        "gulp-cli": "^2.2.0",[m
[32m+[m[32m        "undertaker": "^1.2.1",[m
[32m+[m[32m        "vinyl-fs": "^3.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "gulp-autoprefixer": {[m
[32m+[m[32m      "version": "7.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/gulp-autoprefixer/-/gulp-autoprefixer-7.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-QJGEmHw+bEt7FSqvmbAUTxbCuNLJYx4sz3ox9WouYqT/7j5FH5CQ8ZnpL1M7H5npX1bUJa7lUVY1w20jXxhOxg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "autoprefixer": "^9.6.1",[m
[32m+[m[32m        "fancy-log": "^1.3.2",[m
[32m+[m[32m        "plugin-error": "^1.0.1",[m
[32m+[m[32m        "postcss": "^7.0.17",[m
[32m+[m[32m        "through2": "^3.0.1",[m
[32m+[m[32m        "vinyl-sourcemaps-apply": "^0.2.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "gulp-clean-css": {[m
[32m+[m[32m      "version": "4.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/gulp-clean-css/-/gulp-clean-css-4.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-mGyeT3qqFXTy61j0zOIciS4MkYziF2U594t2Vs9rUnpkEHqfu6aDITMp8xOvZcvdX61Uz3y1mVERRYmjzQF5fg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "clean-css": "4.2.3",[m
[32m+[m[32m        "plugin-error": "1.0.1",[m
[32m+[m[32m        "through2": "3.0.1",[m
[32m+[m[32m        "vinyl-sourcemaps-apply": "0.2.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "through2": {[m
[32m+[m[32m          "version": "3.0.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/through2/-/through2-3.0.1.tgz",[m
[32m+[m[32m          "integrity": "sha512-M96dvTalPT3YbYLaKaCuwu+j06D/8Jfib0o/PxbVt6Amhv3dUAtW6rTV1jPgJSBG83I/e04Y6xkVdVhSRhi0ww==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "readable-stream": "2 || 3"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "gulp-cli": {[m
[32m+[m[32m      "version": "2.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/gulp-cli/-/gulp-cli-2.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-zzGBl5fHo0EKSXsHzjspp3y5CONegCm8ErO5Qh0UzFzk2y4tMvzLWhoDokADbarfZRL2pGpRp7yt6gfJX4ph7A==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "ansi-colors": "^1.0.1",[m
[32m+[m[32m        "archy": "^1.0.0",[m
[32m+[m[32m        "array-sort": "^1.0.0",[m
[32m+[m[32m        "color-support": "^1.1.3",[m
[32m+[m[32m        "concat-stream": "^1.6.0",[m
[32m+[m[32m        "copy-props": "^2.0.1",[m
[32m+[m[32m        "fancy-log": "^1.3.2",[m
[32m+[m[32m        "gulplog": "^1.0.0",[m
[32m+[m[32m        "interpret": "^1.4.0",[m
[32m+[m[32m        "isobject": "^3.0.1",[m
[32m+[m[32m        "liftoff": "^3.1.0",[m
[32m+[m[32m        "matchdep": "^2.0.0",[m
[32m+[m[32m        "mute-stdout": "^1.0.0",[m
[32m+[m[32m        "pretty-hrtime": "^1.0.0",[m
[32m+[m[32m        "replace-homedir": "^1.0.0",[m
[32m+[m[32m        "semver-greatest-satisfied-range": "^1.1.0",[m
[32m+[m[32m        "v8flags": "^3.2.0",[m
[32m+[m[32m        "yargs": "^7.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ansi-regex": {[m
[32m+[m[32m          "version": "2.1.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "cliui": {[m
[32m+[m[32m          "version": "3.2.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/cliui/-/cliui-3.2.0.tgz",[m
[32m+[m[32m          "integrity": "sha1-EgYBU3qRbSmUD5NNo7SNWFo5IT0=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "string-width": "^1.0.1",[m
[32m+[m[32m            "strip-ansi": "^3.0.1",[m
[32m+[m[32m            "wrap-ansi": "^2.0.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "get-caller-file": {[m
[32m+[m[32m          "version": "1.0.3",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-1.0.3.tgz",[m
[32m+[m[32m          "integrity": "sha512-3t6rVToeoZfYSGd8YoLFR2DJkiQrIiUrGcjvFX2mDw3bn6k2OtwHN0TNCLbBO+w8qTvimhDkv+LSscbJY1vE6w==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-fullwidth-code-point": {[m
[32m+[m[32m          "version": "1.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "number-is-nan": "^1.0.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "string-width": {[m
[32m+[m[32m          "version": "1.0.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",[m
[32m+[m[32m          "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "code-point-at": "^1.0.0",[m
[32m+[m[32m            "is-fullwidth-code-point": "^1.0.0",[m
[32m+[m[32m            "strip-ansi": "^3.0.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "strip-ansi": {[m
[32m+[m[32m          "version": "3.0.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "ansi-regex": "^2.0.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "wrap-ansi": {[m
[32m+[m[32m          "version": "2.1.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-2.1.0.tgz",[m
[32m+[m[32m          "integrity": "sha1-2Pw9KE3QV5T+hJc8rs3Rz4JP3YU=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "string-width": "^1.0.1",[m
[32m+[m[32m            "strip-ansi": "^3.0.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "y18n": {[m
[32m+[m[32m          "version": "3.2.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/y18n/-/y18n-3.2.2.tgz",[m
[32m+[m[32m          "integrity": "sha512-uGZHXkHnhF0XeeAPgnKfPv1bgKAYyVvmNL1xlKsPYZPaIHxGti2hHqvOCQv71XMsLxu1QjergkqogUnms5D3YQ==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "yargs": {[m
[32m+[m[32m          "version": "7.1.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/yargs/-/yargs-7.1.2.tgz",[m
[32m+[m[32m          "integrity": "sha512-ZEjj/dQYQy0Zx0lgLMLR8QuaqTihnxirir7EwUHp1Axq4e3+k8jXU5K0VLbNvedv1f4EWtBonDIZm0NUr+jCcA==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "camelcase": "^3.0.0",[m
[32m+[m[32m            "cliui": "^3.2.0",[m
[32m+[m[32m            "decamelize": "^1.1.1",[m
[32m+[m[32m            "get-caller-file": "^1.0.1",[m
[32m+[m[32m            "os-locale": "^1.4.0",[m
[32m+[m[32m            "read-pkg-up": "^1.0.1",[m
[32m+[m[32m            "require-directory": "^2.1.1",[m
[32m+[m[32m            "require-main-filename": "^1.0.1",[m
[32m+[m[32m            "set-blocking": "^2.0.0",[m
[32m+[m[32m            "string-width": "^1.0.2",[m
[32m+[m[32m            "which-module": "^1.0.0",[m
[32m+[m[32m            "y18n": "^3.2.1",[m
[32m+[m[32m            "yargs-parser": "^5.0.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "yargs-parser": {[m
[32m+[m[32m          "version": "5.0.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-5.0.1.tgz",[m
[32m+[m[32m          "integrity": "sha512-wpav5XYiddjXxirPoCTUPbqM0PXvJ9hiBMvuJgInvo4/lAOTZzUprArw17q2O1P2+GHhbBr18/iQwjL5Z9BqfA==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "camelcase": "^3.0.0",[m
[32m+[m[32m            "object.assign": "^4.1.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "gulp-sass": {[m
[32m+[m[32m      "version": "5.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/gulp-sass/-/gulp-sass-5.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-7VT0uaF+VZCmkNBglfe1b34bxn/AfcssquLKVDYnCDJ3xNBaW7cUuI3p3BQmoKcoKFrs9jdzUxyb+u+NGfL4OQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "lodash.clonedeep": "^4.5.0",[m
[32m+[m[32m        "picocolors": "^1.0.0",[m
[32m+[m[32m        "plugin-error": "^1.0.1",[m
[32m+[m[32m        "replace-ext": "^2.0.0",[m
[32m+[m[32m        "strip-ansi": "^6.0.1",[m
[32m+[m[32m        "vinyl-sourcemaps-apply": "^0.2.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "picocolors": {[m
[32m+[m[32m          "version": "1.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "gulplog": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/gulplog/-/gulplog-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-4oxNRdBey77YGDY86PnFkmIp/+U=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "glogg": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "has": {[m
[32m+[m[32m      "version": "1.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "function-bind": "^1.1.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "has-ansi": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/has-ansi/-/has-ansi-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-NPUEnOHs3ysGSa8+8k5F7TVBbZE=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "ansi-regex": "^2.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ansi-regex": {[m
[32m+[m[32m          "version": "2.1.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "has-cors": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/has-cors/-/has-cors-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-XkdHk/fqmEPRu5nCPu9J/xJv/zk=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "has-symbols": {[m
[32m+[m[32m      "version": "1.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "has-value": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "get-value": "^2.0.6",[m
[32m+[m[32m        "has-values": "^1.0.0",[m
[32m+[m[32m        "isobject": "^3.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "has-values": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "is-number": "^3.0.0",[m
[32m+[m[32m        "kind-of": "^4.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-number": {[m
[32m+[m[32m          "version": "3.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "kind-of": "^3.0.2"[m
[32m+[m[32m          },[m
[32m+[m[32m          "dependencies": {[m
[32m+[m[32m            "kind-of": {[m
[32m+[m[32m              "version": "3.2.2",[m
[32m+[m[32m              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m              "dev": true,[m
[32m+[m[32m              "requires": {[m
[32m+[m[32m                "is-buffer": "^1.1.5"[m
[32m+[m[32m              }[m
[32m+[m[32m            }[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "kind-of": {[m
[32m+[m[32m          "version": "4.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-buffer": "^1.1.5"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "homedir-polyfill": {[m
[32m+[m[32m      "version": "1.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/homedir-polyfill/-/homedir-polyfill-1.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-eSmmWE5bZTK2Nou4g0AI3zZ9rswp7GRKoKXS1BLUkvPviOqs4YTN1djQIqrXy9k5gEtdLPy86JjRwsNM9tnDcA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "parse-passwd": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "hosted-git-info": {[m
[32m+[m[32m      "version": "2.8.9",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",[m
[32m+[m[32m      "integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "http-errors": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "depd": "2.0.0",[m
[32m+[m[32m        "inherits": "2.0.4",[m
[32m+[m[32m        "setprototypeof": "1.2.0",[m
[32m+[m[32m        "statuses": "2.0.1",[m
[32m+[m[32m        "toidentifier": "1.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "statuses": {[m
[32m+[m[32m          "version": "2.0.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",[m
[32m+[m[32m          "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "http-proxy": {[m
[32m+[m[32m      "version": "1.18.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/http-proxy/-/http-proxy-1.18.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-7mz/721AbnJwIVbnaSv1Cz3Am0ZLT/UBwkC92VlxhXv/k/BBQfM2fXElQNC27BVGr0uwUpplYPQM9LnaBMR5NQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "eventemitter3": "^4.0.0",[m
[32m+[m[32m        "follow-redirects": "^1.0.0",[m
[32m+[m[32m        "requires-port": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "iconv-lite": {[m
[32m+[m[32m      "version": "0.4.24",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",[m
[32m+[m[32m      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "safer-buffer": ">= 2.1.2 < 3"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "immutable": {[m
[32m+[m[32m      "version": "3.8.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/immutable/-/immutable-3.8.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-wkOZUUVbs5kT2vKBN28VMOEErfM=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "inflight": {[m
[32m+[m[32m      "version": "1.0.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",[m
[32m+[m[32m      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "once": "^1.3.0",[m
[32m+[m[32m        "wrappy": "1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "inherits": {[m
[32m+[m[32m      "version": "2.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "ini": {[m
[32m+[m[32m      "version": "1.3.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",[m
[32m+[m[32m      "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "interpret": {[m
[32m+[m[32m      "version": "1.4.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/interpret/-/interpret-1.4.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-agE4QfB2Lkp9uICn7BAqoscw4SZP9kTE2hxiFI3jBPmXJfdqiahTbUuKGsMoN2GtqL9AxhYioAcVvgsb1HvRbA==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "invert-kv": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/invert-kv/-/invert-kv-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-EEqOSqym09jNFXqO+L+rLXo//bY=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "is-absolute": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-absolute/-/is-absolute-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-dOWoqflvcydARa360Gvv18DZ/gRuHKi2NU/wU5X1ZFzdYfH29nkiNZsF3mp4OJ3H4yo9Mx8A/uAGNzpzPN3yBA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "is-relative": "^1.0.0",[m
[32m+[m[32m        "is-windows": "^1.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "is-accessor-descriptor": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "kind-of": "^6.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": {[m
[32m+[m[32m          "version": "6.0.3",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",[m
[32m+[m[32m          "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "is-arrayish": {[m
[32m+[m[32m      "version": "0.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "is-binary-path": {[m
[32m+[m[32m      "version": "2.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "binary-extensions": "^2.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "is-buffer": {[m
[32m+[m[32m      "version": "1.1.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "is-core-module": {[m
[32m+[m[32m      "version": "2.8.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.8.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-SdNCUs284hr40hFTFP6l0IfZ/RSrMXF3qgoRHd3/79unUTvrFO/JoXwkGm+5J/Oe3E/b5GsnG330uUNgRpu1PA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "has": "^1.0.3"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "is-data-descriptor": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "kind-of": "^6.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": {[m
[32m+[m[32m          "version": "6.0.3",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",[m
[32m+[m[32m          "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "is-descriptor": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "is-accessor-descriptor": "^1.0.0",[m
[32m+[m[32m        "is-data-descriptor": "^1.0.0",[m
[32m+[m[32m        "kind-of": "^6.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": {[m
[32m+[m[32m          "version": "6.0.3",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",[m
[32m+[m[32m          "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "is-extendable": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "is-plain-object": "^2.0.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-plain-object": {[m
[32m+[m[32m          "version": "2.0.4",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",[m
[32m+[m[32m          "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "isobject": "^3.0.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "is-extglob": {[m
[32m+[m[32m      "version": "2.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "is-fullwidth-code-point": {[m
[32m+[m[32m      "version": "3.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "is-glob": {[m
[32m+[m[32m      "version": "4.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "is-extglob": "^2.1.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "is-negated-glob": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-negated-glob/-/is-negated-glob-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-aRC8pdqMleeEtXUbl2z1oQ/uNtI=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "is-number": {[m
[32m+[m[32m      "version": "7.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "is-number-like": {[m
[32m+[m[32m      "version": "1.0.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-number-like/-/is-number-like-1.0.8.tgz",[m
[32m+[m[32m      "integrity": "sha512-6rZi3ezCyFcn5L71ywzz2bS5b2Igl1En3eTlZlvKjpz1n3IZLAYMbKYAIQgFmEu0GENg92ziU/faEOA/aixjbA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "lodash.isfinite": "^3.3.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "is-plain-object": {[m
[32m+[m[32m      "version": "5.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-5.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-VRSzKkbMm5jMDoKLbltAkFQ5Qr7VDiTFGXxYFXXowVj387GeGNOCsOH6Msy00SGZ3Fp84b1Naa1psqgcCIEP5Q==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "is-relative": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-relative/-/is-relative-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-Kw/ReK0iqwKeu0MITLFuj0jbPAmEiOsIwyIXvvbfa6QfmN9pkD1M+8pdk7Rl/dTKbH34/XBFMbgD4iMJhLQbGA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "is-unc-path": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "is-unc-path": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-unc-path/-/is-unc-path-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-mrGpVd0fs7WWLfVsStvgF6iEJnbjDFZh9/emhRDcGWTduTfNHd9CHeUwH3gYIjdbwo4On6hunkztwOaAw0yllQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "unc-path-regex": "^0.1.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "is-utf8": {[m
[32m+[m[32m      "version": "0.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-utf8/-/is-utf8-0.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-Sw2hRCEE0bM2NA6AeX6GXPOffXI=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "is-valid-glob": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-valid-glob/-/is-valid-glob-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-Kb8+/3Ab4tTTFdusw5vDn+j2Aao=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "is-windows": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "is-wsl": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-HxbkqiKwTRM2tmGIpmrzxgDDpm0=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "isarray": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "isexe": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "isobject": {[m
[32m+[m[32m      "version": "3.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "json-stable-stringify-without-jsonify": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-nbe1lJatPzz+8wp1FC0tkwrXJlE=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "jsonfile": {[m
[32m+[m[32m      "version": "3.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-3.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-pezG9l9T9mLEQVx2daAzHQmS7GY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "graceful-fs": "^4.1.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "just-debounce": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/just-debounce/-/just-debounce-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-qpcRocdkUmf+UTNBYx5w6dexX5J31AKK1OmPwH630a83DdVVUIngk55RSAiIGpQyoH0dlr872VHfPjnQnK1qDQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "kind-of": {[m
[32m+[m[32m      "version": "5.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "last-run": {[m
[32m+[m[32m      "version": "1.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/last-run/-/last-run-1.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-RblpQsF7HHnHchmCWbqUO+v4yls=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "default-resolution": "^2.0.0",[m
[32m+[m[32m        "es6-weak-map": "^2.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "lazystream": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/lazystream/-/lazystream-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-b94GiNHQNy6JNTrt5w6zNyffMrNkXZb3KTkCZJb2V1xaEGCk093vkZ2jk3tpaeP33/OiXC+WvK9AxUebnf5nbw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "readable-stream": "^2.0.5"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "lcid": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/lcid/-/lcid-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-MIrMr6C8SDo4Z7S28rlQYlHRuDU=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "invert-kv": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "lead": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/lead/-/lead-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-bxT5mje+Op3XhPVJVpDlkDRm7kI=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "flush-write-stream": "^1.0.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "liftoff": {[m
[32m+[m[32m      "version": "3.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/liftoff/-/liftoff-3.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-DlIPlJUkCV0Ips2zf2pJP0unEoT1kwYhiiPUGF3s/jtxTCjziNLoiVVh+jqWOWeFi6mmwQ5fNxvAUyPad4Dfog==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "extend": "^3.0.0",[m
[32m+[m[32m        "findup-sync": "^3.0.0",[m
[32m+[m[32m        "fined": "^1.0.1",[m
[32m+[m[32m        "flagged-respawn": "^1.0.0",[m
[32m+[m[32m        "is-plain-object": "^2.0.4",[m
[32m+[m[32m        "object.map": "^1.0.0",[m
[32m+[m[32m        "rechoir": "^0.6.2",[m
[32m+[m[32m        "resolve": "^1.1.7"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-plain-object": {[m
[32m+[m[32m          "version": "2.0.4",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",[m
[32m+[m[32m          "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "isobject": "^3.0.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "limiter": {[m
[32m+[m[32m      "version": "1.1.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/limiter/-/limiter-1.1.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-FWWMIEOxz3GwUI4Ts/IvgVy6LPvoMPgjMdQ185nN6psJyBJ4yOpzqm695/h5umdLJg2vW3GR5iG11MAkR2AzJA==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "load-json-file": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-lWkFcI1YtLq0wiYbBPWfMcmTdMA=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "graceful-fs": "^4.1.2",[m
[32m+[m[32m        "parse-json": "^2.2.0",[m
[32m+[m[32m        "pify": "^2.0.0",[m
[32m+[m[32m        "pinkie-promise": "^2.0.0",[m
[32m+[m[32m        "strip-bom": "^2.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "localtunnel": {[m
[32m+[m[32m      "version": "2.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/localtunnel/-/localtunnel-2.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-n418Cn5ynvJd7m/N1d9WVJISLJF/ellZnfsLnx8WBWGzxv/ntNcFkJ1o6se5quUhCplfLGBNL5tYHiq5WF3Nug==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "axios": "0.21.4",[m
[32m+[m[32m        "debug": "4.3.2",[m
[32m+[m[32m        "openurl": "1.1.1",[m
[32m+[m[32m        "yargs": "17.1.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "debug": {[m
[32m+[m[32m          "version": "4.3.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.2.tgz",[m
[32m+[m[32m          "integrity": "sha512-mOp8wKcvj7XxC78zLgw/ZA+6TSgkoE2C/ienthhRD298T7UNwAg9diBpLRxC0mOezLl4B0xV7M0cCO6P/O0Xhw==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "ms": "2.1.2"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "ms": {[m
[32m+[m[32m          "version": "2.1.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",[m
[32m+[m[32m          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "yargs": {[m
[32m+[m[32m          "version": "17.1.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/yargs/-/yargs-17.1.1.tgz",[m
[32m+[m[32m          "integrity": "sha512-c2k48R0PwKIqKhPMWjeiF6y2xY/gPMUlro0sgxqXpbOIohWiLNXWslsootttv7E1e73QPAMQSg5FeySbVcpsPQ==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "cliui": "^7.0.2",[m
[32m+[m[32m            "escalade": "^3.1.1",[m
[32m+[m[32m            "get-caller-file": "^2.0.5",[m
[32m+[m[32m            "require-directory": "^2.1.1",[m
[32m+[m[32m            "string-width": "^4.2.0",[m
[32m+[m[32m            "y18n": "^5.0.5",[m
[32m+[m[32m            "yargs-parser": "^20.2.2"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "yargs-parser": {[m
[32m+[m[32m          "version": "20.2.9",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.9.tgz",[m
[32m+[m[32m          "integrity": "sha512-y11nGElTIV+CT3Zv9t7VKl+Q3hTQoT9a1Qzezhhl6Rp21gJ/IVTW7Z3y9EWXhuUBC2Shnf+DX0antecpAwSP8w==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "lodash": {[m
[32m+[m[32m      "version": "4.17.21",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",[m
[32m+[m[32m      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "lodash.clonedeep": {[m
[32m+[m[32m      "version": "4.5.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/lodash.clonedeep/-/lodash.clonedeep-4.5.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-4j8/nE+Pvd6HJSnBBxhXoIblzO8=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "lodash.isfinite": {[m
[32m+[m[32m      "version": "3.3.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/lodash.isfinite/-/lodash.isfinite-3.3.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-+4m2WpqAKBgz8LdHizpRBPiY67M=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "make-iterator": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/make-iterator/-/make-iterator-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-pxiuXh0iVEq7VM7KMIhs5gxsfxCux2URptUQaXo4iZZJxBAzTPOLE2BumO5dbfVYq/hBJFBR/a1mFDmOx5AGmw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "kind-of": "^6.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": {[m
[32m+[m[32m          "version": "6.0.3",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",[m
[32m+[m[32m          "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "map-cache": {[m
[32m+[m[32m      "version": "0.2.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "map-visit": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "object-visit": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "matchdep": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/matchdep/-/matchdep-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-xvNINKDY28OzfCfui7yyfHd1WC4=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "findup-sync": "^2.0.0",[m
[32m+[m[32m        "micromatch": "^3.0.4",[m
[32m+[m[32m        "resolve": "^1.4.0",[m
[32m+[m[32m        "stack-trace": "0.0.10"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "braces": {[m
[32m+[m[32m          "version": "2.3.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",[m
[32m+[m[32m          "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "arr-flatten": "^1.1.0",[m
[32m+[m[32m            "array-unique": "^0.3.2",[m
[32m+[m[32m            "extend-shallow": "^2.0.1",[m
[32m+[m[32m            "fill-range": "^4.0.0",[m
[32m+[m[32m            "isobject": "^3.0.1",[m
[32m+[m[32m            "repeat-element": "^1.1.2",[m
[32m+[m[32m            "snapdragon": "^0.8.1",[m
[32m+[m[32m            "snapdragon-node": "^2.0.1",[m
[32m+[m[32m            "split-string": "^3.0.2",[m
[32m+[m[32m            "to-regex": "^3.0.1"[m
[32m+[m[32m          },[m
[32m+[m[32m          "dependencies": {[m
[32m+[m[32m            "extend-shallow": {[m
[32m+[m[32m              "version": "2.0.1",[m
[32m+[m[32m              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",[m
[32m+[m[32m              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",[m
[32m+[m[32m              "dev": true,[m
[32m+[m[32m              "requires": {[m
[32m+[m[32m                "is-extendable": "^0.1.0"[m
[32m+[m[32m              }[m
[32m+[m[32m            }[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "fill-range": {[m
[32m+[m[32m          "version": "4.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "extend-shallow": "^2.0.1",[m
[32m+[m[32m            "is-number": "^3.0.0",[m
[32m+[m[32m            "repeat-string": "^1.6.1",[m
[32m+[m[32m            "to-regex-range": "^2.1.0"[m
[32m+[m[32m          },[m
[32m+[m[32m          "dependencies": {[m
[32m+[m[32m            "extend-shallow": {[m
[32m+[m[32m              "version": "2.0.1",[m
[32m+[m[32m              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",[m
[32m+[m[32m              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",[m
[32m+[m[32m              "dev": true,[m
[32m+[m[32m              "requires": {[m
[32m+[m[32m                "is-extendable": "^0.1.0"[m
[32m+[m[32m              }[m
[32m+[m[32m            }[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "findup-sync": {[m
[32m+[m[32m          "version": "2.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/findup-sync/-/findup-sync-2.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha1-kyaxSIwi0aYIhlCoaQGy2akKLLw=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "detect-file": "^1.0.0",[m
[32m+[m[32m            "is-glob": "^3.1.0",[m
[32m+[m[32m            "micromatch": "^3.0.4",[m
[32m+[m[32m            "resolve-dir": "^1.0.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-extendable": {[m
[32m+[m[32m          "version": "0.1.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-glob": {[m
[32m+[m[32m          "version": "3.1.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",[m
[32m+[m[32m          "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-extglob": "^2.1.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-number": {[m
[32m+[m[32m          "version": "3.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "kind-of": "^3.0.2"[m
[32m+[m[32m          },[m
[32m+[m[32m          "dependencies": {[m
[32m+[m[32m            "kind-of": {[m
[32m+[m[32m              "version": "3.2.2",[m
[32m+[m[32m              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m              "dev": true,[m
[32m+[m[32m              "requires": {[m
[32m+[m[32m                "is-buffer": "^1.1.5"[m
[32m+[m[32m              }[m
[32m+[m[32m            }[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "kind-of": {[m
[32m+[m[32m          "version": "6.0.3",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",[m
[32m+[m[32m          "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "micromatch": {[m
[32m+[m[32m          "version": "3.1.10",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",[m
[32m+[m[32m          "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "arr-diff": "^4.0.0",[m
[32m+[m[32m            "array-unique": "^0.3.2",[m
[32m+[m[32m            "braces": "^2.3.1",[m
[32m+[m[32m            "define-property": "^2.0.2",[m
[32m+[m[32m            "extend-shallow": "^3.0.2",[m
[32m+[m[32m            "extglob": "^2.0.4",[m
[32m+[m[32m            "fragment-cache": "^0.2.1",[m
[32m+[m[32m            "kind-of": "^6.0.2",[m
[32m+[m[32m            "nanomatch": "^1.2.9",[m
[32m+[m[32m            "object.pick": "^1.3.0",[m
[32m+[m[32m            "regex-not": "^1.0.0",[m
[32m+[m[32m            "snapdragon": "^0.8.1",[m
[32m+[m[32m            "to-regex": "^3.0.2"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "to-regex-range": {[m
[32m+[m[32m          "version": "2.1.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-number": "^3.0.0",[m
[32m+[m[32m            "repeat-string": "^1.6.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "micromatch": {[m
[32m+[m[32m      "version": "4.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-pRmzw/XUcwXGpD9aI9q/0XOwLNygjETJ8y0ao0wdqprrzDa4YnxLcz7fQRZr8voh8V10kGhABbNcHVk5wHgWwg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "braces": "^3.0.1",[m
[32m+[m[32m        "picomatch": "^2.2.3"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "mime": {[m
[32m+[m[32m      "version": "1.4.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/mime/-/mime-1.4.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-KI1+qOZu5DcW6wayYHSzR/tXKCDC5Om4s1z2QJjDULzLcmf3DvzS7oluY4HCTrc+9FiKmWUgeNLg7W3uIQvxtQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "mime-db": {[m
[32m+[m[32m      "version": "1.52.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "mime-types": {[m
[32m+[m[32m      "version": "2.1.35",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",[m
[32m+[m[32m      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "mime-db": "1.52.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "minimatch": {[m
[32m+[m[32m      "version": "3.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "brace-expansion": "^1.1.7"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "mitt": {[m
[32m+[m[32m      "version": "1.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/mitt/-/mitt-1.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-r6lj77KlwqLhIUku9UWYes7KJtsczvolZkzp8hbaDPPaE24OmWl5s539Mytlj22siEQKosZ26qCBgda2PKwoJw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "mixin-deep": {[m
[32m+[m[32m      "version": "1.3.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "for-in": "^1.0.2",[m
[32m+[m[32m        "is-extendable": "^1.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "ms": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "mute-stdout": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/mute-stdout/-/mute-stdout-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-kDcwXR4PS7caBpuRYYBUz9iVixUk3anO3f5OYFiIPwK/20vCzKCHyKoulbiDY1S53zD2bxUpxN/IJ+TnXjfvxg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "nan": {[m
[32m+[m[32m      "version": "2.15.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/nan/-/nan-2.15.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-8ZtvEnA2c5aYCZYd1cvgdnU6cqwixRoYg70xPLWUws5ORTa/lnw+u4amixRS/Ac5U5mQVgp9pnlSUnbNWFaWZQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "optional": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "nanomatch": {[m
[32m+[m[32m      "version": "1.2.13",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz",[m
[32m+[m[32m      "integrity": "sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "arr-diff": "^4.0.0",[m
[32m+[m[32m        "array-unique": "^0.3.2",[m
[32m+[m[32m        "define-property": "^2.0.2",[m
[32m+[m[32m        "extend-shallow": "^3.0.2",[m
[32m+[m[32m        "fragment-cache": "^0.2.1",[m
[32m+[m[32m        "is-windows": "^1.0.2",[m
[32m+[m[32m        "kind-of": "^6.0.2",[m
[32m+[m[32m        "object.pick": "^1.3.0",[m
[32m+[m[32m        "regex-not": "^1.0.0",[m
[32m+[m[32m        "snapdragon": "^0.8.1",[m
[32m+[m[32m        "to-regex": "^3.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": {[m
[32m+[m[32m          "version": "6.0.3",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",[m
[32m+[m[32m          "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "negotiator": {[m
[32m+[m[32m      "version": "0.6.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "next-tick": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/next-tick/-/next-tick-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-CXdUiJembsNjuToQvxayPZF9Vqht7hewsvy2sOWafLvi2awflj9mOC6bHIg50orX8IJvWKY9wYQ/zB2kogPslQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "node-releases": {[m
[32m+[m[32m      "version": "2.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-XxYDdcQ6eKqp/YjI+tb2C5WM2LgjnZrfYg4vgQt49EK268b6gYCHsBLrK2qvJo4FmCtqmKezb0WZFK4fkrZNsg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "normalize-package-data": {[m
[32m+[m[32m      "version": "2.5.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "hosted-git-info": "^2.1.4",[m
[32m+[m[32m        "resolve": "^1.10.0",[m
[32m+[m[32m        "semver": "2 || 3 || 4 || 5",[m
[32m+[m[32m        "validate-npm-package-license": "^3.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "normalize-path": {[m
[32m+[m[32m      "version": "3.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "normalize-range": {[m
[32m+[m[32m      "version": "0.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-LRDAa9/TEuqXd2laTShDlFa3WUI=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "now-and-later": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/now-and-later/-/now-and-later-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-KGvQ0cB70AQfg107Xvs/Fbu+dGmZoTRJp2TaPwcwQm3/7PteUyN2BCgk8KBMPGBUXZdVwyWS8fDCGFygBm19UQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "once": "^1.3.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "num2fraction": {[m
[32m+[m[32m      "version": "1.2.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/num2fraction/-/num2fraction-1.2.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-b2gragJ6Tp3fpFZM0lidHU5mnt4=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "number-is-nan": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "object-assign": {[m
[32m+[m[32m      "version": "4.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "object-copy": {[m
[32m+[m[32m      "version": "0.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "copy-descriptor": "^0.1.0",[m
[32m+[m[32m        "define-property": "^0.2.5",[m
[32m+[m[32m        "kind-of": "^3.0.3"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "define-property": {[m
[32m+[m[32m          "version": "0.2.5",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",[m
[32m+[m[32m          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-descriptor": "^0.1.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-accessor-descriptor": {[m
[32m+[m[32m          "version": "0.1.6",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",[m
[32m+[m[32m          "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "kind-of": "^3.0.2"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-data-descriptor": {[m
[32m+[m[32m          "version": "0.1.4",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",[m
[32m+[m[32m          "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "kind-of": "^3.0.2"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-descriptor": {[m
[32m+[m[32m          "version": "0.1.6",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",[m
[32m+[m[32m          "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-accessor-descriptor": "^0.1.6",[m
[32m+[m[32m            "is-data-descriptor": "^0.1.4",[m
[32m+[m[32m            "kind-of": "^5.0.0"[m
[32m+[m[32m          },[m
[32m+[m[32m          "dependencies": {[m
[32m+[m[32m            "kind-of": {[m
[32m+[m[32m              "version": "5.1.0",[m
[32m+[m[32m              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",[m
[32m+[m[32m              "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",[m
[32m+[m[32m              "dev": true[m
[32m+[m[32m            }[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "kind-of": {[m
[32m+[m[32m          "version": "3.2.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-buffer": "^1.1.5"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "object-keys": {[m
[32m+[m[32m      "version": "1.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "object-visit": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "isobject": "^3.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "object.assign": {[m
[32m+[m[32m      "version": "4.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-ixT2L5THXsApyiUPYKmW+2EHpXXe5Ii3M+f4e+aJFAHao5amFRW6J0OO6c/LU8Be47utCx2GL89hxGB6XSmKuQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "call-bind": "^1.0.0",[m
[32m+[m[32m        "define-properties": "^1.1.3",[m
[32m+[m[32m        "has-symbols": "^1.0.1",[m
[32m+[m[32m        "object-keys": "^1.1.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "object.defaults": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/object.defaults/-/object.defaults-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-On+GgzS0B96gbaFtiNXNKeQ1/s8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "array-each": "^1.0.1",[m
[32m+[m[32m        "array-slice": "^1.0.0",[m
[32m+[m[32m        "for-own": "^1.0.0",[m
[32m+[m[32m        "isobject": "^3.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "object.map": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/object.map/-/object.map-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-z4Plncj8wK1fQlDh94s7gb2AHTc=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "for-own": "^1.0.0",[m
[32m+[m[32m        "make-iterator": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "object.pick": {[m
[32m+[m[32m      "version": "1.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "isobject": "^3.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "object.reduce": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/object.reduce/-/object.reduce-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-b+NI8qx/oPlcpiEiZZkJaCW7A60=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "for-own": "^1.0.0",[m
[32m+[m[32m        "make-iterator": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "on-finished": {[m
[32m+[m[32m      "version": "2.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "ee-first": "1.1.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "once": {[m
[32m+[m[32m      "version": "1.4.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "wrappy": "1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "openurl": {[m
[32m+[m[32m      "version": "1.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/openurl/-/openurl-1.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-OHW0sO96UsFW8NtB1GCduw+Us4c=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "opn": {[m
[32m+[m[32m      "version": "5.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/opn/-/opn-5.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-bYJHo/LOmoTd+pfiYhfZDnf9zekVJrY+cnS2a5F2x+w5ppvTqObojTP7WiFG+kVZs9Inw+qQ/lw7TroWwhdd2g==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "is-wsl": "^1.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "ordered-read-streams": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ordered-read-streams/-/ordered-read-streams-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-d8DLN8QVJdZBZtmQ/61+xqDhNj4=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "readable-stream": "^2.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "os-locale": {[m
[32m+[m[32m      "version": "1.4.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/os-locale/-/os-locale-1.4.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-IPnxeuKe00XoveWDsT0gCYA8FNk=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "lcid": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "parse-filepath": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/parse-filepath/-/parse-filepath-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-pjISf1Oq89FYdvWHLz/6x2PWyJE=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "is-absolute": "^1.0.0",[m
[32m+[m[32m        "map-cache": "^0.2.0",[m
[32m+[m[32m        "path-root": "^0.1.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "parse-json": {[m
[32m+[m[32m      "version": "2.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "error-ex": "^1.2.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "parse-node-version": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/parse-node-version/-/parse-node-version-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-3YHlOa/JgH6Mnpr05jP9eDG254US9ek25LyIxZlDItp2iJtwyaXQb57lBYLdT3MowkUFYEV2XXNAYIPlESvJlA==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "parse-passwd": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/parse-passwd/-/parse-passwd-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-bVuTSkVpk7I9N/QKOC1vFmao5cY=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "parseqs": {[m
[32m+[m[32m      "version": "0.0.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/parseqs/-/parseqs-0.0.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-jeAGzMDbfSHHA091hr0r31eYfTig+29g3GKKE/PPbEQ65X0lmMwlEoqmhzu0iztID5uJpZsFlUPDP8ThPL7M8w==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "parseuri": {[m
[32m+[m[32m      "version": "0.0.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/parseuri/-/parseuri-0.0.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-AUjen8sAkGgao7UyCX6Ahv0gIK2fABKmYjvP4xmy5JaKvcbTRueIqIPHLAfq30xJddqSE033IOMUSOMCcK3Sow==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "parseurl": {[m
[32m+[m[32m      "version": "1.3.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "pascalcase": {[m
[32m+[m[32m      "version": "0.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "path-dirname": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/path-dirname/-/path-dirname-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-zDPSTVJeCZpTiMAzbG4yuRYGCeA=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "path-exists": {[m
[32m+[m[32m      "version": "2.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-2.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-D+tsZPD8UY2adU3V77YscCJ2H0s=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "pinkie-promise": "^2.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "path-is-absolute": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "path-parse": {[m
[32m+[m[32m      "version": "1.0.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "path-root": {[m
[32m+[m[32m      "version": "0.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/path-root/-/path-root-0.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-mkpoFMrBwM1zNgqV8yCDyOpHRbc=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "path-root-regex": "^0.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "path-root-regex": {[m
[32m+[m[32m      "version": "0.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/path-root-regex/-/path-root-regex-0.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-v8zcjfWxLcUsi0PsONGNcsBLqW0=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "path-type": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/path-type/-/path-type-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-WcRPfuSR2nBNpBXaWkBwuk+P5EE=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "graceful-fs": "^4.1.2",[m
[32m+[m[32m        "pify": "^2.0.0",[m
[32m+[m[32m        "pinkie-promise": "^2.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "picocolors": {[m
[32m+[m[32m      "version": "0.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-0.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-cMlDqaLEqfSaW8Z7N5Jw+lyIW869EzT73/F5lhtY9cLGoVxSXznfgfXMO0Z5K0o0Q2TkTXq+0KFsdnSe3jDViA==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "picomatch": {[m
[32m+[m[32m      "version": "2.3.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "pify": {[m
[32m+[m[32m      "version": "2.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "pinkie": {[m
[32m+[m[32m      "version": "2.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha1-clVrgM+g1IqXToDnckjoDtT3+HA=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "pinkie-promise": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-ITXW36ejWMBprJsXh3YogihFD/o=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "pinkie": "^2.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "plugin-error": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/plugin-error/-/plugin-error-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-L1zP0dk7vGweZME2i+EeakvUNqSrdiI3F91TwEoYiGrAfUXmVv6fJIq4g82PAXxNsWOp0J7ZqQy/3Szz0ajTxA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "ansi-colors": "^1.0.1",[m
[32m+[m[32m        "arr-diff": "^4.0.0",[m
[32m+[m[32m        "arr-union": "^3.1.0",[m
[32m+[m[32m        "extend-shallow": "^3.0.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "portscanner": {[m
[32m+[m[32m      "version": "2.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/portscanner/-/portscanner-2.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-6rtAnk3iSVD1oqUW01rnaTQ/u5Y=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "async": "1.5.2",[m
[32m+[m[32m        "is-number-like": "^1.0.3"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "posix-character-classes": {[m
[32m+[m[32m      "version": "0.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "postcss": {[m
[32m+[m[32m      "version": "7.0.39",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/postcss/-/postcss-7.0.39.tgz",[m
[32m+[m[32m      "integrity": "sha512-yioayjNbHn6z1/Bywyb2Y4s3yvDAeXGOyxqD+LnVOinq6Mdmd++SW2wUNVzavyyHxd6+DxzWGIuosg6P1Rj8uA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "picocolors": "^0.2.1",[m
[32m+[m[32m        "source-map": "^0.6.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "postcss-value-parser": {[m
[32m+[m[32m      "version": "4.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "pretty-hrtime": {[m
[32m+[m[32m      "version": "1.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/pretty-hrtime/-/pretty-hrtime-1.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha1-t+PqQkNaTJsnWdmeDyAesZWALuE=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "process-nextick-args": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "pump": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/pump/-/pump-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-ruPMNRkN3MHP1cWJc9OWr+T/xDP0jhXYCLfJcBuX54hhfIBnaQmAUMfDcG4DM5UMWByBbJY69QSphm3jtDKIkA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "end-of-stream": "^1.1.0",[m
[32m+[m[32m        "once": "^1.3.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "pumpify": {[m
[32m+[m[32m      "version": "1.5.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/pumpify/-/pumpify-1.5.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-oClZI37HvuUJJxSKKrC17bZ9Cu0ZYhEAGPsPUy9KlMUmv9dKX2o77RUmq7f3XjIxbwyGwYzbzQ1L2Ks8sIradQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "duplexify": "^3.6.0",[m
[32m+[m[32m        "inherits": "^2.0.3",[m
[32m+[m[32m        "pump": "^2.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "qs": {[m
[32m+[m[32m      "version": "6.2.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/qs/-/qs-6.2.3.tgz",[m
[32m+[m[32m      "integrity": "sha1-HPyyXBCpsrSDBT/zn138kjOQjP4=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "range-parser": {[m
[32m+[m[32m      "version": "1.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "raw-body": {[m
[32m+[m[32m      "version": "2.5.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-qqJBtEyVgS0ZmPGdCFPWJ3FreoqvG4MVQln/kCgF7Olq95IbOp0/BWyMwbdtn4VTvkM8Y7khCQ2Xgk/tcrCXig==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "bytes": "3.1.2",[m
[32m+[m[32m        "http-errors": "2.0.0",[m
[32m+[m[32m        "iconv-lite": "0.4.24",[m
[32m+[m[32m        "unpipe": "1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "read-pkg": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-9f+qXs0pyzHAR0vKfXVra7KePyg=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "load-json-file": "^1.0.0",[m
[32m+[m[32m        "normalize-package-data": "^2.3.2",[m
[32m+[m[32m        "path-type": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "read-pkg-up": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-nWPBMnbAZZGNV/ACpX9AobZD+wI=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "find-up": "^1.0.0",[m
[32m+[m[32m        "read-pkg": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "readable-stream": {[m
[32m+[m[32m      "version": "2.3.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "core-util-is": "~1.0.0",[m
[32m+[m[32m        "inherits": "~2.0.3",[m
[32m+[m[32m        "isarray": "~1.0.0",[m
[32m+[m[32m        "process-nextick-args": "~2.0.0",[m
[32m+[m[32m        "safe-buffer": "~5.1.1",[m
[32m+[m[32m        "string_decoder": "~1.1.1",[m
[32m+[m[32m        "util-deprecate": "~1.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "readdirp": {[m
[32m+[m[32m      "version": "3.6.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "picomatch": "^2.2.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "rechoir": {[m
[32m+[m[32m      "version": "0.6.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/rechoir/-/rechoir-0.6.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-hSBLVNuoLVdC4oyWdW70OvUOM4Q=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "resolve": "^1.1.6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "regex-not": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "extend-shallow": "^3.0.2",[m
[32m+[m[32m        "safe-regex": "^1.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "remove-bom-buffer": {[m
[32m+[m[32m      "version": "3.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/remove-bom-buffer/-/remove-bom-buffer-3.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-8v2rWhaakv18qcvNeli2mZ/TMTL2nEyAKRvzo1WtnZBl15SHyEhrCu2/xKlJyUFKHiHgfXIyuY6g2dObJJycXQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "is-buffer": "^1.1.5",[m
[32m+[m[32m        "is-utf8": "^0.2.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "remove-bom-stream": {[m
[32m+[m[32m      "version": "1.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/remove-bom-stream/-/remove-bom-stream-1.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-BfGlk/FuQuH7kOv1nejlaVJflSM=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "remove-bom-buffer": "^3.0.0",[m
[32m+[m[32m        "safe-buffer": "^5.1.0",[m
[32m+[m[32m        "through2": "^2.0.3"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "through2": {[m
[32m+[m[32m          "version": "2.0.5",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",[m
[32m+[m[32m          "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "readable-stream": "~2.3.6",[m
[32m+[m[32m            "xtend": "~4.0.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "remove-trailing-separator": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-wkvOKig62tW8P1jg1IJJuSN52O8=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "repeat-element": {[m
[32m+[m[32m      "version": "1.1.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-LFiNfRcSu7KK3evMyYOuCzv3L10TW7yC1G2/+StMjK8Y6Vqd2MG7r/Qjw4ghtuCOjFvlnms/iMmLqpvW/ES/WQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "repeat-string": {[m
[32m+[m[32m      "version": "1.6.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "replace-ext": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/replace-ext/-/replace-ext-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-UszKE5KVK6JvyD92nzMn9cDapSk6w/CaFZ96CnmDMUqH9oowfxF/ZjRITD25H4DnOQClLA4/j7jLGXXLVKxAug==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "replace-homedir": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/replace-homedir/-/replace-homedir-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-6H9tUTuSjd6AgmDBK+f+xv9ueYw=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "homedir-polyfill": "^1.0.1",[m
[32m+[m[32m        "is-absolute": "^1.0.0",[m
[32m+[m[32m        "remove-trailing-separator": "^1.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "require-directory": {[m
[32m+[m[32m      "version": "2.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "require-main-filename": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-l/cXtp1IeE9fUmpsWqj/3aBVpNE=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "requires-port": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/requires-port/-/requires-port-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-kl0mAdOaxIXgkc8NpcbmlNw9yv8=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "resolve": {[m
[32m+[m[32m      "version": "1.22.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-Hhtrw0nLeSrFQ7phPp4OOcVjLPIeMnRlr5mcnVuMe7M/7eBn98A3hmFRLoFo3DLZkivSYwhRUJTyPyWAk56WLw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "is-core-module": "^2.8.1",[m
[32m+[m[32m        "path-parse": "^1.0.7",[m
[32m+[m[32m        "supports-preserve-symlinks-flag": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "resolve-dir": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/resolve-dir/-/resolve-dir-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-eaQGRMNivoLybv/nOcm7U4IEb0M=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "expand-tilde": "^2.0.0",[m
[32m+[m[32m        "global-modules": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "resolve-options": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/resolve-options/-/resolve-options-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-MrueOcBtZzONyTeMDW1gdFZq0TE=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "value-or-function": "^3.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "resolve-url": {[m
[32m+[m[32m      "version": "0.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "resp-modifier": {[m
[32m+[m[32m      "version": "6.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/resp-modifier/-/resp-modifier-6.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-sSTeXE+6/LpUH0j/pzlw9KpFa08=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "debug": "^2.2.0",[m
[32m+[m[32m        "minimatch": "^3.0.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "ret": {[m
[32m+[m[32m      "version": "0.1.15",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ret/-/ret-0.1.15.tgz",[m
[32m+[m[32m      "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "rx": {[m
[32m+[m[32m      "version": "4.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/rx/-/rx-4.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-pfE/957zt0D+MKqAP7CfmIBdR4I=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "rxjs": {[m
[32m+[m[32m      "version": "5.5.12",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-5.5.12.tgz",[m
[32m+[m[32m      "integrity": "sha512-xx2itnL5sBbqeeiVgNPVuQQ1nC8Jp2WfNJhXWHmElW9YmrpS9UVnNzhP3EH3HFqexO5Tlp8GhYY+WEcqcVMvGw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "symbol-observable": "1.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "safe-buffer": {[m
[32m+[m[32m      "version": "5.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "safe-regex": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "ret": "~0.1.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "safer-buffer": {[m
[32m+[m[32m      "version": "2.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "sass": {[m
[32m+[m[32m      "version": "1.49.9",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/sass/-/sass-1.49.9.tgz",[m
[32m+[m[32m      "integrity": "sha512-YlYWkkHP9fbwaFRZQRXgDi3mXZShslVmmo+FVK3kHLUELHHEYrCmL1x6IUjC7wLS6VuJSAFXRQS/DxdsC4xL1A==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "chokidar": ">=3.0.0 <4.0.0",[m
[32m+[m[32m        "immutable": "^4.0.0",[m
[32m+[m[32m        "source-map-js": ">=0.6.2 <2.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "immutable": {[m
[32m+[m[32m          "version": "4.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/immutable/-/immutable-4.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha512-zIE9hX70qew5qTUjSS7wi1iwj/l7+m54KWU247nhM3v806UdGj1yDndXj+IOYxxtW9zyLI+xqFNZjTuDaLUqFw==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "semver": {[m
[32m+[m[32m      "version": "5.7.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "semver-greatest-satisfied-range": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/semver-greatest-satisfied-range/-/semver-greatest-satisfied-range-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-E+jCZYq5aRywzXEJMkAoDTb3els=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "sver-compat": "^1.5.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "send": {[m
[32m+[m[32m      "version": "0.16.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/send/-/send-0.16.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-E64YFPUssFHEFBvpbbjr44NCLtI1AohxQ8ZSiJjQLskAdKuriYEP6VyGEsRDH8ScozGpkaX1BGvhanqCwkcEZw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "debug": "2.6.9",[m
[32m+[m[32m        "depd": "~1.1.2",[m
[32m+[m[32m        "destroy": "~1.0.4",[m
[32m+[m[32m        "encodeurl": "~1.0.2",[m
[32m+[m[32m        "escape-html": "~1.0.3",[m
[32m+[m[32m        "etag": "~1.8.1",[m
[32m+[m[32m        "fresh": "0.5.2",[m
[32m+[m[32m        "http-errors": "~1.6.2",[m
[32m+[m[32m        "mime": "1.4.1",[m
[32m+[m[32m        "ms": "2.0.0",[m
[32m+[m[32m        "on-finished": "~2.3.0",[m
[32m+[m[32m        "range-parser": "~1.2.0",[m
[32m+[m[32m        "statuses": "~1.4.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "depd": {[m
[32m+[m[32m          "version": "1.1.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",[m
[32m+[m[32m          "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak=",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "http-errors": {[m
[32m+[m[32m          "version": "1.6.3",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.6.3.tgz",[m
[32m+[m[32m          "integrity": "sha1-i1VoC7S+KDoLW/TqLjhYC+HZMg0=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "depd": "~1.1.2",[m
[32m+[m[32m            "inherits": "2.0.3",[m
[32m+[m[32m            "setprototypeof": "1.1.0",[m
[32m+[m[32m            "statuses": ">= 1.4.0 < 2"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "inherits": {[m
[32m+[m[32m          "version": "2.0.3",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",[m
[32m+[m[32m          "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "setprototypeof": {[m
[32m+[m[32m          "version": "1.1.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.0.tgz",[m
[32m+[m[32m          "integrity": "sha512-BvE/TwpZX4FXExxOxZyRGQQv651MSwmWKZGqvmPcRIjDqWub67kTKuIMx43cZZrS/cBBzwBcNDWoFxt2XEFIpQ==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "statuses": {[m
[32m+[m[32m          "version": "1.4.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.4.0.tgz",[m
[32m+[m[32m          "integrity": "sha512-zhSCtt8v2NDrRlPQpCNtw/heZLtfUDqxBM1udqikb/Hbk52LK4nQSwr10u77iopCW5LsyHpuXS0GnEc48mLeew==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "serve-index": {[m
[32m+[m[32m      "version": "1.9.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/serve-index/-/serve-index-1.9.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-03aNabHn2C5c4FD/9bRTvqEqkjk=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "accepts": "~1.3.4",[m
[32m+[m[32m        "batch": "0.6.1",[m
[32m+[m[32m        "debug": "2.6.9",[m
[32m+[m[32m        "escape-html": "~1.0.3",[m
[32m+[m[32m        "http-errors": "~1.6.2",[m
[32m+[m[32m        "mime-types": "~2.1.17",[m
[32m+[m[32m        "parseurl": "~1.3.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "depd": {[m
[32m+[m[32m          "version": "1.1.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",[m
[32m+[m[32m          "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak=",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "http-errors": {[m
[32m+[m[32m          "version": "1.6.3",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.6.3.tgz",[m
[32m+[m[32m          "integrity": "sha1-i1VoC7S+KDoLW/TqLjhYC+HZMg0=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "depd": "~1.1.2",[m
[32m+[m[32m            "inherits": "2.0.3",[m
[32m+[m[32m            "setprototypeof": "1.1.0",[m
[32m+[m[32m            "statuses": ">= 1.4.0 < 2"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "inherits": {[m
[32m+[m[32m          "version": "2.0.3",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",[m
[32m+[m[32m          "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "setprototypeof": {[m
[32m+[m[32m          "version": "1.1.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.0.tgz",[m
[32m+[m[32m          "integrity": "sha512-BvE/TwpZX4FXExxOxZyRGQQv651MSwmWKZGqvmPcRIjDqWub67kTKuIMx43cZZrS/cBBzwBcNDWoFxt2XEFIpQ==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "statuses": {[m
[32m+[m[32m          "version": "1.5.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",[m
[32m+[m[32m          "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow=",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "serve-static": {[m
[32m+[m[32m      "version": "1.13.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.13.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-p/tdJrO4U387R9oMjb1oj7qSMaMfmOyd4j9hOFoxZe2baQszgHcSWjuya/CiT5kgZZKRudHNOA0pYXOl8rQ5nw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "encodeurl": "~1.0.2",[m
[32m+[m[32m        "escape-html": "~1.0.3",[m
[32m+[m[32m        "parseurl": "~1.3.2",[m
[32m+[m[32m        "send": "0.16.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "server-destroy": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/server-destroy/-/server-destroy-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-8Tv5KOQrnD55OD5hzDmYtdFObN0=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "set-blocking": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "set-value": {[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/set-value/-/set-value-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-JxHc1weCN68wRY0fhCoXpyK55m/XPHafOmK4UWD7m2CI14GMcFypt4w/0+NV5f/ZMby2F6S2wwA7fgynh9gWSw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "extend-shallow": "^2.0.1",[m
[32m+[m[32m        "is-extendable": "^0.1.1",[m
[32m+[m[32m        "is-plain-object": "^2.0.3",[m
[32m+[m[32m        "split-string": "^3.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "extend-shallow": {[m
[32m+[m[32m          "version": "2.0.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-extendable": "^0.1.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-extendable": {[m
[32m+[m[32m          "version": "0.1.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-plain-object": {[m
[32m+[m[32m          "version": "2.0.4",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",[m
[32m+[m[32m          "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "isobject": "^3.0.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "setprototypeof": {[m
[32m+[m[32m      "version": "1.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "snapdragon": {[m
[32m+[m[32m      "version": "0.8.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "base": "^0.11.1",[m
[32m+[m[32m        "debug": "^2.2.0",[m
[32m+[m[32m        "define-property": "^0.2.5",[m
[32m+[m[32m        "extend-shallow": "^2.0.1",[m
[32m+[m[32m        "map-cache": "^0.2.2",[m
[32m+[m[32m        "source-map": "^0.5.6",[m
[32m+[m[32m        "source-map-resolve": "^0.5.0",[m
[32m+[m[32m        "use": "^3.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "define-property": {[m
[32m+[m[32m          "version": "0.2.5",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",[m
[32m+[m[32m          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-descriptor": "^0.1.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "extend-shallow": {[m
[32m+[m[32m          "version": "2.0.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-extendable": "^0.1.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-accessor-descriptor": {[m
[32m+[m[32m          "version": "0.1.6",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",[m
[32m+[m[32m          "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "kind-of": "^3.0.2"[m
[32m+[m[32m          },[m
[32m+[m[32m          "dependencies": {[m
[32m+[m[32m            "kind-of": {[m
[32m+[m[32m              "version": "3.2.2",[m
[32m+[m[32m              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m              "dev": true,[m
[32m+[m[32m              "requires": {[m
[32m+[m[32m                "is-buffer": "^1.1.5"[m
[32m+[m[32m              }[m
[32m+[m[32m            }[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-data-descriptor": {[m
[32m+[m[32m          "version": "0.1.4",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",[m
[32m+[m[32m          "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "kind-of": "^3.0.2"[m
[32m+[m[32m          },[m
[32m+[m[32m          "dependencies": {[m
[32m+[m[32m            "kind-of": {[m
[32m+[m[32m              "version": "3.2.2",[m
[32m+[m[32m              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m              "dev": true,[m
[32m+[m[32m              "requires": {[m
[32m+[m[32m                "is-buffer": "^1.1.5"[m
[32m+[m[32m              }[m
[32m+[m[32m            }[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-descriptor": {[m
[32m+[m[32m          "version": "0.1.6",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",[m
[32m+[m[32m          "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-accessor-descriptor": "^0.1.6",[m
[32m+[m[32m            "is-data-descriptor": "^0.1.4",[m
[32m+[m[32m            "kind-of": "^5.0.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-extendable": {[m
[32m+[m[32m          "version": "0.1.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "source-map": {[m
[32m+[m[32m          "version": "0.5.7",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",[m
[32m+[m[32m          "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "snapdragon-node": {[m
[32m+[m[32m      "version": "2.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "define-property": "^1.0.0",[m
[32m+[m[32m        "isobject": "^3.0.0",[m
[32m+[m[32m        "snapdragon-util": "^3.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "define-property": {[m
[32m+[m[32m          "version": "1.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-descriptor": "^1.0.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "snapdragon-util": {[m
[32m+[m[32m      "version": "3.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "kind-of": "^3.2.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": {[m
[32m+[m[32m          "version": "3.2.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-buffer": "^1.1.5"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "socket.io": {[m
[32m+[m[32m      "version": "4.4.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/socket.io/-/socket.io-4.4.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-s04vrBswdQBUmuWJuuNTmXUVJhP0cVky8bBDhdkf8y0Ptsu7fKU2LuLbts9g+pdmAdyMMn8F/9Mf1/wbtUN0fg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "accepts": "~1.3.4",[m
[32m+[m[32m        "base64id": "~2.0.0",[m
[32m+[m[32m        "debug": "~4.3.2",[m
[32m+[m[32m        "engine.io": "~6.1.0",[m
[32m+[m[32m        "socket.io-adapter": "~2.3.3",[m
[32m+[m[32m        "socket.io-parser": "~4.0.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "debug": {[m
[32m+[m[32m          "version": "4.3.4",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",[m
[32m+[m[32m          "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "ms": "2.1.2"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "ms": {[m
[32m+[m[32m          "version": "2.1.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",[m
[32m+[m[32m          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "socket.io-adapter": {[m
[32m+[m[32m      "version": "2.3.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/socket.io-adapter/-/socket.io-adapter-2.3.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-Qd/iwn3VskrpNO60BeRyCyr8ZWw9CPZyitW4AQwmRZ8zCiyDiL+znRnWX6tDHXnWn1sJrM1+b6Mn6wEDJJ4aYQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "socket.io-client": {[m
[32m+[m[32m      "version": "4.4.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/socket.io-client/-/socket.io-client-4.4.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-N5C/L5fLNha5Ojd7Yeb/puKcPWWcoB/A09fEjjNsg91EDVr5twk/OEyO6VT9dlLSUNY85NpW6KBhVMvaLKQ3vQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@socket.io/component-emitter": "~3.0.0",[m
[32m+[m[32m        "backo2": "~1.0.2",[m
[32m+[m[32m        "debug": "~4.3.2",[m
[32m+[m[32m        "engine.io-client": "~6.1.1",[m
[32m+[m[32m        "parseuri": "0.0.6",[m
[32m+[m[32m        "socket.io-parser": "~4.1.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "debug": {[m
[32m+[m[32m          "version": "4.3.4",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",[m
[32m+[m[32m          "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "ms": "2.1.2"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "ms": {[m
[32m+[m[32m          "version": "2.1.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",[m
[32m+[m[32m          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "socket.io-parser": {[m
[32m+[m[32m          "version": "4.1.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/socket.io-parser/-/socket.io-parser-4.1.2.tgz",[m
[32m+[m[32m          "integrity": "sha512-j3kk71QLJuyQ/hh5F/L2t1goqzdTL0gvDzuhTuNSwihfuFUrcSji0qFZmJJPtG6Rmug153eOPsUizeirf1IIog==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "@socket.io/component-emitter": "~3.0.0",[m
[32m+[m[32m            "debug": "~4.3.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "socket.io-parser": {[m
[32m+[m[32m      "version": "4.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/socket.io-parser/-/socket.io-parser-4.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-t+b0SS+IxG7Rxzda2EVvyBZbvFPBCjJoyHuE0P//7OAsN23GItzDRdWa6ALxZI/8R5ygK7jAR6t028/z+7295g==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@types/component-emitter": "^1.2.10",[m
[32m+[m[32m        "component-emitter": "~1.3.0",[m
[32m+[m[32m        "debug": "~4.3.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "debug": {[m
[32m+[m[32m          "version": "4.3.4",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",[m
[32m+[m[32m          "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "ms": "2.1.2"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "ms": {[m
[32m+[m[32m          "version": "2.1.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",[m
[32m+[m[32m          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "source-map": {[m
[32m+[m[32m      "version": "0.6.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "source-map-js": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-R0XvVJ9WusLiqTCEiGCmICCMplcCkIwwR11mOSD9CR5u+IXYdiseeEuXCVAjS54zqwkLcPNnmU4OeJ6tUrWhDw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "source-map-resolve": {[m
[32m+[m[32m      "version": "0.5.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-Htz+RnsXWk5+P2slx5Jh3Q66vhQj1Cllm0zvnaY98+NFx+Dv2CF/f5O/t8x+KaNdrdIAsruNzoh/KpialbqAnw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "atob": "^2.1.2",[m
[32m+[m[32m        "decode-uri-component": "^0.2.0",[m
[32m+[m[32m        "resolve-url": "^0.2.1",[m
[32m+[m[32m        "source-map-url": "^0.4.0",[m
[32m+[m[32m        "urix": "^0.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "source-map-url": {[m
[32m+[m[32m      "version": "0.4.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-cPiFOTLUKvJFIg4SKVScy4ilPPW6rFgMgfuZJPNoDuMs3nC1HbMUycBoJw77xFIp6z1UJQJOfx6C9GMH80DiTw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "sparkles": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/sparkles/-/sparkles-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-dSO0DDYUahUt/0/pD/Is3VIm5TGJjludZ0HVymmhYF6eNA53PVLhnUk0znSYbH8IYBuJdCE+1luR22jNLMaQdw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "spdx-correct": {[m
[32m+[m[32m      "version": "3.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-cOYcUWwhCuHCXi49RhFRCyJEK3iPj1Ziz9DpViV3tbZOwXD49QzIN3MpOLJNxh2qwq2lJJZaKMVw9qNi4jTC0w==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "spdx-expression-parse": "^3.0.0",[m
[32m+[m[32m        "spdx-license-ids": "^3.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "spdx-exceptions": {[m
[32m+[m[32m      "version": "2.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-/tTrYOC7PPI1nUAgx34hUpqXuyJG+DTHJTnIULG4rDygi4xu/tfgmq1e1cIRwRzwZgo4NLySi+ricLkZkw4i5A==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "spdx-expression-parse": {[m
[32m+[m[32m      "version": "3.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "spdx-exceptions": "^2.1.0",[m
[32m+[m[32m        "spdx-license-ids": "^3.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "spdx-license-ids": {[m
[32m+[m[32m      "version": "3.0.11",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.11.tgz",[m
[32m+[m[32m      "integrity": "sha512-Ctl2BrFiM0X3MANYgj3CkygxhRmr9mi6xhejbdO960nF6EDJApTYpn0BQnDKlnNBULKiCN1n3w9EBkHK8ZWg+g==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "split-string": {[m
[32m+[m[32m      "version": "3.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "extend-shallow": "^3.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "stack-trace": {[m
[32m+[m[32m      "version": "0.0.10",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/stack-trace/-/stack-trace-0.0.10.tgz",[m
[32m+[m[32m      "integrity": "sha1-VHxws0fo0ytOEI6hoqFZ5f3eGcA=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "static-extend": {[m
[32m+[m[32m      "version": "0.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "define-property": "^0.2.5",[m
[32m+[m[32m        "object-copy": "^0.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "define-property": {[m
[32m+[m[32m          "version": "0.2.5",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",[m
[32m+[m[32m          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-descriptor": "^0.1.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-accessor-descriptor": {[m
[32m+[m[32m          "version": "0.1.6",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",[m
[32m+[m[32m          "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "kind-of": "^3.0.2"[m
[32m+[m[32m          },[m
[32m+[m[32m          "dependencies": {[m
[32m+[m[32m            "kind-of": {[m
[32m+[m[32m              "version": "3.2.2",[m
[32m+[m[32m              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m              "dev": true,[m
[32m+[m[32m              "requires": {[m
[32m+[m[32m                "is-buffer": "^1.1.5"[m
[32m+[m[32m              }[m
[32m+[m[32m            }[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-data-descriptor": {[m
[32m+[m[32m          "version": "0.1.4",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",[m
[32m+[m[32m          "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "kind-of": "^3.0.2"[m
[32m+[m[32m          },[m
[32m+[m[32m          "dependencies": {[m
[32m+[m[32m            "kind-of": {[m
[32m+[m[32m              "version": "3.2.2",[m
[32m+[m[32m              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m              "dev": true,[m
[32m+[m[32m              "requires": {[m
[32m+[m[32m                "is-buffer": "^1.1.5"[m
[32m+[m[32m              }[m
[32m+[m[32m            }[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "is-descriptor": {[m
[32m+[m[32m          "version": "0.1.6",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",[m
[32m+[m[32m          "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-accessor-descriptor": "^0.1.6",[m
[32m+[m[32m            "is-data-descriptor": "^0.1.4",[m
[32m+[m[32m            "kind-of": "^5.0.0"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "statuses": {[m
[32m+[m[32m      "version": "1.3.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.3.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-+vUbnrdKrvOzrPStX2Gr8ky3uT4=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "stream-exhaust": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/stream-exhaust/-/stream-exhaust-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-b/qaq/GlBK5xaq1yrK9/zFcyRSTNxmcZwFLGSTG0mXgZl/4Z6GgiyYOXOvY7N3eEvFRAG1bkDRz5EPGSvPYQlw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "stream-shift": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/stream-shift/-/stream-shift-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-AiisoFqQ0vbGcZgQPY1cdP2I76glaVA/RauYR4G4thNFgkTqr90yXTo4LYX60Jl+sIlPNHHdGSwo01AvbKUSVQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "stream-throttle": {[m
[32m+[m[32m      "version": "0.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/stream-throttle/-/stream-throttle-0.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha1-rdV8jXzHOoFjDTHNVdOWHPr7qcM=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "commander": "^2.2.0",[m
[32m+[m[32m        "limiter": "^1.0.5"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "string_decoder": {[m
[32m+[m[32m      "version": "1.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "safe-buffer": "~5.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "string-width": {[m
[32m+[m[32m      "version": "4.2.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "emoji-regex": "^8.0.0",[m
[32m+[m[32m        "is-fullwidth-code-point": "^3.0.0",[m
[32m+[m[32m        "strip-ansi": "^6.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "strip-ansi": {[m
[32m+[m[32m      "version": "6.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "ansi-regex": "^5.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "strip-bom": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-YhmoVhZSBJHzV4i9vxRHqZx+aw4=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "is-utf8": "^0.2.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "supports-color": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "supports-preserve-symlinks-flag": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "sver-compat": {[m
[32m+[m[32m      "version": "1.5.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/sver-compat/-/sver-compat-1.5.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-PPh9/rTQe0o/FIJ7wYaz/QxkXNg=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "es6-iterator": "^2.0.1",[m
[32m+[m[32m        "es6-symbol": "^3.1.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "symbol-observable": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/symbol-observable/-/symbol-observable-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-g0D8RwLDEi310iKI+IKD9RPT/dQ=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "tfunk": {[m
[32m+[m[32m      "version": "4.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/tfunk/-/tfunk-4.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-eJQ0dGfDIzWNiFNYFVjJ+Ezl/GmwHaFTBTjrtqNPW0S7cuVDBrZrmzUz6VkMeCR4DZFqhd4YtLwsw3i2wYHswQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "chalk": "^1.1.3",[m
[32m+[m[32m        "dlv": "^1.1.3"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "through2": {[m
[32m+[m[32m      "version": "3.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/through2/-/through2-3.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-enaDQ4MUyP2W6ZyT6EsMzqBPZaM/avg8iuo+l2d3QCs0J+6RaqkHV/2/lOwDTueBHeJ/2LG9lrLW3d5rWPucuQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "inherits": "^2.0.4",[m
[32m+[m[32m        "readable-stream": "2 || 3"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "through2-filter": {[m
[32m+[m[32m      "version": "3.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/through2-filter/-/through2-filter-3.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-jaRjI2WxN3W1V8/FMZ9HKIBXixtiqs3SQSX4/YGIiP3gL6djW48VoZq9tDqeCWs3MT8YY5wb/zli8VW8snY1CA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "through2": "~2.0.0",[m
[32m+[m[32m        "xtend": "~4.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "through2": {[m
[32m+[m[32m          "version": "2.0.5",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",[m
[32m+[m[32m          "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "readable-stream": "~2.3.6",[m
[32m+[m[32m            "xtend": "~4.0.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "time-stamp": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/time-stamp/-/time-stamp-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-dkpaEa9QVhkhsTPztE5hhofg9cM=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "to-absolute-glob": {[m
[32m+[m[32m      "version": "2.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/to-absolute-glob/-/to-absolute-glob-2.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-GGX0PZ50sIItufFFt4z/fQ98hJs=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "is-absolute": "^1.0.0",[m
[32m+[m[32m        "is-negated-glob": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "to-object-path": {[m
[32m+[m[32m      "version": "0.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "kind-of": "^3.0.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "kind-of": {[m
[32m+[m[32m          "version": "3.2.2",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",[m
[32m+[m[32m          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "is-buffer": "^1.1.5"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "to-regex": {[m
[32m+[m[32m      "version": "3.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "define-property": "^2.0.2",[m
[32m+[m[32m        "extend-shallow": "^3.0.2",[m
[32m+[m[32m        "regex-not": "^1.0.2",[m
[32m+[m[32m        "safe-regex": "^1.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "to-regex-range": {[m
[32m+[m[32m      "version": "5.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "is-number": "^7.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "to-through": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/to-through/-/to-through-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-/JKtq6ByZHvAtn1rA2ZKoZUJOvY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "through2": "^2.0.3"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "through2": {[m
[32m+[m[32m          "version": "2.0.5",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",[m
[32m+[m[32m          "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "readable-stream": "~2.3.6",[m
[32m+[m[32m            "xtend": "~4.0.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "toidentifier": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "type": {[m
[32m+[m[32m      "version": "1.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/type/-/type-1.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-+5nt5AAniqsCnu2cEQQdpzCAh33kVx8n0VoFidKpB1dVVLAN/F+bgVOqOJqOnEnrhp222clB5p3vUlD+1QAnfg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "typedarray": {[m
[32m+[m[32m      "version": "0.0.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",[m
[32m+[m[32m      "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "ua-parser-js": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ua-parser-js/-/ua-parser-js-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-00y/AXhx0/SsnI51fTc0rLRmafiGOM4/O+ny10Ps7f+j/b8p/ZY11ytMgznXkOVo4GQ+KwQG5UQLkLGirsACRg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "unc-path-regex": {[m
[32m+[m[32m      "version": "0.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/unc-path-regex/-/unc-path-regex-0.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-5z3T17DXxe2G+6xrCufYxqadUPo=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "undertaker": {[m
[32m+[m[32m      "version": "1.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/undertaker/-/undertaker-1.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-/RXwi5m/Mu3H6IHQGww3GNt1PNXlbeCuclF2QYR14L/2CHPz3DFZkvB5hZ0N/QUkiXWCACML2jXViIQEQc2MLg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "arr-flatten": "^1.0.1",[m
[32m+[m[32m        "arr-map": "^2.0.0",[m
[32m+[m[32m        "bach": "^1.0.0",[m
[32m+[m[32m        "collection-map": "^1.0.0",[m
[32m+[m[32m        "es6-weak-map": "^2.0.1",[m
[32m+[m[32m        "fast-levenshtein": "^1.0.0",[m
[32m+[m[32m        "last-run": "^1.1.0",[m
[32m+[m[32m        "object.defaults": "^1.0.0",[m
[32m+[m[32m        "object.reduce": "^1.0.0",[m
[32m+[m[32m        "undertaker-registry": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "undertaker-registry": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/undertaker-registry/-/undertaker-registry-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-XkvaMI5KiirlhPm5pDWaSZglzFA=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "union-value": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-tJfXmxMeWYnczCVs7XAEvIV7ieppALdyepWMkHkwciRpZraG/xwT+s2JN8+pr1+8jCRf80FFzvr+MpQeeoF4Xg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "arr-union": "^3.1.0",[m
[32m+[m[32m        "get-value": "^2.0.6",[m
[32m+[m[32m        "is-extendable": "^0.1.1",[m
[32m+[m[32m        "set-value": "^2.0.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "is-extendable": {[m
[32m+[m[32m          "version": "0.1.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "unique-stream": {[m
[32m+[m[32m      "version": "2.3.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/unique-stream/-/unique-stream-2.3.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-2nY4TnBE70yoxHkDli7DMazpWiP7xMdCYqU2nBRO0UB+ZpEkGsSija7MvmvnZFUeC+mrgiUfcHSr3LmRFIg4+A==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "json-stable-stringify-without-jsonify": "^1.0.1",[m
[32m+[m[32m        "through2-filter": "^3.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "universalify": {[m
[32m+[m[32m      "version": "0.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "unpipe": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "unset-value": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "has-value": "^0.3.1",[m
[32m+[m[32m        "isobject": "^3.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "has-value": {[m
[32m+[m[32m          "version": "0.3.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "get-value": "^2.0.3",[m
[32m+[m[32m            "has-values": "^0.1.4",[m
[32m+[m[32m            "isobject": "^2.0.0"[m
[32m+[m[32m          },[m
[32m+[m[32m          "dependencies": {[m
[32m+[m[32m            "isobject": {[m
[32m+[m[32m              "version": "2.1.0",[m
[32m+[m[32m              "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",[m
[32m+[m[32m              "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",[m
[32m+[m[32m              "dev": true,[m
[32m+[m[32m              "requires": {[m
[32m+[m[32m                "isarray": "1.0.0"[m
[32m+[m[32m              }[m
[32m+[m[32m            }[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
[32m+[m[32m        "has-values": {[m
[32m+[m[32m          "version": "0.1.4",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz",[m
[32m+[m[32m          "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E=",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "upath": {[m
[32m+[m[32m      "version": "1.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/upath/-/upath-1.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-aZwGpamFO61g3OlfT7OQCHqhGnW43ieH9WZeP7QxN/G/jS4jfqUkZxoryvJgVPEcrl5NL/ggHsSmLMHuH64Lhg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "urix": {[m
[32m+[m[32m      "version": "0.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/urix/-/urix-0.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "use": {[m
[32m+[m[32m      "version": "3.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/use/-/use-3.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-cwESVXlO3url9YWlFW/TA9cshCEhtu7IKJ/p5soJ/gGpj7vbvFrAY/eIioQ6Dw23KjZhYgiIo8HOs1nQ2vr/oQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "util-deprecate": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "utils-merge": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "v8flags": {[m
[32m+[m[32m      "version": "3.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/v8flags/-/v8flags-3.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-mH8etigqMfiGWdeXpaaqGfs6BndypxusHHcv2qSHyZkGEznCd/qAXCWWRzeowtL54147cktFOC4P5y+kl8d8Jg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "homedir-polyfill": "^1.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "validate-npm-package-license": {[m
[32m+[m[32m      "version": "3.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "spdx-correct": "^3.0.0",[m
[32m+[m[32m        "spdx-expression-parse": "^3.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "value-or-function": {[m
[32m+[m[32m      "version": "3.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/value-or-function/-/value-or-function-3.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-HCQ6ULWVwb5Up1S/7OhWO5/42BM=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "vary": {[m
[32m+[m[32m      "version": "1.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "vinyl": {[m
[32m+[m[32m      "version": "2.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/vinyl/-/vinyl-2.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-LII3bXRFBZLlezoG5FfZVcXflZgWP/4dCwKtxd5ky9+LOtM4CS3bIRQsmR1KMnMW07jpE8fqR2lcxPZ+8sJIcw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "clone": "^2.1.1",[m
[32m+[m[32m        "clone-buffer": "^1.0.0",[m
[32m+[m[32m        "clone-stats": "^1.0.0",[m
[32m+[m[32m        "cloneable-readable": "^1.0.0",[m
[32m+[m[32m        "remove-trailing-separator": "^1.0.1",[m
[32m+[m[32m        "replace-ext": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "replace-ext": {[m
[32m+[m[32m          "version": "1.0.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/replace-ext/-/replace-ext-1.0.1.tgz",[m
[32m+[m[32m          "integrity": "sha512-yD5BHCe7quCgBph4rMQ+0KkIRKwWCrHDOX1p1Gp6HwjPM5kVoCdKGNhN7ydqqsX6lJEnQDKZ/tFMiEdQ1dvPEw==",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "vinyl-fs": {[m
[32m+[m[32m      "version": "3.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/vinyl-fs/-/vinyl-fs-3.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-vIu34EkyNyJxmP0jscNzWBSygh7VWhqun6RmqVfXePrOwi9lhvRs//dOaGOTRUQr4tx7/zd26Tk5WeSVZitgng==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "fs-mkdirp-stream": "^1.0.0",[m
[32m+[m[32m        "glob-stream": "^6.1.0",[m
[32m+[m[32m        "graceful-fs": "^4.0.0",[m
[32m+[m[32m        "is-valid-glob": "^1.0.0",[m
[32m+[m[32m        "lazystream": "^1.0.0",[m
[32m+[m[32m        "lead": "^1.0.0",[m
[32m+[m[32m        "object.assign": "^4.0.4",[m
[32m+[m[32m        "pumpify": "^1.3.5",[m
[32m+[m[32m        "readable-stream": "^2.3.3",[m
[32m+[m[32m        "remove-bom-buffer": "^3.0.0",[m
[32m+[m[32m        "remove-bom-stream": "^1.2.0",[m
[32m+[m[32m        "resolve-options": "^1.1.0",[m
[32m+[m[32m        "through2": "^2.0.0",[m
[32m+[m[32m        "to-through": "^2.0.0",[m
[32m+[m[32m        "value-or-function": "^3.0.0",[m
[32m+[m[32m        "vinyl": "^2.0.0",[m
[32m+[m[32m        "vinyl-sourcemap": "^1.1.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "through2": {[m
[32m+[m[32m          "version": "2.0.5",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",[m
[32m+[m[32m          "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "readable-stream": "~2.3.6",[m
[32m+[m[32m            "xtend": "~4.0.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "vinyl-sourcemap": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/vinyl-sourcemap/-/vinyl-sourcemap-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-kqgAWTo4cDqM2xHYswCtS+Y7PhY=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "append-buffer": "^1.0.2",[m
[32m+[m[32m        "convert-source-map": "^1.5.0",[m
[32m+[m[32m        "graceful-fs": "^4.1.6",[m
[32m+[m[32m        "normalize-path": "^2.1.1",[m
[32m+[m[32m        "now-and-later": "^2.0.0",[m
[32m+[m[32m        "remove-bom-buffer": "^3.0.0",[m
[32m+[m[32m        "vinyl": "^2.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "normalize-path": {[m
[32m+[m[32m          "version": "2.1.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "remove-trailing-separator": "^1.0.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "vinyl-sourcemaps-apply": {[m
[32m+[m[32m      "version": "0.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/vinyl-sourcemaps-apply/-/vinyl-sourcemaps-apply-0.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-q2VJ1h0XLCsbh75cUI0jnI74dwU=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "source-map": "^0.5.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "source-map": {[m
[32m+[m[32m          "version": "0.5.7",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",[m
[32m+[m[32m          "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",[m
[32m+[m[32m          "dev": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "which": {[m
[32m+[m[32m      "version": "1.3.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "isexe": "^2.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "which-module": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/which-module/-/which-module-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-u6Y8qGGUiZT/MHc2CJ47lgJsKk8=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "wrap-ansi": {[m
[32m+[m[32m      "version": "7.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "ansi-styles": "^4.0.0",[m
[32m+[m[32m        "string-width": "^4.1.0",[m
[32m+[m[32m        "strip-ansi": "^6.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "ansi-styles": {[m
[32m+[m[32m          "version": "4.3.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",[m
[32m+[m[32m          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "color-convert": "^2.0.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "wrappy": {[m
[32m+[m[32m      "version": "1.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "ws": {[m
[32m+[m[32m      "version": "8.2.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ws/-/ws-8.2.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-wBuoj1BDpC6ZQ1B7DWQBYVLphPWkm8i9Y0/3YdHjHKHiohOJ1ws+3OccDWtH+PoC9DZD5WOTrJvNbWvjS6JWaA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {}[m
[32m+[m[32m    },[m
[32m+[m[32m    "xmlhttprequest-ssl": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/xmlhttprequest-ssl/-/xmlhttprequest-ssl-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-QKxVRxiRACQcVuQEYFsI1hhkrMlrXHPegbbd1yn9UHOmRxY+si12nQYzri3vbzt8VdTTRviqcKxcyllFas5z2A==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "xtend": {[m
[32m+[m[32m      "version": "4.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "y18n": {[m
[32m+[m[32m      "version": "5.0.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",[m
[32m+[m[32m      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "yargs": {[m
[32m+[m[32m      "version": "17.4.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/yargs/-/yargs-17.4.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-WJudfrk81yWFSOkZYpAZx4Nt7V4xp7S/uJkX0CnxovMCt1wCE8LNftPpNuF9X/u9gN5nsD7ycYtRcDf2pL3UiA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "cliui": "^7.0.2",[m
[32m+[m[32m        "escalade": "^3.1.1",[m
[32m+[m[32m        "get-caller-file": "^2.0.5",[m
[32m+[m[32m        "require-directory": "^2.1.1",[m
[32m+[m[32m        "string-width": "^4.2.3",[m
[32m+[m[32m        "y18n": "^5.0.5",[m
[32m+[m[32m        "yargs-parser": "^21.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "yargs-parser": {[m
[32m+[m[32m      "version": "21.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-9BK1jFpLzJROCI5TzwZL/TU4gqjK5xiHV/RfWLOahrjAko/e4DJkRDZQXfvqAsiZzzYhgAzbgz6lg48jcm4GLg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "yeast": {[m
[32m+[m[32m      "version": "0.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/yeast/-/yeast-0.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha1-AI4G2AlDIMNy28L47XagymyKxBk=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[1mdiff --git a/package.json b/package.json[m
[1mnew file mode 100644[m
[1mindex 0000000..0a52621[m
[1m--- /dev/null[m
[1m+++ b/package.json[m
[36m@@ -0,0 +1,20 @@[m
[32m+[m[32m{[m
[32m+[m[32m  "name": "sedona",[m
[32m+[m[32m  "version": "1.0.0",[m
[32m+[m[32m  "description": "",[m
[32m+[m[32m  "repository": {},[m
[32m+[m[32m  "main": "index.js",[m
[32m+[m[32m  "scripts": {[m
[32m+[m[32m    "test": "echo \"Error: no test specified\" && exit 1"[m
[32m+[m[32m  },[m
[32m+[m[32m  "devDependencies": {[m
[32m+[m[32m    "browser-sync": "^2.26.14",[m
[32m+[m[32m    "gulp": "^4.0.2",[m
[32m+[m[32m    "gulp-autoprefixer": "^7.0.1",[m
[32m+[m[32m    "gulp-clean-css": "^4.3.0",[m
[32m+[m[32m    "gulp-sass": "^5.1.0",[m
[32m+[m[32m    "sass": "^1.49.9"[m
[32m+[m[32m  },[m
[32m+[m[32m  "author": "Maria",[m
[32m+[m[32m  "license": "ISC"[m
[32m+[m[32m}[m

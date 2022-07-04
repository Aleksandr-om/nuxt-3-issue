# Nuxt 3 - issue
### Preloading of pages, fonts, styles, images does not work correctly

* Installed the latest Nuxt.
* Added a few pages. `test-no-preload*` - there are no links to these pages anywhere. `two-page.vue` - we can go to this page from the main one.
* Added styles to each page with the loading of woff and woff2 fonts.

After the project is built and launched, Nuxt preloads all data and pages.

![](https://github.com/Aleksandr-om/nuxt-3-issue/blob/main/nuxt-app/readme-sources/nuxt-issue-source.png) 
![](https://github.com/Aleksandr-om/nuxt-3-issue/blob/main/nuxt-app/readme-sources/nuxt-issue-dom.png)

Should work like on [https://nuxt-prefetch.surge.sh/](https://nuxt-prefetch.surge.sh/)   
Only those pages should be preloaded, links to which are visible in the browser and after the current page is fully loaded.    
Also, fonts should not be preloaded from all pages in advance.

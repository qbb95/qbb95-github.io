/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b6b7ee193976f6818bafa14081495030"
  },
  {
    "url": "assets/css/0.styles.4522ba09.css",
    "revision": "5550ee1e6646330a0e001669505cabb9"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/e46f9dc2d0bc9e5f62ab688e1675b616.e46f9dc2.png",
    "revision": "e46f9dc2d0bc9e5f62ab688e1675b616"
  },
  {
    "url": "assets/js/1.d123edad.js",
    "revision": "428cb7969ee9e4f4e4d50ea7aa3b7101"
  },
  {
    "url": "assets/js/10.851bf250.js",
    "revision": "55567e157924abf14bed3f9bf2db5461"
  },
  {
    "url": "assets/js/11.f1996695.js",
    "revision": "1cc2c145ee420aebdfa762e7989fa416"
  },
  {
    "url": "assets/js/12.7716d1a6.js",
    "revision": "d23315c269efa1a2b9afce77306f148d"
  },
  {
    "url": "assets/js/13.22a6c24a.js",
    "revision": "ddde9e32add817b17354a6833a0997ab"
  },
  {
    "url": "assets/js/14.e927d067.js",
    "revision": "455fcbe0cc7538d3640eface2c24925a"
  },
  {
    "url": "assets/js/15.7b74cc8d.js",
    "revision": "7098eaa20fef34bfb77e4c6b33c60644"
  },
  {
    "url": "assets/js/16.9fe2f265.js",
    "revision": "d1dc66dd30e93a707a88a5c4bf89a5d1"
  },
  {
    "url": "assets/js/3.474df84f.js",
    "revision": "f4db067d4b1ff41583a5d79a669b8ea1"
  },
  {
    "url": "assets/js/4.aa5d8ba8.js",
    "revision": "6b535fdb7a43793d2f2b397a65d07e73"
  },
  {
    "url": "assets/js/5.6f0378a3.js",
    "revision": "2db0569d2acbb21cfb8463eef05d92ba"
  },
  {
    "url": "assets/js/6.1ecf8bc9.js",
    "revision": "b169d154d100cf9505374677d3d710d2"
  },
  {
    "url": "assets/js/7.b7b70b29.js",
    "revision": "f699235d05a5bc9fae83268e959ca601"
  },
  {
    "url": "assets/js/8.2e9efc42.js",
    "revision": "cc8f1fdf371e6db415edaf6ad675600f"
  },
  {
    "url": "assets/js/9.2794c8e8.js",
    "revision": "1ad43d3efa493911d3158347937dac76"
  },
  {
    "url": "assets/js/app.31a1f311.js",
    "revision": "d9d3e2183ab969ca48cc798fc403169f"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "af3e6c1da169fa5e1c614853b2a1cf1c"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "4384fb4d8165bc2b71c0fe8539e4ab8d"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "171486e326e6473054c5c582b61ed1fc"
  },
  {
    "url": "categories/index.html",
    "revision": "26a279f8b4def444b0c61d652d2bf2e7"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "16b3a1f95be4c1d00bedde4b5d5473f3"
  },
  {
    "url": "index.html",
    "revision": "6e3cb364c2049031d45a86e3c13516b5"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "988a70fbe358817cfa45b7384ab85401"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "f582b86a29a7962a914936338218abba"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "2ef903fd079a9bcde4065c8abeead1b8"
  },
  {
    "url": "tag/index.html",
    "revision": "f2e736e8fb2535bd9e8957f0fc3908bd"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "d2bf3f540b9f79c9dc5afb7969ae3d97"
  },
  {
    "url": "timeline/index.html",
    "revision": "b2b1ba8cfa065eb6e5e7ee846b8958df"
  },
  {
    "url": "touxiang.png",
    "revision": "81a076a356ec6110c6717a1aff91221d"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "67245dc7bca3e2f64868b3dc28fabe95"
  },
  {
    "url": "web-scraper.html",
    "revision": "a168002e048fc81b00a9e2914e7d5f28"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

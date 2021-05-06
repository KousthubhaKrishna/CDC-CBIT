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

importScripts(
  "/precache-manifest.f700fa941c0c4677de6fc04d3b943b69.js"
);

workbox.core.setCacheNameDetails({ prefix: "Materialpro" });

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

let notificationUrl = '';
//notification registered feature for getting update automatically from server api
self.addEventListener('push', function (event) {
  let _data = event.data ? JSON.parse(event.data.text()) : {};
  notificationUrl = _data.url;
  event.waitUntil(
    self.registration.showNotification(_data.title, {
      body: _data.message,
      icon: _data.icon,
      tag: _data.tag
    })
  );
});

//notification url redirect event click
self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({
      type: "window"
    })
      .then(function (clientList) {
        if (clients.openWindow) {
          return clients.openWindow(notificationUrl);
        }
      })
  );
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

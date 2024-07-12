const { offlineFallback, warmStrategyCache } = require("workbox-recipes");
const { CacheFirst } = require("workbox-strategies");
const { registerRoute } = require("workbox-routing");
const { CacheableResponsePlugin } = require("workbox-cacheable-response");
const { ExpirationPlugin } = require("workbox-expiration");
const { precacheAndRoute } = require("workbox-precaching/precacheAndRoute");

// Precache and route based on self._WB_MANIFEST
precacheAndRoute(self.__WB_MANIFEST);

// Cache strategy for pages
const pageCache = new CacheFirst({
  cacheName: "page-cache",
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

// warming the cache for specific URLs
warmStrategyCache({
  urls: [
    "/",
    "/index.html",
    "/database.bundle.js",
    "/editor.bundle.js",
    "/header.bundle.js",
    "/index.bundle.js",
    "/install.bundle.js",
  ],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === "navigate", pageCache);

//asset caching (CSS, javascript, images, etc.)
registerRoute(
  ({ request }) =>
    request.destination === "style" ||
    request.destination === "script" ||
    request.destination === "image",
  new CacheFirst({
    cacheName: "assets-cache",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
      }),
    ],
  })
);

// Service Worker for Analytics Zone sites
// Provides offline caching and faster repeat visits

const CACHE_VERSION = 'v1';
const CACHE_NAME = `analyticszone-${CACHE_VERSION}`;

// Assets to cache immediately on install
const PRECACHE_ASSETS = [
  '/assets/css/main.min.css',
  '/assets/js/core.min.js',
  '/assets/js/search.min.js'
];

// Install event - precache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip external requests
  if (url.origin !== location.origin) return;

  // Skip analytics
  if (url.pathname.includes('analytics') || url.hostname.includes('google')) return;

  // Cache strategy based on asset type
  if (isStaticAsset(url.pathname)) {
    // Static assets: Cache First
    event.respondWith(cacheFirst(request));
  } else if (url.pathname.endsWith('.html') || url.pathname.endsWith('/')) {
    // HTML pages: Network First with cache fallback
    event.respondWith(networkFirst(request));
  }
});

function isStaticAsset(pathname) {
  return /\.(css|js|png|jpg|jpeg|gif|svg|webp|woff2?|ico)$/i.test(pathname) ||
         pathname.startsWith('/assets/');
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return new Response('Offline', { status: 503 });
  }
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    return cached || new Response('Offline', { status: 503 });
  }
}

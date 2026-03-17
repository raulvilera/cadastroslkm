const CACHE_NAME = 'lkm-gestao-v17';
// index.html e JS/CSS nunca são cacheados — sempre buscados da rede
const ASSETS_TO_CACHE = [
    '/manifest.json',
    '/pwa-192x192.png',
    '/pwa-512x512.png'
];

self.addEventListener('install', function (event) {
    console.log('[SW] Instalando Service Worker...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(function () {
                return self.skipWaiting();
            })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys()
            .then(function (cacheNames) {
                return Promise.all(
                    cacheNames.map(function (cacheName) {
                        if (cacheName !== CACHE_NAME) {
                            console.log('[SW] Removendo cache antigo:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(function () {
                return self.clients.claim();
            })
    );
});

// HTML, JS e CSS: NUNCA cacheados — sempre da rede
self.addEventListener('fetch', function (event) {
    if (!event.request.url.startsWith(self.location.origin)) return;

    const url = new URL(event.request.url);

    if (
        url.pathname === '/' ||
        url.pathname === '/index.html' ||
        url.pathname.startsWith('/assets/') ||
        url.pathname.endsWith('.js') ||
        url.pathname.endsWith('.css')
    ) {
        event.respondWith(fetch(event.request));
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then(function (response) {
                if (response && response.status === 200) {
                    var responseToCache = response.clone();
                    caches.open(CACHE_NAME).then(function (cache) {
                        cache.put(event.request, responseToCache);
                    });
                }
                return response;
            })
            .catch(function () {
                return caches.match(event.request).then(function (response) {
                    if (response) return response;
                    if (event.request.mode === 'navigate') {
                        return caches.match('/index.html');
                    }
                });
            })
    );
});

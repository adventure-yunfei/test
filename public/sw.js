const baseUrl = `/test`;

this.addEventListener('install', event => {
    event.waitUntil(
        caches.open('v1').then(cache =>
        {
            return cache.add(`${baseUrl}/respond-by-sw--cached-during-install.js`);
        })
    );

    fetch(`${baseUrl}/respond-without-sw--prefetch-during-install.js`);
});

this.addEventListener('fetch', event => {
    if (/respond-by-sw.*\.js$/.test(event.request.url)) {
        event.respondWith(
            caches.match(event.request).then(response => {
                return response || fetch(event.request);
            })
        );
    }
});

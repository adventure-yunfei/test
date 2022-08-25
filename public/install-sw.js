const baseUrl = `/test`;

navigator.serviceWorker.register(`${baseUrl}/sw.js`)
    .then(() => {
        console.log('service worker registered');
    })
    .catch(e => {
        console.error('service worker registeration failed', e);
    });

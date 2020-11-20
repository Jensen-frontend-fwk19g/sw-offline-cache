self.addEventListener('install', event => {
    console.log('Service worker installed at: ' + new Date().toLocaleTimeString());
})

self.addEventListener('activate', event => {
    console.log('Service worker activates at: ' + new Date().toLocaleTimeString());
})

self.addEventListener('fetch', event => {
    console.log('Service worker fetching resource: ', event.request);
})

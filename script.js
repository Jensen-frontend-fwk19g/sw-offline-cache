if( 'serviceWorker' in navigator ) {
    navigator.serviceWorker.register('sw.js')
    .then(event => {
        console.log('Service worker: registered');
    })
    .catch(error => {
        console.log('Service worker registration error: ', error.message);
    })
}

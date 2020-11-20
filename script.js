if( 'serviceWorker' in navigator ) {
    navigator.serviceWorker.register('sw.js')
    .then(event => {
        console.log('Service worker: registered');
    })
    .catch(error => {
        console.log('Service worker registration error: ', error.message);
    })
}



window.addEventListener('load', () => {
    let catIndex = 0;
    const cats = ['cat0.jpg', 'cat1.jpg', 'cat2.jpg', 'cat3.jpg', 'cat4.jpg', 'cat5.jpg', 'cat6.jpg'];
    const nextButton = document.querySelector('#nextButton');
    const img = document.querySelector('img');

    nextButton.addEventListener('click', () => {
        catIndex = (catIndex + 1) % cats.length;
        img.src = 'img/' + cats[catIndex];
    })
})

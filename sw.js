const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/pages/about.html',
    '/pages/contact.html',
    '/pages/forum.html',
    '/js/app.js',
    '/manifest.json',
    '/style.css',
    '/img/icons/anonim.jpg',
    '/img/icons/bg.jpg',
    '/img/icons/black.jpg',
    '/img/icons/darkbg.jpg',
    '/img/icons/employee.png',
    '/img/icons/galaxy.jpg',
    '/img/icons/galaxy2.jpg',
    '/img/icons/galaxy3.jpg',
    '/img/icons/iu.jpg',
    '/img/icons/jess.jpg',
    '/img/icons/logo_baru.png',
    '/img/icons/logo.jpg',
    '/img/icons/office.jpg',
    '/img/icons/office2.jpg',
    '/img/icons/security.png',
    '/img/icons/sinb.jpg',
    '/img/icons/star.png',
    '/fonts/Montserrat/Montserrat-Regular.ttf',
    '/fonts/Montserrat/Montserrat-Bold.ttf',
    '/fonts/Montserrat/Montserrat-Black.ttf',
    'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css',
    'https://fonts.googleapis.com/css2?family=Viga&display=swap',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js',
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'
]

self.addEventListener('install', evt => {
    // console.log('Service worker berhasil di install');
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching assets');
            cache.addAll(assets);
        })
    )
});

self.addEventListener('activate', evt => {
    console.log('Service worker berhasil di aktifkan');
});

self.addEventListener('fetch', evt => {
    // console.log('Fetch dari Service worker', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    )
});
const staticCacheName = 'site-static';

self.addEventListener('install', evt => {
    console.log('Service worker berhasil di install');
});

self.addEventListener('activate', evt => {
    console.log('Service worker berhasil di aktifkan');
});

self.addEventListener('fetch', evt => {
    console.log('Fetch dari Service worker', evt);
});
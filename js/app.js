if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('Service worker berhasil didaftarkan', reg))
        .catch((err) => console.log('Service worker gagal didaftarkan', err));
}

const CACHE_NAME = 'version-1';
const urlsToCache = ['index.html', 'offline.html'];

this.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log('Opened cache', cache);
			return cache.addAll(urlsToCache);
		})
	);
});


this.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(() => fetch(event.request).catch(() => caches.match('offline.html')))
	);
});

this.addEventListener('activate', (event) => {
	const cacheWhiteList = [];
	cacheWhiteList.push(CACHE_NAME);
	event.waitUntil(caches.keys().then((cacheNames) => Promise.all(
		cacheNames.map(cacheNames => {
			if (cacheWhiteList.includes(cacheNames)) {
				return caches.delete(cacheNames);
			}
		})
	)));
});
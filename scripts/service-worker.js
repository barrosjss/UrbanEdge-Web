self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("my-cache").then(function (cache) {
      return cache.addAll([
        "/style.css",
        "/img/Group 42.png",
        "/img/productos/camisa.png",
        "/img/productos/taza.png",
        "/img/productos/pins.png",
        "/img/productos/agendas.png",
        // etc.
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

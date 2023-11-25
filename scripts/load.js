var images = document.querySelectorAll('.product-card img');

var config = {
 rootMargin: '0px',
 threshold: 0.1
};

var observer = new IntersectionObserver(function(entries, self) {
 entries.forEach(entry => {
  if (entry.isIntersecting) {
    preloadImage(entry.target);
    self.unobserve(entry.target);
  }
 });
}, config);

images.forEach(image => {
 observer.observe(image);
});

function preloadImage(img) {
 img.src = img.getAttribute('data-src');
}

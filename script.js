// $(".main-carousel").flickity({
//   cellAlign: "left",
//   wrapAround: true,
//   freeScroll: false,
// });

var $carousel = $(".main-carousel").flickity({
  cellAlign: "left",
  imagesLoaded: true,
  freeScroll: true,
  wrapAround: true,
});

// var $imgs = $carousel.find(".cell img");
// // get transform property
// var docStyle = document.documentElement.style;
// var transformProp =
//   typeof docStyle.transform == "string" ? "transform" : "WebkitTransform";
// // get Flickity instance
// var flkty = $carousel.data("flickity");

// $carousel.on("scroll.flickity", function () {
//   flkty.slides.forEach(function (slide, i) {
//     var img = $imgs[i];
//     var x = ((slide.target + flkty.x) * -1) / 3;
//     img.style[transformProp] = "translateX(" + x + "px)";
//   });
// });


var options = {
  strings: ['simple', 'beautiful', 'interactive', 'delightful', 'coming'],
  backSpeed: 80,
  typeSpeed: 80,
  loop: true
};

let typed = new Typed('#typed', options);
let acumulador = 80
var lastScrollTop = 0
const vision_left = document.querySelector('.vision-left');
const vision_right = document.querySelector('.vision-right');
let claro = document.querySelectorAll('.claro');
let logo = document.getElementById('#logo_header');
// function callback(entries, observer) {
//   if (entries[0].isIntersecting) {//verificamos si actualmente es visible
//     var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//     if (st > lastScrollTop) {
//       acumulador = acumulador + 10
//     } else {
//       acumulador = acumulador - 10
//     }
//     element.style.top = acumulador + '%'
//     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
//   } else {
//     console.log("El elemento no es visible.");
//   }

// }
// var observer = new IntersectionObserver(callback, {});




// observer.observe(element);
// // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
// window.addEventListener("scroll", function () { // or window.addEventListener("scroll"....
//   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//   var observer = new IntersectionObserver(callback, {});
// }, false);

var isInViewport = function (elem) {
  var distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

window.addEventListener('scroll', function (event) {
  if (isInViewport(vision_right)) {
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
      acumulador = acumulador - 4
    } else {
      acumulador = acumulador + 4
    }
    vision_left.style.top = acumulador + 'px'
    vision_right.style.top = acumulador + 'px'
    lastScrollTop = st <= 0 ? 0 : st;
  } else {
    acumulador=160
  }
  let a = logo.getBoundingClientRect()
  let b =  claro[0].getBoundingClientRect()
  console.log(!(a.top < b.bottom ) ||
             (a.bottom > b.top))
            
}, false);


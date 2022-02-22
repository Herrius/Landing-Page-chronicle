
var options = {
  strings: ['simple', 'beautiful','interactive','delightful','coming'],
  backSpeed: 80,
  typeSpeed: 80,
  loop:true
};

let typed = new Typed('#typed', options);


let vision_left=document.querySelector('.vision-left');
new simpleParallax(vision_left, {
	scale: 1.5
});
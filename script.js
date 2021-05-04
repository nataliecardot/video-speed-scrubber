const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

// Using regular function so `this` is speed bar (element on which event triggered) - with an arrow function, since they use lexical scoping, `this` is inherited from parent scope (it would be Window)
speed.addEventListener('mousemove', function (e) {
  // pageY: y-coord of mouse event relative to entire document
  // offsetTop: distance between top position (px) of current element relative to offsetParent element (nearest positioned ancestor - if none, the nearest ancestor table element - if none, body)
  // getting coord within speed bar (it will be 0 at top)
  const y = e.pageY - this.offsetTop;
  console.log(y + ' is y, pageY - offsetTop');
  // offsetHeight: element's height including vertical padding and borders
  console.log(this.offsetHeight);
  // So if mouse is hovered over middle of speed bar, percent will be 205 / 410 = 0.5
  const percent = y / this.offsetHeight;
  const min = 0.5;
  const max = 3.5;
  const height = Math.round(percent * 100) + '%';
  bar.style.height = height;
});

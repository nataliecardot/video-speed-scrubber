const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
  // pageY: y-coord of mouse event relative to entire document
  // offsetTop: distance between top position (px) of current element relative to offsetParent element (nearest positioned ancestor - if none, the nearest ancestor table element - if none, body)
  // getting coord within speed bar (it will be 0 at top)
  const y = e.pageY - this.offsetTop;
  // offsetHeight: element's height including vertical padding and borders
  // So if mouse is hovered over middle of speed bar, percent will be 205 / 410 = 0.5
  const proportion = y / this.offsetHeight;
  const min = 0.5;
  const max = 3.51;
  const height = Math.round(proportion * 100) + '%';
  const playbackRate = min + proportion * (max - min);
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + '×';
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);

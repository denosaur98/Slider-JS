let offset = 0;
const sliderLine = document.querySelector('.slider_line');
document.querySelector('.next').addEventListener('click', function() {
  offset += 679;
  if (offset > 1358) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});
document.querySelector('.back').addEventListener('click', function() {
  offset -= 679;
  if (offset < 0) {
    offset = 1358;
  }
  sliderLine.style.left = -offset + 'px';
});
document.querySelectorAll('.slider_dot').forEach((item, index) => {
  item.setAttribute('slider_dot_active', index);
});
document.querySelectorAll('.slider_dot').forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    sliderLine.style.left = -679 * e.target.getAttribute('slider_dot_active') + 'px';
  });
});
document.querySelectorAll('.div_nav').forEach((item, index) => {
  item.setAttribute('data-slider-num', index);
});
document.querySelectorAll('.div_nav').forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    sliderLine.style.left = -679 * e.target.getAttribute('data-slider-num') + 'px';
  });
});
let offsetText = 0;
const sliderLineText = document.querySelector('.slider_line_text');
document.querySelector('.next').addEventListener('click', function() {
  offsetText += 400;
  if (offsetText > 800) {
    offsetText = 0;
  }
  sliderLineText.style.left = -offsetText + 'px';
});
document.querySelector('.back').addEventListener('click', function() {
  offsetText -= 400;
  if (offsetText < 0) {
    offsetText = 800;
  }
  sliderLineText.style.left = -offsetText + 'px';
});
document.querySelectorAll('.slider_dot').forEach((item, index) => {
  item.setAttribute('data-slider-num', index);
});
document.querySelectorAll('.slider_dot').forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    sliderLineText.style.left = -400 * e.target.getAttribute('data-slider-num') + 'px';
  });
});
document.querySelectorAll('.div_nav').forEach((item, index) => {
  item.setAttribute('data-slider-num', index);
});
document.querySelectorAll('.div_nav').forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    sliderLineText.style.left = -400 * e.target.getAttribute('data-slider-num') + 'px';
  });
});
//輪播圖片
$(document).ready(function(){
    $('.slider').slider({
      // 不顯示操控圓鈕
      indicators: false,
    })
  })
  // Wrap every letter in a span
var textWrapper = document.querySelector('.about-text .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<p class='letter'>$&</p>");
anime.timeline({loop: false})
  .add({
    targets: '.about-text .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.about-text .line',
    translateX: [0, document.querySelector('.about-text .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.about-text .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.about-text',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
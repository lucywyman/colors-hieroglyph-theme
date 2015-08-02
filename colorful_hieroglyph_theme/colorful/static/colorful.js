function updateSlides() {
  for (var i = 0; i < slideEls.length; i++) {
    switch (i) {
      case curSlide - 2:
        updateSlideClass(i, 'far-past');
        break;
      case curSlide - 1:
        updateSlideClass(i, 'past');
        break;
      case curSlide:
        updateSlideClass(i, 'current');
        break;
      case curSlide + 1:
        updateSlideClass(i, 'next');
        break;
      case curSlide + 2:
        updateSlideClass(i, 'far-next');
        break;
      default:
        updateSlideClass(i);
        break;
    }
  }

  triggerLeaveEvent(curSlide - 1);
  triggerEnterEvent(curSlide);

  window.setTimeout(function() {
    // Hide after the slide
    disableSlideFrames(curSlide - 2);
  }, 301);

  enableSlideFrames(curSlide - 1);
  enableSlideFrames(curSlide + 2);

  if (isChromeVoxActive()) {
    speakAndSyncToNode(slideEls[curSlide]);
  }

  var container = document.getElementById('slide_container');
  var boxes = document.getElementsByClassName('slide');
  var newcolor = newColor();
  console.log(newcolor);
  container.style.backgroundColor = newcolor;
  for (i=0; i<boxes.length; i++){
    boxes[i].style.backgroundColor = newcolor;
  }

  updateHash();
};

function newColor() {
  colors = ['#0173BC', '#C82515', '#FDCB2C', '#2CAF34'];
  return colors[Math.floor(Math.random()*(colors.length+1))];
}

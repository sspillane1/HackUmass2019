window.setInterval(function () {
  var w = window.innerWidth
  var h = window.innerHeight
  if (w < 576) {
    document.getElementById('window-size').innerHTML = 'xs: ' + w + " h" + h
  } else if (w >= 1200) {
    document.getElementById('window-size').innerHTML = 'xl: ' + w + " h" + h
  } else if (w >= 992) {
    document.getElementById('window-size').innerHTML = 'lg: ' + w + " h" + h
  } else if (w >= 768) {
    document.getElementById('window-size').innerHTML = 'md: ' + w + " h" + h
  } else {
    document.getElementById('window-size').innerHTML = 'sm: ' + w + " h" + h
  }
}, 100)

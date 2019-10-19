window.setInterval(function () {
  var w = window.innerWidth
  if (w < 576) {
    document.getElementById('window-size').innerHTML = 'xs: ' + w
  } else if (w >= 1200) {
    document.getElementById('window-size').innerHTML = 'xl: ' + w
  } else if (w >= 992) {
    document.getElementById('window-size').innerHTML = 'lg: ' + w
  } else if (w >= 768) {
    document.getElementById('window-size').innerHTML = 'md: ' + w
  } else {
    document.getElementById('window-size').innerHTML = 'sm: ' + w
  }
}, 100)

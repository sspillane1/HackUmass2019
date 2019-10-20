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

const monochrome = document.getElementById("monochrome-toggle");
const correction = document.getElementById("correction-toggle");

monochrome.addEventListener('change', (event) => {
  if (event.target.checked) {
    console.log('Monochrome: On')
  } else {
    console.log('Monochrome: Off')
  }
})

correction.addEventListener('change', (event) => {
  if (event.target.checked) {
    console.log('Color Correction: On')
  } else {
    console.log('Color Correction: Off')
  }
})

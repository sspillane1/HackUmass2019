var video, amountOfCameras;
var currentFacingMode = 'environment';
var btn = document.getElementById('coolbtn');
_init();
function _init() {
        DetectRTC.load(function() {
          initCameraUI();
          initCameraStream();
        });
}

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}

function initCameraUI() {
  video = document.getElementById('video');
    console.log(screenfull.enabled);

    if (screenfull.enabled) {
      btn.addEventListener("click", () => {
        screenfull.toggle();
        //console.log(screenfull.isFullscreen)
      })
    }
    //console.log(screenfull.isFullscreen)

}

function initCameraStream() {
  if (window.stream) {
    window.stream.getTracks().forEach(function(track) {
      track.stop();
    })
  }
  var constraints = {
    audio: false,
    video: {
      width: { min: 1, ideal: window.innerWidth, max: 1920},
      height: {min: 1, ideal: window.innerHeight, max: 1080},
      facingMode: currentFacingMode
    }
  }
  navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);

  function handleSuccess(stream) {
    window.stream = stream;
    video.srcObject = stream;
    return navigator.mediaDevices.enumerateDevices();

  }

  function handleError(error) {
    console.log(error);
    if(error === 'PermissionDeniedError') {
      alert("Permission Denied. Please refresh and give permission");
    }
  }
}

let app = {
  initialize: function(){
    app.onDeviceReady()
  },

  onDeviceReady: function(){
    let options = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      toBack: false,
      tapPhoto: true,
      tapFocus: false,
      previewDrag: false,
      storeToFile: false,
      disableExifHeaderStripping: false
    };

    CameraPreview.startCamera(options);
    CameraPreview.show(document.write("Success"),document.write("Failed"));
  }
};
document.addEventListener('deviceready',app.init);

// var video, amountOfCameras;
// var currentFacingMode = 'environment';
// var btn = document.getElementById('coolbtn');
// var temp_width, temp_height;
// _init();
// function _init() {
//         // DetectRTC.load(function() {
//         //   initCameraUI();
//         //   window.setInterval(function () {
//         //       if (window.innerWidth != temp_width || temp_height != temp_height) {
//         //       initCameraStream();
//         //       temp_width = window.innerWidth;
//         //       temp_height = window.getHeight
//         //     }
//         //
//         //   }, 1000)
//         // });
// }
//
// function openNav() {
//     document.getElementById("sidebar").style.width = "250px";
// }
//
// function closeNav() {
//     document.getElementById("sidebar").style.width = "0";
// }
//
// function initCameraUI() {
//   video = document.getElementById('video');
//     console.log(screenfull.enabled);
//
//     if (screenfull.enabled) {
//       btn.addEventListener("click", () => {
//         screenfull.toggle();
//         //console.log(screenfull.isFullscreen)
//       })
//     }
//     //console.log(screenfull.isFullscreen)
//
// }
//
// function initCameraStream() {
//   if (window.stream) {
//     window.stream.getTracks().forEach(function(track) {
//       track.stop();
//     })
//   }
//
//
//   // capture callback
//   var captureSuccess = function(mediaFiles) {
//     var i, path, len;
//     for (i = 0, len = mediaFiles.length; i < len; i += 1) {
//       path = mediaFiles[i].fullPath;
//       // do something interesting with the file
//     }
//   };
//
//   // capture error callback
//   var captureError = function(error) {
//     navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
//   };
//
//   var constraints = {
//     audio: false,
//     video: {
//       width: { min: 1, ideal: window.innerWidth, max: 1920},
//       height: {min: 1, ideal: window.innerHeight, max: 1080},
//       facingMode: currentFacingMode
//     }
//   }
//   navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:2});
//
//
//   let options = {
//     x: 0,
//     y: 0,
//     width: window.screen.width,
//     height: window.screen.height,
//     camera: CameraPreview.CAMERA_DIRECTION.BACK,
//     toBack: false,
//     tapPhoto: true,
//     tapFocus: false,
//     previewDrag: false,
//     storeToFile: false,
//     disableExifHeaderStripping: false
//   };
//
//   CameraPreview.startCamera(options);
//   CameraPreview.show();
// }

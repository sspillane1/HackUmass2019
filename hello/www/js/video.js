var app = {
  startCameraAbove: function(){
    CameraPreview.startCamera({x: 50, y: 50, width: 300, height: 300, toBack: false, previewDrag: true, tapPhoto: true});
  },

  startCameraBelow: function(){
    CameraPreview.startCamera({x: 50, y: 50, width: 300, height:300, camera: "front", tapPhoto: true, previewDrag: false, toBack: true});
  },

  stopCamera: function(){
    CameraPreview.stopCamera();
  },

  takePicture: function(){
    CameraPreview.takePicture(function(imgData){
      document.getElementById('originalPicture').src = 'data:image/jpeg;base64,' + imgData;
    });
  },

  switchCamera: function(){
    CameraPreview.switchCamera();
  },

  show: function(){
    CameraPreview.show();
  },

  hide: function(){
    CameraPreview.hide();
  },

  changeColorEffect: function(){
    var effect = document.getElementById('selectColorEffect').value;
    CameraPreview.setColorEffect(effect);
  },

  changeFlashMode: function(){
    var mode = document.getElementById('selectFlashMode').value;
    CameraPreview.setFlashMode(mode);
  },

  changeZoom: function(){
    var zoom = document.getElementById('zoomSlider').value;
    document.getElementById('zoomValue').innerHTML = zoom;
    CameraPreview.setZoom(zoom);
  },

  changePreviewSize: function(){
    window.smallPreview = !window.smallPreview;
    if(window.smallPreview){
      CameraPreview.setPreviewSize({width: 100, height: 100});
    }else{
      CameraPreview.setPreviewSize({width: window.screen.width, height: window.screen.height});
    }
  },

  showSupportedPictureSizes: function(){
    CameraPreview.getSupportedPictureSizes(function(dimensions){
      dimensions.forEach(function(dimension) {
        console.log(dimension.width + 'x' + dimension.height);
      });
    });
  },

  init: function(){
    document.getElementById('startCameraAboveButton').addEventListener('click', this.startCameraAbove, false);
    document.getElementById('startCameraBelowButton').addEventListener('click', this.startCameraBelow, false);

    document.getElementById('stopCameraButton').addEventListener('click', this.stopCamera, false);
    document.getElementById('switchCameraButton').addEventListener('click', this.switchCamera, false);
    document.getElementById('showButton').addEventListener('click', this.show, false);
    document.getElementById('hideButton').addEventListener('click', this.hide, false);
    document.getElementById('takePictureButton').addEventListener('click', this.takePicture, false);
    document.getElementById('selectColorEffect').addEventListener('change', this.changeColorEffect, false);
    document.getElementById('selectFlashMode').addEventListener('change', this.changeFlashMode, false);

    if(navigator.userAgent.match(/Android/i)  == "Android"){
      document.getElementById('zoomSlider').addEventListener('change', this.changeZoom, false);
    }else{
      document.getElementById('androidOnly').style.display = 'none';
    }

    window.smallPreview = false;
    document.getElementById('changePreviewSize').addEventListener('click', this.changePreviewSize, false);

    document.getElementById('showSupportedPictureSizes').addEventListener('click', this.showSupportedPictureSizes, false);

    // legacy - not sure if this was supposed to fix anything
    //window.addEventListener('orientationchange', this.onStopCamera, false);
  }
};

document.addEventListener('deviceready', function(){
  app.init();
}, false);

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

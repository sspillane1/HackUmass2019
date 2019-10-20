 function openNav() {
     document.getElementById("mySideNav").style.width = "250px";
 }

 function closeNav() {
     document.getElementById("mySideNav").style.width = "0";
 }
 window.onload = _init;
function _init() {
  //debugger;
  document.getElementById("coolbtn").addEventListener("click", function() {
    openNav()
  })
}

import $ from "../node_modules/jquery/dist/jquery.js";
// let waypoint =  require('../node_modules/waypoints/lib/jquery.waypoints.js')
// nav 
$(document).ready(function () {
    let screenHeight = $(window).height();
    $(window).scroll(function () {
      let currentPosition = $(this).scrollTop();
      // console.log(currentPosition);
      if (currentPosition >= screenHeight) {
        $(".site-nav").addClass("site-nav-scroll");
      } else {
        $(".site-nav").removeClass("site-nav-scroll");
      }
    });
})
// var waypoint = new Waypoint({
//     element: document.getElementById('section[id]'),
//     handler: function() {
//       notify('Basic waypoint triggered')
//     }
// })


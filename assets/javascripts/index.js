$(document).ready(function () {
  $('#demo-carousel-content').carousel();
  setInterval(function () {
    $('#demo-carousel-content').carousel('next');
  }, 3000);

});

//  $(".dropdown-button").dropdown({
//   inDuration: 300,
//   outDuration: 225,
//   constrainWidth: false, // Does not change width of dropdown to that of the activator
//   hover: true, // Activate on hover
//   gutter: 0, // Spacing from edge
//   belowOrigin: false, // Displays dropdown below the button
//   alignment: 'left', // Displays dropdown with edge aligned to the left of button
//   stopPropagation: false // Stops event propagation
// }
// );

$('.dropdown-button').dropdown('open');

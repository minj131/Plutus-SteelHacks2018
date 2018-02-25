$(document).ready(function() {

  // Place JavaScript code here...
  if ( $('.subscription-container').text().length == 0 ) {
      // length of text is 0
      console.log("empty");
  }

  if ( $('.subscription-container').children().length == 0 ) {
    // div has no other tags inside it
    console.log("empty2");
}
});

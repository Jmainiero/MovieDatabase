$(document).ready(function() {

 var movieAPI = "http://www.omdbapi.com/?apikey=93961798&";

$('form').submit(function (evt) {
  let searchButton = $('#search');
  let titleInput = $('#title');

  evt.preventDefault();
  // titleInput.prop("disabled",true);
  searchButton.val("searching....");

  $.getJSON(movieAPI, {
    s: titleInput.val() //object that needs to be sent to api
  },
  function(data) { //Call back function
    console.log(data);
    let statusHTML = '<ul>';
    //Loops through response given back from API and dispalys it in a list
    for(let i =0; i < data.Search.length; i+= 1){
      // console.log(data.Search[i].Title);
      statusHTML += '<li>' + data.Search[i].Title + ' ' + data.Search[i].Year;
      statusHTML += '<img src ="' + data.Search[i].Poster + '" />';
      console.log('Data Success');
    } //End for loop
    statusHTML += '</ul>';

    //Displays Data to the screen via HTML + #photo id
    $('#photos').html(statusHTML);

  }); // end Json
}); // end form submit


}); // end ready

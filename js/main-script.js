$(document).ready(function() {

  var movieAPI = "http://www.omdbapi.com/?apikey=93961798&";

  $('form').submit(function(evt) {
    evt.preventDefault();
    let searchButton = $('#search');
    let titleInput = $('#title');
    let yearInput = $('#year');
    $.getJSON(movieAPI, {
        t: titleInput.val(), //object that needs to be sent to api
        y: yearInput.val(),
        plot: 'full'
      },
      function(data) { //Call back function
        // console.log(data);
        // console.log(Object.values(data));
        let statusHTML = '<table>';
        let keyName = Object.keys(data);
        let testName = Object.values(data);
        console.log(testName);
        console.log(keyName);
        //Filters Poster + Rating out from the original display
        for (let i = 0; i < keyName.length - 1; i++) {
          if (testName[i] != 'N/A') {
            if (keyName[i] != "Poster") {
              if (keyName[i] != "Ratings") {
                statusHTML += '<tr><th>' + keyName[i] + '</th>'
                statusHTML += '<td>' + testName[i] + '</td></tr>';
              }
            }
            //Displays Poster to the page
             else {
              statusHTML += '<tr><th>' + keyName[i] + '</th>'
              statusHTML += '<td><img class= "dataPoster" src ="' + data.Poster + '"/></td>';
            }
          }

        }

        if (titleInput.val() === '') {
          alert('Please Enter a Valid Title');
        }
        if (Object.values(data)[1] === 'Movie not found!') {
          statusHTML += alert('ERROR MOVIE NOT FOUND. PLEASE TRY AGAIN');
        } else {
          //Displays Data to the screen via HTML + #photo id
          $('#photos').html(statusHTML);
        }
      }); // end Json
  }); // end form submit


}); // end ready

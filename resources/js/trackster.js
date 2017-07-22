var Trackster = {};

var API_KEY = "6c4bf89865d4258014d237c23d18f755"

$(document).ready(function(){
  $("#search").click(function() {
  	Trackster.searchTracksByTitle($("input").val())
  });
});

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks. 
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
    $.ajax({
   type: 'GET',
   url: "http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + title + "&api_key=" + API_KEY,
   success: function(response) {
   	console.log(response);
   },
   error: function(xhr, status, error) {
     console.log("An error occurred")
   },
   dataType: 'text'
   });
};
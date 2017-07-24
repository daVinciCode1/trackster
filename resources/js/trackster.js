var Trackster = {};

var API_KEY = "<place API KEY here>"

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
  for (i=0; i<tracks.length; i++) {
    var html="<div class='song'>"+"<div class='col-md-offset-1 col-md-1'><a href='#''><i class='glyphicon glyphicon-play-circle'></i></a></div>"+
    "<div class='col-md-4'>"+tracks[i].title+"</div>"+"<div class='col-md-2'>"+tracks[i].artist+"</div>"+"<div class='col-md-2'>"+tracks[i].album+"</div>"+
    "<div class='col-md-2>"+tracks[i].popularity+"</div>"+"</div>";
    $("#songlist").append(html);
  };
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


var applicationID = "AIzaSyA0rqYpyxLJJxVBQpiMK2AVachABWYo3WE"
/*

function to get one of the links from the array supplied randomly
usage:
getRandomLink(["https://www.youtube.com/","http://www.you.com"]
will return the string containing one of the urls that were supplied to it

*/
function getRandomLink(randomArray) {
	var item = randomArray[Math.floor(Math.random()*randomArray.length)];

    return item;              // The function returns the product of p1 and p2
}


document.addEventListener('DOMContentLoaded', function() {
    console.log("on load has been called from meat.js");
    // alert(getRandomLink(["https://www.youtube.com/","http://www.you.com"]));
    getDuration("9bZkp7q19f0",function(duration){
    	// alert(duration);
    })
}, false);
// https://www.googleapis.com/youtube/v3/videos?id=9bZkp7q19f0&
// part=contentDetails,snippet&key=AIzaSyA0rqYpyxLJJxVBQpiMK2AVachABWYo3WE&fields=items(snippet(title),contentDetails(duration))

/*
callback to get duration of video by providing video id. 
It calls back with the duration of the video in seconds
@Deprecated
*/
function getDuration(videoID,callBack){
  console.warn("USING DEPRECATED FUNCTION, USE getDetails instead");
$.ajax({
  url: "https://www.googleapis.com/youtube/v3/videos?id="+videoID+"&fields=items(snippet(title),contentDetails(duration))&part=contentDetails,snippet&key="+applicationID,
  
}).done(function(data) {
  // alert("respone  "+data.items[0].contentDetails.duration);
  var unFormattedDuration = data.items[0].contentDetails.duration;
  var durationInSeconds = moment.duration(unFormattedDuration).asSeconds();
  callBack(durationInSeconds);
});
}


/*
gets details which include duration of video in seconds, 
and title of video. 
the callback is fired once the request is complete. 

It contains an object 
var details = {
      duration: durationInSeconds,
      title: videoTitle
    };
    
*/
function getDetails(videoID,callBack){
$.ajax({
  url: "https://www.googleapis.com/youtube/v3/videos?id="+videoID+"&fields=items(snippet(title),contentDetails(duration))&part=contentDetails,snippet&key="+applicationID,
  
}).done(function(data) {
  // alert("respone  "+data.items[0].contentDetails.duration);
  var unFormattedDuration = data.items[0].contentDetails.duration;
  var durationInSeconds = moment.duration(unFormattedDuration).asSeconds();
  var videoTitle = data.items[0].snippet.title;

    var details = {
      duration: durationInSeconds,
      title: videoTitle
    };

  console.log(details);
  callBack(details);
});
}

function getTitle(videoID,callBack){
  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/videos?id="+videoID+"&fields=items(snippet(title),contentDetails(duration))&part=contentDetails,snippet&key="+applicationID,
    
  }).done(function(data) {
    // alert("respone  "+data.items[0].contentDetails.duration);
    var videoTitle = data.items[0].snippet.title;

      var details = {
        title: videoTitle
      };

    console.log(details);
    callBack(details);
  });
}





/*
returns url that appends a random time, based on the length of the video.
This link can be opened in a browser
*/
function appendTimeToURL(videoURL,videoDuration){

	var randomTime =   Math.floor(Math.random() * (videoDuration  + 1)) ;
	videoURL = videoURL + "?start=" + randomTime + "&autoplay=1";
	console.log("video url is " +videoURL);
	return videoURL;
}
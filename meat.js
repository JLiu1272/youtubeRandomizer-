

var applicationID = "AIzaSyA0rqYpyxLJJxVBQpiMK2AVachABWYo3WE"
/*

function to get one of the links from the array supplied randomly
usage:
getRandomLink(["https://www.youtube.com/","http://www.you.com"]
will return the string containing on of the urls that were supplied to it

*/
function getRandomLink(randomArray) {
	var item = randomArray[Math.floor(Math.random()*randomArray.length)];

    return item;              // The function returns the product of p1 and p2
}


document.addEventListener('DOMContentLoaded', function() {
    console.log("on load has been called from meat.js");
    alert(getRandomLink(["https://www.youtube.com/","http://www.you.com"]));
    getDuration("9bZkp7q19f0",function(duration){
    	alert(duration);
    })
}, false);


/*
callback to get duration of video by providing video id. 
It calls back with the duration of the video in seconds
*/
function getDuration(videoID,callBack){
$.ajax({
  url: "https://www.googleapis.com/youtube/v3/videos?id="+videoID+"&part=contentDetails&key="+applicationID,
  
}).done(function(data) {
  // alert("respone  "+data.items[0].contentDetails.duration);
  var unFormattedDuration = data.items[0].contentDetails.duration;
  var durationInSeconds = moment.duration('PT15M33S').asSeconds();
  callBack(durationInSeconds);
});
}

/*
returns url that appends a random time, based on the length of the video.
This link can be opened in a browser
*/
function appendTimeToURL(videoURL,videoDuration){

	var randomTime =   Math.floor(Math.random() * (videoDuration  + 1)) ;
	videoURL = videoURL + "&t=" + randomTime;
	console.log("video url is " +videoURL);
	return videoURL;
}
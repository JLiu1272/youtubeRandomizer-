


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
}, false);
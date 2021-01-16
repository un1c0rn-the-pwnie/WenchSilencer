var silenceWenchUrl = "https://www.youtube.com/embed/YwIA9oaBjPU?playlist=YwIA9oaBjPU&autoplay=1&loop=1";
var potentialWench = window.location.host.replace("www.","");
var totalWenches = wenches.length;
isWench = wenches.indexOf(potentialWench) != -1;
if(isWench) 
	chrome.runtime.sendMessage({redirect: silenceWenchUrl});
//Title of page change color
var title = document.getElementById("title");
console.log("title = " + title.innerHTML);
var colorIt = function() {
	title.style.color = "rgb(0,255,0)";
};

title.addEventListener('click', colorIt);


//Show sheet music when click "Create a beat"
var staff = document.getElementsByClassName("staff")[0];
console.log("staff = " + staff);
var snareNote = document.getElementsByClassName("snareNote")[0];

var showSheetMusic = function() {
  staff.style.visibility = 'visible';

  var drumToHit = whichDrum();
  if (drumToHit === "none"){
    snareNote.style.visibility = 'hidden';
  }
  else {
      snareNote.style.visibility = 'visible';
    if (drumToHit === "snareDrum") {
  snareNote.style.bottom = "72px";
  }
  else if (drumToHit === "baseDrum"){
    snareNote.style.bottom = "23px";
  }
  }
};

title.addEventListener('click', showSheetMusic);

//Drum kit image grow
var drumPic = document.getElementById("drumkitImage");
console.log("drumPic = " + drumPic.alt);
console.log("drumPic width = " + drumPic.width);
var startTime = new Date().getTime();
console.log("startTime = "+startTime);
var grow = function () {
  var currTime = new Date().getTime();
  var newWidth = 10 + ((currTime - startTime) / 1000) * 30;
  console.log("drumPic.width = " + drumPic.width);
  if (drumPic.width < 200){
  drumPic.style.width = newWidth + "px";
 console.log("drumPic.style.width = " + drumPic.style.width);
 window.requestAnimationFrame(grow);
  }
};
grow();

//generates a random integer
var randomIntGenerator = function(){
  var answer = Math.floor(Math.random()*3);
  console.log("random integer = "+answer);
  return answer;
};

//chooses which drum or no drum to hit
var whichDrum = function() {
  var randomInt = randomIntGenerator();
  if (randomInt === 0) {
    return "baseDrum";
  }
  else if (randomInt === 1) {
    return "snareDrum";
  }
  else if (randomInt === 2) {
    return "none";
  }
};
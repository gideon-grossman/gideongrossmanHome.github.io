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
  snareNote.style.visibility = 'visible';
  var drumToHit = whichDrum();
  if (drumToHit === "baseDrum"){
    snareNote.style.bottom = "23px";
  }
  else if (drumToHit === "snareDrum"){
    snareNote.style.bottom = "70px";
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
  var newWidth = 10 + ((currTime - startTime) / 1000) * 100;
  console.log("drumPic.width = " + drumPic.width);
  if (drumPic.width < 200){
  drumPic.style.width = newWidth + "px";
    console.log("drumPic.style.width = " + drumPic.style.width);
  window.requestAnimationFrame(grow);
  }
};
grow();

var trueOrFalse = function(){
  var answer = Math.round(Math.random());
  console.log(answer); return answer;
};

var whichDrum = function() {
  var trueOrFalseOutput = trueOrFalse();
  if (trueOrFalseOutput === 0) {
    return "baseDrum";
  }
  else if (trueOrFalseOutput === 1) {
    return "snareDrum";
  }
};

console.log(whichDrum());
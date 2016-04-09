//Title of page change color
var title = document.getElementById("title");
console.log("title = " + title.innerHTML);
var colorIt = function() {
	title.style.color = "rgb(0,255,0)";
};

title.addEventListener('click', colorIt);


//Show sheet music when click "Create a beat"
var staff = document.getElementsByClassName("staff")[0];
var note1 = document.getElementsByClassName("musicalNote")[0];
var note2 = document.getElementsByClassName("musicalNote")[1];
var note3 = document.getElementsByClassName("musicalNote")[2];
var note4 = document.getElementsByClassName("musicalNote")[3];

var showSheetMusic = function() {
  staff.style.visibility = 'visible';
  for (var i = 0; i < 4; i++){
      chooseNote(i);
  }
};

var spaceNotes = function() {
  var notes = [note1, note2, note3, note4];
  for (var i = 0; i < notes.length; i++){
    notes[i].style.left = parseFloat(notes[i].style.left) +50 +"px";
 console.og("note"+i+"style.left = "+notes[i].stye.left);
  }
};
var showNotes = function(){
  chooseNote(note1);
  chooseNote(note2);
    chooseNote(note3);
    chooseNote(note4);
};


var chooseNote = function(beat){
  var drumToHit = whichDrum();
  if (drumToHit !== "none"){
    var ElementExists = document.getElementById('beat'+beat);
    var thisNote;
    if (ElementExists){
      thisNote = ElementExists;
      console.log("Element for beat "+beat+"Exists and is called " +ElementExists.id);
    }
    else {
      console.log("Element does not exist");
      thisNote = document.createElement('div');
    thisNote.id = 'beat'+beat;
    console.log("thisNote's id = "+ thisNote.id);
    thisNote.style.zIndex = '-1';
    thisNote.style.position= 'absolute';
     var thisNoteImage = document.createElement('img');
      thisNoteImage.setAttribute('class','noteImage');
   thisNote.appendChild(thisNoteImage);
    }
    if (drumToHit === "baseDrum"){
          thisNote.style.bottom = '23px';
    }
    else if (drumToHit === "snareDrum") {
      thisNote.style.bottom = '50px';
    }
    var distanceFromLeft = 50+beat*50;
    console.log("distancefromleft = " +distanceFromLeft);
    console.log("beat = "+beat);
    thisNote.style.left = distanceFromLeft +'px';
    console.log("thisNote.style.left = "+ thisNote.style.left);
 document.getElementsByClassName('staff')[0].appendChild(thisNote);
  }
};

title.addEventListener('click', showSheetMusic);

/*
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
*/
Jquery("#drumkitImage").hide().show("slow");
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
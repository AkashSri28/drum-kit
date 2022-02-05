
var drums=document.querySelectorAll(".drum");

var buttonName;

for(var i=0; i<drums.length;i++){
  drums[i].addEventListener("click", function(){
    buttonName=this.innerHTML;
    playSound(buttonName);
    buttonAnimation(buttonName);
  });
}

document.addEventListener("keydown", function(event){
  playSound(event.key);
  buttonAnimation(event.key);
});


function playSound(key){
  buttonName=key;
  switch (buttonName) {
    case "w":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "a":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log("wrong key");

  }
}

function buttonAnimation(currentKey){
  var activeKey = document.querySelector("."+currentKey);
  activeKey.classList.add("pressed");
  setTimeout(function(){
    activeKey.classList.remove("pressed");
  }, 100);

}

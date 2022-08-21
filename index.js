var words= document.getElementsByClassName("drum");

var buttonclicked="a";
for (let i = 0; i < words.length; i++) {
  words[i].addEventListener("click",handleClick);
}
//for clicks
function handleClick(){
var word=this.innerText;
makeSound(word);
buttonAnimation(word);
  //this.style.color="red";
  //console.log(this.innerText);
  //var word=this.innerText;
  //var wordslist=['w','a','s','d','j','k','l']
  //for (var i=0; i<wordslist.length;i++){
    //if (wordslist[i]===word){
      //words[i].style.color="white";}}
}
//for pressed buttons
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
  });

  function makeSound(key){
    switch (key) {
      case 'w':
      var audio = new Audio('tom-1.mp3');
      audio.play();
      case 'a':
      var audio = new Audio('tom-2.mp3');
      audio.play();
      case 's':
      var audio = new Audio('tom-3.mp3');
      audio.play();
      case 'd':
      var audio = new Audio('tom-4.mp3');
      audio.play();
      case 'j':
      var audio = new Audio('kick-bass.mp3');
      audio.play();
      case 'k':
      var audio = new Audio('snare.mp3');
      audio.play();
      case 'l':
      var audio = new Audio('crash.mp3');
      audio.play();
        break;

    }
  }

  function buttonAnimation(activekey){
    var activeButton = document.querySelector("."+ activekey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },100);

  }

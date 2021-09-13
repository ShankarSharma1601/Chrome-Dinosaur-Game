var dinosaur = document.getElementById("dinosaur");
var hurdle = document.getElementById("hurdle");
var counter=0;
function jump(){
    if(dinosaur.classList == "animate"){return}
    dinosaur.classList.add("animate");
    setTimeout(function(){
        dinodaur.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(dinosaur).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(hurdle).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        hurdle.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        hurdle.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
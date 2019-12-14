lightsAnimation();

var pairs = true;
function lightsAnimation() {
  var i;
  var lights = document.getElementsByClassName("lights");
  for (i = 0; i < lights.length; i++) {
    if(i%2==0){
        if(pairs){
            lights[i].style.fill = "white";
        }
        else{
            lights[i].style.fill = "green";
        }
    }
    else{
        if(pairs){
            lights[i].style.fill = "green";
        }
        else{
            lights[i].style.fill = "white";
        }
    }
  }
    pairs = !pairs
    setTimeout(lightsAnimation, 1000); // Change image every 2 seconds
}

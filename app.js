function yourFeelings() {
  var emotion = prompt("Good morning love, how do you feel today",);
  var convertCase = emotion.toUpperCase();
  if(convertCase === "HAPPY") {
    alert("I am so happy that you feel " + emotion + " today my love.");
  } else if(convertCase === "SAD") {
    alert("Oh no, I am so sorry that you feel " + emotion + ". Please tell what's wrong and how can I help");
  } else {
    alert("When did you start feeling " + emotion + ". Do you want to talk about it");
  }
}





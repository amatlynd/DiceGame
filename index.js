function generateDiceNumber() {
  return Math.floor((Math.random()*6) + 1);
}

function changeDiceFace(imgName) {
  var randomNumber = generateDiceNumber();
  document.getElementsByClassName(imgName)[0].src = "images/dice" + randomNumber + ".png";
  return randomNumber;
}

function updatePage(){
  var randomNumber1 = changeDiceFace("img1");
  var randomNumber2 = changeDiceFace("img2");

  //Checks to see who wins and updates the page
  if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName("h1")[0].innerText = "🚩Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.getElementsByTagName("h1")[0].innerText = "Player 2 Wins! 🚩";
  } else {
    document.getElementsByTagName("h1")[0].innerText = "Tied!";
  }
}

updatePage();

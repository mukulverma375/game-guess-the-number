var randomNumber = Math.floor((Math.random() * 100) + 1);

console.log(randomNumber);

var guessCount = 1;

document.getElementsByClassName("guesses")[0].innerHTML += "<p>Guesses : </p>"

document.getElementById("guessSubmit").onclick = function () {

  var userGuess = document.getElementById("guessField").value;

  if (userGuess !=null)

  {
    guessCount++;

    document.getElementsByClassName("guesses")[0].innerHTML += " " + userGuess;
  }

  if (userGuess == randomNumber) {
    document.getElementsByClassName("lastResult")[0].innerHTML = "<strong>Correct</strong>"
    document.getElementsByClassName("lastResult")[0].style.backgroundColor = "green";
    document.getElementsByClassName("lowOrHi")[0].innerHTML = "";
    document.getElementById("guessSubmit").disabled = "true";
    document.getElementById("restartGame").style.display = "inline";



  } else {

    document.getElementsByClassName("lastResult")[0].innerHTML = "<strong>Wrong</strong> "
    document.getElementsByClassName("lastResult")[0].style.backgroundColor = "red";

    if (userGuess > randomNumber)
      document.getElementsByClassName("lowOrHi")[0].innerHTML = "<p>Try Going Lower</p>";

    else if (userGuess < randomNumber) {

      document.getElementsByClassName("lowOrHi")[0].innerHTML = "<p>Try Going Higher</p>";


    }

  }

  if (guessCount > 11) {

    document.getElementsByClassName("lastResult")[0].innerHTML = "Whoopse, Max Guesses Reached , Game is Over"
    document.getElementsByClassName("lastResult")[0].style.backgroundColor = "red";
    document.getElementsByClassName("lowOrHi")[0].innerHTML = "";
    document.getElementById("guessSubmit").disabled = "true";
    document.getElementById("restartGame").style.display = "inline";


  }

}

document.getElementById("restartGame").onclick = function () {
  window.location.href = "guess.html";
}
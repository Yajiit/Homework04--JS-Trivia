function printHighscores() {
  // either get scores from localstorage or set to empty array
  var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

  // sort highscores by score property in descending order HINT: the sort method. 
  highscores.sort(function(a, b) {
    return b.score - a.score;
  });

  for (var i = 0; i < highscores.length; i += 1) {
    // create li tag for each high score
    var liTag = document.createElement('li');
    liTag.textContent = highscores[i].initials + ' - ' + highscores[i].score;

    // ADDING STYLE TO TOP THREE SCORES
    if (i === 0) {
      liTag.classList.add('first-score');
    }
    if (i === 1) {
      liTag.classList.add('second-score');
    }
    if (i === 2) {
      liTag.classList.add('third-score');
    }
    // display on page
    var olEl = document.getElementById('highscores');
    olEl.appendChild(liTag);
  }
}

function clearHighscores() {
  var AreYouSure = window.confirm("ARE YOU SURE YOU WISH TO DELETE ALL HIGH SCORES?")
  if (AreYouSure){
  window.localStorage.removeItem('highscores');
  window.location.reload();
}}

document.getElementById('clear').onclick = clearHighscores;

// run function when page loads
printHighscores();

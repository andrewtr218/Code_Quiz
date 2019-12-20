var qArr = [{
    title: "What common ghost phrase do ghost programmers say to startle humans?",
    choices: ["Top of the mornin' to ya!", "BoOOooOOoOoolean!", "Great job sport!", "Aaaaaaaaaaaaaaaaaaaaaaaaagh"],
    answer: "BoOOooOOoOoolean!"
  },
  {
    title: "What is the combined number of unique letters and numbers on a standard keyboard?",
    choices: ["6", "43", "Qwerty 2", "46"],
    answer: "46"
  },
];

var playerName = '';
var playerScore = 0;
var currentQuestion = 0;
var timerID = null;
var timeLeft = 0;

function initializeQuestion() {
  let currentQ = qArr[currentQuestion];
  showTimeLeft()
  document.querySelector('#question-title').innerHTML = currentQ.title
  document.querySelector('#game-score').innerHTML = `Your current score: ${playerScore}`;

  flushButtons();

  for (let i = 0; i < currentQ.choices.length; i++) {
    addButton(currentQ.choices[i], currentQ.answer);
  }
}

function addButton(choice, rightAnswer) {
  let el = document.createElement('div');
  // add classes on element here

  el.setAttribute('data-choice', choice);
  el.innerHTML = choice;

  el.addEventListener('click', onButtonClick);

  document.querySelector('#answer-buttons-block').appendChild(el)
}

function onButtonClick(e) {
  let target = e.target;
  let answered = target.getAttribute('data-choice')

  if (answered == qArr[currentQuestion].answer) {
    playerScore += 1;
  } else {
    playerScore -= 1;
    timeLeft -= 5;

    if (playerScore < 0)
      playerScore = 0;
  }

  currentQuestion += 1;

  if (currentQuestion >= qArr.length) {
    endGame()
  } else {
    initializeQuestion()
  }
}

function flushButtons() {
  let block = document.querySelector('#answer-buttons-block')
  let choices = block.querySelectorAll('div[data-choices]')

  for (let i = 0; i < choices.length; i++) {
    choices[i].removeEventListener('click', onButtonClick)
  }

  document.querySelector('#answer-buttons-block').innerHTML = ''
}

function initializeGame() {
  playerName = document.querySelector('#name').value;

  if (playerName === ''){
    return;
  };
  document.querySelector('#main-game').removeAttribute('style')
  document.querySelector('#intro').setAttribute('style', 'display:none;')
  initializeTimer();
  initializeQuestion();
}

function initializeTimer() {
  timerID = window.setInterval(tick, 1000)
  timeLeft = 30;
}

function tick() {
  timeLeft --;
  showTimeLeft();

  if (timeLeft <= 0) {
    endGame();
  }
}

function showTimeLeft() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = (timeLeft - (minutes * 60));

  document.querySelector('#timer').innerHTML = timeLeft + ' seconds';
}

function endGame() {
  window.clearInterval(timerID)
  document.querySelector('#end').removeAttribute('style')
  document.querySelector('#main-game').setAttribute('style', 'display:none;')

  let scores = JSON.parse(localStorage.getItem('scores') || '[]')
  // let scoreStr = '<table>'
  let scoreStr = '';
  scores.push({
    name: playerName,
    score: playerScore
  });

  localStorage.setItem('scores', JSON.stringify(scores));

  for (let i = 0; i < scores.length; i++) {
      scoreStr += `<div class="row"><div class="col c1">${scores[i].name}</div><div class="col c2">${scores[i].score}</div></div>`;
      // scoreStr += '<td>'+scores+'</td>'
  };

  // scoreStr += '</table>'

  document.querySelector('#end-score').innerHTML = scoreStr

}

function reset() {
  document.querySelector('#intro').removeAttribute('style');
  document.querySelector('#end').setAttribute('style', 'display:none;');
  document.querySelector('#name').value = '';
  playerName = '';
  playerScore = 0;
  currentQuestion = 0;
}
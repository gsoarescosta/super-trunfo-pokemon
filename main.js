var npcCard;
var playerCard;

function getCard() {
  var npcCardNumber = parseInt(Math.random() * cards.length);
  npcCard = cards[npcCardNumber];
  var playerCardNumber = parseInt(Math.random() * cards.length);
  while (playerCardNumber == npcCardNumber) {
    playerCardNumber = parseInt(Math.random() * cards.length);
  }
  playerCard = cards[playerCardNumber];
  document.getElementById("button-get-card").disabled = true;
  document.getElementById("button-play").disabled = false;
  showPlayerCard();
}

function getAttr() {
  var radioAttr = document.getElementsByName("attr");
  for (var i = 0; i < radioAttr.length; i++) {
    if (radioAttr[i].checked) {
      return radioAttr[i].value;
    }
  }
}

function play() {
  var sameAttr = getAttr();
  var divResult = document.getElementById("result");

  if (playerCard.attr[sameAttr] > npcCard.attr[sameAttr]) {
    resultTextHTML = "<p class='result'>Venceu</p>";
  } else if (playerCard.attr[sameAttr] < npcCard.attr[sameAttr]) {
    resultTextHTML = "<p class='result'>Perdeu</p>";
  } else {
    resultTextHTML = "<p class='result'>Empatou</p>";
  }
  divResult.innerHTML = resultTextHTML;

  document.getElementById("button-play").disabled = true;
  showNpcCard();
}

function showPlayerCard() {
  var divPlayerCard = document.getElementById("player-card");
  divPlayerCard.style.backgroundImage = `url(${playerCard.image})`;
  var frame =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" class="card-frame">';
  var tagHTML = "<div id='options' class='card-status'>";

  var optionsText = "";
  for (var attr in playerCard.attr) {
    optionsText +=
      "<input type='radio' name='attr' value='" +
      attr +
      "'>" +
      attr +
      " " +
      playerCard.attr[attr] +
      "<br>";
  }
  var name = `<p class="card-subtitle">${playerCard.name}</p>`;

  divPlayerCard.innerHTML = frame + name + tagHTML + optionsText + "</div>";
}

function showNpcCard() {
  var divNpcCard = document.getElementById("npc-card");
  divNpcCard.style.backgroundImage = `url(${npcCard.image})`;
  var frame =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" class="card-frame">';
  var tagHTML = "<div id='options' class='card-status'>";

  var optionsText = "";
  for (var attr in npcCard.attr) {
    optionsText +=
      "<p type='text' name='attr' value='" +
      attr +
      "'>" +
      attr +
      " " +
      npcCard.attr[attr] +
      "</p>";
  }
  var name = `<p class="card-subtitle">${npcCard.name}</p>`;

  divNpcCard.innerHTML = frame + name + tagHTML + optionsText + "</div>";
}

// css class for different card image
const CARD_TECHS = [
    'html5',
    'css3',
    'js',
    'sass',
    'nodejs',
    'react',
    'linkedin',
    'heroku',
    'github',
    'aws'
];

const cardObj = {
    css3: '<div class="card css3" data-tech="css3"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>',
    html5: '<div class="card html5" data-tech="html5"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>'
}
var cardKeys = Object.keys(cardObj);

// only list out some of the properties,
// add more when needed
const game = {
    score: 0,
    level: 1,
    timer: 60,
    timerDisplay: null,
    scoreDisplay: null,
    levelDisplay: null,
    timerInterval: null,
    startButton: null,
    previousCard: null,
    currentCard: null,
    cardFlipped: false,
    lockBoard: false,
    // and much more
};

setGame();
startGame();
/*******************************************
/     game process
/******************************************/
function setGame() {
    // register any element in your game object
}

function startGame() {
    let button = document.querySelector(".game-stats__button");

    // console.log(cardItem);
    button.addEventListener("click", () => {
        document.querySelector(".game-board").setAttribute("style", "grid-template-columns: 1fr 1fr");
        //document.querySelector(".game-instruction").style.display = "none";

        //TODO:debug purpose only
        document.querySelector(".game-board").innerHTML = "";

        let totalCards = 0;
        let cssCount = 0;
        let htmlCount = 0;
        //console.log(cardObj.css3);
        while (totalCards < 4) {
            let child = Math.floor(Math.random() * cardKeys.length);
            //console.log(cardKeys[child]);

            if (cssCount < 2 && (cardKeys[child] == "css3")) {
                document.querySelector(".game-board").innerHTML += "" + cardObj[cardKeys[child]];
                cssCount++; //1 2
                totalCards++; //1 2
            }

            if (htmlCount < 2 && (cardKeys[child] == "html5")) {
                document.querySelector(".game-board").innerHTML += "" + cardObj[cardKeys[child]];
                htmlCount++;
                totalCards++;
            }
        }

        const cards = document.querySelectorAll(".card");
        cards.forEach(card => card.addEventListener('click', handleCardFlip));
        [game.previousCard, game.currentCard] = [null, null];
        //console.log(cssCount, htmlCount);
    })
}

function handleCardFlip() {
    if (game.lockBoard) {
        return;
    }

    if (this === game.previousCard) {
        this.classList.remove('card--flipped');
        game.previousCard = null;
        game.cardFlipped = false;
        return;
    }
    //console.log("clicked");
    this.classList.add('card--flipped');

    if (!game.cardFlipped) {
        game.cardFlipped = true;
        game.previousCard = this;
    } else {
        game.cardFlipped = false;
        game.currentCard = this;
        if (game.previousCard.dataset.tech === game.currentCard.dataset.tech) {
            game.previousCard.removeEventListener('click', handleCardFlip);
            game.currentCard.removeEventListener('click', handleCardFlip);
            console.log(game.previousCard.dataset.tech, game.currentCard.dataset.tech)
        } else {
            game.lockBoard = true;
            setTimeout(() => {
                game.previousCard.classList.remove('card--flipped');
                game.currentCard.classList.remove('card--flipped');
                game.lockBoard = false;
                game.cardFlipped = false;
                [game.previousCard, game.currentCard] = [null, null];
            }, 1500);
        }
    }
}

function nextLevel() {}

function handleGameOver() {}

/*******************************************
/     UI update
/******************************************/
function updateScore() {}

function updateTimerDisplay() {}

/*******************************************
/     bindings
/******************************************/
function bindStartButton() {}

function unBindCardClick(card) {}

function bindCardClick() {}
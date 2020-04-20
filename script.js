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

const cardObjLvl1 = {
    css3: '<div class="card css3" data-tech="css3"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>',
    html5: '<div class="card html5" data-tech="html5"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>'
}

const cardObjLvl2 = {
    css3: '<div class="card css3" data-tech="css3"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>',
    html5: '<div class="card html5" data-tech="html5"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>',
    js: '<div class="card js" data-tech="js"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>',
    react: '<div class="card react" data-tech="react"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>',
    nodejs: '<div class="card nodejs" data-tech="nodejs"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>',
    sass: '<div class="card sass" data-tech="sass"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>',
    linkedin: '<div class="card linkedin" data-tech="linkedin"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>',
    heroku: '<div class="card heroku" data-tech="heroku"><div class="card__face card__face--front"></div><div class="card__face card__face--back"></div></div>',
}


// only list out some of the properties,
// add more when needed
const game = {
    score: 0,
    level: 1,
    timer: 60,
    cardKeysLvl1: Object.keys(cardObjLvl1),
    cardKeysLvl2: Object.keys(cardObjLvl2),
    timerDisplay: null,
    scoreDisplay: null,
    levelDisplay: null,
    timerInterval: null,
    startButton: null,
    previousCard: null,
    currentCard: null,
    cardFlipped: false,
    lockBoard: false,
    matchPair: 0,
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
        //console.log(cardObjLvl1.css3);
        while (totalCards < 4) {
            let child = Math.floor(Math.random() * game.cardKeysLvl1.length);
            //console.log(game.cardKeysLvl1[child]);

            if (cssCount < 2 && (game.cardKeysLvl1[child] == "css3")) {
                document.querySelector(".game-board").innerHTML += "" + cardObjLvl1[game.cardKeysLvl1[child]];
                cssCount++; //1 2
                totalCards++; //1 2
            }

            if (htmlCount < 2 && (game.cardKeysLvl1[child] == "html5")) {
                document.querySelector(".game-board").innerHTML += "" + cardObjLvl1[game.cardKeysLvl1[child]];
                htmlCount++;
                totalCards++;
            }
        }

        const cards = document.querySelectorAll(".card");
        cards.forEach(card => card.addEventListener('click', handleCardFlip));

        //clear all the flag
        [game.previousCard, game.currentCard, game.cardFlipped, game.lockBoard, game.matchPair] = [null, null, false, false, 0];
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
            //console.log(game.previousCard.dataset.tech, game.currentCard.dataset.tech)
            game.matchPair++;
            if (game.level === 1 && game.matchPair === 2) {
                console.log(game.matchPair, game.level);
                setTimeout(() => {
                    nextLevel();
                }, 1500);
            } else if (game.level === 2 && game.matchPair === 8) {
                console.log(game.matchPair, game.level);
                setTimeout(() => {
                    nextLevel();
                }, 1500);
            }
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

function nextLevel() {
    let totalCardsLvl2 = 0;
    let cssCount = 0;
    let htmlCount = 0;
    let jsCount = 0;
    let reactCount = 0;
    let nodejsCount = 0;
    let sassCount = 0;
    let linkedinCount = 0;
    let herokuCount = 0;
    game.level++;
    document.querySelector(".game-board").innerHTML = "";
    document.querySelector(".game-board").setAttribute("style", "grid-template-columns: 1fr 1fr 1fr 1fr");
    while (totalCardsLvl2 < 16) {
        let child = Math.floor(Math.random() * game.cardKeysLvl2.length);
        //console.log(game.cardKeysLvl1[child]);

        if (cssCount < 2 && (game.cardKeysLvl2[child] == "css3")) {
            document.querySelector(".game-board").innerHTML += "" + cardObjLvl2[game.cardKeysLvl2[child]];
            cssCount++; //1 2
            totalCardsLvl2++; //1 2
        }

        if (htmlCount < 2 && (game.cardKeysLvl2[child] == "html5")) {
            document.querySelector(".game-board").innerHTML += "" + cardObjLvl2[game.cardKeysLvl2[child]];
            htmlCount++;
            totalCardsLvl2++;
        }
        if (jsCount < 2 && (game.cardKeysLvl2[child] == "js")) {
            document.querySelector(".game-board").innerHTML += "" + cardObjLvl2[game.cardKeysLvl2[child]];
            jsCount++;
            totalCardsLvl2++;
        }
        if (reactCount < 2 && (game.cardKeysLvl2[child] == "react")) {
            document.querySelector(".game-board").innerHTML += "" + cardObjLvl2[game.cardKeysLvl2[child]];
            reactCount++;
            totalCardsLvl2++;
        }
        if (nodejsCount < 2 && (game.cardKeysLvl2[child] == "nodejs")) {
            document.querySelector(".game-board").innerHTML += "" + cardObjLvl2[game.cardKeysLvl2[child]];
            nodejsCount++;
            totalCardsLvl2++;
        }
        if (sassCount < 2 && (game.cardKeysLvl2[child] == "sass")) {
            document.querySelector(".game-board").innerHTML += "" + cardObjLvl2[game.cardKeysLvl2[child]];
            sassCount++;
            totalCardsLvl2++;
        }
        if (linkedinCount < 2 && (game.cardKeysLvl2[child] == "linkedin")) {
            document.querySelector(".game-board").innerHTML += "" + cardObjLvl2[game.cardKeysLvl2[child]];
            linkedinCount++;
            totalCardsLvl2++;
        }
        if (herokuCount < 2 && (game.cardKeysLvl2[child] == "heroku")) {
            document.querySelector(".game-board").innerHTML += "" + cardObjLvl2[game.cardKeysLvl2[child]];
            herokuCount++;
            totalCardsLvl2++;
        }
        const cards = document.querySelectorAll(".card");
        cards.forEach(card => card.addEventListener('click', handleCardFlip));

        //clear all the flag
        [game.previousCard, game.currentCard, game.cardFlipped, game.lockBoard, game.matchPair] = [null, null, false, false, 0];

    }
}

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
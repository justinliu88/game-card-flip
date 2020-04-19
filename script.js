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
    startButton: null
        // and much more
};

setGame();
startGame();
handleCardFlip();
/*******************************************
/     game process
/******************************************/
function setGame() {
    // register any element in your game object
}

function startGame() {
    let button = document.querySelector(".game-stats__button");
    let cardKeys = Object.keys(cardObj);

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
        console.log(cssCount, htmlCount);
    })
}

function handleCardFlip() {
    let clickCard = document.querySelector(".game-board");
    let checkCard = 0;
    var visibleCards = [];
    //console.log(clickCard);
    clickCard.addEventListener("click", (element) => {
        let timeOut;
        let targetClass = element.target.parentElement;
        visibleCards[checkCard] = targetClass;

        if (checkCard < 2) {
            console.log(checkCard);
            if (!targetClass.classList.contains("card--flipped")) {
                targetClass.classList.add("card--flipped");
                checkCard++;
            } else {
                targetClass.classList.remove("card--flipped");
                checkCard--;

            }
        }

        if (checkCard === 2) {
            timeOut = setTimeout(function() {
                for (i in visibleCards) {
                    visibleCards[i].classList.remove("card--flipped");
                    checkCard = 0;
                }
            }, 1500);
        }
    });
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
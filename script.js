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
    button.addEventListener("click", () => {
        document.querySelector(".game-board").setAttribute("style", "grid-template-columns: 1fr 1fr");
        document.querySelector(".game-instruction").style.display = "none";
        document.querySelector(".game-content").style.display = "grid";

    })
}

function handleCardFlip() {
    let clickCard = document.querySelector(".game-content");
    clickCard.addEventListener("click", (element) => {
        let targetClass = element.target.parentElement;
        console.log(targetClass);
        !targetClass.classList.contains("card--flipped") ? targetClass.classList.add("card--flipped") : targetClass.classList.remove("card--flipped");

        // document.querySelector(".card__face").setAttribute("style", "transform: rotateY(180deg)");
        // document.querySelector(".card__face").setAttribute("style", "backface-visibility: visible");
        // document.querySelector(".card__face--front").setAttribute("style", "backface-visibility: visible");

    })

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
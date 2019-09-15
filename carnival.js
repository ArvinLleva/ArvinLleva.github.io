var foundTreasure = Math.floor(Math.random() * 9); // when you win

var losingTreasure = Math.floor(Math.random() * 9); // when you lose

var clickCounter = 0;
var currentWinPercentage = `${((1 / 9) * 100).toFixed(2)}%`; // you first have one out of nine chances to find the treasure

var alreadyClickedArr = []; // this is for locations already present

document.getElementById("percentageMessage").innerHTML = `You currently have a ${currentWinPercentage} chance of finding the treasure.`; // this is for the p tag for endgame


while (foundTreasure === losingTreasure) {
    losingTreasure = Math.floor(Math.random() * 9);
}

function treasure(location) {
    if (alreadyClickedArr.includes(location) === false) { //
        clickCounter++;

        changePercentage(clickCounter);

        if (location === foundTreasure) {
            document.getElementById("table").innerHTML = "You Win!";

            document.getElementById("endGameMessage").innerHTML = `🤑`;
            document.getElementById("percentageMessage").innerHTML = "";

        } else if (location === losingTreasure) {
            document.getElementById("table").innerHTML = "You Lose!";

            var x = document.createElement("IMG");
                x.setAttribute("src", "https://media1.giphy.com/media/3o7bu57lYhUEFiYDSM/giphy.gif");
                x.setAttribute("width", "304");
                x.setAttribute("height", "228");
                x.setAttribute("alt", "The Pulpit Rock");
                document.body.appendChild(x);
                
            document.getElementById("endGameMessage").innerHTML = x;

            document.getElementById("percentageMessage").innerHTML = "";


        } else {
            document.getElementById(location).innerHTML = "❌";
            alreadyClickedArr.push(location);
        }
    }
}

function changePercentage(clicks) {
    var optionsAvailable = 9;

    currentWinPercentage = `${((1 / optionsAvailable) * 100).toFixed(2)}%`; // you first have one out of nine chances to find the treasure

    optionsAvailable -= clicks;

    currentWinPercentage = `${((1 / optionsAvailable) * 100).toFixed(2)}%`;

    document.getElementById("percentageMessage").innerHTML = `You currently have a ${currentWinPercentage} chance of finding the treasure.`;
}

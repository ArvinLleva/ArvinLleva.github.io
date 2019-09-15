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

            var win = document.createElement("IMG");
                win.setAttribute("src", "https://media1.giphy.com/media/3o7bu57lYhUEFiYDSM/giphy.gif");
                win.setAttribute("width", "500");
                win.setAttribute("height", "500");
                win.setAttribute("alt", "win");
                document.body.appendChild(win);

            document.getElementById("percentageMessage").innerHTML = "";

        } else if (location === losingTreasure) {
            document.getElementById("table").innerHTML = "You Lose!";

            var lose = document.createElement("IMG");
                lose.setAttribute("src", "https://cdn.vox-cdn.com/uploads/chorus_asset/file/8689379/anigif_enhanced_946_1433453114_7.gif");
                lose.setAttribute("width", "500");
                lose.setAttribute("height", "500");
                lose.setAttribute("alt", "lost");
                document.body.appendChild(lose);


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

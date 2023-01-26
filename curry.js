// Define some variables
const game = document.getElementById("game");
const tiles = document.getElementById("tiles");
const bar = document.getElementById("bar");
const letters = ["qqe", "qqq", "qqw", "qqe", "www", "wwq", "wwe", "eee", "eeq", "eew", "qwe"]

// Create a new tile with a specific letter
function createTile() {
    let letter = letters[Math.floor(Math.random() * letters.length)];
    let tile = document.createElement("div");
    tile.classList.add("tile");
    tile.innerHTML = letter;
    tiles.appendChild(tile);
}

// Move the tiles down every second
setInterval(() => {
    let children = tiles.children;
    for (let i = 0; i < children.length; i++) {
      children[i].style.top = (children[i].offsetTop + Math.floor(Math.random()*10)+1) + "px";
      if (children[i].offsetTop > game.offsetHeight) {
        children[i].remove();
      }
    }
  }, 100);

// Check if the pressed keys match the word on the top tile
let typedWord = "";
document.addEventListener("keydown", (event) => {
 let topTile = tiles.children[0];
    if (topTile) {
    typedWord += event.key;
    if (typedWord !== topTile.innerHTML) {
        document.getElementById("game-over").style.display = "block";
        clearInterval(gameLoop); //stop the game
    }
}
});

function checkCombination(topTile, typedWord) {
    if (typedWord !== topTile.innerHTML) {
      gameOver();
    }
  }

// Create a new tile every second
setInterval(createTile, 1000);

document.addEventListener("keypress", event => {
    let topTile = tiles.children[0];
    if (topTile) {
      typedWord += event.key;
      checkCombination(topTile, typedWord);
    }
  });
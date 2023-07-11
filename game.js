const gameBoard = document.getElementById("game-board");
let gameStart = false;
let gameOver = false;

const main = () => {
    // To add: only start the game when key is pressed
    // if (gameStart) {
    update();
    draw();
    // } else {
    //     gameStart = isGameStart();
    // }
    if (gameOver) {
        alert("Game Over");
        clearInterval(gameLoop);
    }
}

let gameLoop = setInterval(main, 1000 / SNAKE_SPEED);

const update = () => {
    console.log("Updating");
    updateSnake();
    updateFood();
    gameOver = isGameOver();
}

const draw = () => {
    console.log("Drawing");
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

const isGameOver = () => {
    return snakeOutOfBounds() || snakeIntersectSelf();
}

const isGameStart = () => {
    let keyPressed = false;
    window.addEventListener("keydown", event => {
        keyPressed = true;
    });
    return keyPressed;
}
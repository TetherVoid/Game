const car = document.getElementById('car');
const obstacle = document.getElementById('obstacle');
const scoreDisplay = document.getElementById('score');
const gameArea = document.getElementById('gameArea');

let score = 0;
let carPosition = 125; // Initial position of the car
let obstacleSpeed = 5; // Speed of the obstacle
let gameInterval;

// Move the car left or right
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && carPosition > 0) {
        carPosition -= 15;
    } else if (event.key === 'ArrowRight' && carPosition < 250) {
        carPosition += 15;
    }
    car.style.left = carPosition + 'px';
});

// Start the game
function startGame() {
    obstacle.style.left = Math.random() * 250 + 'px';
    obstacle.style.top = '-100px';
    gameInterval = setInterval(moveObstacle, 100);
}

// Move the obstacle down
function moveObstacle() {
    let obstacleTop = parseInt(obstacle.style.top);
    obstacleTop += obstacleSpeed;
    obstacle.style.top = obstacleTop + 'px';

    // Check for collision
    if (obstacleTop > 500) {
        obstacle.style.top = '-100px';
        obstacle.style.left = Math.random() * 250 + 'px';
        score++;
        scoreDisplay.innerText = 'Score: ' + score;
    }

    // Collision detection
    if (obstacleTop > 400 && obstacleTop < 500 && 
        parseInt(obstacle.style.left) < carPosition + 50 && 
        parseInt(obstacle.style.left) + 50 > carPosition) {
        clearInterval(gameInterval);
        alert('Game Over! Your score: ' + score);
        document.location.reload();
    }
}

// Start the game
startGame();

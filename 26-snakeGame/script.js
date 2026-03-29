// DOM
const broke = document.querySelector('.broke');
const scoreEl = document.getElementById('score');
const highScoreEl = document.getElementById('high-score');
const timeEl = document.getElementById('time');

// Grid storage
const Arr = {};

// Game state
let direction = 'down';
let interval;
let score = 0;
let time = 0;
let highScore = localStorage.getItem('highScore') || 0;

// Snake
const snake = [
    { x: 5, y: 5 }
];

// Food
let food = null;

// Grid size
const width = 30;
const height = 30;
const brokewidth = Math.floor(broke.clientWidth / width);
const brokeheight = Math.floor(broke.clientHeight / height);

// Create grid
for (let row = 0; row < brokeheight; row++) {
    for (let col = 0; col < brokewidth; col++) {
        const block = document.createElement('div');
        block.classList.add('block');
        broke.appendChild(block);
        Arr[`${row},${col}`] = block;
    }
}

// Render snake
function render() {
    snake.forEach((block) => {
        Arr[`${block.x},${block.y}`].classList.add('snake');
    });
}

// Remove snake
function remove() {
    snake.forEach((block) => {
        Arr[`${block.x},${block.y}`].classList.remove('snake');
    });
}

// Create food
function spawnFood() {
    let x, y;
    do {
        x = Math.floor(Math.random() * brokeheight);
        y = Math.floor(Math.random() * brokewidth);
    } while (snake.some(s => s.x === x && s.y === y));

    food = { x, y };
    Arr[`${food.x},${food.y}`].classList.add('food');
}

// Remove food
function removeFood() {
    if (food) {
        Arr[`${food.x},${food.y}`].classList.remove('food');
    }
}

// Check self collision
function isCollision(head) {
    return snake.some(block => block.x === head.x && block.y === head.y);
}

// Game loop
function gameLoop() {
    remove();

    let head = { ...snake[0] };

    if (direction === 'left') head.y -= 1;
    else if (direction === 'right') head.y += 1;
    else if (direction === 'up') head.x -= 1;
    else if (direction === 'down') head.x += 1;

    // Wall collision
    if (
        head.x < 0 || head.x >= brokeheight ||
        head.y < 0 || head.y >= brokewidth ||
        isCollision(head)
    ) {
        alert("Game Over!");
        clearInterval(interval);
        clearInterval(x)
        return;
    }
    snake.unshift(head);


    // Eat food
    if (food && head.x === food.x && head.y === food.y) {
        score++;
        scoreEl.innerText = score;

        if (score > highScore) {
            highScore = score;
            localStorage.setItem('highScore', highScore);
            highScoreEl.innerText = highScore;
        }

        removeFood();
        spawnFood(); // new food

    } else {
        snake.pop();
    }

    render();
}

//  Controls (no reverse allowed)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && direction !== 'right') direction = 'left';
    if (e.key === 'ArrowRight' && direction !== 'left') direction = 'right';
    if (e.key === 'ArrowUp' && direction !== 'down') direction = 'up';
    if (e.key === 'ArrowDown' && direction !== 'up') direction = 'down';
});

// Time counter
let x = setInterval(() => {
    time++;
    timeEl.innerText = time;
}, 1000);

// Start game
highScoreEl.innerText = highScore;
spawnFood();
interval = setInterval(gameLoop, 150);



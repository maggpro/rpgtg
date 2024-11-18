class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.telegramApp = new TelegramApp();

        this.setupCanvas();
        this.initGame();
        this.setupControls();
        this.startGameLoop();
    }

    async initGame() {
        // Попытка загрузить сохраненный прогресс
        const savedProgress = await this.telegramApp.loadGameProgress();

        if (savedProgress) {
            this.loadProgress(savedProgress);
        } else {
            this.player = new Player('Hero');
            this.worldMap = new WorldMap(20, 30);
            this.rooms = [];
        }
    }

    setupCanvas() {
        // Установка размеров canvas под размер экрана
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        // Обработка изменения размера экрана
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        });
    }

    setupControls() {
        // Добавление обработчиков касаний
        this.canvas.addEventListener('touchstart', (e) => this.handleTouch(e));
        this.canvas.addEventListener('touchmove', (e) => this.handleTouchMove(e));
        this.canvas.addEventListener('touchend', (e) => this.handleTouchEnd(e));
    }

    handleTouch(e) {
        e.preventDefault();
        // Логика обработки касаний
    }

    update() {
        // Обновление состояния игры
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.worldMap.draw(this.ctx);
        this.player.draw(this.ctx);
    }

    startGameLoop() {
        const gameLoop = () => {
            this.update();
            this.render();
            requestAnimationFrame(gameLoop);
        };
        gameLoop();
    }

    saveProgress() {
        const gameData = {
            player: this.player.toJSON(),
            worldMap: this.worldMap.toJSON()
        };
        this.telegramApp.saveGameProgress(gameData);
    }
}

// Запуск игры
document.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
});
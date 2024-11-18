let tg = window.Telegram.WebApp;

class TelegramApp {
    constructor() {
        this.tg = tg;
        this.initApp();
    }

    initApp() {
        // Установка основных параметров
        this.tg.expand();
        this.tg.enableClosingConfirmation();

        // Установка темы
        document.documentElement.style.setProperty('--tg-theme-bg-color', this.tg.backgroundColor);
        document.documentElement.style.setProperty('--tg-theme-text-color', this.tg.textColor);
    }

    // Сохранение прогресса игры
    saveGameProgress(gameData) {
        this.tg.CloudStorage.setItem('gameProgress', JSON.stringify(gameData));
    }

    // Загрузка прогресса игры
    async loadGameProgress() {
        try {
            const progress = await this.tg.CloudStorage.getItem('gameProgress');
            return JSON.parse(progress);
        } catch (e) {
            return null;
        }
    }
}
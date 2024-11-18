class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.agility = 10;
        this.x = 0;
        this.y = 0;
        this.sprite = new Image();
        this.sprite.src = 'assets/player.png';
    }

    draw(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y, 32, 32);
    }

    move(deltaX, deltaY) {
        this.x += deltaX;
        this.y += deltaY;
    }

    toJSON() {
        return {
            name: this.name,
            health: this.health,
            agility: this.agility,
            x: this.x,
            y: this.y
        };
    }
}
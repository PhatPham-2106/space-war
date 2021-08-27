class Rock {
    constructor(x, Src) {
        this.x = x;
        this.y = Math.floor(Math.random() * (-70 - 0)) + 0;
        this.Src = Src

    }
    display(paper) {
        let pen = paper.getContext('2d');
        let img = new Image()
        img.src = this.Src;
        pen.drawImage(img, this.x, this.y, 15, 25);
    }
    moveDown() {
        this.y += 2;
    }
}
class BadPlane {
    constructor(x, y, Src) {
        this.time = 0
        this.reloadTime = Math.floor(Math.random() * (400 - 130)) + 130;
        this.x = x;
        this.y = y;
        this.Src = Src;
    }
    display(paper) {
        let pen = paper.getContext('2d');
        let img = new Image();
        img.src = this.Src;
        pen.drawImage(img, this.x, this.y, 40, 35);
    }
    moveDown() {
        this.y += 2
    }
    fire() {
        let bullet = new Bullet(this.x + 17, this.y + 30)
        bullet.direct = 'down';
        bullet.tag = 'badPlane';
        bullets.push(bullet)
    }
    autoFire() {
        this.time++;
        if (this.time > this.reloadTime) {
            this.fire();
            this.time = 0;
        }
    }
}

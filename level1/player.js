class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y
        this.Src = '../image/myPlane.png'

    }
    display(paper) {
        let pen = paper.getContext('2d');
        let img = new Image;
        img.src = this.Src;
        pen.drawImage(img, this.x, this.y, 50, 48)
    }
    shoot() {
        let bullet = new Bullet(this.x + 23, this.y)
        bullet.direct = 'up';
        bullet.tag = 'player';
        bullet.Src='../image/bullet1.png'
        bullet.size1=5;
        bullet.size2=12
        bullet.speed=6
        bullets2.push(bullet)
    }
}
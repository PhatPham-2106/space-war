class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.direct = 'up';
        this.tag = 'player';
        this.speed = 4;
        this.Src='../image/bullet3.png'
        this.size1=6
        this.size2=12
    }
    render(paper) {
        let pen = paper.getContext('2d');
        let img = new Image();
        img.src = this.Src;
        pen.drawImage(img, this.x, this.y, this.size1, this.size2);
    }
    move() {
        switch (this.direct) {
            case 'up':
                this.y -= this.speed;
                break;

            case 'down':
                this.y += this.speed;
                break;
        }
    }
}
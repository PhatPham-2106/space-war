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

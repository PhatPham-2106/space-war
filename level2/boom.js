class Boom{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    display(paper){
        let pen=paper.getContext('2d');
        let img=new Image()
        img.src='../image/boom.png';
        pen.drawImage(img,this.x,this.y,40,38);
    }
}
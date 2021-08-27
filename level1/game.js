class Game {
    constructor() {
        this.downNum = 0
        this.rocknum=[1]
        this.player = new Player(250, 600)
        this.hp={
            value:50
        }
        this.win=new Audio()
        this.win.src='../audio/wingame.mp3'
        this.lose=new Audio()
        this.lose.src='../audio/lose.mp3'
        this.shoot=new Audio()
        this.shoot.src='../audio/shoot.mp3'
        this.crash=new Audio()
        this.crash.src='../audio/crash.wav'
    }
    createRock(num) {
        for (let i = 0; i < num; i++) {
            let x = this.randomNumber(0, paper.width - 15);
            let Src = '../image/rock.png'
            let rock = new Rock(x, Src);
            rock.display(paper);
            rocks.push(rock)
        }
    }
    moveRocks() {
        for (let i = 0; i < rocks.length; i++) {
            rocks[i].moveDown();

        }
    }
    displayRocks() {
        for (let i = 0; i < rocks.length; i++) {
            rocks[i].display(paper);
        }
    }

    displayPlayer() {
        this.player.display(paper);
    }
    moveLeft() {
        this.player.x -= 11;
        this.player.Src = '../image/myPlaneLeft.png'
    }
    moveRight() {
        this.player.Src = '../image/myPlaneRight.png'
        this.player.x += 11
    }
    moveUp() {
        this.player.Src = '../image/myPlane.png'
        this.player.y -= 11
    }
    moveDown() {
        this.player.Src = '../image/myPlane.png'
        this.player.y += 11
    }
    playerShoot(){
        this.player.shoot()
        this.shoot.play()
    }
    checkout() {
        for (let i = 0; i < rocks.length; i++) {
            if (rocks[i].y > 700) {
                rocks.splice(i, 1);
            }
        }
        for(let i=0;i<bullets2.length;i++){
            if ( bullets2[i].y< 0) {
                bullets2.splice(i, 1);
            }
        }
       if(this.player.x<0){
           this.player.x=-4;
       } if(this.player.x+50>500){
           this.player.x=450;
       }
       if(this.player.y<0){
           this.player.y=-4;
       } if(this.player.y+48>700){
           this.player.y=650
       }
    }
    
    moveBullets() {
        for (let i = 0; i < bullets.length; i++) {
            bullets[i].move();
        }
        for (let i = 0; i < bullets2.length; i++) {
            bullets2[i].move();
        }
    }
    displayBullets() {
        for (let i = 0; i < bullets.length; i++) {
            bullets[i].render(paper);
        }
        for (let i = 0; i < bullets2.length; i++) {
            bullets2[i].render(paper);
        }
    }
    createBoom(num,x,y){
        for(let i=0;i<num;i++){
            let boom=new Boom(x,y)
            boom.display(paper)
            booms.push(boom);
           
        }
    }
    displayBoom(){
        for(let i=0;i<booms.length;i++){
            booms[i].display(paper)
        
        }
    }
    ifCrash(obj1/*another*/, obj2/* myplane*/,width,height) {
        let right1 = obj1.x + width;
        let left1 = right1-width;
        let bottom1=obj1.y+width;
        let top1=obj1.y

        let left2 = obj2.x;
        let top2 = obj2.y;
        let right2 = obj2.x + height;

        if ((top2<bottom1) && (top2>top1) && (left2<left1)&&(right2>right1)) {
            return true;
        } else  {
            return false;
        }
    }
    checkCrash(){
        for (let i = 0; i < rocks.length; i++) {
            if(this.ifCrash(rocks[i],this.player,10,50)==true){
                rocks.splice(i,1)
                this.createRock(1)
                this.downHp(15)
            }
         }
       
         for (let i = 0; i < bullets2.length; i++) {
            for(let j=0; j<rocks.length;j++){
               if(this.ifCrash(bullets2[i],rocks[j],10,30)==true){
                   this.crash.play()
                   bullets2.splice(i,1)
                   this.createBoom(1,rocks[j].x,rocks[j].y)
                   rocks.splice(j,1)
                this.createRock(1)
               } 
            }
              
           }
  
    }
    downHp(num){
        this.hp.value-=num;
        document.getElementById('hp').innerHTML=this.hp.value;
        if(this.hp.value<=0){
            this.lose.play()
            document.getElementById('lose').style.display='block'
            clearInterval(myvar)
            setTimeout(function(){
                window.location.href="../index.html"
            },5000)
        }
    }
    checkWin(){
        if(rocks.length==2){
            this.createRock(this.randomNumber(20,25))
            this.rocknum.push(1)
        }
        if(this.rocknum.length==7){
            rocks.splice(0,rocks.length-1)
            this.win.play()
            document.getElementById('win').style.display='block'
            clearInterval(myvar)
            setTimeout(function(){
               window.location.href="../index.html"
            },5000)
        }
    }
    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    clearScreen(paper) {
        let pen = paper.getContext('2d');
        pen.clearRect(0, 0, paper.width, paper.height);
    }

}
var x = 50;
var X = 50;
var Y = -100;
var health = true;
var score = 0;
var speed = 1;

var startS = 0;
var endS = 0

function setup() {
    createCanvas(300,650);
}

function draw() {
    background(0);
    
    if(health){
        fill(255);
        text(score,150,25);
        
        // Creating car
        strokeWeight(0);
        fill(32,178,170);
        ellipse(x,575,100,100);

        // Create Hurdle
        fill(220,20,60);
        ellipse(X,Y,100,100);

        carMovement();
        hurdleMovement();
        checkTouch();

        if (Y == -100){
            selectingX();
        }
    }
    else {
        death();
    }
}

function carMovement(){
    if (keyCode === LEFT_ARROW){
        x = 50;
    }
    else if (keyCode === RIGHT_ARROW){
        x = 250;
    }
    else if (keyCode === DOWN_ARROW || keyCode === UP_ARROW){
        x = 150;
    }
}

function hurdleMovement(){
    Y += speed;
    if (Y > 750){
        Y = -100;
        speed++;
        score++;
    }
}

function selectingX(){
    let n = random()*10;
    
    if (n <= 3){
        X = 50;
    }
    else if (n <= 7){
        X = 150;
    }
    else {
        X = 250;
    }
}

function death(){
    fill(255,0,0);
    textSize(15);
    text('G A M E   O V E R',85,300);
    text(score,145,350);
}

function checkTouch(){
    let d = (abs((X-x)^2) + abs((Y - 575)^2))^0.5;
    if (d < 95){
        health = false;
    }
}
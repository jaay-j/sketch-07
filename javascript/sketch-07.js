let angle = 0;

function setup(){
    createCanvas(1000, 1000);
    angleMode(DEGREES);
    frameRate(50);
}

    function draw() {
    background(25, 1, 30);

    push();
        translate(200, 300);
        rotate(angle);
        fill(255);
        stroke(255, 158, 54);
        strokeWeight(10);
        quad(0, 70, 90, 160, 60, 110, 100, 70, 150);
        pop();

        push();
            translate(200, 400);
            rotate(angle);
            fill(255);
            stroke(255, 158, 54);
            strokeWeight(10);
            quad(0, 70, 90, 160, 60, 110, 100, 70, 150);
            pop();

        push();
            translate(200, 500);
            rotate(angle);
            fill(255);
            stroke(255, 158, 54);
            strokeWeight(10);
            quad(0, 70, 90, 160, 60, 110, 100, 70, 150);
            pop();

        push();
            translate(200, 600);
            rotate(angle);
            fill(255);
            stroke(255, 158, 54);
            strokeWeight(10);
            quad(0, 70, 90, 160, 60, 110, 100, 70, 150);
            pop();

        push();
            translate(200, 700);
            rotate(angle);
            fill(255);
            stroke(255, 158, 54);
            strokeWeight(10);
            quad(0, 70, 90, 160, 60, 110, 100, 70, 150);
            pop();

    push();
        translate(300, 270);
        rotate(angle);
        fill(255);
        stroke(255, 158, 54);
        strokeWeight(10);
        quad(0, 70, 90, 160, 60, 110, 100, 70, 150);
        pop();

        push();
            translate(420, 280);
            rotate(angle);
            fill(255);
            stroke(255, 158, 54);
            strokeWeight(10);
            quad(0, 70, 90, 160, 60, 110, 100, 70, 150);
            pop();

        push();
            translate(540, 300);
            rotate(angle);
            fill(255);
            stroke(255, 158, 54);
            strokeWeight(10);
            quad(0, 70, 90, 160, 60, 110, 100, 70, 150);
            pop();
    
        push();
            translate(610, 400);
            rotate(angle);
            fill(255);
            stroke(255, 158, 54);
            strokeWeight(10);
            quad(0, 70, 90, 160, 60, 110, 100, 70, 150);
            pop();
        
        push();
            translate(650, 500);
            rotate(angle);
            fill(255);
            stroke(255, 158, 54);
            strokeWeight(10);
            quad(0, 70, 90, 160, 60, 110, 100, 70, 150);
            pop();

        push();
            translate(670, 620);
            rotate(angle);
            fill(255);
            stroke(255, 158, 54);
            strokeWeight(10);
            quad(0, 70, 90, 160, 60, 110, 100, 70, 150);
            pop();

        push();
            translate(700, 700);
            rotate(angle);
            fill(255);
            stroke(255, 158, 54);
            strokeWeight(10);
            quad(0, 70, 90, 160, 60, 110, 100, 70, 150);
            pop();


    angle = angle + 1;
    }



function keyPressed(){
    if (key == 's'){
        saveCanvas("sketch-07", "png");
    }
}
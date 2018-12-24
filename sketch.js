let v = [];
let food = [];
let toxin = [];

function setup() {
    createCanvas(600, 600);
    for (var i = 0; i < 2; i++) {
        v[i] = new Vehicle(width / 2, height / 2);
    }

    for (var i = 0; i < 50; i++) {
        var x = random(width);
        var y = random(height);
        food.push(createVector(x, y));
    }
    for (var i = 0; i < 10; i++) {;
        var x = random(width);
        var y = random(height);
        toxin.push(createVector(x, y));
    }
}

function draw() {
    background(51);

    if ( random (1) < 0.05) {
        var x = random(width);
        var y = random(height);
        food.push(createVector(x, y));
    }

    let mouse = createVector(mouseX, mouseY);


    for (var i = 0; i < food.length; i++) {
        fill(0, 255, 0);
        noStroke();
        ellipse(food[i].x, food[i].y, 8, 8);
    }


    for (var i = 0; i < toxin.length; i++) {
        fill(255, 0, 0);
        noStroke();
        ellipse(toxin[i].x, toxin[i].y, 8, 8);
    }


    // Call the appropriate steering behaviors for our agents
    for (var i =  v.length-1; i >=0 ; i--) {
        v[i].behaviors(food, toxin);
        v[i].update();
        v[i].display();

        // if health less than 0, delete from array
        if (v[i].dead()) {
            v.splice(i, 1);
        }

    }

}
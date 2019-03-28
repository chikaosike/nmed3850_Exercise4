var alpha = 0; // Orientation around Z axis

var beta = 0; // Orientation around X axis

var gamma = 0; // Orientation around Y axis

var txt = "Reputation";

function setup() {

    createCanvas(400, 500);

    if (window.DeviceOrientationEvent) {

        window.addEventListener('deviceorientation', onOrientationChange);

    }


}



function draw() {

    background(255, 255, 255);

    angleMode(DEGREES);

    rectMode(CENTER);

    push();

    translate(width / 2, height / 2);

    rotate(beta);
    //    rotate(alpha * 2);

    fill(220, 10, 50);
    rect(-50, -50, 50, 100);
    fill(30, 100, 250);
    rect(0, 0, 50, 100);
    fill(220, 210, 50);
    rect(50, 50, 50, 100);
    fill(20, 210, 50);
    rect(100, 100, 50, 100);


    pop();

    if (alpha > 180) {
        verticalText(txt, width / 2, 20);
    }

}



function onOrientationChange(e) {

    alpha = e.alpha;

    beta = e.beta;

    gamma = e.gamma;


}

function verticalText(input, x, y) {
    var output = ""; // create an empty string

    for (var i = 0; i < input.length; i += 1) {
        output += input.charAt(i) + "\n"; // add each character with a line break in between
    }

    push(); // use push and pop to restore style (in this case the change in textAlign) after displaing the text 
    textAlign(CENTER, TOP); // center the characters horizontaly with CENTER and display them under the provided y with TOP
    text(output, x, y); // display the text
    pop();
}

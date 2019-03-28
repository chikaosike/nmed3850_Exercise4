document.addEventListener("deviceready", init, false);

var x, y, z, posX, posY;

function init() {

    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", handleOrientation)
    } else {
        alert("bad blood")
    }

    function handleOrientation(event) {

        z = event.alpha
        y = event.beta
        x = event.gamma

        posX += x;
        posY += y;

        $("#alpha").html(z)
        $("#beta").html(y)
        $("#gamma").html(x)
    }
}


function setup() {
    var cnv = createCanvas(window.innerWidth, window.innerHeight)
    cnv.parent("Canvas")


    posX = width / 2;
    posY = height / 2;
}

function draw() {
    fill(220, 0, 0)
    // x , y, w, h
    ellipse(window.innerWidth / 2, window.innerHeight / 2, 100)

}

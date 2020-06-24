let width, height, theta, k, n, d;
function setup() {
    width = innerWidth / 2;
    height = innerHeight - 4;
    createCanvas(width, height);
    theta = 0;
    n = 3;
    d = 2;
    background(0);
}

function draw() {
    if (theta < PI * 2 * d) {
        for (let i = 0; i < 1; i++) {
            k = n / d;
            translate(width / 2, height / 2);
            stroke(150, 0, 150);
            noFill();
            strokeWeight(10);
            let r = 200 * cos(k * theta);
            let x = r * cos(theta);
            let y = r * sin(theta);
            point(x, y);
            theta += 0.02;
        }
    } else {
        background(0);
        theta = 0;
    }
}
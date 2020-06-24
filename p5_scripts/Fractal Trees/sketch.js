let width, height, theta, ratio;
function setup() {
    width = innerWidth;
    height = innerHeight - 100;
    theta = 0;
    ratio = 0.42;
    createCanvas(width, height);
    
    theta = 0;
}

function draw() {
    background(0);

    let pos = [];
    pos.push(3 * width / 4);
    pos.push(height - 10);
    draw_tree(9, theta, 0.9 * height, pos, - PI / 2);
    theta += 0.05;
}

function draw_tree(order, angle, size, pos, heading, color, depth = 0) {
    let trunk = size * ratio;
    let addX = trunk * Math.cos(heading);
    let addY = trunk * Math.sin(heading);

    let u = pos[0];
    let v = pos[1];

    let newpos = [];
    newpos.push(u + addX);
    newpos.push(v + addY);

    strokeWeight(4);
    if(order < 3) {
        stroke(255, 183, 197);
    } else {
        stroke(255);
    }
    line(u, v, u + addX, v + addY);

    if(order > 0) {
        let newsize = size * (1 - ratio);
        draw_tree(order - 1, angle, newsize, newpos, heading - angle, color, depth + 1);
        draw_tree(order - 1, angle, newsize, newpos, heading + angle, color, depth + 1);
    }

}
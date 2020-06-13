let width, height, num, particles;

function setup() {
    width = innerWidth;
    height = innerHeight - 4;
    createCanvas(width, height);
    num = 100;
    particles = [];
    for (let i = 0; i < num; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    background(0);
    for (const particle of particles) {
        particle.update();
        particle.show();
        particle.drawLines();
    }
}

class Particle {
    constructor() {
        this.x = floor(random(width));
        this.y = floor(random(height));
        this.size = floor(random(5, 10));
        this.xSpeed = floor(random(-1, 2));
        this.ySpeed = floor(random(-1, 2));
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x < 0 || this.x > width) {
            this.xSpeed *= -1;
        }
        if (this.y < 0 || this.y > height) {
            this.ySpeed *= -1;
        }
    }

    show() {
        fill('floralwhite');
        ellipse(this.x, this.y, this.size);
    }

    drawLines() {
        for(const particle of particles) {
            let d = dist(this.x, this.y, particle.x, particle.y);
            if(d < 75) {
                stroke('rgba(255, 255, 255, 0.3)');
                line(this.x, this.y, particle.x, particle.y);
            }
        }
    }
}
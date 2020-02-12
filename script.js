class TheMover {
    constructor(width, height, a, b ) {
        this.width = width;
        this.height = height;
        this.a = a;
        this.b = b;
    }

    speed() {
        this.a += this.speedA;
        this.b += this.speedB;
    }
}
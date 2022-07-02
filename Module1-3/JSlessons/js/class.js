class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle{
    constructor(height, width, text, color) {
        super(height, width);
        this.text = text;
        this.color = color ;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.color}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

div.showMyProps();
console.log(div.calcArea());


// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());
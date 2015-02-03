function random(max) {
    return max * Math.random() | 0;
}

function randomColor() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    return `rgb(${r}, ${g}, ${b})`;
}

class Painter {
    constructor() {
        this.down = false;
        this.lineWidth = 10;

        ctx.lineCap = "round";

        this.bindEventHandlers();
    }

    bindEventHandlers() {
        canvas.addEventListener("mousedown", e => {
            ctx.strokeStyle = randomColor();
            this.down = true;
            this.lastX = e.pageX - canvas.offsetLeft;
            this.lastY = e.pageY - canvas.offsetTop;
        });

        canvas.addEventListener("mousemove", e => {
            if (this.down) {
                var x = e.pageX - canvas.offsetLeft;
                var y = e.pageY - canvas.offsetTop;

                this.lineTo(x, y);

                this.lastX = x;
                this.lastY = y;
            }
        });

        canvas.addEventListener("mouseup", e => {
            this.down = false;
        });
    }

    lineTo(x, y) {
        ctx.lineWidth = this.lineWidth;
        ctx.beginPath();
        ctx.moveTo(this.lastX, this.lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

var painter = new Painter();

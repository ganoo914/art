window.onload = function() {
    const canvas = document.getElementById('Canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Ball {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.c = '#FF007F';
            this.size = 20;
            this.power = 5;
            this.gravity = this.power;
            this.directionX = 5;
        }

        update() {
            this.y += this.gravity;
            this.gravity += 0.2;
            console.log(this.gravity);
            if(this.y + this.size >= canvas.height || this.y - this.size <= 0) {
                this.gravity *= -0.9;
            }

            this.x += this.directionX;
            this.directionX *= 0.995;
            if (this.x + this.size > canvas.width || this.x - this.size < 0) {
                this.directionX *= -1;
            }
        }

        draw() {
            ctx.fillStyle = this.c;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, true);
            ctx.fill();
            ctx.closePath();
            
        }
    }

    function init() {
        ball1 = new Ball(canvas.width * 0.5, canvas.height * 0.5);
    }

    function animate() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ball1.update();
        ball1.draw();
        requestAnimationFrame(animate);
    }

    init();
    animate();
}

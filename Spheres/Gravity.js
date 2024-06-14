let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
let Colors = ["#6F4E37", "#A67B5B", "pink", "#ECB176", "#FED8B1"];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
addEventListener("resize", (e) => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
let mouse = { x: undefined, y: undefined };

class Ball {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = Colors[ Math.floor( Math.random()*Colors.length)];
    this.gravity = 2.4
    this.friction = 0.89
    this.frictionX =0.2
  }
  draw() {
    let { x, y, radius } = this;
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
}
update() {
  if(this.y>innerHeight-this.radius-5){
    if(this.friction*-this.dy >0 ){ this.dy=0}
    else this.dy= this.friction*-this.dy
  }
  else {
    this.dy+=this.gravity
  }
  if (this.x+this.radius-5>innerWidth || this.x-this.radius<0){
this.dx = Math.max( this.frictionX*(-this.dx) ,0)
  }
this.y += this.dy
  this.x +=this.dx
  this.draw()
  
}
}
var Balls =[];
addEventListener("mouseup", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  Balls.push(new Ball(e.x, e.y, 1, 1, 20, "blue"))
  Balls.draw();
});

function animate() {
  if(Balls){
      c.clearRect(0,0,innerWidth,innerHeight)
      for (const ball of Balls) {
        ball.update();
        }
    }
    requestAnimationFrame(animate);
}
animate();

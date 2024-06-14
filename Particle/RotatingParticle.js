let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
let Colors = ["#6F4E37", "#A67B5B", "pink", "#ECB176", "#FED8B1"];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
addEventListener("resize", (e) => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
let mouse = { x: innerWidth/2, y:innerHeight/2 };
addEventListener("mousemove",(e)=>{mouse.x=e.x;mouse.y=e.y})
class Particle {
  constructor(x, y,  radius,) {
    this.x = x;
    this.original_x = x
    this.original_y = y
    this.y = y;
    this.radius = radius;
    this.color = Colors[ Math.floor( Math.random()*Colors.length)];
    this.radians = Math.random () * Math.PI*2
    this.velocity =  0.05
    this.circle_radius = 50+ Math.floor((Math.random()*150))
  }
  draw(PreviousLocation) {
    c.beginPath();
    c.strokeStyle = this.color
    c.lineWidth = this.radius
    c.moveTo(PreviousLocation.x,PreviousLocation.y)
    c.lineTo(this.x,this.y)
    c.stroke()
}
update() {
  let PreviousLocation = {x:this.x,y:this.y}
    this.radians += this.velocity
    this.x = mouse.x + Math.cos(this.radians)*this.circle_radius
    this.y = mouse.y + Math.sin(this.radians)*this.circle_radius
    
    this.draw(PreviousLocation)
}
}
var Particles =[];
for (let i = 0; i < 60; i++) {
  const radius = (Math.random()*4 )+1
    Particles.push(new Particle(innerWidth/2,innerHeight/2,radius))
}
function animate() {
  c.fillStyle  ="rgba(0, 0, 0, 0.05)"
  c.fillRect(0,0,innerWidth,innerHeight)
  for (const particle of Particles) {
      particle.update();
  }
    requestAnimationFrame(animate);
}
animate();

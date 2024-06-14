let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
const Colors = [
    "#4B0082", // Indigo
    "#4682B4", // Steel Blue
    "#5F9EA0", // Cadet Blue
    "#6A5ACD", // Slate Blue
    "#7FFFD4"  // Aquamarine
  ];
  
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
addEventListener("resize", (e) => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
let mouse = { x: undefined, y:undefined  , isContacted:false };

class Line {
  constructor(x, y,radius) {
    this.previous_x = x;
    this.previous_y = y;
    this.radius = radius;
    this.color = "white"
    //  Colors[ Math.floor( Math.random()*Colors.length)];
  }
  draw() {
    c.beginPath();
    c.strokeStyle = this.color
    c.lineWidth = this.radius 
    c.moveTo(this.previous_x,this.previous_y)
    this.previous_x = mouse.x
    this.previous_y = mouse.y
    c.lineTo(mouse.x,mouse.y)
    c.stroke()
}
update () {

    this.draw()
}
}
var line  ;
addEventListener("mousedown",(e)=>{
  mouse.isContacted =true
  line = new Line (e.x,e.y,8)
})
addEventListener("mousemove",(e)=>{
    if(mouse.isContacted) {
        mouse.x = e.x  
        mouse.y = e.y 
        line.draw()
     }
})
addEventListener("mouseup",(e)=>{
    mouse.isContacted =false
})




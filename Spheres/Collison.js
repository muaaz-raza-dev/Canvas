let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
const Colors = [
    "#4B0082", // Indigo
    "#4682B4", // Steel Blue
    "#5F9EA0", // Cadet Blue
    "#6A5ACD", // Slate Blue
    "#7FFFD4"  // Aquamarine
  ];
  
let SelectedIndex = null
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
addEventListener("resize", (e) => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
const Balls = []
class Ball {
  constructor(x, y,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.active= false
    this.color =  "white"
    this.collison = false
  }
  draw() {
    c.beginPath();
    c.fillStyle = this.color
    c.arc(this.x , this.y,this.radius,0,Math.PI*2,false)
    c.fill()
}
update (mouse_x,mouse_y) { 
  if(this.active&&mouse_x&&mouse_y) {
    this.x = mouse_x
    this.y = mouse_y
  }
  if(SelectedIndex!=null){
Balls.map((ball,i)=>{
      let space =null
      if(i!=SelectedIndex&& Math.abs(this.x-ball.x) < this.radius+50 && Math.abs(this.y-ball.y) < this.radius+50) {
      console.log("I am here");
      if(this.x<ball.x){
        space = Math.sqrt(this.y**2 + ball.x**2)  
      }
      else {
        space = Math.sqrt(this.x**2 + ball.y**2)  
      }
      console.log(space , "spacing");
    }
  })
}
this.draw()
}
activate(mouse_x,mouse_y,index){
if( Math.abs(this.x - mouse_x) < this.radius && Math.abs(this.y  - mouse_y) < this.radius && !this.active   ) {
this.color = "red"
SelectedIndex = index
this.active =true
}
else {
this.disActivate()
}

this.draw()
}
disActivate(){
this.color = "white"
this.active =false
}
}


for (let i = 0; i < 2; i++) {
  let x = Math.random() * innerWidth 
  let y = Math.random() * innerHeight
  Balls.push(new Ball(x,y,28))
  Balls[i].draw()
}
addEventListener("mousedown",({x,y})=>{
  Balls.map((ball,index)=>{
    ball?.activate(x,y,index)
  })
})
addEventListener("mousemove",({x,y})=>{
  if(SelectedIndex !=null) {
    Balls[SelectedIndex].update(x,y)
  }
})
addEventListener("mouseup",()=>
  Balls[SelectedIndex].disActivate()
)
function animate(){
  requestAnimationFrame(animate)
  c.clearRect(0,0,innerWidth,innerHeight)
  Balls.map(ball=>ball.update())
  }
animate ( )







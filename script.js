let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
let Colors = ["#6F4E37","#A67B5B","pink","#ECB176","#FED8B1"]
c.width=window.innerWidth
c.height=window.innerHeight
let mouse = {x:undefined,y:undefined}
addEventListener("mousemove",(e)=>{mouse.x=e.x;mouse.y=e.y}) // TO allocate the mouse 
addEventListener("resize",(e)=>{c.height=window.innerHeight;c.width=window.innerWidth})
class Circle{
    constructor(x,y,dx,dy,radius){
        this.x=x;
        this.y=y;
        this.dx=dx;
        this.dy=dy;
        this.radius=radius;
        this.max_radius = 40;
        this.inherited_radius=radius
        this.color = ctx.fillStyle=Colors[Math.floor((Math.random()*Colors.length)-1)]
    }
    draw(){
        let {x,y,radius}=this
        ctx.beginPath()
        ctx.arc(x,y,radius,0,Math.PI*2,false)
        ctx.fillStyle = this.color
        ctx.fill()
    }
    update (){
        let {x,y,dx,dy,radius} =this
        if (x+radius>innerWidth ||radius-x >0) {
            this.dx=-dx
        }
        if(y+radius>innerHeight||-y+radius>0){
            this.dy=-dy
        }   

        //! Tweaking radius on interaction
            if(Math.abs(mouse.x-this.x)<50 &&Math.abs(mouse.y-this.y)<50) {
    if(this.radius<this.max_radius) this.radius+=2
            }

        else{
            if(this.radius>this.inherited_radius) this.radius-=1


        }
        this.x+=this.dx
        this.y+=this.dy
        this.draw()
    }
}
let circles = []
for (let i = 0; i < 800; i++) {
    let dx=Math.random()*2
    let dy=Math.random()*2
    let x=Math.random()*innerWidth
    let y=Math.random()*innerHeight
    let radius = Math.random()*7+1
    circles.push(new Circle(x,y,dx,dy,radius))
}
function animate(){
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,innerWidth,innerHeight)
    for (const circle of circles) circle.update() 
    }
animate()












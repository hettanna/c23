class Ground{
    constructor(x,y,width,height){
        var Option={
            isStatic:true        }
        this.body=Bodies.rectangle(x,y,width,height,Option)
        this.width=width
        this.height=height
        World.add(world,this.body)


    }
    display(){
        var pos=this.body.position
          push()
         fill("brown")
        rectMode(CENTER)

        rect(pos.x,pos.y,this.width,this.height)
        pop()
    }
}
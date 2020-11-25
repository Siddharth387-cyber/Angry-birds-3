class Chain{ // createa the name of the class
    constructor(bodyA,bodyB){ // constructor takes the 2 bodies between which you want to draw a chain as arguments
        var options={    // to give properties
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,  // length of the chain
            stiffness:0.04 //stiffness of the chain
            
        }

        this.chain=Constraint.create(options); // creates a chain using constraint 
        World.add(world,this.chain); //add this chain to the world
        
        
    }
    display(){  //displays the chain
        var pointA=this.chain.bodyA.position; //takes the position of body a as point a
        var pointB=this.chain.bodyB.position; //takes the position of body b as point b
        line(pointA.x,pointA.y,pointB.x,pointB.y); // makes the line between the 2 points
    }
}
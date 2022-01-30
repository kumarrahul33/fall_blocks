let engine=Matter.Engine.create();
        

            let render= Matter.Render.create({
                element:document.body,
                engine: engine,
                options:{
                    width:1600,
                    height:800,
                    wireframes:false
                }
            });

            let mouse=Matter.Mouse.create(render.canvas);
            let mouseConstraint=Matter.MouseConstraint.create(engine,{
                mouse:mouse,
                constraint:{
                    render:{visible: false}
                }
           
            });

            render.mouse=mouse;
            let ground = Matter.Bodies.rectangle(400,600,2500,60,{isStatic:true});
           
           

           Matter.Composite.add(engine.world,[ground,mouseConstraint]);
            Matter.Runner.run(engine);
            Matter.Render.run(render);

//
            class blocks{
                constructor(x,y,len,breadth){
                    this.x=x;
                    this.y=y;
                    this.len=len;
                    this.breadth=breadth;
                }

                makeBody(){
                        Matter.Composite.add(engine.world,Matter.Bodies.rectangle(this.x,this.y,this.len,this.breadth));
                    }
                };

           // let game_tiles=[];

            game_tiles1=new blocks(250,540,10,50);
            
            game_tiles2=new blocks(200,540,10,50);
            game_tiles1.makeBody();
            game_tiles2.makeBody();
           /* for(let ptr=0; ptr<50; ptr++){
                game_tiles[ptr]=new blocks(ptr*25,540,10,50);
                game_tiles[ptr].makeBody();
            }
            Matter.Composite.add(engine.world,Matter.Bodies.rectangle(400,400,10,50));

            let game_tiles2=[];
            for( ptr1=0; ptr1<30; ptr1++){
                game_tiles2[ptr1]=new blocks(ptr1*60,500,50,10);
                game_tiles2[ptr1].makeBody();
            }*/


//make object disappear
            let allObjects=Matter.Composite.allBodies(engine.world);
            // Matter.Events.on(mouseConstraint, 'mousedown', function(event) {
            //     for(let elt of allObjects){
            //          if(Matter.Bounds.contains(elt.bounds,event.mouse.position)){ 
            //              Matter.Composite.remove(engine.world,elt);}
            //     }
            // });

            // let allCollisions=Matter.Detector.collisions(Matter.Detector.create(engine.world));
            // console.log(allCollisions);
            let collisionDectector=Matter.Detector.create();
            //let allCollisions=Matter.Dectector.collisions(collisionDectector);
            Matter.Detector.setBodies(collisionDectector,engine.world.bodies);
            Matter.Events.on(engine, "collisionStart", ()=>{
               
                        for(let pairCol of Matter.Detector.collisions(collisionDectector)){
                            if(pairCol.depth>3 && pairCol.bodyA.id!=2 && pairCol.bodyB.id!=2) {
                                Matter.Composite.remove(engine.world,[pairCol.bodyA,pairCol.bodyB]);

                            }
    
            }});            
            
            
            
            

   
        



        

           

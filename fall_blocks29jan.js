let engine=Matter.Engine.create();
        

            let render= Matter.Render.create({
                element:document.body,
                engine: engine,
                options:{
                    width:1500,
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
            let ground = Matter.Bodies.rectangle(400,700,2500,60,{isStatic:true ,frictionStatic:0.9,friction:0.9});
            //let ground1 = Matter.Bodies.rectangle(0,400,100,650,{isStatic:true});
            //let ground2 = Matter.Bodies.rectangle(1500,400,194,650,{isStatic:true});
           
           

           Matter.Composite.add(engine.world,[ground/*,ground1,ground2,mouseConstraint*/]);
            Matter.Runner.run(engine);
            Matter.Render.run(render);

//
            class blocks{
                constructor(x,y,len,breadth,mass=0,fricS=0.5,fricK=0.1){
                    this.x=x;
                    this.y=y;
                    this.len=len;
                    this.breadth=breadth;
                    this.mass=mass;
                    this.fricK=fricK;
                    this.fricS=fricS;
                }

                makeBody(){
                        let tempBody=Matter.Bodies.rectangle(this.x,this.y,this.len,this.breadth,{friction:this.fricK,frictionStatic:this.fricS,isStatic:true/*friction:1,frictionStatic:1*/})
                        Matter.Composite.add(engine.world,tempBody);
                        if(this.mass!=0){
                            Matter.Body.setMass(tempBody,this.mass);
                        }
                     
                    }
                };

            let game_tiles=[];
            for(let ptr=0; ptr<54; ptr++){
                game_tiles[ptr]=new blocks(ptr*25+50,640,18,50,200000,0.9,0.9);
                game_tiles[ptr].makeBody();
            
            }
            //console.log(game_tiles[50]);
           // Matter.Composite.add(engine.world,Matter.Bodies);
            let game_tiles2=[];
           /*let game_tiles2= new blocks(9*87.5-100,600,75*16,10,1500,0.9,0.9);
            game_tiles2.makeBody();*/
            for(let ptr1=0; ptr1<18; ptr1++){
                game_tiles2[ptr1]=new blocks(ptr1*75+87.5,600,75,10,700,0.9,0.9);
                game_tiles2[ptr1].makeBody();
            }
            let game_tiles3=[];
            for(let ptr=2;ptr<53;ptr++){
                game_tiles3[ptr]=new blocks(ptr*25+70,580,15,50,600,0.9,0.9);
                game_tiles3[ptr].makeBody();
            }
            let game_tiles4=[];
            for(let ptr=1;ptr<16;ptr++){
                game_tiles4[ptr]=new blocks(ptr*85+65,545,85,10,500,0.9,0.9);
                game_tiles4[ptr].makeBody();
            }
            let game_tiles5=[];
            for(let ptr=3;ptr<51;ptr++){
                game_tiles5[ptr]=new blocks(ptr*25+65,515,15,50,400,0.9,0.9);
                game_tiles5[ptr].makeBody();
            }
            let game_tiles6=[];
            for(let ptr=2;ptr<16;ptr++){
                game_tiles6[ptr]=new blocks(ptr*85+15,480,85,10,250,0.9,0.9);
                game_tiles6[ptr].makeBody();
            }
            let game_tiles7=[];
            for(let ptr=5;ptr<50;ptr++){
                game_tiles7[ptr]=new blocks(ptr*25+70,455,12,50,200,0.9,0.9);
                game_tiles7[ptr].makeBody();
            }
            let game_tiles8=[];
            for(let ptr=2;ptr<16;ptr++){
                game_tiles8[ptr]=new blocks(ptr*80+65,430,80,12,100,0.9,0.9);
                game_tiles8[ptr].makeBody();
            }
            let game_tiles9=[];
            for(let ptr=7;ptr<48;ptr++){
                game_tiles9[ptr]=new blocks(ptr*25+70,410,15,40,80,0.9,0.9);
                game_tiles9[ptr].makeBody();
            }
            let game_tiles10=[];
            for(let ptr=3;ptr<15;ptr++){
                game_tiles10[ptr]=new blocks(ptr*80+65,390,80,12,50,0.9,0.9);
                game_tiles10[ptr].makeBody();
            }
            let game_tiles11=[];
            for(let ptr=10;ptr<46;ptr++){
                game_tiles11[ptr]=new blocks(ptr*25+70,370,15,40,25,0.9,0.9);
                game_tiles11[ptr].makeBody();
            } 
           /* let pyramid1=Matter.Composites.stack(200,100,5,5,5,0,function(x,y){
                let sides=4;//Math.round(Matter.Common.random(2,8));
                return Matter.Bodies.polygon(x,y,sides,60,{restitution:0,isStatic:true});
            });
            Matter.Composite.add(engine.world,pyramid1);
             for(let elt1 of pyramid1.Bodies){
                 elt1.render.fillStyle="pink";
             }*/
             for(let elt1 of engine.world.bodies){
                elt1.render.fillStyle="pink";}
            //for testing purposes
                let randomArray=[35,23,152,101,22];
            for(let elt2 of randomArray){
                engine.world.bodies[elt2].render.fillStyle="green";
            }




            //testing

//make object disappear
            let mouseClickNumber=0;
            let allObjects=Matter.Composite.allBodies(engine.world);
            Matter.Events.on(mouseConstraint, 'mousedown', function(event) {
                for(let elt of allObjects){
                   
                    if(mouseClickNumber==10) {
                       /* for(let elt1 of pyramid1.Bodies){
                            Matter.Body.setStatic(elt1,false);
                        }*/
                        for(let elt3 of engine.world.bodies){
                            if(elt3.id!=2 && elt3.render.fillStyle!="green")
                            Matter.Body.setStatic(elt3,false);

                        mouseClickNumber+=1;}
                }
                   //console.log(event);
                     if(Matter.Bounds.contains(elt.bounds,event.mouse.position) && elt.id!=2 && elt.render.fillStyle!="green"){ 
                         Matter.Composite.remove(engine.world,elt);
                         mouseClickNumber+=1;
                        }
                }
            });
//collision management
            engine.world.bodies[Math.round(Matter.Common.random(50,200))].render.fillStyle="red";
            engine.world.bodies[Math.round(Matter.Common.random(50,200))].render.fillStyle="red";
            engine.world.bodies[Math.round(Matter.Common.random(50,200))].render.fillStyle="red";
            engine.world.bodies[Math.round(Matter.Common.random(50,200))].render.fillStyle="red";
            engine.world.bodies[Math.round(Matter.Common.random(50,200))].render.fillStyle="red";
            engine.world.bodies[Math.round(Matter.Common.random(50,200))].render.fillStyle="red";
            //engine.world.bodies[Math.round(Matter.Common.random(50,200))].render.fillStyle="red";
            //engine.world.bodies[Math.round(Matter.Common.random(50,200))].render.fillStyle="red";


            let PlayerScore=0;
            let collisionDectector=Matter.Detector.create();
            Matter.Detector.setBodies(collisionDectector,engine.world.bodies);
            Matter.Events.on(engine, "collisionStart", ()=>{
                        
            
                        for(let pairCol of Matter.Detector.collisions(collisionDectector)){
                            //PlayerScore+=pairCol.depth;
                            if(pairCol.depth>25 && pairCol.bodyA.id!=2 && pairCol.bodyB.id!=2) {
                                Matter.Composite.remove(engine.world,[pairCol.bodyA,pairCol.bodyB]);
                                PlayerScore+=2;
                            }
                    

            }});     
            
            

   
        



        

           

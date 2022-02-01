let engine=Matter.Engine.create();
let scoreDisplay=document.getElementById("jjssh");
        

            let render= Matter.Render.create({
                element:document.body,
                engine: engine,
                options:{
                    width:screen.width,
                    height:680,
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
            let ground = Matter.Bodies.rectangle(400,700,2500,60,{isStatic:true});
            //let ground1 = Matter.Bodies.rectangle(0,400,100,650,{isStatic:true});
            //let ground2 = Matter.Bodies.rectangle(1500,400,194,650,{isStatic:true});
           
           

           
           
            Matter.Composite.add(engine.world,[ground/*,ground1,ground2,*/]);

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
                        let tempBody=Matter.Bodies.rectangle(this.x,this.y,this.len,this.breadth,{isStatic:true, friction:this.fricK,frictionStatic:this.fricS})
                        Matter.Composite.add(engine.world,tempBody);
                        if(this.mass!=0){
                            Matter.Body.setMass(tempBody,this.mass);
                        }
                     
                    }
                };

            let game_tiles=[];
            for(let ptr=0; ptr<55; ptr++){
                game_tiles[ptr]=new blocks(ptr*25+70,640,19,50,800,0.9,0.9);
                game_tiles[ptr].makeBody();
            
            }
           // console.log(game_tiles[50]);
            Matter.Composite.add(engine.world,Matter.Bodies);

            let game_tiles2=[];
            for(let ptr1=0; ptr1<18; ptr1++){
                game_tiles2[ptr1]=new blocks(ptr1*75+107.5,605,75,10,700,0.9,0.9);
                game_tiles2[ptr1].makeBody();
            }
            let game_tiles3=[];
            for(let ptr=0;ptr<53;ptr++){
                game_tiles3[ptr]=new blocks(ptr*25+90,570,18,50,600,0.9,0.9);
                game_tiles3[ptr].makeBody();
            }
            let game_tiles4=[];
            for(let ptr=1;ptr<16;ptr++){
                game_tiles4[ptr]=new blocks(ptr*85+60,535,85,10,500,0.9,0.9);
                game_tiles4[ptr].makeBody();
            }
            let game_tiles5=[];
            for(let ptr=3;ptr<52;ptr++){
                game_tiles5[ptr]=new blocks(ptr*25+65,500,17,50,400,0.9,0.9);
                game_tiles5[ptr].makeBody();
            }
            let game_tiles6=[];
            for(let ptr=2;ptr<16;ptr++){
                game_tiles6[ptr]=new blocks(ptr*85+15,465,85,10,250,0.9,0.9);
                game_tiles6[ptr].makeBody();
            }
            let game_tiles7=[];
            for(let ptr=4;ptr<51;ptr++){
                game_tiles7[ptr]=new blocks(ptr*25+70,430,16,50,200,0.9,0.9);
                game_tiles7[ptr].makeBody();
            }
            let game_tiles8=[];
            for(let ptr=2;ptr<16;ptr++){
                game_tiles8[ptr]=new blocks(ptr*80+65,395,80,12,100,0.9,0.9);
                game_tiles8[ptr].makeBody();
            }
            let game_tiles9=[];
            for(let ptr=5;ptr<49;ptr++){
                game_tiles9[ptr]=new blocks(ptr*25+80,365,14.5,40,80,0.9,0.9);
                game_tiles9[ptr].makeBody();
            }
            let game_tiles10=[];
            for(let ptr=2;ptr<15;ptr++){
                game_tiles10[ptr]=new blocks(ptr*80+105,335,80,12,50,0.9,0.9);
                game_tiles10[ptr].makeBody();
            }
            let game_tiles11=[];
            for(let ptr=7;ptr<48;ptr++){
                game_tiles11[ptr]=new blocks(ptr*25+70,305,13,40,25,0.9,0.9);
                game_tiles11[ptr].makeBody();
            } 
            let game_tiles12=[];
            for(let ptr=3;ptr<15;ptr++){
                game_tiles12[ptr]=new blocks(ptr*80+65,275,80,11.5,50,0.9,0.9);
                game_tiles12[ptr].makeBody();
            }
            let game_tiles13=[];
            for(let ptr=15;ptr<41;ptr++){
                game_tiles13[ptr]=new blocks(ptr*25+60,245,12,38,25,0.9,0.9);
                game_tiles13[ptr].makeBody();
            } 
            let game_tiles14=[];
            for(let ptr=6;ptr<14;ptr++){
                game_tiles14[ptr]=new blocks(ptr*80-15,215,80,11,50,0.9,0.9);
                game_tiles14[ptr].makeBody();
            }
            let game_tiles15=[];
            for(let ptr=17;ptr<39;ptr++){
                game_tiles15[ptr]=new blocks(ptr*25+60,185,11,37,25,0.9,0.9);
                game_tiles15[ptr].makeBody();
            }
            let game_tiles16=[];
            for(let ptr=7;ptr<13;ptr++){
                game_tiles16[ptr]=new blocks(ptr*80-12,155,80,10,50,0.9,0.9);
                game_tiles16[ptr].makeBody();
            } 
            let game_tiles17=[];
            for(let ptr=22;ptr<34;ptr++){
                game_tiles17[ptr]=new blocks(ptr*25+60,125,10,36,25,0.9,0.9);
                game_tiles17[ptr].makeBody();
            }
            let game_tiles18=[];
            for(let ptr=9;ptr<12;ptr++){
                game_tiles18[ptr]=new blocks(ptr*79-43,95,79,9,50,0.9,0.9);
                game_tiles18[ptr].makeBody();
            } 
            let game_tiles19=[];
            for(let ptr=25;ptr<30;ptr++){
                game_tiles19[ptr]=new blocks(ptr*25+75,65,8.5,34,25,0.9,0.9);
                game_tiles19[ptr].makeBody();
            }
            let game_tiles20=[];
            for(let ptr=10;ptr<11;ptr++){
                game_tiles20[ptr]=new blocks(ptr*79-40,36,79,8,50,0.9,0.9);
                game_tiles20[ptr].makeBody();
            }
            let game_tiles21=[];
            for(let ptr=27;ptr<28;ptr++){
                game_tiles21[ptr]=new blocks(ptr*25+75,15,17,17,10,0.9,0.9);
                game_tiles21[ptr].makeBody();
            }
            Matter.Runner.run(engine);
            Matter.Render.run(render);
//making everything pink
            for(let elt1 of engine.world.bodies){
                elt1.render.fillStyle="pink";}
//random green
            let randomArray=[45,53,23,155,182,101,459,7,83,238,266,448,286,418,394,354,378];
            for(let elt2 of randomArray){
                engine.world.bodies[elt2].render.fillStyle="green";
            }
//random red
            let randomArray2=[55,23,76,115,159,189,209,300,335,393,439];
            for(let elt7 of randomArray2){
                engine.world.bodies[elt7].render.fillStyle="red";
            }
            
            function checkStaticAllowed(idIndex){
                //console.log(engine.world.bodies[idIndex-2].render);
                
                if(idIndex==2) return false;
               
                //else if(idIndex<2) return false;
                return true;
                
            }
       
gameOver=false;
TotalMoves=10;

            

//make object disappear
const maxScore=engine.world.bodies.length;
            let mouseClickNumber=0;
            let allObjects=Matter.Composite.allBodies(engine.world);
            Matter.Events.on(mouseConstraint, 'mousedown', function(event) {
                if(gameOver==false){
                for(let elt4 of allObjects){
                    scoreDisplay.innerText="Number of moves left : "+(TotalMoves-mouseClickNumber);
                    if(mouseClickNumber==TotalMoves) {
                        PlayerScore_update();
                         for(let elt3 of engine.world.bodies){
                             if(checkStaticAllowed(elt3.id) ) Matter.Body.setStatic(elt3,false);
                             }
                             
                             setTimeout(function stop_everything(){
                                gameOver=true;
                                engine.enableSleeping=true;
                                mouseClickNumber+=1;
                            },5000);

                        }

                     if(Matter.Bounds.contains(elt4.bounds,event.mouse.position)&& elt4.id!=2 && elt4.render.fillStyle!="green"){ 
                         Matter.Composite.remove(engine.world,elt4);
                         mouseClickNumber+=1;
                        }
                    }
                }

                else{
                    window.alert('GameOver');
                }
            });
//collision management
            let PlayerScore=0;
            let collisionDectector=Matter.Detector.create();
            Matter.Detector.setBodies(collisionDectector,engine.world.bodies);
            Matter.Events.on(engine, "collisionStart", ()=>{
                        
            
                        for(let pairCol of Matter.Detector.collisions(collisionDectector)){
                            //PlayerScore+=pairCol.depth;
                            if(pairCol.depth>26 && pairCol.bodyA.id!=2 && pairCol.bodyB.id!=2) {
                                Matter.Composite.remove(engine.world,[pairCol.bodyA,pairCol.bodyB]);
                            }
                    

            }});  
            
            
// update game info
            let timeElasped=0;
            function PlayerScore_update() {

                
                timer = setInterval(function() {
                    timeElasped=timeElasped+(.25);
                    tempRed=randomArray2.length; tempGreen=randomArray.length; tempOther=0;
                for(elt6 in engine.world.bodies){
                    if(engine.world.bodies[elt6].render.fillStyle=="red") tempRed-=1;
                    else if(engine.world.bodies[elt6].render.fillStyle=="green") tempGreen-=1; 
                    else tempOther+=1;
                }
                PlayerScore=maxScore-tempOther-tempRed*8+tempGreen*5;
                if(gameOver==true){
                    scoreDisplay.innerText="your score is: "+ PlayerScore+"....Game Over!! Reload to Restart";
                    return;
                }
                scoreDisplay.innerText="your score is: "+ PlayerScore;
                }, 250);

            }
           

            
                
            
            

   
        



        

           

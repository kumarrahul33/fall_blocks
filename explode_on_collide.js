var Emitter = Particle.emitter;
Particle.engine.create();
function explode_it(x,y){
var explosion = Emitter.create(x, y);
explosion.explode();
}
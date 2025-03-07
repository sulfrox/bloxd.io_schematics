let [x, y, z] = thisPos
pos_name="pos"+x+"_"+y+"_"+z
try{
    rate_limiting_map
} catch {
    rate_limiting_map={};
}
if(rate_limiting_map[pos_name]===undefined){rate_limiting_map[pos_name]=0;}
if(api.now()-rate_limiting_map[pos_name]<1000*10) {
    err="You need to wait til the beacon beam disappears to activate the beacon again";
    api.sendMessage(myId, err, {color: "red"});
    throw err;
}
rate_limiting_map[pos_name]=api.now();

y += 1
api.playParticleEffect({
dir1: [-1, -1, -1],
dir2: [1, 1, 1],
pos1: [x, y-50, z],
pos2: [x + 1, y + 1, z + 1],
texture: "bubble",
minLifeTime: 4,
maxLifeTime: 5,
minEmitPower: 2,
maxEmitPower: 5,
minSize: 0.25,
maxSize: 0.35,
manualEmitCount: 72*50,
gravity: [0, 150, 0],
colorGradients: [
{
timeFraction: 0,
minColor: [125, 245, 255, 1],
maxColor: [200, 200, 255, 1],
},
],
velocityGradients: [
{
timeFraction: 3,
factor: 0.1,
factor2: 0.09,
},
],
blendMode: 1,
})

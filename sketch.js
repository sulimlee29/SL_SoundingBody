let face;
let finger;
let hand;
let cam;

function setup() {
  createCanvas(400, 400, WEBGL);
  hand = loadModel('assets/su-lim_hand_01.obj');
  //face = loadModel('assets/facetest2.obj');
  //finger = loadModel('assets/sl_finger.obj');
  
  //cam = createCapture(VIDEO);
  //cam.hide();
}

function draw() {
  orbitControl();
  background(220);
  //Looks like heart
  //scale(10 + sin(frameCount* 0.2));
  //scale(2 + sin(frameCount* 0.1)); 
  scale(2); 
  strokeWeight(0.25);
  fill(255,255,255);
  //rotate(frameCount * 0.1);
  rotateX(HALF_PI);  
  //rotateY(HALF_PI);
  
  //directionalLight
  //let dirX = (mouseX / width - 0.5) * 2;
  //let dirY = (mouseY / height - 0.5) * 2;
  //directionalLight(250, 250, 250, -dirX, -dirY, -1);
  
  //normalMaterial();
  //specularMaterial(255,100,12);
  //emissiveMaterial();
  //ambientLight(255,10,50);
  
  //texture( cam );
  //translate(10, 0, 0);
  model( hand );
  //model( face );
  //model( finger );
 
  
  
}
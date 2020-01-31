
let hand;
let mic, fft;
let mySound;

function preload() {
  soundFormats('mp3', 'ogg');
  hand = loadModel('assets/su-lim_hand_01.obj');
  mySound = loadSound('assets/heartbeat-01a.mp3');
}

function setup() {
  createCanvas(1000, 1000, WEBGL);


  //Sound Setup
  mySound.setVolume(0.1);
  mySound.play();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();
  // Patch the input to an volume analyzer
  analyzer.setInput(mySound);

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);


}

function draw() {
  orbitControl();
  background(220);

  //sound
  let spectrum = fft.analyze();

  let vol = mic.getLevel();

  let h = map(vol, 0, 1, height, 0);

  // fill(0,255,0);
  // beginShape();
  //   for (i = 0; i < spectrum.length; i++) {
  //     let x = map(i, 0, spectrum.length, 0, width);
  //     let h = -height + map(spectrum[i], 0, 255, height, 0);
  //     torus(x, height, width / spectrum.length, h )
  //   }
  // endShape();

     // Set the volume to a range between 0 and 1.0
    // let volume = map(mouseX, 0, width, 0, 1);
    // volume = constrain(volume, 0, 1);
    //mySound.amp(vol);

    // Set the rate to a range between 0.1 and 4
    // Changing the rate alters the pitch
    // let speed = map(mouseY, 0.1, height, 0, 2);
    // speed = constrain(speed, 0.01, 4);
    //mySound.rate(vol);

    scale(2 + sin(frameCount* (vol*0.05)));
    // Get the average (root mean square) amplitude
    let rms = analyzer.getLevel();

  //Scale
  //scale(10 + sin(frameCount* 0.2));

  //scale(2);
  strokeWeight(0);
  fill(255,255,255);

  //Rotation
  rotateY(frameCount * 0.01);
  rotateX(HALF_PI);

  //directionalLight
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(250, 250, 250, -dirX, -dirY, -1);

  model( hand );

}

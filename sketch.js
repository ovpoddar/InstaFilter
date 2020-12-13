let capture,x = 0,canvas, snaps = false, recording;
function setup() {
  canvas = createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  recording= document.getElementById("recording");
}
function snap(){
  if(capture.pixels[1] > 0){
  
    snaps = true;
  }
}
function draw() {
background(0);

  capture.loadPixels();
  if(capture.pixels[1] > 0){
    if(snaps){
    var w = capture.width;
    copy(capture, 0, x, w, 1, 0, x , w, 1);

    
    // stroke(51);
    // strokeWeight(2);
    // line(0, x, width, x);
    x = x+1;

    if(x > height){
      saveCanvas(canvas, "shot1", "png");
      noLoop();
      x = 0;
    }
  }
  recording.style.display = 'block';
  }
}
let capture,x = 0,canvas;
function setup() {
  canvas = createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
}

function draw() {
  //background(0);
  capture.loadPixels();
  // image(capture, 0,0, width, height);
  var w = capture.width;
  copy(capture, 0, x, w, 1, 0, x , w, 1);

  
  // stroke(51);
  // strokeWeight(2);
  // line(0, x, width, x);
  x = x+1;

    if(x > height){
      saveCanvas(canvas, "shot1", "png");
      noLoop();
      alert();
      //x = 0;
    }
}

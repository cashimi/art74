var imga;
var imgb;
var imgc;
var imgd;
var imge;
var imgf;
var imgg;
var imgh;
var imgi;
var imgj;
var imgk;
var imgl;
var imgm;
var imgn;
var imgo;
var imgp;
var imgq;
var imgr;
var imgs;
var imgt;
var imgu;
var imgv;
var imgw;
var imgx;
var imgy;
var imgz;
var imgstar;

var initials ='cv'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = (128); // gray
var lastscreenshot=61; // last screenshot never taken
var bg;

function preload() {
// preload() runs once, it may make you wait
  bg = loadImage('https://cashimi.github.io/graffiti/brick.png')
  imga = loadImage('https://cashimi.github.io/graffiti/grafa.png');
  imgb = loadImage('https://cashimi.github.io/graffiti/grafb.png');
  imgc = loadImage('https://cashimi.github.io/graffiti/grafc.png');
  imgd = loadImage('https://cashimi.github.io/graffiti/grafd.png');
  imge = loadImage('https://cashimi.github.io/graffiti/grafe.png');
  imgf = loadImage('https://cashimi.github.io/graffiti/graff.png');
  imgg = loadImage('https://cashimi.github.io/graffiti/grafg.png');
  imgh = loadImage('https://cashimi.github.io/graffiti/grafh.png');
  imgi = loadImage('https://cashimi.github.io/graffiti/grafi.png');
  imgj = loadImage('https://cashimi.github.io/graffiti/grafj.png');
  imgk = loadImage('https://cashimi.github.io/graffiti/grafk.png');
  imgl = loadImage('https://cashimi.github.io/graffiti/grafl.png');
  imgm = loadImage('https://cashimi.github.io/graffiti/grafm.png');
  imgn = loadImage('https://cashimi.github.io/graffiti/grafn.png');
  imgo = loadImage('https://cashimi.github.io/graffiti/grafo.png');
  imgp = loadImage('https://cashimi.github.io/graffiti/grafp.png');
  imgq = loadImage('https://cashimi.github.io/graffiti/grafq.png');
  imgr = loadImage('https://cashimi.github.io/graffiti/grafr.png');
  imgs = loadImage('https://cashimi.github.io/graffiti/grafs.png');
  imgt = loadImage('https://cashimi.github.io/graffiti/graft.png');
  imgu = loadImage('https://cashimi.github.io/graffiti/grafu.png');
  imgv = loadImage('https://cashimi.github.io/graffiti/grafv.png');
  imgw = loadImage('https://cashimi.github.io/graffiti/grafw.png');
  imgx = loadImage('https://cashimi.github.io/graffiti/grafx.png');
  imgy = loadImage('https://cashimi.github.io/graffiti/grafy.png');
  imgz = loadImage('https://cashimi.github.io/graffiti/grafz.png');
  imgstar = loadImage('https://cashimi.github.io/graffiti/grafstar.png');
}

function setup() {
createCanvas(1100, 600);  // canvas size
background(bg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // white head
    fill(255, 255, 255, 90);
    stroke(255, 255, 255, 90);
    ellipse(mouseX, mouseY, 35, 35)
   
  } else if (toolChoice == '2') { // red head
    fill(139, 0, 0,90);
    stroke(139, 0, 0,90);
    ellipse(pmouseX, pmouseY, 35, 35);
    
  } else if (toolChoice == '3') { // blue head
    fill(0, 0, 139,90);
    stroke(0, 0, 139,90);
    ellipse(pmouseX, pmouseY, 35, 35);
    
  } else if (toolChoice == '4') { // black outline
    fill(0, 0, 0, 80);
    stroke(0, 0, 0, 80);
    ellipse(mouseX, mouseY, 17, 17);
    
  } else if (key == '5') { // white rect
    fill(255, 255, 255, 90);
    stroke(255, 255, 255, 90);
    rect(mouseX-17.5, mouseY-17.5, 35, 35)
    
  } else if (toolChoice == '6') { //red rect
    fill(139, 0, 0,90);
    stroke(139, 0, 0,90);
    rect(mouseX-17.5, mouseY-17.5, 35, 35);
    
  } else if (toolChoice == '7') { //blue rect
    fill(0, 0, 139,90);
    stroke(0, 0, 139,90);
    rect(mouseX-17.5, mouseY-17.5, 35, 35);
    
  } else if (toolChoice == '8') { //black rect
    fill(0, 0, 0, 80);
    stroke(0, 0, 0, 80);
    rect(mouseX-8.5, mouseY-8.5, 17, 17);
  } else if (toolChoice == '9') {
    image(bg, mouseX-559, mouseY-300, 1100, 600);
    
//graffiti lettering    
  } else if (toolChoice == 'a' || toolChoice == 'A') {
    image(imga, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'b' || toolChoice == 'B') {
    image(imgb, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'c' || toolChoice == 'C') {
    image(imgc, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'd' || toolChoice == 'D') {
    image(imgd, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'e' || toolChoice == 'E') {
    image(imge, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'f' || toolChoice == 'F') {
    image(imgf, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'g' || toolChoice == 'G') {
    image(imgg, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'h' || toolChoice == 'H') {
    image(imgh, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'i' || toolChoice == 'I') {
    image(imgi, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'j' || toolChoice == 'J') {
    image(imgj, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'k' || toolChoice == 'K') {
    image(imgk, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'l' || toolChoice == 'L') {
    image(imgl, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'm' || toolChoice == 'M') {
    image(imgm, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'n' || toolChoice == 'N') {
    image(imgn, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'o' || toolChoice == 'O') {
    image(imgo, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'p' || toolChoice == 'P') {
    image(imgp, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'q' || toolChoice == 'Q') {
    image(imgq, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'r' || toolChoice == 'R') {
    image(imgr, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 's' || toolChoice == 'S') {
    image(imgs, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 't' || toolChoice == 'T') {
    image(imgt, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'u' || toolChoice == 'U') {
    image(imgu, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'v' || toolChoice == 'V') {
    image(imgv, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'w' || toolChoice == 'W') {
    image(imgw, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'x' || toolChoice == 'X') {
    image(imgx, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'y' || toolChoice == 'Y') {
    image(imgy, mouseX, mouseY, 150, 180);}
    else if (toolChoice == 'z' || toolChoice == 'Z') {
    image(imgz, mouseX, mouseY, 150, 180);}
    else if (toolChoice == '`' || toolChoice == '~') { //star
    image(imgstar, mouseX-75, mouseY-90, 150, 180);}    
    
    
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);
}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == '0') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}

function setup() {
 createCanvas(400, 600);}

function draw() {
  background(color(0, 0, 255));
  
    var c = color(255, 204, 0);  
fill(c);  
noStroke(); 
  triangle(17, 0, 400, 0, 400, 375);
  
var c = color('magenta');  
fill(c);  
noStroke(); 
triangle(0, 0, 0, 245, 250, 0);
  
var c = color('magenta');  
fill(c);  
noStroke(); 
triangle(0, 600, 600, 600, 600, 0);

var c = color('hsl(160, 100%, 50%)');  
fill(c);
noStroke();  
rect(135, 113, 176, 176);
  
  
}
// We'll use variables for most of our colors in this code-along.
let backgroundColor, color1, color2, textColor;
globalS, globalB;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  noStroke();

  // When used with only one argument, the color mode is greyscale.
  // 0 is black and 100 is white.
  backgroundColor = color(95);
  textColor = color(20);
  // When used with three arguments, the function takes, in this order:
  // HUE - 0 to 360 degrees on a color wheel - 0 is red, 120 is green and 240
  //       is blue.
  // SATURATION - 0 is no color (greyscale), and 100 is as bold as possible.
  // BRIGHTNESS - 0 is no light (black), and 100 is as bright as possible.
  // (c, 50, 100) will give pastels
  // (c, 100, 100) will give neons
  // (c, 100, 50) will give dark colors
  globalS = 80;
  globalB = 80;
  color1 = color(0, globalS, globalB);
  color2 = color(200, globalS, globalB);
  color3 = color("orange");
}

function draw() {
  background(backgroundColor);
  // Call the drawCenterLine function here to run the three lines of code
  // contained in that function.
  drawCenterLine();

  if (mouseX > width / 2) {
    nightMode();
  } else {
    dayMode();
  }

  // The red and blue circles:
  fill(color1);
  ellipse(width / 4, height / 2, 50);
  fill(color2);
  ellipse(0.75 * width, height / 2, 50);

  // The grey circle and the text:
  fill(textColor);
  ellipse(mouseX, mouseY, 50);
  text("Flip the switch", 20, 20);

  //orange circle
  fill(color3);
  ellipse(mouseX, mouseY, 50);
  
  //red rectangle 
  fill('red')
  rect(0,25, 60,45)
  if (mouseX < 60 && mouseX > 0 && mouseY < 45 && mouseY > 25){
     backgroundColor = color('red')
  } 
  
  

  //orange rectangle
  fill('orange')
  rect(0, 350, 60,45)
 if (mouseX < 60 && mouseX > 0 && mouseY > 45 && mouseY < 350){
    backgroundColor = color('orange')
 }
  
  //blue rectangle
  fill('blue')
  rect(340, 20, 60,45)
   if (mouseX > 60 && mouseX < 340 && mouseY < 45 && mouseY > 20){
    backgroundColor = color('blue')
   }
  
  //green rectangle 
  fill('green')
  rect(340, 350, 60, 45)
  if (mouseX > 60 && mouseX < 340 && mouseY > 45 && mouseY < 350){
    backgroundColor = ('green')
  }
}

function dayMode() {
  //backgroundColor = color(95);
  //color1, color2, textColor
  //Make color1 and color 2 switch when going into night mode
  //Change the textColor to white when in night mode (95). black = (20)

  color1 = color(0, globalS, globalB);
  color2 = color(200, globalS, globalB);
  textColor = color(20);
}

function nightMode() {
  //backgroundColor = color(20);

  color1 = color(200, globalS, globalB);
  color2 = color(0, globalS, globalB);
  textColor = color(95);
}

function drawCenterLine() {
  // This function will turn stroke on, draw the line, and then turn stroke
  // back off.
  // Remember a line segment in p5.js has four arguments: x1, y1, x2, y2
  stroke(textColor);
  line(width / 2, 0, width / 2, height);
  noStroke();
}

function setup() {
  createCanvas(400, 400);
}

let olhoX;
let olhoY;

function draw() {
  background("pink");
  //rosto

  fill("purple");
  stroke("red");
  strokeWeight(1);
  circle(200, 200, 300);

  //OLHOS

  fill("blue");
  stroke("red");
  strokeWeight(3);
  circle(150, 150, 60);

  circle(250, 150, 60);

  //boca
  fill("black");
  stroke("yellow");
  strokeWeight(14);
  line(134, 264, 255, 265);
  line(256, 204, 230, 100);

  //nariz

  fill("black");
  stroke("green");
  strokeWeight(3);
  triangle(202, 183, 150, 224, 242, 223);

  //pupila

  fill("red");
  stroke("green");
  strokeWeight(3);
  //circle
  // circle(150, 151, 25) //direito
  // circle(250, 151, 25)//esquerdo

  olhoX = map(mouseX, 0, 400, 125, 170);
  olhoY = map(mouseY, 0, 400, 125, 170);

  circle(olhoX, olhoY, 10);
    circle(olhoX+100, olhoY, 10);

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}

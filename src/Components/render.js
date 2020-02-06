import React from 'react';


const Render = () => {

    let slider = document.getElementById("myRange");
slider.value = 10;
//need to change this to depend on total length and angle

//need to add headroom
//need to add treads
//need to add risers
//need to add nosing

function drawStairs() {
  let origin = [500, 500];
  let start = 0;
  //need to set origin to top right corner instead
  
  let run = 55;
  let rise = -35;
  
  //calculate coordinates for paths
  let coordinates = [];
  for (let i=0; i<slider.value; i++){
      coordinates.push(start + (run*i), start + (rise*i), start + (run*i), rise + (rise*i), run + (run*i), rise + (rise*i))
    }
  
//pseudo stringer
let proxy = coordinates.length
coordinates.push(run*slider.value, rise*(slider.value-1), run, start, start, start);
 
var width = window.innerWidth;
var height = window.innerHeight;
  
  //konva draw
  var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height
  });
  
  var layer = new Konva.Layer();

  var newLine = new Konva.Line({
    points: coordinates,
    stroke: 'black',
    strokeWidth: 3,
    lineCap: 'sqare',
    lineJoin: 'sqare'
  });

  newLine.move({
          x: origin[0],
          y: origin[1]
        });
  layer.add(newLine);
  stage.add(layer);
  
}

slider.addEventListener('input', drawStairs);

drawStairs();

// function blank(){
//   for (var i=0; i<)
// };

Total run / Ideal run = number of runs
//need a safeguard for weird floats

number of runs = number of rises

total width / number of runs = runonscreen

length of each runonscreen / ideal run = length of each riseonscreen / ideal rise
//meaning riseonscreen length = runonscreen length * ideal rise / ideal run

to get coordinates, 
  for each count in the number of stairs,
    x + runonscreen
    y + riseonscreen


    return (

    )
}

export default Render
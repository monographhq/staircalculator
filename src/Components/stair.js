import React from 'react';
import { Stage, Layer, Line, Rect} from 'react-konva';

const Stair = (props) => {

  let totalRun = parseInt(props.totalRunft) + parseInt(props.totalRunin) + parseFloat(props.totalRunfr);
  let totalRise = parseInt(props.totalRiseft) + parseInt(props.totalRisein) + parseFloat(props.totalRisefr);

  let idealRun = parseFloat(props.idealRunin) + parseFloat(props.idealRunfr);
  let idealRise = parseFloat(props.idealRisein) + parseFloat(props.idealRisefr);

  let count = 0;

  if (props.boolean === true){
  count = parseInt(totalRun/idealRun);
  } else if (props.boolean === false){
    count = parseInt(totalRise/idealRise);
  }

  let landing = 36;
  let lengthH = parseFloat(props.headroomLength);


  let windowWidth = (window.innerWidth * 0.65) - 15;

  let stringerA = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRun / idealRise));
  let stringerB = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRise / idealRun));

  let coordinates = [];

  let floorThickness = (parseFloat(props.floorft) + parseFloat(props.floorin) + parseFloat(props.floorfr));


  //This creates the stair drawing based on whether total rise or run is being selected
  if (props.boolean === true){ //If total run is adjusted
    for (let i=0; i<count; i++){
      coordinates.push( (totalRun)-(idealRun*i), idealRise*i, (totalRun)-(idealRun*(i+1)), idealRise*i, (totalRun)-(idealRun*(i+1)), (idealRise*(i+1)) )
    }
    //This creates the landing and stringer
    coordinates.push( (coordinates[coordinates.length-2]+stringerB), coordinates[coordinates.length-1], coordinates[0], stringerA, coordinates[0], floorThickness, (coordinates[0]+landing), floorThickness, (coordinates[0]+landing), 0)

  } else if (props.boolean === false){ //If total rise is adjusted
    for (let i=0; i<count; i++){
      coordinates.push( (totalRise)-(idealRun*i), idealRise*i, (totalRise)-(idealRun*(i+1)), idealRise*i, (totalRise)-(idealRun*(i+1)), (idealRise*(i+1)) )
    }
    //This creates the landing and stringer
    coordinates.push( (coordinates[coordinates.length-2]+stringerB), coordinates[coordinates.length-1], coordinates[0], stringerA, coordinates[0], floorThickness, (coordinates[0]+landing), floorThickness, (coordinates[0]+landing), 0)
  }

  //This is for the headroom part
  let headroomPts = [ (coordinates[coordinates.length-12]-(idealRun*3)), floorThickness, (coordinates[coordinates.length-12]-(idealRun*3)), 0, coordinates[coordinates.length-12]-idealRun + lengthH, 0, coordinates[coordinates.length-12]-idealRun + lengthH, floorThickness ];

  // //This is for the floor opening dimension
  // let headroomDelta = coordinates[3] - (coordinates[coordinates.length-12]-idealRun + lengthH);

  let stairLength = ( ((coordinates[coordinates.length-12]-idealRun*3) + landing + coordinates[0]) );
  //This scales the drawing
  let canvasWidth = stairLength;
  let canvasHeight = idealRise*count;
  
  //This moves the drawing to the center
  let moveCenter = ( (windowWidth/2) - (stairLength/2) );
  let move = [moveCenter,100];


  //This creates the treads, risers, and nosing
  let treadThickness = parseFloat(props.treadin) + parseFloat(props.treadfr);
  let riserThickness = parseFloat(props.riserin) + parseFloat(props.riserfr);
  let nosing = parseFloat(props.nosingin) + parseFloat(props.nosingfr);

  let treadLength = idealRun + nosing + riserThickness;
  let riserHeight = idealRise - treadThickness;

  let treadsX = [];
  for (let k=2; k<(coordinates.length); k+=6){
    treadsX.push(move[0] + coordinates[k] - nosing);
  }
  let treadsY = [];
  let risersY = [];
  for (let j=3; j<coordinates.length; j+=6){
    treadsY.push(move[1] + coordinates[j]);
    risersY.push(move[1] + coordinates[j] + treadThickness);
  }
  let treadsW = [];
  for (let h=0; h<treadsX.length; h++){
    treadsW.push(treadsX[h]+nosing);
  }

  return (
    <Stage width={windowWidth} height={window.innerHeight}>
        <Layer>
          <Line
            x={move[0]}
            y={move[1]}
            points={coordinates}
            stroke="black"
            strokeWidth={0.5}
            lineCap='sqare'
            lineJoin='sqare'
            closed='true'
          />
        <Line
            x={move[0]}
            y={move[1]}
            points={headroomPts}
            stroke="black"
            strokeWidth={0.5}
            lineCap='sqare'
            lineJoin='sqare'
            closed='true'
          />
          {
          [...Array(count)].map((_, i) => (
            <Rect
              key={i}
              x={treadsX[i]}
              y={treadsY[i]}
              width={treadLength}
              height={treadThickness}
              fill="red"
              strokeWidth={0.5}
            />
          ))
          }
          {[...Array(count)].map((_, i) => (
            <Rect
              key={i}
              x={treadsW[i]}
              y={risersY[i]}
              width={riserThickness}
              height={riserHeight}
              fill="red"
              strokeWidth={0.5}
            />
          ))}
        </Layer>
      </Stage>
  )
}

export default Stair
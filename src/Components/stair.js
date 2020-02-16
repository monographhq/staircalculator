import React from 'react';
import { Stage, Layer, Line, Rect } from 'react-konva';

const Stair = (props) => {

  let windowWidth = window.innerWidth * 0.65;
  let move = [windowWidth/2,100];

  let totalRun = parseInt(props.totalRunft) + parseInt(props.totalRunin) + parseFloat(props.totalRunfr);
  let totalRise = parseInt(props.totalRiseft) + parseInt(props.totalRisein) + parseFloat(props.totalRisefr);

  let idealRun = parseFloat(props.idealRunin) + parseFloat(props.idealRunfr);
  let idealRise = parseFloat(props.idealRisein) + parseFloat(props.idealRisefr);

  let xCount = parseInt(totalRun/idealRun);
  let yCount = parseInt(totalRise/idealRise);

  let landing = 36;

  let stringerA = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRun / idealRise));
  let stringerB = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRise / idealRun));

  let coordinates = [];

  let floorThickness = (parseFloat(props.floorft) + parseFloat(props.floorin) + parseFloat(props.floorfr));


  //This creates the stair drawing based on whether total rise or run is being selected
  if (props.boolean === true){
    for (let i=0; i<xCount; i++){
      coordinates.push( (totalRise)-(idealRun*i), idealRise*i, (totalRise)-(idealRun*(i+1)), idealRise*i, (totalRise)-(idealRun*(i+1)), (idealRise*(i+1)) )
    }
    //This creates the landing and stringer
    coordinates.push( (coordinates[coordinates.length-2]+stringerB), coordinates[coordinates.length-1], coordinates[0], stringerA, coordinates[0], floorThickness, (coordinates[0]+landing), floorThickness, (coordinates[0]+landing), 0)
  } else if (props.boolean === false){
    for (let i=0; i<yCount; i++){
      coordinates.push( (totalRun)-(idealRun*i), idealRise*i, (totalRun)-(idealRun*(i+1)), idealRise*i, (totalRun)-(idealRun*(i+1)), (idealRise*(i+1)) )
    }
    //This creates the landing and stringer
    coordinates.push( (coordinates[coordinates.length-2]+stringerB), coordinates[coordinates.length-1], coordinates[0], stringerA, coordinates[0], floorThickness, (coordinates[0]+landing), floorThickness, (coordinates[0]+landing), 0)
  }

  //This is for the headroom part
  let lengthH = parseFloat(props.headroomLength);

  let headroomPts = [ (coordinates[coordinates.length-12]-(idealRun*3)), floorThickness, (coordinates[coordinates.length-12]-(idealRun*3)), 0, coordinates[coordinates.length-12]-idealRun + lengthH, 0, coordinates[coordinates.length-12]-idealRun + lengthH, floorThickness ];

  //This is for the floor opening dimension
  let headroomDelta = coordinates[3] - (coordinates[coordinates.length-12]-idealRun + lengthH);

  //This creates the treads, risers, and nosing
  let treadThickness = parseFloat(props.treadin) + parseFloat(props.treadfr);
  let riserthickness = parseFloat(props.riserin) + parseFloat(props.riserfr);
  let nosing = parseFloat(props.nosingin) + parseFloat(props.nosingfr);

  let treadWidth = idealRun + nosing

  let detailsX = [];
  for (var i=2; i<xCount+2; i+6){
    detailsX.push(coordinates[i] - nosing)
  }

  let detailsY = [];




  return (
    <Stage width={windowWidth} height={window.innerHeight}>
        <Layer>
          <Line
            x={move[0]}
            y={move[1]}
            points={coordinates}
            stroke="black"
            strokeWidth={2}
            lineCap='sqare'
            lineJoin='sqare'
            closed='true'
          />
        <Line
            x={move[0]}
            y={move[1]}
            points={headroomPts}
            stroke="black"
            strokeWidth={2}
            lineCap='sqare'
            lineJoin='sqare'
            closed='true'
          />
        <Rect
            x={move[0]}
            y={move[1]}
            width={treadWidth}
            height={treadThickness}
            fill="red"
        />
        </Layer>
      </Stage>
  )
}

export default Stair
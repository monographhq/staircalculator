import React from 'react';
import { Stage, Layer, Line } from 'react-konva';

const Stair = (props) => {

  const start = 0;

  let windowWidth = window.innerWidth * 0.66;
  let move = [100, 100];
  let coordinates = [];

  let idealRun = props.idealRunin + props.idealRunfr;
  let idealRise = props.idealRisein + props.idealRisefr;

  let totalRun = props.totalRunft + props.totalRunin + props.totalRunfr;
  let totalRise = props.totalRiseft + props.totalRisein + props.totalRisefr;

  let runCount = totalRun / idealRun
  let riseCount = totalRise / idealRise;


  for (let i=0; i<runCount; i++){
    coordinates.push(start + (idealRun*i), start + (idealRise*i), start + (idealRun*i), idealRise + (idealRise*i), idealRun + (idealRun*i), idealRise + (idealRise*i))
  }

  console.log(coordinates);

  return (
    <Stage width={windowWidth} height={window.innerHeight}>
          <Layer>
            <Line
              x={move[0]}
              y={move[1]}
              points={coordinates}
              stroke="black"
              strokeWidth={3}
              lineCap='sqare'
              lineJoin='sqare'
            />
          </Layer>
        </Stage>
  )
}

export default Stair
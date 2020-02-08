import React from 'react';
import { Stage, Layer, Line } from 'react-konva';

const Stair = (props) => {

  const start = 0;

  let windowWidth = window.innerWidth * 0.66;
  let move = [100, 100];

  let totalRun = props.totalRunft + props.totalRunin + props.totalRunfr;
  let totalRise = props.totalRiseft + props.totalRisein + props.totalRisefr;

  let idealRun = props.idealRunin + props.idealRunfr;
  let idealRise = props.idealRisein + props.idealRisefr;
  
  let blank = [(windowWidth/totalRun), (idealRun*totalRise/totalRun)];

  let coordinates = [props.totalRunft, props.totalRiseft, props.totalRunft*1.25, props.totalRiseft*1.25];

  console.log(props.totalRunft);
  console.log(props.totalRiseft);

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
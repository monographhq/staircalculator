import React from 'react';
import { Stage, Layer, Line, Rect, Text } from 'react-konva';
import '../Styles/fonts.css';

const Stair = (props) => {


  let totalRun = parseInt(props.totalRunft) + parseInt(props.totalRunin) + parseFloat(props.totalRunfr);
  let totalRise = parseInt(props.totalRiseft) + parseInt(props.totalRisein) + parseFloat(props.totalRisefr);

  let idealRun = parseFloat(props.idealRunin) + parseFloat(props.idealRunfr);
  let idealRise = parseFloat(props.idealRisein) + parseFloat(props.idealRisefr);

  let preTreadThickness = (parseFloat(props.treadin) + parseFloat(props.treadfr));
  let preRiserThickness = (parseFloat(props.riserin) + parseFloat(props.riserfr));

  let count = 0;

  if (props.totalBoolean === true){
  count = parseInt(totalRun/idealRun);
  } else if (props.totalBoolean === false){
    count = parseInt(totalRise/idealRise);
  }

  let landing = 36;
  let lengthH = parseFloat(props.headroomLength);

  let windowWidth = (window.innerWidth * 0.82) - 15;

  let stringerA = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRun / idealRise));
  let stringerB = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRise / idealRun));
  if (props.details){
    stringerA = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan((idealRun-preRiserThickness) / (idealRise-preTreadThickness)));
    stringerB = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan((idealRise-preTreadThickness) / (idealRun-preRiserThickness)));
  } else {
    stringerA = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRun / idealRise));
    stringerB = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRise / idealRun));
  }

  let coordinates = [];

  let floorThickness = (parseFloat(props.floorft) + parseFloat(props.floorin) + parseFloat(props.floorfr));

  //This creates the stair drawing based on whether total rise or run is being selected
  if (props.totalBoolean === true){ //If total run is selected (need to change so that total run changes ideal run)
    if (props.idealBoolean === true){ //If ideal is selected
      if (props.stairToggle === true){
        idealRun = parseFloat(idealRise / Math.tan(props.stairAngle * (Math.PI / 180)));
        stringerA = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRun / idealRise));
        stringerB = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRise / idealRun));
        if (props.details){
          stringerA = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan((idealRun-preRiserThickness) / (idealRise-preTreadThickness)));
          stringerB = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan((idealRise-preTreadThickness) / (idealRun-preRiserThickness)));
        } else {
          stringerA = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRun / idealRise));
          stringerB = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRise / idealRun));
        }
      }
      for (let i=0; i<count; i++){
        coordinates.push( (totalRun)-(idealRun*i), idealRise*i, (totalRun)-(idealRun*(i+1)), idealRise*i, (totalRun)-(idealRun*(i+1)), (idealRise*(i+1)) )
      }
      //This creates the landing and stringer
      props.details ? (
        coordinates.push( (coordinates[coordinates.length-2]+preRiserThickness + stringerB), coordinates[coordinates.length-1], coordinates[0], stringerA + preTreadThickness, coordinates[0], floorThickness, (coordinates[0]+landing), floorThickness, (coordinates[0]+landing), 0)
      ) : (
        coordinates.push( (coordinates[coordinates.length-2] + stringerB), coordinates[coordinates.length-1], coordinates[0], stringerA, coordinates[0], floorThickness, (coordinates[0]+landing), floorThickness, (coordinates[0]+landing), 0)
      )
    } else {
      count = Math.round(totalRun/11);
      idealRun = totalRun/count;
      if (props.stairToggle === true){
        idealRun = parseFloat(idealRise / Math.tan(props.stairAngle * (Math.PI / 180)));
        stringerA = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRun / idealRise));
        stringerB = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRise / idealRun));
        if (props.details){
          stringerA = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan((idealRun-preRiserThickness) / (idealRise-preTreadThickness)));
          stringerB = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan((idealRise-preTreadThickness) / (idealRun-preRiserThickness)));
        } else {
          stringerA = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRun / idealRise));
          stringerB = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRise / idealRun));
        }
      }
      for (let i=0; i<count; i++){
        coordinates.push( (totalRun)-(idealRun*i), idealRise*i, (totalRun)-(idealRun*(i+1)), idealRise*i, (totalRun)-(idealRun*(i+1)), (idealRise*(i+1)) )
      }
      //This creates the landing and stringer
      props.details ? (
        coordinates.push( (coordinates[coordinates.length-2]+preRiserThickness + stringerB), coordinates[coordinates.length-1], coordinates[0], stringerA + preTreadThickness, coordinates[0], floorThickness, (coordinates[0]+landing), floorThickness, (coordinates[0]+landing), 0)
      ) : (
        coordinates.push( (coordinates[coordinates.length-2] + stringerB), coordinates[coordinates.length-1], coordinates[0], stringerA, coordinates[0], floorThickness, (coordinates[0]+landing), floorThickness, (coordinates[0]+landing), 0)
      )
    }

  } else if (props.totalBoolean === false){ //If total rise is selected (need to change so that total rise changes ideal rise)
    if (props.idealBoolean === true){
      if (props.stairToggle === true){
        idealRun = parseFloat(idealRise / Math.tan(props.stairAngle * (Math.PI / 180)));
        stringerA = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRun / idealRise));
        stringerB = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRise / idealRun));
        if (props.details){
          stringerA = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan((idealRun-preRiserThickness) / (idealRise-preTreadThickness)));
          stringerB = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan((idealRise-preTreadThickness) / (idealRun-preRiserThickness)));
        } else {
          stringerA = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRun / idealRise));
          stringerB = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRise / idealRun));
        }
      }
      for (let i=0; i<count; i++){
        coordinates.push( (totalRise)-(idealRun*i), idealRise*i, (totalRise)-(idealRun*(i+1)), idealRise*i, (totalRise)-(idealRun*(i+1)), (idealRise*(i+1)) )
      }
      //This creates the landing and stringer
      props.details ? (
        coordinates.push( (coordinates[coordinates.length-2]+(stringerB+preRiserThickness)), coordinates[coordinates.length-1], coordinates[0], (stringerA+preTreadThickness), coordinates[0], floorThickness, (coordinates[0]+landing), floorThickness, (coordinates[0]+landing), 0)
      ) : (
        coordinates.push( (coordinates[coordinates.length-2]+(stringerB)), coordinates[coordinates.length-1], coordinates[0], (stringerA), coordinates[0], floorThickness, (coordinates[0]+landing), floorThickness, (coordinates[0]+landing), 0)
      )
    } else {
    count = Math.round(totalRise/7);
    idealRise = totalRise/count;
    if (props.stairToggle === true){
      idealRun = parseFloat(idealRise / Math.tan(props.stairAngle * (Math.PI / 180)));
      stringerA = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRun / idealRise));
        stringerB = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRise / idealRun));
        if (props.details){
          stringerA = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan((idealRun-preRiserThickness) / (idealRise-preTreadThickness)));
          stringerB = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan((idealRise-preTreadThickness) / (idealRun-preRiserThickness)));
        } else {
          stringerA = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRun / idealRise));
          stringerB = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) / Math.sin(Math.atan(idealRise / idealRun));
        }
    }
    for (let i=0; i<count; i++){
      coordinates.push( (totalRise)-(idealRun*i), idealRise*i, (totalRise)-(idealRun*(i+1)), idealRise*i, (totalRise)-(idealRun*(i+1)), (idealRise*(i+1)) )
    }
    //This creates the landing and stringer
    props.details ? (
      coordinates.push( (coordinates[coordinates.length-2]+(stringerB+preRiserThickness)), coordinates[coordinates.length-1], coordinates[0], (stringerA+preTreadThickness), coordinates[0], floorThickness, (coordinates[0]+landing), floorThickness, (coordinates[0]+landing), 0)
    ) : (
      coordinates.push( (coordinates[coordinates.length-2]+(stringerB)), coordinates[coordinates.length-1], coordinates[0], (stringerA), coordinates[0], floorThickness, (coordinates[0]+landing), floorThickness, (coordinates[0]+landing), 0)
    )
    }
  }
  

  //This is for the headroom part
  let headroomPts = [ (coordinates[coordinates.length-12]-(idealRun*3)), floorThickness, (coordinates[coordinates.length-12]-(idealRun*3)), 0, coordinates[coordinates.length-12] - (idealRun) + lengthH, 0, coordinates[coordinates.length-12] - (idealRun) + lengthH, floorThickness ];
  //This part removes the headroom if the stair is too short
  let headroomTrue = true;
  if (totalRise < 84 || (idealRise * count) < 84 || totalRun < 84 || (idealRun * count) < 84){
    headroomTrue = false;
  }

  //This is the scale factor for the stair drawing
  let stairLength = ((headroomPts[0]) + landing + coordinates[0]);
  let wr = (windowWidth)/(Math.abs(headroomPts[0]) + landing + coordinates[0]);
  var ratio = wr*0.75;

  //This transforms the drawing based on the scale factor
  for (var m=0; m<coordinates.length; m++){
    coordinates[m] = coordinates[m]*ratio
  }
  for (var n=0; n<headroomPts.length; n++){
    headroomPts[n] = headroomPts[n]*ratio
  }

  //This moves the drawing to the center
  let moveCenter = ( (windowWidth/2) - (stairLength*ratio/2) );
  let move = [moveCenter, 150];

  //Treads, risers, and nosing dimensions
  let treadThickness = ratio * (parseFloat(props.treadin) + parseFloat(props.treadfr));
  let riserThickness = ratio * (parseFloat(props.riserin) + parseFloat(props.riserfr));
  let nosing = ratio * (parseFloat(props.nosingin) + parseFloat(props.nosingfr));

  let treadLength = (idealRun*ratio + nosing + riserThickness);
  let riserHeight = (idealRise*ratio - treadThickness);

  //Coordinates for treads, risers, and nosing
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

  //Coordinates for all treads minus the top one
  let treadsX2 = [];
  for (let r=1; r<treadsX.length; r++){
    treadsX2.push(treadsX[r]);
  }
  let treadsY2 = [];
  for (let t=1; t<treadsY.length; t++){
    treadsY2.push(treadsY[t]);
  }

  //Coordinates and dimensions for the top tread
  let topTread = [treadsX[0], treadsY[0]];

  //Dimension strings
  //This is the arrow dimensions
  let arrowWidth = 10 / 2;
  let arrowOffset = 40;
  let textLineOffset = 25;
  let textNumOffset = 10;

  //This is the dimension string for the total rise
  let dRise = [coordinates[coordinates.length-2]+arrowOffset, 0, coordinates[coordinates.length-2]+arrowOffset, coordinates[coordinates.length-9]];
  let dRiseArrowTop = [dRise[0]-arrowWidth, dRise[1]+arrowWidth, dRise[0], dRise[1], dRise[0]+arrowWidth, dRise[1]+arrowWidth];
  let dRiseArrowBot = [dRise[2]-arrowWidth, dRise[3]-arrowWidth, dRise[2], dRise[3], dRise[2]+arrowWidth, dRise[3]-arrowWidth];
  let dRiseText = [dRise[0], (dRise[1]+dRise[3])/2];
  let dRiseDashedTop = [coordinates[coordinates.length-2], dRise[1], dRise[0], dRise[1]];
  let dRiseDashedBot = [coordinates[coordinates.length-10], dRise[3], dRise[0], dRise[3]];
  let dRiseFeet = Math.floor( ((coordinates[coordinates.length-11] - coordinates[1]) / ratio) / 12 );
  let dRiseInches = Math.floor( ((coordinates[coordinates.length-11] - coordinates[1]) / ratio) - (dRiseFeet * 12) );
  let dRiseFraction = Math.round(( ((coordinates[coordinates.length-11] - coordinates[1]) / ratio) - (dRiseFeet * 12) - dRiseInches ) * 16);

  //This is the dimension string for the total run
  let dRun = [coordinates[coordinates.length-12], coordinates[coordinates.length-11]+arrowOffset, coordinates[0], coordinates[coordinates.length-11]+arrowOffset];
  let dRunArrowLeft = [dRun[0]+arrowWidth, dRun[1]-arrowWidth, dRun[0], dRun[1], dRun[0]+arrowWidth, dRun[1]+arrowWidth];
  let dRunArrowRight = [dRun[2]-arrowWidth, dRun[3]-arrowWidth, dRun[2], dRun[3], dRun[2]-arrowWidth, dRun[3]+arrowWidth];
  let dRunText = [(dRun[0]+dRun[2])/2, dRun[1]];
  let dRunDashedLeft = [dRun[0], dRun[1], dRun[0], dRun[1]-arrowOffset];
  let dRunDashedRight = [dRun[2], dRun[3], dRun[2], coordinates[1]];
  let dRunFeet = Math.floor( ((coordinates[0] - coordinates[coordinates.length-12]) / ratio) / 12 );
  let dRunInches = Math.floor( ((coordinates[0] - coordinates[coordinates.length-12]) / ratio ) - (dRunFeet * 12) );
  let dRunFraction = Math.round( ( ((coordinates[0] - coordinates[coordinates.length-12]) / ratio ) - (dRunFeet * 12) - dRunInches) * 16 );

  //This is the dimension string for the stringer
  let sZ = (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) * ratio;
  let sA = stringerA * ratio;
  let sAlpha = Math.atan(idealRise / idealRun);
  let sC = Math.sqrt( (sA*sA) - (sZ*sZ) );

  let sX = coordinates[10] + riserThickness;
  let sY = coordinates[11] + treadThickness;
  if (props.details){
    sX = coordinates[10] + riserThickness;
    sY = coordinates[11] + treadThickness;
  } else {
    sX = coordinates[10];
    sY = coordinates[11];
  }

  if (count <= 3){
    sX = coordinates[4] + riserThickness;
    sY = coordinates[5] + treadThickness;
  } 

  let stringerTrue = count > 2;

  let sX1 = sX + (sC * Math.cos(sAlpha));
  let sY1 = (sY + sA) - (sC * Math.sin(sAlpha));
  let dStringer = [sX, sY, sX1+(sZ/2), sY1+(sA/2)];


  //This is the dimension string for the nosing
  let dNosing = [coordinates[2], 0, coordinates[2]-(nosing), 0]; 
  let dNosingDashedLeft = [dNosing[0], dNosing[1], dNosing[0], dNosing[1]-arrowOffset];
  let dNosingDashedRight = [dNosing[2], dNosing[1], dNosing[2], dNosing[1]-arrowOffset];
  let dNosingText = [(dNosing[0]+dNosing[2])/2, dNosing[1]-28];

  //This is the dimension string for the headroom
  let dHeadroomStepX = headroomPts[6];
  let dHeadroomStepY = coordinates[coordinates.length-9];
  for (var p=0; p<coordinates.length; p+=2){
    if (dHeadroomStepX > coordinates[p+2] && dHeadroomStepX < coordinates[p-2]){
      dHeadroomStepY = coordinates[p+1];
    }
  }

  let dHeadroomDashed = [dHeadroomStepX, coordinates[coordinates.length-9], coordinates[coordinates.length-10], coordinates[coordinates.length-9]];
  let headroomBoolean = false;
  if (dHeadroomStepX < coordinates[coordinates.length-10]){
    headroomBoolean = true;
  }

  let dHeadroom = [dHeadroomStepX, headroomPts[7], dHeadroomStepX, dHeadroomStepY];
  let dHeadroomArrowTop = [dHeadroom[0]-arrowWidth, dHeadroom[1]+arrowWidth, dHeadroom[0], dHeadroom[1], dHeadroom[0]+arrowWidth, dHeadroom[1]+arrowWidth];
  let dHeadroomArrowBot = [dHeadroom[2]-arrowWidth, dHeadroom[3]-arrowWidth, dHeadroom[2], dHeadroom[3], dHeadroom[2]+arrowWidth, dHeadroom[3]-arrowWidth];
  let dHeadroomText = [dHeadroom[0], ((dHeadroom[1] + dHeadroom[3])/2)];
  let dHeadroomValue = (parseFloat(dHeadroomStepY) - parseFloat(dHeadroom[1])) / ratio;
  let dHeadroomFeet = Math.floor( ((dHeadroomStepY-dHeadroom[1]) / ratio) / 12 );
  let dHeadroomInches = Math.floor( ((dHeadroomStepY-dHeadroom[1]) / ratio) - (dHeadroomFeet * 12) );
  let dHeadroomFraction = Math.round( (((dHeadroomStepY-dHeadroom[1]) / ratio) - (dHeadroomFeet * 12)) - dHeadroomInches ) * 16;

  //This is the dimension string for the floor thickness
  let dFloor = [headroomPts[6], headroomPts[7], headroomPts[4], headroomPts[5]];
  let dFloorArrowTop = [dFloor[2]-arrowWidth, dFloor[3]+arrowWidth, dFloor[2], dFloor[3], dFloor[2]+arrowWidth, dFloor[3]+arrowWidth];
  let dFloorArrowBot= [dFloor[0]-arrowWidth, dFloor[1]-arrowWidth, dFloor[0], dFloor[1], dFloor[0]+arrowWidth, dFloor[1]-arrowWidth];
  let dFloorText = [dFloor[2], dFloor[3]];
  let dFloorDashedTop = [dFloor[2], dFloor[3], dFloor[2]+arrowOffset, dFloor[3]];
  let dFloorDashedBot = [dFloor[0], dFloor[1], dFloor[0]+arrowOffset, dFloor[1]];

  //This is the dimension string for the stair angle
  let dAngleStart = [coordinates[coordinates.length-12],coordinates[coordinates.length-11]];
  let dAngle = [dAngleStart[0], dAngleStart[1], dAngleStart[0] - (idealRun*ratio), dAngleStart[1], dAngleStart[0], dAngleStart[1]-(idealRise*ratio)];
  let dAngleText = [coordinates[coordinates.length-10]+(idealRun/2)*ratio, dAngle[1]];
  let stairAngle = (Math.atan((idealRise/idealRun)) * (180/Math.PI)).toFixed(2);
  if (stairAngle < 30 || count <= 3){
    dAngleText = [coordinates[coordinates.length-10]+(idealRun/2)*ratio + 10, dAngle[1]];
  }

  //Error message texts
  let errors = [];
  let ePosition = [80, 80];

  //Headroom errors
  let eHeadroomText = "";
  let eHeadroomColor = "#ff0000";
  if (dHeadroomValue < 84 && headroomTrue){
    eHeadroomColor = "#ff0000";
    eHeadroomText = "Low Headroom";
    errors.push(eHeadroomText);
  } else {
    eHeadroomColor = "#5541EA";
  }

  //Tread length errors
  let withNosing = false;
  if (idealRun === 10 && props.nosingin === 0){
    withNosing = true;
  }
  let eRunText = "";
  if ((idealRun) < 11 && withNosing) {
    eRunText = 'Stair run too short'
    errors.push(eRunText);
  }
  //Stair angle errors
  let eAngleText = "";
  let eAngleColor = "#5541EA";
  if (stairAngle > 42 || stairAngle < 30){
    eAngleText = "Angle must be between 30 and 42";
    eAngleColor = "#ff0000";
    errors.push(eAngleText);
  }


  //Compiled error messages 
  let eMessage = "";
  if (errors.length === 1){
    eMessage = errors[0];
  } else if (errors.length === 2){
    eMessage = errors[0] + " • " + errors[1];
  } else if (errors.length === 3){
    eMessage = errors[0] + " • " + errors[1] + " • " + errors[2];
  }


  return (
    <Stage width={windowWidth} height={window.innerHeight}>
        <Layer>
        {props.dimensions &&
          <Text 
            x={ePosition[0]}
            y={ePosition[1]}
            fontFamily="Söhne Mono Buch"
            fontSize={14}
            fill="#ff0000"
            text={eMessage}
            align="left"
          />
        }
          <Line
            x={move[0]}
            y={move[1]}
            points={coordinates}
            stroke="black"
            strokeWidth={1.5}
            lineCap='sqare'
            lineJoin='sqare'
            closed='true'
          />
          {headroomTrue &&
          <Line
            x={move[0]}
            y={move[1]}
            points={headroomPts}
            stroke="black"
            strokeWidth={1.5}
            lineCap='sqare'
            lineJoin='sqare'
            closed='true'
          />
          }
          {props.details &&
          <Rect
              x={topTread[0]}
              y={topTread[1]}
              width={treadLength + landing*ratio - riserThickness}
              height={treadThickness}
              fill="white"
              stroke="black"
              strokeWidth={1.5}
            />
          }
          {props.details &&
          [...Array(count-1)].map((_, i) => (
            <Rect
              key={i}
              x={treadsX2[i]}
              y={treadsY2[i]}
              width={treadLength}
              height={treadThickness}
              fill="white"
              stroke="black"
              strokeWidth={1.5}
            />
          ))
          }
          {props.details &&
          [...Array(count)].map((_, i) => (
            <Rect
              key={i}
              x={treadsW[i]}
              y={risersY[i]}
              width={riserThickness}
              height={riserHeight}
              fill="white"
              stroke="black"
              strokeWidth={1.5}
            />
          ))
          }
        </Layer>
        <Layer> 
        {props.dimensions &&
          <React.Fragment>
            <Line
              x={move[0]}
              y={move[1]}
              points={dRise}
              stroke="#5541EA"
              strokeWidth={0.75}
              lineCap='round'
              lineJoin='round'
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dRiseArrowTop}
              stroke="#5541EA"
              strokeWidth={0.75}
              lineCap='round'
              lineJoin='round'
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dRiseArrowBot}
              stroke="#5541EA"
              strokeWidth={0.75}
              lineCap='round'
              lineJoin='round'
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dRiseDashedTop}
              stroke="black"
              strokeWidth={0.75}
              lineCap='sqare'
              lineJoin='sqare'
              dash={[3, 4]}
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dRiseDashedBot}
              stroke="black"
              strokeWidth={0.75}
              lineCap='sqare'
              lineJoin='sqare'
              dash={[3, 4]}
            />
            <Text 
              width={150}
              x={move[0] + dRiseText[0] - textNumOffset}
              y={move[1] + dRiseText[1] - 75}
              fontFamily="Söhne Mono Buch"
              fontSize={12}
              fill="#5541EA"
              text="Total Rise"
              rotation={90}
              align="center"
            />
            <Text 
              width={150}
              x={move[0] + dRiseText[0] - textLineOffset}
              y={move[1] + dRiseText[1] - 75}
              fontFamily="Söhne Mono Buch"
              fontSize={12}
              fill="#5541EA"
              text={dRiseFeet + "' " + dRiseInches + '" ' + dRiseFraction + "/16"}
              rotation={90}
              align="center"
            />
          </React.Fragment>
        }
        {props.dimensions &&
          <React.Fragment>
            <Line
              x={move[0]}
              y={move[1]}
              points={dRun}
              stroke="#5541EA"
              strokeWidth={0.75}
              lineCap='round'
              lineJoin='round'
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dRunArrowLeft}
              stroke="#5541EA"
              strokeWidth={0.75}
              lineCap='round'
              lineJoin='round'
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dRunArrowRight}
              stroke="#5541EA"
              strokeWidth={0.75}
              lineCap='round'
              lineJoin='round'
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dRunDashedLeft}
              stroke="black"
              strokeWidth={0.75}
              lineCap='sqare'
              lineJoin='sqare'
              dash={[3, 4]}
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dRunDashedRight}
              stroke="black"
              strokeWidth={0.75}
              lineCap='sqare'
              lineJoin='sqare'
              dash={[3, 4]}
            />
            <Text 
              width={150}
              x={move[0] + dRunText[0] - 75}
              y={move[1] + dRunText[1] + textNumOffset}
              fontFamily="Söhne Mono Buch"
              fontSize={12}
              fill="#5541EA"
              text="Total Run"
              align="center"
            />
            <Text 
              width={150}
              x={move[0] + dRunText[0] - 75}
              y={move[1] + dRunText[1] + textLineOffset}
              fontFamily="Söhne Mono Buch"
              fontSize={12}
              fill="#5541EA"
              text={dRunFeet + "' " + dRunInches + '" ' + dRunFraction + "/16"}
              align="center"
            />
          </React.Fragment>
        }
        {props.dimensions &&
          props.details &&
          <React.Fragment>
            <Line
              x={move[0]}
              y={move[1]}
              points={dNosingDashedLeft}
              stroke="black"
              strokeWidth={0.75}
              lineCap='sqare'
              lineJoin='sqare'
              dash={[3, 4]}
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dNosingDashedRight}
              stroke="black"
              strokeWidth={0.75}
              lineCap='sqare'
              lineJoin='sqare'
              dash={[3, 4]}
            />
            <Text 
              width={150}
              x={move[0] + dNosingText[0] - 75}
              y={move[1] + dNosingText[1] - 12 - textLineOffset}
              fontFamily="Söhne Mono Buch"
              fontSize={12}
              fill="#5541EA"
              text="Nosing"
              align="center"
            />
            <Text 
              width={150}
              x={move[0] + dNosingText[0] - 75}
              y={move[1] + dNosingText[1] - 12 - textNumOffset}
              fontFamily="Söhne Mono Buch"
              fontSize={12}
              fill="#5541EA"
              text={props.nosingin + '" ' + (props.nosingfr*16) + "/16"}
              align="center"
            />
          </React.Fragment>
        }
        {props.dimensions &&
          headroomTrue &&
          <React.Fragment>
            <Line
              x={move[0]}
              y={move[1]}
              points={dFloorDashedTop}
              stroke="black"
              strokeWidth={0.75}
              lineCap='sqare'
              lineJoin='sqare'
              dash={[3, 4]}
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dFloorDashedBot}
              stroke="black"
              strokeWidth={0.75}
              lineCap='sqare'
              lineJoin='sqare'
              dash={[3, 4]}
            />
            <Line
              x={move[0]+arrowOffset}
              y={move[1]}
              points={dFloorArrowTop}
              stroke="#5541EA"
              strokeWidth={0.75}
              lineCap='round'
              lineJoin='round'
            />
            <Line
              x={move[0]+arrowOffset}
              y={move[1]}
              points={dFloorArrowBot}
              stroke="#5541EA"
              strokeWidth={0.75}
              lineCap='round'
              lineJoin='round'
            />
            <Line
              x={move[0]+arrowOffset}
              y={move[1]}
              points={dFloor}
              stroke="#5541EA"
              strokeWidth={0.75}
              lineCap='round'
              lineJoin='round'
            />
            <Text 
              width={150}
              x={move[0] + (arrowOffset/2) + dFloor[2]+arrowOffset}
              y={move[1] + dFloorText[1]}
              fontFamily="Söhne Mono Buch"
              fontSize={12}
              fill="#5541EA"
              text="Floor thickness"
              align="left"
            />
            <Text 
              width={150}
              x={move[0] + (arrowOffset/2) + dFloor[2]+arrowOffset}
              y={move[1] + dFloorText[1] + 15}
              fontFamily="Söhne Mono Buch"
              fontSize={12}
              fill="#5541EA"
              text={(props.floorft/12) + "' " + props.floorin + '" ' + (props.floorfr*16) + "/16"}
              align="left"
            />
          </React.Fragment>
        }
        {props.dimensions &&
          <React.Fragment>
            <Text 
              width={100}
              x={move[0] + dAngleText[0] + 14}
              y={move[1] + dAngleText[1] - 14}
              fontFamily="Söhne Mono Buch"
              fontSize={12}
              fill={eAngleColor}
              text={stairAngle + '°'}
              align="left"
            />
          </React.Fragment>
        }
        {props.dimensions &&
          headroomTrue &&
          <React.Fragment>
            <Line
              x={move[0]}
              y={move[1]}
              points={dHeadroom}
              stroke={eHeadroomColor}
              strokeWidth={0.75}
              lineCap='round'
              lineJoin='round'
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dHeadroomArrowTop}
              stroke={eHeadroomColor}
              strokeWidth={0.75}
              lineCap='round'
              lineJoin='round'
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dHeadroomArrowBot}
              stroke={eHeadroomColor}
              strokeWidth={0.75}
              lineCap='round'
              lineJoin='round'
            />
            <Text 
              width={100}
              x={move[0] + dHeadroomText[0] - textLineOffset}
              y={move[1] + dHeadroomText[1] - 50}
              fontFamily="Söhne Mono Buch"
              fontSize={12}
              fill={eHeadroomColor}
              text={dHeadroomFeet + "' " + dHeadroomInches + '" ' + dHeadroomFraction + "/16"}
              align="center"
              rotation={90}
            />
            <Text 
              width={150}
              x={move[0] + dHeadroomText[0] - textNumOffset}
              y={move[1] + dHeadroomText[1] - 75}
              fontFamily="Söhne Mono Buch"
              fontSize={12}
              fill={eHeadroomColor}
              text="Headroom height"
              align="center"
              rotation={90}
            />
          </React.Fragment>
        }
        {props.dimensions &&
          headroomTrue &&
          headroomBoolean &&
          <Line
            x={move[0]}
            y={move[1]}
            points={dHeadroomDashed}
            stroke="black"
            strokeWidth={0.75}
            lineCap='sqare'
            lineJoin='sqare'
            dash={[3, 4]}
          />
        }
        {props.dimensions &&
          stringerTrue &&
          <React.Fragment>
            <Line
              x={move[0]}
              y={move[1]}
              points={dStringer}
              stroke="#5541EA"
              strokeWidth={0.75}
              lineCap='round'
              lineJoin='round'
            />
            <Text 
              width={150}
              x={move[0] + dStringer[2]}
              y={move[1] + dStringer[3]}
              fontFamily="Söhne Mono Buch"
              fontSize={12}
              fill="#5541EA"
              text="Stringer width"
              align="left"
            />
            <Text 
              width={150}
              x={move[0] + dStringer[2]}
              y={move[1] + dStringer[3] + 15}
              fontFamily="Söhne Mono Buch"
              fontSize={12}
              fill="#5541EA"
              text={props.stringerin + '" ' + Math.round(props.stringerfr*16) + '/16'}
              align="left"
            />
          </React.Fragment>
        }
        </Layer>
      </Stage>
  )
}

export default Stair
import React from "react";
import { Stage, Layer, Line, Rect, Text } from "react-konva";
import "../Styles/fonts.css";

const Stair = props => {

  const smMax = window.matchMedia("(max-width: 540px)");
  const smMin = window.matchMedia("(min-width: 540px)");

  const mdMax = window.matchMedia("(max-width: 720px)");
  const mdMin = window.matchMedia("(min-width: 720px)");

  const lgMax = window.matchMedia("(max-width: 960px)");
  const lgMin = window.matchMedia("(min-width: 960px)");

  const xlMax = window.matchMedia("(max-width: 1140px)");
  const xlMin = window.matchMedia("(min-width: 1140px)");

  
  let totalRun =
    props.units ? (
      parseInt(props.totalRunft) === 12 ? (
        parseInt(props.totalRunin) === 11 ? (
          23
        ):
        (
          22
        )
      ):
      (
        parseInt(props.totalRunft) +
        parseInt(props.totalRunin) +
        parseFloat(props.totalRunfr)
      )
    ):
    (
      parseFloat(props.totalRunmm) >= 558.8 && parseFloat(props.totalRunmm) <= 4875.2125 ? (
        parseFloat(props.totalRunmm) / 25.4
      ):
      (
        3658 / 25.4
      )
    )

  let totalRise =
    props.units ? (
      parseInt(props.totalRiseft) === 0 ? (
        11 + (parseFloat(props.totalRisefr) / 16)
      ):
      (
        parseInt(props.totalRiseft) +
        parseInt(props.totalRisein) +
        parseFloat(props.totalRisefr)
      )
    ):
    (
      parseFloat(props.totalRisemm) >= 279.4 && parseFloat(props.totalRisemm) <= 3351.2125 ? (
        parseFloat(props.totalRisemm) / 25.4
      ):
      (
        2743 / 25.4
      )
    )

  let idealRun = 
    props.units ? (
      parseFloat(props.idealRunin) + parseFloat(props.idealRunfr)
    ):
    (
      parseFloat(props.idealRunmm) >= 254 && parseFloat(props.idealRunmm) <=  288.9375 ? (
        parseFloat(props.idealRunmm) / 25.4
      ):
      (
        279.4 / 25.4
      )
    )

  let idealRise = 
    props.units ? (
      parseFloat(props.idealRisein) + parseFloat(props.idealRisefr)
    ):
    (
      parseFloat(props.idealRisemm) >= 101.6 && parseFloat(props.idealRisemm) <= 196.85 ? (
        parseFloat(props.idealRisemm) / 25.4
      ):
      (
        177.8 / 25.4
      )
    )

  let preTreadThickness = 
    props.units ? (
      props.details ? (
        parseFloat(props.treadin) + parseFloat(props.treadfr) 
      ):
      ( 
        0
      )
    ):
    (
      props.details ? (
        (parseFloat(props.treadmm) / 25.4)
      ):
      ( 
        0
      )
    )

  let preRiserThickness = 
    props.units ? (
      props.details ? (
        parseFloat(props.riserin) + parseFloat(props.riserfr) 
      ):
      (
        0
      )
    ):
    (
      props.details ? (
        (parseFloat(props.risermm) / 25.4)
      ):
      (
        0
      )
    )

  if (parseFloat(props.treadmm) >= 0 && parseFloat(props.treadmm) <= 49.2125){
    preTreadThickness = parseFloat(props.treadmm) / 25.4;
  } else {
    preTreadThickness = 1;
  }
  
  if (parseFloat(props.risermm) >= 0 && parseFloat(props.risermm) <= 49.2125){
    preRiserThickness = parseFloat(props.risermm) / 25.4;
  } else {
    preRiserThickness = 1;
  }

  let count = 0;

  if (props.totalBoolean === true) {
    count = parseInt(totalRun / idealRun);
  } else if (props.totalBoolean === false) {
    count = parseInt(totalRise / idealRise);
  }

  let landing = 36;
  let lengthH = 
    props.units ? (
      parseFloat(props.headroomLength)
    ):
    (
      (parseFloat(props.headroomLength) / 25.4)
    )

  let stringerTotal = 
    props.units ? (
      parseFloat(props.stringerin) + parseFloat(props.stringerfr)
    ):
    (
      (parseFloat(props.stringermm) / 25.4)
    )

  if (parseFloat(props.stringermm) >= (5 * 25.4) && parseFloat(props.stringermm) <= ((11 + (0.0625 * 15)) * 25.4)){
    stringerTotal = (parseFloat(props.stringermm) / 25.4);
  } else {
    stringerTotal = (5 + (0.0625 * 15));
  }
  
  let treadTotal =
    props.units ? (
      parseFloat(props.treadin) + parseFloat(props.treadfr)
    ):
    (
      (parseFloat(props.treadmm) / 25.4)
    )

  if (parseFloat(props.treadmm) >= 0 && parseFloat(props.treadmm) <= 49.2125){
    treadTotal = parseFloat(props.treadmm) / 25.4;
  } else {
    treadTotal = 1;
  }
  
  let riserTotal =
    props.units ? (
      parseFloat(props.riserin) + parseFloat(props.riserfr)
    ):
    (
      (parseFloat(props.risermm) / 25.4)
    )
  
  if (parseFloat(props.risermm) >= 0 && parseFloat(props.risermm) <= 49.2125){
    riserTotal = parseFloat(props.risermm) / 25.4;
  } else {
    riserTotal = 1;
  }

  let nosingTotal =
    props.units ? (
      parseFloat(props.nosingin) + parseFloat(props.nosingfr)
    ):
    (
      (parseFloat(props.nosingmm) / 25.4)
    )

  if (parseFloat(props.nosingmm) >= 0 && parseFloat(props.nosingmm) <= 12.7){
    nosingTotal = parseFloat(props.nosingmm) / 25.4;
  } else {
    nosingTotal = 0.5
  }

  let stringerA =
    stringerTotal / 
    Math.sin(Math.atan(idealRun / idealRise));

  let stringerB =
    stringerTotal / 
    Math.sin(Math.atan(idealRise / idealRun));

  if (props.details) {
    stringerA =
      stringerTotal /
      Math.sin(
        Math.atan(
          (idealRun - preRiserThickness) / (idealRise - preTreadThickness)
        )
      );
    stringerB =
      stringerTotal /
      Math.sin(
        Math.atan(
          (idealRise - preTreadThickness) / (idealRun - preRiserThickness)
        )
      );
  } else {
    stringerA =
      stringerTotal /
      Math.sin(Math.atan(idealRun / idealRise));
    stringerB =
      stringerTotal /
      Math.sin(Math.atan(idealRise / idealRun));
  }

  let coordinates = [];

  let floorThickness = 
    props.units ? (
      parseInt(props.floorft) === 0 ? (
        parseInt(props.floorin) < 6 ? (
          6
        ):
        (
          props.floorin
        )
      ):
      (
        parseFloat(props.floorft) +
        parseFloat(props.floorin) +
        parseFloat(props.floorfr)
      )
    ):
    (
      parseFloat(props.floormm) / 25.4
    )

  if (parseFloat(props.floormm) >= 152.4 && parseFloat(props.floormm) <= 608.0125){
    floorThickness = parseFloat(props.floormm) / 25.4;
  } else {
    floorThickness = 177.8 / 25.4;
  }

  let preStairAngle = props.stairAngle >=25 && props.stairAngle <= 45 ? props.stairAngle : 32.5;

  //This creates the stair drawing based on whether total rise or run is being selected
  if (props.totalBoolean === true) {
    //If total run is selected (need to change so that total run changes ideal run)
    if (props.idealBoolean === true) {
      //If ideal is selected
      if (props.stairToggle === true) {
        idealRun = parseFloat(
          idealRise / Math.tan(preStairAngle * (Math.PI / 180))
        );
        stringerA =
          stringerTotal /
          Math.sin(Math.atan(idealRun / idealRise));
        stringerB =
        stringerTotal /
          Math.sin(Math.atan(idealRise / idealRun));
        if (props.details) {
          stringerA =
          stringerTotal /
            Math.sin(
              Math.atan(
                (idealRun - preRiserThickness) / (idealRise - preTreadThickness)
              )
            );
          stringerB =
          stringerTotal /
            Math.sin(
              Math.atan(
                (idealRise - preTreadThickness) / (idealRun - preRiserThickness)
              )
            );
        } else {
          stringerA =
          stringerTotal /
            Math.sin(Math.atan(idealRun / idealRise));
          stringerB =
          stringerTotal /
            Math.sin(Math.atan(idealRise / idealRun));
        }
      }

      for (let i = 0; i < count; i++) {
        coordinates.push(
          totalRun - idealRun * i,
          idealRise * i,
          totalRun - idealRun * (i + 1),
          idealRise * i,
          totalRun - idealRun * (i + 1),
          idealRise * (i + 1)
        );
      }

      //This creates the landing and stringer
      props.topStair ? (
        coordinates.push(
            coordinates[coordinates.length - 2] + (stringerB + preRiserThickness),
            coordinates[coordinates.length - 1],
            coordinates[0],
            stringerA + preTreadThickness,
            coordinates[0],
            floorThickness,
            coordinates[0] + landing,
            floorThickness,
            coordinates[0] + landing,
            0
          )
      ):
      (
        coordinates.push(
          coordinates[coordinates.length - 2] + (stringerB + preRiserThickness),
          coordinates[coordinates.length - 1],
          coordinates[2],
          coordinates[5] + stringerA + preTreadThickness,
          coordinates[2],
          floorThickness,
          coordinates[2] + landing,
          floorThickness,
          coordinates[2] + landing,
          0
        )
      )
  

    } else {
      count = Math.round(totalRun / 11);
      idealRun = totalRun / count;
      if (props.stairToggle === true) {
        idealRun = parseFloat(
          idealRise / Math.tan(preStairAngle * (Math.PI / 180))
        );
        stringerA =
          stringerTotal /
          Math.sin(Math.atan(idealRun / idealRise));
        stringerB =
          stringerTotal /
          Math.sin(Math.atan(idealRise / idealRun));
        if (props.details) {
          stringerA =
            stringerTotal /
            Math.sin(
              Math.atan(
                (idealRun - preRiserThickness) / (idealRise - preTreadThickness)
              )
            );
          stringerB =
            stringerTotal /
            Math.sin(
              Math.atan(
                (idealRise - preTreadThickness) / (idealRun - preRiserThickness)
              )
            );
        } else {
          stringerA =
            stringerTotal /
            Math.sin(Math.atan(idealRun / idealRise));
          stringerB =
            stringerTotal /
            Math.sin(Math.atan(idealRise / idealRun));
        }
      }

      for (let i = 0; i < count; i++) {
        coordinates.push(
          totalRun - idealRun * i,
          idealRise * i,
          totalRun - idealRun * (i + 1),
          idealRise * i,
          totalRun - idealRun * (i + 1),
          idealRise * (i + 1)
        );
      }

      //This creates the landing and stringer
      props.topStair ? (
        coordinates.push(
            coordinates[coordinates.length - 2] + (stringerB + preRiserThickness),
            coordinates[coordinates.length - 1],
            coordinates[0],
            stringerA + preTreadThickness,
            coordinates[0],
            floorThickness,
            coordinates[0] + landing,
            floorThickness,
            coordinates[0] + landing,
            0
          )
      ):
      (
        coordinates.push(
          coordinates[coordinates.length - 2] + (stringerB + preRiserThickness),
          coordinates[coordinates.length - 1],
          coordinates[2],
          coordinates[5] + stringerA + preTreadThickness,
          coordinates[2],
          floorThickness,
          coordinates[2] + landing,
          floorThickness,
          coordinates[2] + landing,
          0
        )
      )
        

    }
  } else if (props.totalBoolean === false) {
    //If total rise is selected (need to change so that total rise changes ideal rise)
    if (props.idealBoolean === true) {
      if (props.stairToggle === true) {
        idealRun = parseFloat(
          idealRise / Math.tan(preStairAngle * (Math.PI / 180))
        );
        stringerA =
          stringerTotal /
          Math.sin(Math.atan(idealRun / idealRise));
        stringerB =
          stringerTotal /
          Math.sin(Math.atan(idealRise / idealRun));
        if (props.details) {
          stringerA =
            stringerTotal /
            Math.sin(
              Math.atan(
                (idealRun - preRiserThickness) / (idealRise - preTreadThickness)
              )
            );
          stringerB =
            stringerTotal /
            Math.sin(
              Math.atan(
                (idealRise - preTreadThickness) / (idealRun - preRiserThickness)
              )
            );
        } else {
          stringerA =
            stringerTotal /
            Math.sin(Math.atan(idealRun / idealRise));
          stringerB =
            stringerTotal /
            Math.sin(Math.atan(idealRise / idealRun));
        }
      }

      for (let i = 0; i < count; i++) {
        coordinates.push(
          totalRise - idealRun * i,
          idealRise * i,
          totalRise - idealRun * (i + 1),
          idealRise * i,
          totalRise - idealRun * (i + 1),
          idealRise * (i + 1)
        );
      }

      //This creates the landing and stringer
      props.topStair ? (
        coordinates.push(
            coordinates[coordinates.length - 2] + (stringerB + preRiserThickness),
            coordinates[coordinates.length - 1],
            coordinates[0],
            stringerA + preTreadThickness,
            coordinates[0],
            floorThickness,
            coordinates[0] + landing,
            floorThickness,
            coordinates[0] + landing,
            0
          )
      ):
      (
        coordinates.push(
          coordinates[coordinates.length - 2] + (stringerB + preRiserThickness),
          coordinates[coordinates.length - 1],
          coordinates[2],
          coordinates[5] + stringerA + preTreadThickness,
          coordinates[2],
          floorThickness,
          coordinates[2] + landing,
          floorThickness,
          coordinates[2] + landing,
          0
        )
      )
        

    } else {
      count = 
        props.totalRise === 8 ? (
          Math.round(totalRise / 4)
        ):
        (
          Math.round(totalRise / 7)
        )
      idealRise = totalRise / count;
      if (props.stairToggle === true) {
        idealRun = parseFloat(
          idealRise / Math.tan(preStairAngle * (Math.PI / 180))
        );
        stringerA =
          stringerTotal /
          Math.sin(Math.atan(idealRun / idealRise));
        stringerB =
          stringerTotal /
          Math.sin(Math.atan(idealRise / idealRun));
        if (props.details) {
          stringerA =
            stringerTotal /
            Math.sin(
              Math.atan(
                (idealRun - preRiserThickness) / (idealRise - preTreadThickness)
              )
            );
          stringerB =
            stringerTotal /
            Math.sin(
              Math.atan(
                (idealRise - preTreadThickness) / (idealRun - preRiserThickness)
              )
            );
        } else {
          stringerA =
            stringerTotal /
            Math.sin(Math.atan(idealRun / idealRise));
          stringerB =
            stringerTotal /
            Math.sin(Math.atan(idealRise / idealRun));
        }
      }

      for (let i = 0; i < count; i++) {
        coordinates.push(
          totalRise - idealRun * i,
          idealRise * i,
          totalRise - idealRun * (i + 1),
          idealRise * i,
          totalRise - idealRun * (i + 1),
          idealRise * (i + 1)
        );
      }

      //This creates the landing and stringer
      props.topStair ? (
        coordinates.push(
            coordinates[coordinates.length - 2] + (stringerB + preRiserThickness),
            coordinates[coordinates.length - 1],
            coordinates[0],
            stringerA + preTreadThickness,
            coordinates[0],
            floorThickness,
            coordinates[0] + landing,
            floorThickness,
            coordinates[0] + landing,
            0
          )
      ):
      (
        coordinates.push(
          coordinates[coordinates.length - 2] + (stringerB + preRiserThickness),
          coordinates[coordinates.length - 1],
          coordinates[2],
          coordinates[5] + stringerA + preTreadThickness,
          coordinates[2],
          floorThickness,
          coordinates[2] + landing,
          floorThickness,
          coordinates[2] + landing,
          0
        )
      )

    }
  }

  //This is for the headroom part
  let headroomPts = [
    coordinates[coordinates.length - 12] - idealRun * 3,
    floorThickness,
    coordinates[coordinates.length - 12] - idealRun * 3,
    0,
    coordinates[coordinates.length - 12] - idealRun + lengthH,
    0,
    coordinates[coordinates.length - 12] - idealRun + lengthH,
    floorThickness
  ];
  //This part removes the headroom if the stair is too short
  let headroomTrue = true;
  if (
    totalRise < 84 ||
    idealRise * count < 84 ||
    totalRun < 84 ||
    idealRun * count < 84
  ) {
    headroomTrue = false;
  }

  //This is the scale factor for the stair drawing
  let windowWidth = 
    lgMin.matches 
      ? (window.innerWidth * 0.82 - 15)
      : (window.innerWidth);
  let windowHeight = 
    lgMin.matches
      ? (window.innerHeight)
      : (window.innerHeight * 0.6);
  let stairLength = (headroomPts[0] + landing + coordinates[0]);
  let wr = windowWidth / (Math.abs(headroomPts[0]) + landing + coordinates[0]);
  let ratio = lgMin.matches ? wr * 0.75 : wr* 0.8;

  //This transforms the drawing based on the scale factor
  for (var m = 0; m < coordinates.length; m++) {
    coordinates[m] = coordinates[m] * ratio;
  }
  for (var n = 0; n < headroomPts.length; n++) {
    headroomPts[n] = headroomPts[n] * ratio;
  }
  if (props.topStair === false){
    coordinates = coordinates.slice(4, coordinates.length - 4);
  }

  //This moves the drawing to the center
  let moveCenter = (windowWidth / 2) - (stairLength * ratio) / 2;
  let move = lgMin.matches ? [moveCenter, 150] : [moveCenter - 30, 100];

  //Treads, risers, and nosing dimensions
  let treadThickness =
    ratio * treadTotal;
  let riserThickness =
    ratio * riserTotal;
  let nosing =
    ratio * nosingTotal;

  let treadLength = idealRun * ratio + nosing + riserThickness;
  let riserHeight = idealRise * ratio - treadThickness;

  //Coordinates for treads, risers, and nosing
  let treadsX = [];
  if (props.topStair){
    for (let k = 2; k < coordinates.length; k += 6) {
      treadsX.push(move[0] + coordinates[k] - nosing);
    }
  } else {
    for (let k = 6; k < coordinates.length; k += 6) {
      treadsX.push(move[0] + coordinates[k] - nosing);
    }
  }
  let treadsY = [];
  let risersY = [];
  for (let j = 3; j < coordinates.length; j += 6) {
    treadsY.push(move[1] + coordinates[j]);
    risersY.push(move[1] + coordinates[j] + treadThickness);
  }
  let treadsW = [];
  for (let h = 0; h < treadsX.length; h++) {
    treadsW.push(treadsX[h] + nosing);
  }

  //Coordinates for all treads minus the top one
  let treadsX2 = [];
  for (let r = 1; r < treadsX.length; r++) {
    treadsX2.push(treadsX[r]);
  }
  let treadsY2 = [];
  for (let t = 1; t < treadsY.length; t++) {
    treadsY2.push(treadsY[t]);
  }

  let detailCount = props.topStair ? count : count - 1;

  //Coordinates and dimensions for the top tread
  let topTread = [treadsX[0], treadsY[0]];

  //This is for the line between the top stair and landing
  let topStairLine = [coordinates[0], coordinates[1], coordinates[0], coordinates[5]];

  //This is the landing when the top stair is toggled off
  let topStairLanding = [coordinates[2], coordinates[3]];

  //Dimension strings
  //These are the settings for arrows, text, and stroke width
  let arrowWidth = lgMin.matches ? (10 / 2) : (10 / 4);
  let arrowOffset = lgMin.matches ? 40 : 20;
  let textLineOffset = lgMin.matches ? 25 : 12.5;
  let textNumOffset = lgMin.matches ? 10 : 5;
  let textSize = lgMin.matches ? 12 : 6;
  let strokeWidth = lgMin.matches ? 1.5 : 0.75;
  let strokeDash = lgMin.matches ? [3, 4] : [1, 2];



  //This is the dimension string for the total rise
  let dRise = 
    props.topStair ? (
      [
        coordinates[coordinates.length - 2] + arrowOffset,
        0,
        coordinates[coordinates.length - 2] + arrowOffset,
        coordinates[coordinates.length - 9]
      ]
    ):
    (
      [
        coordinates[2] + landing*ratio + arrowOffset,
        0,
        coordinates[2] + landing*ratio + arrowOffset,
        coordinates[coordinates.length - 5]
      ]
    )

  let dRiseArrowTop = [
    dRise[0] - arrowWidth,
    dRise[1] + arrowWidth,
    dRise[0],
    dRise[1],
    dRise[0] + arrowWidth,
    dRise[1] + arrowWidth
  ];
  let dRiseArrowBot = [
    dRise[2] - arrowWidth,
    dRise[3] - arrowWidth,
    dRise[2],
    dRise[3],
    dRise[2] + arrowWidth,
    dRise[3] - arrowWidth
  ];
  let dRiseText = [dRise[0], (dRise[1] + dRise[3]) / 2];
  let dRiseDashedTop = [
    coordinates[coordinates.length - 2],
    dRise[1],
    dRise[0],
    dRise[1]
  ];
  let dRiseDashedBot = [
    coordinates[coordinates.length - 10],
    dRise[3],
    dRise[0],
    dRise[3]
  ];

  let dRiseFeet = 
	props.topStair ? (
		Math.floor(
	    (coordinates[coordinates.length - 11] - coordinates[1]) / ratio / 12
	  )
	):
	(
		Math.floor(
	    (coordinates[coordinates.length - 7] - coordinates[1] + (coordinates[7]-coordinates[3])) / ratio / 12
	  )
  )
  
  let dRiseInches = 
	props.topStair ? (
		Math.floor(
		  (coordinates[coordinates.length - 11] - coordinates[1]) / ratio -
	    dRiseFeet * 12
		)
	):
	(
		Math.floor(
		  (coordinates[coordinates.length - 7] - coordinates[1] + (coordinates[7]-coordinates[3])) / ratio -
	    dRiseFeet * 12
		)
  )
  
  let dRiseFraction = 
	props.topStair ? (
		Math.round(
		  ((coordinates[coordinates.length - 11] - coordinates[1]) / ratio -
		    dRiseFeet * 12 -
		    dRiseInches) *
		    16
		)
	):
	(
		Math.round(
		  ((coordinates[coordinates.length - 7] - coordinates[1] + (coordinates[7]-coordinates[3])) / ratio -
		    dRiseFeet * 12 -
		    dRiseInches) *
		    16
		)
  )

  //These are for the weird dimension string bugs
  if (dRiseFraction === 16){
  
    dRiseInches += 1;
    dRiseFraction = 0;

    if (dRiseInches === 12){
      dRiseFeet += 1;
      dRiseInches = 0;
    } else if (dRiseInches === 11){
      dRiseFeet += 1;
      dRiseInches = 0;
      dRiseFraction = 0;
    }

  }

  let dRiseMM = 
	props.topStair ? (
		Math.abs(Math.round(((coordinates[coordinates.length - 11] - coordinates[1]) * 25.4) / ratio)) 
	):
	(
		Math.abs(Math.round(((coordinates[coordinates.length - 7] - coordinates[1] + (coordinates[7]-coordinates[3])) * 25.4) / ratio)) 
	)
  
  let dRiseValue = 
    props.units ? (
      dRiseFeet + "' " + dRiseInches + '" ' + dRiseFraction + "/16"
    ):
    (
      dRiseMM + " MM"
    )

  //This is the dimension string for the total run
  let dRun = 
    props.topStair ? (
      [
        coordinates[coordinates.length - 12],
        coordinates[coordinates.length - 11] + arrowOffset,
        coordinates[0],
        coordinates[coordinates.length - 11] + arrowOffset
      ]
    ):
    (
      [
        coordinates[coordinates.length - 8],
        coordinates[coordinates.length - 7] + arrowOffset,
        coordinates[0],
        coordinates[coordinates.length - 7] + arrowOffset
      ]
    )

  let dRunArrowLeft = [
    dRun[0] + arrowWidth,
    dRun[1] - arrowWidth,
    dRun[0],
    dRun[1],
    dRun[0] + arrowWidth,
    dRun[1] + arrowWidth
  ];
  let dRunArrowRight = [
    dRun[2] - arrowWidth,
    dRun[3] - arrowWidth,
    dRun[2],
    dRun[3],
    dRun[2] - arrowWidth,
    dRun[3] + arrowWidth
  ];
  let dRunText = [(dRun[0] + dRun[2]) / 2, dRun[1]];
  let dRunDashedLeft = [dRun[0], dRun[1], dRun[0], dRun[1] - arrowOffset];
  let dRunDashedRight = [dRun[2], dRun[3], dRun[2], coordinates[5]];

  let dRunFeet = 
    props.topStair ? (
      Math.floor(
        (coordinates[0] - coordinates[coordinates.length - 12]) / ratio / 12
      )
    ):
    (
      Math.floor(
        (coordinates[0] - coordinates[coordinates.length - 8]) / ratio / 12
      )
    )

    let dRunInches = 
    props.topStair ? (
      Math.floor(
        (coordinates[0] - coordinates[coordinates.length - 12]) / ratio -
        dRunFeet * 12
      )
    ):
    (
      Math.floor(
        (coordinates[0] - coordinates[coordinates.length - 8]) / ratio -
        dRunFeet * 12
      )
    )

  let dRunFraction = 
	props.topStair ? (
		Math.round(
		  ((coordinates[0] - coordinates[coordinates.length - 12]) / ratio -
		    dRunFeet * 12 -
		    dRunInches) *
		    16
		)
	):
	(
		Math.round(
		  ((coordinates[0] - coordinates[coordinates.length - 8]) / ratio -
		    dRunFeet * 12 -
		    dRunInches) *
		    16
		)
  )

  //These are for the weird dimension string bugs
  if (dRunFraction === 16){
  
    dRunInches += 1;
    dRunFraction = 0;

    if (dRunInches === 12){
      dRunFeet += 1;
      dRunInches = 0;
    } else if (dRunInches === 11){
      dRunFeet += 1;
      dRunInches = 0;
      dRunFraction = 0;
    }

  }
  
  let dRunMM = 
    props.topStair ? (
      Math.abs(Math.round(
        ((coordinates[0] - coordinates[coordinates.length - 12]) * 25.4) / ratio))
    ):
    (
      Math.abs(Math.round(
        ((coordinates[0] - coordinates[coordinates.length - 8]) * 25.4 / ratio)))
    )

  let dRunValue =
    props.units ? (
      dRunFeet + "' " + dRunInches + '" ' + dRunFraction + "/16"
    ):
    (
      dRunMM + " MM"
    )

  //This is the dimension string for the stringer
  let sZ =
    (parseFloat(props.stringerin) + parseFloat(props.stringerfr)) * ratio;
  let sA = stringerA * ratio;
  let sAlpha = Math.atan(idealRise / idealRun);
  let sC = Math.sqrt(sA * sA - sZ * sZ);

  let sX = props.details ? (coordinates[10] + riserThickness) : (coordinates[10]);
  let sY = props.details ? (coordinates[11] + treadThickness) : (coordinates[11]);

  if (count <= 3) {
    sX = coordinates[4] + riserThickness;
    sY = coordinates[5] + treadThickness;
  }

  if (props.topStair === false){
    sY += (idealRise * ratio);
  }

  let stringerTrue = count > 2;

  let sX1 = sX + sC * Math.cos(sAlpha);
  let sY1 = sY + sA - sC * Math.sin(sAlpha);
  let dStringer = [sX, sY, sX1 + sZ / 2, sY1 + sA / 2];
  let dStringerValue = 
    props.units ? (
      props.stringerin + '" ' + Math.round(props.stringerfr * 16) + "/16"
    ):
    (
      Math.round(stringerTotal * 25.4) + " MM"
    )

  //This is the dimension string for the nosing
  let dNosing = 
    props.topStair ? (
      [coordinates[2], 0, coordinates[2] - nosing, 0] 
    ):
    ( 
      [coordinates[4], idealRise*ratio, coordinates[4] - nosing, idealRise*ratio]
    )
  let dNosingDashedLeft = [
    dNosing[0],
    dNosing[1],
    dNosing[0],
    dNosing[1] - arrowOffset
  ];
  let dNosingDashedRight = [
    dNosing[2],
    dNosing[1],
    dNosing[2],
    dNosing[1] - arrowOffset
  ];
  let dNosingText = [(dNosing[0] + dNosing[2]) / 2, dNosing[1] - (textSize * 2.5)];
  let dNosingValue = 
    props.units ? (
      props.nosingin + '" ' + props.nosingfr * 16 + "/16"
    ):
    (
      Math.round(nosingTotal * 25.4) + " MM"
    )

  //This is the dimension string for the headroom
  let dHeadroomStepX = headroomPts[6];
  let dHeadroomStepY = props.topStair ? coordinates[coordinates.length - 9] : coordinates[coordinates.length - 5];
  for (var p = 0; p < coordinates.length; p += 2) {
    if (
      dHeadroomStepX > coordinates[p + 2] &&
      dHeadroomStepX < coordinates[p - 2]
    ) {
      dHeadroomStepY = coordinates[p + 1];
    }
  }

  let dHeadroomDashed = 
    props.topStair ?
      [
        dHeadroomStepX,
        coordinates[coordinates.length - 9],
        coordinates[coordinates.length - 10],
        coordinates[coordinates.length - 9]
      ]
  :
      [
        dHeadroomStepX,
        coordinates[coordinates.length - 5],
        coordinates[coordinates.length - 6],
        coordinates[coordinates.length - 5]
      ]

  let headroomBoolean = false;
  if (dHeadroomStepX < coordinates[coordinates.length - 10]) {
    headroomBoolean = true;
  }

  let dHeadroom = [
    dHeadroomStepX,
    headroomPts[7],
    dHeadroomStepX,
    dHeadroomStepY
  ];
  let dHeadroomArrowTop = [
    dHeadroom[0] - arrowWidth,
    dHeadroom[1] + arrowWidth,
    dHeadroom[0],
    dHeadroom[1],
    dHeadroom[0] + arrowWidth,
    dHeadroom[1] + arrowWidth
  ];
  let dHeadroomArrowBot = [
    dHeadroom[2] - arrowWidth,
    dHeadroom[3] - arrowWidth,
    dHeadroom[2],
    dHeadroom[3],
    dHeadroom[2] + arrowWidth,
    dHeadroom[3] - arrowWidth
  ];

  let dHeadroomText = [dHeadroom[0], (dHeadroom[1] + dHeadroom[3]) / 2];
  let dHeadroomValue =
    ((parseFloat(dHeadroomStepY) - parseFloat(dHeadroom[1])) / ratio).toFixed(2);
  let dHeadroomFeet = Math.floor(
      (dHeadroomStepY - dHeadroom[1]) / ratio / 12
  );
  let dHeadroomInches = Math.floor(
    (dHeadroomStepY - dHeadroom[1]) / ratio - dHeadroomFeet * 12
  );

  let dHeadroomFraction =
    Math.round(
      (dHeadroomStepY - dHeadroom[1]) / ratio -
        dHeadroomFeet * 12 -
        dHeadroomInches
    ) * 16;
  let dHeadroomValueText = 
    props.units ? (
      dHeadroomFeet + "' " + dHeadroomInches + '" ' + dHeadroomFraction + "/16"
    ):
    (
      Math.round(((dHeadroomStepY - dHeadroom[1]) * 25.4) / ratio) + " MM"
    )

  //These are for the weird dimension string bugs
  if (dHeadroomFraction === 16){
  
    dHeadroomInches += 1;
    dHeadroomFraction = 0;

    if (dHeadroomInches === 12){
      dHeadroomFeet += 1;
      dHeadroomInches = 0;
    } else if (dHeadroomInches === 11){
      dHeadroomFeet += 1;
      dHeadroomInches = 0;
      dHeadroomFraction = 0;
    }

  }

  //This is the dimension string for the floor thickness
  let dFloor = [headroomPts[6], headroomPts[7], headroomPts[4], headroomPts[5]];
  let dFloorArrowTop = [
    dFloor[2] - arrowWidth,
    dFloor[3] + arrowWidth,
    dFloor[2],
    dFloor[3],
    dFloor[2] + arrowWidth,
    dFloor[3] + arrowWidth
  ];
  let dFloorArrowBot = [
    dFloor[0] - arrowWidth,
    dFloor[1] - arrowWidth,
    dFloor[0],
    dFloor[1],
    dFloor[0] + arrowWidth,
    dFloor[1] - arrowWidth
  ];
  let dFloorText = [dFloor[2], dFloor[3]];
  let dFloorDashedTop = [
    dFloor[2],
    dFloor[3],
    dFloor[2] + arrowOffset,
    dFloor[3]
  ];
  let dFloorDashedBot = [
    dFloor[0],
    dFloor[1],
    dFloor[0] + arrowOffset,
    dFloor[1]
  ];
  let dFloorValue = 
    props.units ? (
      props.floorft / 12 + "' " + props.floorin + '" ' + props.floorfr * 16 + "/16"
    ):
    (
      Math.round(floorThickness * 25.4) + " MM"
    )

  //This is the dimension string for the stair angle
  let dAngleStart = 
    props.topStair ?
      [
        coordinates[coordinates.length - 12],
        coordinates[coordinates.length - 11]
      ]
    :
      [
        coordinates[coordinates.length - 8],
        coordinates[coordinates.length - 7]
      ]
  
  let dAngle = [
    dAngleStart[0],
    dAngleStart[1],
    dAngleStart[0] - idealRun * ratio,
    dAngleStart[1],
    dAngleStart[0],
    dAngleStart[1] - idealRise * ratio
  ];

  let dAngleText = 
    props.topStair ?
      [
        coordinates[coordinates.length - 10] + (idealRun / 2) * ratio,
        dAngle[1]
      ]
    :
    [
      coordinates[coordinates.length - 6] + (idealRun / 2) * ratio,
      dAngle[1]
    ]

  let stairAngle = (Math.atan(idealRise / idealRun) * (180 / Math.PI)).toFixed(2)

  if (stairAngle < 30 || count <= 3) {
    if (props.topStair){
      dAngleText = [
        coordinates[coordinates.length - 10] + (idealRun / 2) * ratio + 10,
        dAngle[1]
      ];
    } else {
      dAngleText = [
        coordinates[coordinates.length - 6] + (idealRun / 2) * ratio + 10,
        dAngle[1]
      ];
    }
  }

  //These are coordinates for the rise and run dimension text
  let dStep = 
    props.topStair ? (
      [coordinates[coordinates.length - 2], coordinates[coordinates.length - 11]]
    ): 
    (
      [coordinates[2] + landing*ratio, coordinates[coordinates.length - 7]]
    );

  let runCount = props.topStair ? (count) : (count - 1);

  let idealRunParsedIn = 
    props.topStair ? (
      Math.floor((coordinates[12] - coordinates[14]) / ratio)
    ):
    (
      Math.floor((coordinates[6] - coordinates[10]) / ratio)
    )

  let idealRunParsedFr = 
    props.topStair ? (
      Math.round((((coordinates[12] - coordinates[14]) / ratio) - idealRunParsedIn) * 0.0625)
    ):
    (
      Math.round((((coordinates[6] - coordinates[10]) / ratio) - idealRunParsedIn) * 0.0625)
    )

  let idealRunParsedMM = 
    props.topStair ? (
      Math.round(((coordinates[12] - coordinates[14]) / ratio) * 25.4)
    ):
    (
      Math.round(((coordinates[6] - coordinates[10]) / ratio) * 25.4)
    )

  let idealRiseParsedIn = 
    props.topStair ? (
      Math.floor((coordinates[11] - coordinates[7]) / ratio)
    ):
    (
      Math.floor((coordinates[15] - coordinates[11]) / ratio)
    )

  let idealRiseParsedFr =
    props.topStair ? (
      Math.round((((coordinates[11] - coordinates[7]) / ratio) - idealRunParsedIn) * 0.0625)
    ):
    (
      Math.round((((coordinates[15] - coordinates[11]) / ratio) - idealRunParsedIn) * 0.0625)
    )

  let idealRiseParsedMM = 
    props.topStair ? (
      Math.round(((coordinates[11] - coordinates[7]) / ratio) * 25.4)
    ):
    (
      Math.round(((coordinates[15] - coordinates[11]) / ratio) * 25.4)
    )

  let riseCountValue = 
      props.units ? (
        runCount + " rises at " + idealRiseParsedIn + '" ' + idealRiseParsedFr + "/16"
      ):
      (
        runCount + " rises at " + idealRiseParsedMM + " MM"
      )

  let runCountValue = 
      props.units ? (
        runCount + " runs at " + idealRunParsedIn + '" ' + idealRunParsedFr + "/16"
      ):
      (
        runCount + " runs at " + idealRunParsedMM + " MM"
      )

  //Error message texts
  let errors = [];
  let ePosition = 
    lgMin.matches ? (
      [80, 80]
    ):
    (
      [8, 40]
    )

  //Headroom errors
  let eHeadroomText = "";
  let eHeadroomColor = "#ff0000";
  if (dHeadroomValue < 84 && headroomTrue) {
    eHeadroomColor = "#ff0000";
    eHeadroomText = "Low Headroom";
    errors.push(eHeadroomText);
  } else {
    eHeadroomColor = "#5541EA";
  }

  //Run length errors
  let withNosing = false;
  if (idealRun === 10 && props.nosingin === 0) {
    withNosing = true;
  }
  let eRunText = "";
  if (idealRun < 10 && withNosing) {
    eRunText = 'Stair run is short';
    errors.push(eRunText);
  }

  //Stair angle errors
  let eAngleText = "";
  let eAngleColor = "#5541EA";
  if (stairAngle > 42 || stairAngle < 30) {
    eAngleText = "Angle must be between 30° and 42°";
    eAngleColor = "#ff0000";
    errors.push(eAngleText);
  }

  //Rise error
  let eRiseText = "";
  if (idealRise > 7){
    eRiseText = 'Stair rise is steep'
    errors.push(eRiseText);
  }

  //Compiled error messages
  let eMessage = "";
  if (errors.length === 1) {
    eMessage = errors[0];
  } else if (errors.length === 2) {
    eMessage = errors[0] + " • " + errors[1];
  } else if (errors.length === 3) {
    eMessage = errors[0] + " • " + errors[1] + " • " + errors[2];
  } else if (errors.length === 4) {
    eMessage = errors[0] + " • " + errors[1] + " • " + errors[2] + " • " + errors[3];
  }
  

  return (
    <Stage width={windowWidth} height={windowHeight}>
      <Layer>
        {props.topStair === false && (
          <Rect
            x={move[0] + topStairLanding[0]}
            y={move[1] + topStairLanding[1] - (idealRise * ratio)}
            width={landing * ratio}
            height={floorThickness * ratio}
            fill="white"
            stroke="black"
            strokeWidth={strokeWidth}
          />
        )}
        {props.topStair && (
          <Line
            x={move[0]}
            y={move[1]}
            points={topStairLine}
            stroke="black"
            strokeWidth={strokeWidth}
            lineCap="sqare"
            lineJoin="sqare"
            closed="true"
          />
        )}
        {props.dimensions && (
          <Text
            x={ePosition[0]}
            y={ePosition[1]}
            fontFamily="Sohne Mono Buch"
            fontSize={textSize}
            fill="#ff0000"
            text={eMessage}
            align="left"
          />
        )}
        <Line
          x={move[0]}
          y={move[1]}
          points={coordinates}
          stroke="black"
          strokeWidth={strokeWidth}
          lineCap="sqare"
          lineJoin="sqare"
          closed="true"
        />
        {headroomTrue && (
          <Line
            x={move[0]}
            y={move[1]}
            points={headroomPts}
            stroke="black"
            strokeWidth={strokeWidth}
            lineCap="sqare"
            lineJoin="sqare"
            closed="true"
          />
        )}
        {props.details && (
          <Rect
            x={topTread[0]}
            y={topTread[1]}
            width={treadLength - riserThickness}
            height={treadThickness}
            fill="white"
            stroke="black"
            strokeWidth={strokeWidth}
          />
        )}
        {props.details &&
          [...Array(detailCount - 1)].map((_, i) => (
            <Rect
              key={i}
              x={treadsX2[i]}
              y={treadsY2[i]}
              width={treadLength}
              height={treadThickness}
              fill="white"
              stroke="black"
              strokeWidth={strokeWidth}
            />
          ))}
        {props.details &&
          [...Array(detailCount)].map((_, i) => (
            <Rect
              key={i}
              x={treadsW[i]}
              y={risersY[i]}
              width={riserThickness}
              height={riserHeight}
              fill="white"
              stroke="black"
              strokeWidth={strokeWidth}
            />
          ))}
      </Layer>
      <Layer>
        {props.dimensions && (
          <React.Fragment>
            <Line
              x={move[0]}
              y={move[1]}
              points={dRise}
              stroke="#5541EA"
              strokeWidth={0.75}
              lineCap="round"
              lineJoin="round"
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dRiseArrowTop}
              stroke="#5541EA"
              strokeWidth={0.75}
              lineCap="round"
              lineJoin="round"
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dRiseArrowBot}
              stroke="#5541EA"
              strokeWidth={0.75}
              lineCap="round"
              lineJoin="round"
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dRiseDashedTop}
              stroke="black"
              strokeWidth={0.75}
              lineCap="sqare"
              lineJoin="sqare"
              dash={strokeDash}
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dRiseDashedBot}
              stroke="black"
              strokeWidth={0.75}
              lineCap="sqare"
              lineJoin="sqare"
              dash={strokeDash}
            />
            <Text
              width={150}
              x={move[0] + dRiseText[0] - textNumOffset}
              y={move[1] + dRiseText[1] - 75}
              fontFamily="Sohne Mono Buch"
              fontSize={textSize}
              fill="#5541EA"
              text="Total Rise"
              rotation={90}
              align="center"
            />
            <Text
              width={150}
              x={move[0] + dRiseText[0] - textLineOffset}
              y={move[1] + dRiseText[1] - 75}
              fontFamily="Sohne Mono Buch"
              fontSize={textSize}
              fill="#5541EA"
              text={
                dRiseValue
              }
              rotation={90}
              align="center"
            />
          </React.Fragment>
        )}
        {props.dimensions && (
          <React.Fragment>
            <Line
              x={move[0]}
              y={move[1]}
              points={dRun}
              stroke="#5541EA"
              strokeWidth={0.75}
              lineCap="round"
              lineJoin="round"
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dRunArrowLeft}
              stroke="#5541EA"
              strokeWidth={0.75}
              lineCap="round"
              lineJoin="round"
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dRunArrowRight}
              stroke="#5541EA"
              strokeWidth={0.75}
              lineCap="round"
              lineJoin="round"
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dRunDashedLeft}
              stroke="black"
              strokeWidth={0.75}
              lineCap="sqare"
              lineJoin="sqare"
              dash={strokeDash}
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dRunDashedRight}
              stroke="black"
              strokeWidth={0.75}
              lineCap="sqare"
              lineJoin="sqare"
              dash={strokeDash}
            />
            <Text
              width={150}
              x={move[0] + dRunText[0] - 75}
              y={move[1] + dRunText[1] + textNumOffset}
              fontFamily="Sohne Mono Buch"
              fontSize={textSize}
              fill="#5541EA"
              text="Total Run"
              align="center"
            />
            <Text
              width={150}
              x={move[0] + dRunText[0] - 75}
              y={move[1] + dRunText[1] + textLineOffset}
              fontFamily="Sohne Mono Buch"
              fontSize={textSize}
              fill="#5541EA"
              text={dRunValue}
              align="center"
            />
          </React.Fragment>
        )}
        {props.dimensions && props.details && (
          <React.Fragment>
            <Line
              x={move[0]}
              y={move[1]}
              points={dNosingDashedLeft}
              stroke="black"
              strokeWidth={0.75}
              lineCap="sqare"
              lineJoin="sqare"
              dash={strokeDash}
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dNosingDashedRight}
              stroke="black"
              strokeWidth={0.75}
              lineCap="sqare"
              lineJoin="sqare"
              dash={strokeDash}
            />
            <Text
              width={150}
              x={move[0] + dNosingText[0] - 75}
              y={move[1] + dNosingText[1] - textSize - textLineOffset}
              fontFamily="Sohne Mono Buch"
              fontSize={textSize}
              fill="#5541EA"
              text="Nosing"
              align="center"
            />
            <Text
              width={150}
              x={move[0] + dNosingText[0] - 75}
              y={move[1] + dNosingText[1] - textSize - textNumOffset}
              fontFamily="Sohne Mono Buch"
              fontSize={textSize}
              fill="#5541EA"
              text={dNosingValue}
              align="center"
            />
          </React.Fragment>
        )}
        {props.dimensions && headroomTrue && (
          <React.Fragment>
            <Line
              x={move[0]}
              y={move[1]}
              points={dFloorDashedTop}
              stroke="black"
              strokeWidth={0.75}
              lineCap="sqare"
              lineJoin="sqare"
              dash={strokeDash}
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dFloorDashedBot}
              stroke="black"
              strokeWidth={0.75}
              lineCap="sqare"
              lineJoin="sqare"
              dash={strokeDash}
            />
            <Line
              x={move[0] + arrowOffset}
              y={move[1]}
              points={dFloorArrowTop}
              stroke="#5541EA"
              strokeWidth={0.75}
              lineCap="round"
              lineJoin="round"
            />
            <Line
              x={move[0] + arrowOffset}
              y={move[1]}
              points={dFloorArrowBot}
              stroke="#5541EA"
              strokeWidth={0.75}
              lineCap="round"
              lineJoin="round"
            />
            <Line
              x={move[0] + arrowOffset}
              y={move[1]}
              points={dFloor}
              stroke="#5541EA"
              strokeWidth={0.75}
              lineCap="round"
              lineJoin="round"
            />
            <Text
              width={150}
              x={move[0] + arrowOffset / 2 + dFloor[2] + arrowOffset}
              y={move[1] + dFloorText[1]}
              fontFamily="Sohne Mono Buch"
              fontSize={textSize}
              fill="#5541EA"
              text="Floor thickness"
              align="left"
            />
            <Text
              width={150}
              x={move[0] + arrowOffset / 2 + dFloor[2] + arrowOffset}
              y={move[1] + dFloorText[1] + textSize + 2}
              fontFamily="Sohne Mono Buch"
              fontSize={textSize}
              fill="#5541EA"
              text={dFloorValue}
              align="left"
            />
          </React.Fragment>
        )}
        {props.dimensions && (
          <React.Fragment>
            <Text
              width={100}
              x={move[0] + dAngleText[0] + (textSize + 2)}
              y={move[1] + dAngleText[1] - (textSize + 2)}
              fontFamily="Sohne Mono Buch"
              fontSize={textSize}
              fill={eAngleColor}
              text={stairAngle + "°"}
              align="left"
            />
          </React.Fragment>
        )}
        {props.dimensions && headroomTrue && (
          <React.Fragment>
            <Line
              x={move[0]}
              y={move[1]}
              points={dHeadroom}
              stroke={eHeadroomColor}
              strokeWidth={0.75}
              lineCap="round"
              lineJoin="round"
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dHeadroomArrowTop}
              stroke={eHeadroomColor}
              strokeWidth={0.75}
              lineCap="round"
              lineJoin="round"
            />
            <Line
              x={move[0]}
              y={move[1]}
              points={dHeadroomArrowBot}
              stroke={eHeadroomColor}
              strokeWidth={0.75}
              lineCap="round"
              lineJoin="round"
            />
            <Text
              width={100}
              x={move[0] + dHeadroomText[0] - textLineOffset}
              y={move[1] + dHeadroomText[1] - 50}
              fontFamily="Sohne Mono Buch"
              fontSize={textSize}
              fill={eHeadroomColor}
              text={dHeadroomValueText}
              align="center"
              rotation={90}
            />
            <Text
              width={150}
              x={move[0] + dHeadroomText[0] - textNumOffset}
              y={move[1] + dHeadroomText[1] - 75}
              fontFamily="Sohne Mono Buch"
              fontSize={textSize}
              fill={eHeadroomColor}
              text="Headroom height"
              align="center"
              rotation={90}
            />
          </React.Fragment>
        )}
        {props.dimensions && headroomTrue && headroomBoolean && (
          <Line
            x={move[0]}
            y={move[1]}
            points={dHeadroomDashed}
            stroke="black"
            strokeWidth={0.75}
            lineCap="sqare"
            lineJoin="sqare"
            dash={strokeDash}
          />
        )}
        {props.dimensions && stringerTrue && (
          <React.Fragment>
            <Line
              x={move[0]}
              y={move[1]}
              points={dStringer}
              stroke="#5541EA"
              strokeWidth={0.75}
              lineCap="round"
              lineJoin="round"
            />
            <Text
              width={150}
              x={move[0] + dStringer[2]}
              y={move[1] + dStringer[3]}
              fontFamily="Sohne Mono Buch"
              fontSize={textSize}
              fill="#5541EA"
              text="Stringer width"
              align="left"
            />
            <Text
              width={150}
              x={move[0] + dStringer[2]}
              y={move[1] + dStringer[3] + textSize + 2}
              fontFamily="Sohne Mono Buch"
              fontSize={textSize}
              fill="#5541EA"
              text={dStringerValue}
              align="left"
            />
          </React.Fragment>
        )}
        {props.dimensions && (
          <React.Fragment>
            <Text
              width={200}
              x={move[0] + dStep[0] - 200}
              y={move[1] + dStep[1] + (textSize / 2)}
              fontFamily="Sohne Mono Buch"
              fontSize={textSize}
              fill="#5541EA"
              text={runCountValue}
              align="right"
            />
            <Text
              width={200}
              x={move[0] + dStep[0] - 200}
              y={move[1] + dStep[1] + (textSize / 2) + textSize + 2}
              fontFamily="Sohne Mono Buch"
              fontSize={textSize}
              fill="#5541EA"
              text={riseCountValue}
              align="right"
            />
          </React.Fragment>
        )}
      </Layer>
    </Stage>
  );
};

export default Stair;

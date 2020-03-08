import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Styles/App.css";
import TotalRun from "./Components/inputs/totalrun";
import TotalRise from "./Components/inputs/totalrise";
import IdealRun from "./Components/inputs/idealrun";
import IdealRise from "./Components/inputs/idealrise";
import TopStair from "./Components/inputs/topstair";
import Details from "./Components/inputs/details";
import StairAngle from "./Components/inputs/stairangle";
import Height from "./Components/inputs/height";
import FloorThickness from "./Components/inputs/floorthickness";
import Stair from "./Components/stair";
import Units from "./Components/inputs/units";
import Dimensions from "./Components/inputs/dimensions";
import DetailsToggle from "./Components/inputs/detailsToggle";

class App extends Component {
  state = {
    totalRunft: 12 * 12,
    totalRunin: 0,
    totalRunfr: 0,
    totalRunmm: 144 * 25.4,

    totalRiseft: 9 * 12,
    totalRisein: 0,
    totalRisefr: 0,
    totalRisemm: 108 * 25.4,

    idealRisein: 7,
    idealRisefr: 0,
    idealRisemm: 7 * 25.4,

    idealRunin: 11,
    idealRunfr: 0,
    idealRunmm: 11 * 25.4,

    stringerin: 5,
    stringerfr: 0.0625 * 15,
    stringermm: (5 + (0.0625 * 15)) * 25.4,

    floorft: 0,
    floorin: 7,
    floorfr: 0,
    floormm: 7 * 25.4,

    headroomMax: 0,
    headroomLength: 0,

    treadin: 1,
    treadfr: 0,
    treadmm: 1 * 25.4,

    riserin: 1,
    riserfr: 0,
    risermm: 1 * 25.4,

    nosingin: 0,
    nosingfr: 0.0625 * 8,
    nosingmm: 0.0625 * 8 * 25.4,

    stairAngle: 32.5,
    stairToggle: false,

    runOn: true,
    idealOn: false,
    dimensions: true,
    units: true,
    details: true,
    topStair: true
  };

  //Handlers for changing total run
  changetotalRunft = event => {
    this.setState({
      totalRunft: event.target.value,
      runOn: true,
      stairToggle: false,
      idealOn: false
    });
  };
  changetotalRunin = event => {
    this.setState({
      totalRunin: event.target.value,
      runOn: true,
      stairToggle: false,
      idealOn: false
    });
  };
  changetotalRunfr = event => {
    this.setState({
      totalRunfr: event.target.value,
      runOn: true,
      stairToggle: false,
      idealOn: false
    });
  };
  changetotalRunmm = event => {
    this.setState({
      totalRunmm: event.target.value,
      runOn: true,
      stairToggle: false,
      idealOn: false
    })
  }

  //Handlers for changing total rise
  changetotalRiseft = event => {
    this.setState({
      totalRiseft: event.target.value,
      runOn: false,
      stairToggle: false,
      idealOn: false
    });
  };
  changetotalRisein = event => {
    this.setState({
      totalRisein: event.target.value,
      runOn: false,
      stairToggle: false,
      idealOn: false
    });
  };
  changetotalRisefr = event => {
    this.setState({
      totalRisefr: event.target.value,
      runOn: false,
      stairToggle: false,
      idealOn: false
    });
  };
  changetotalRisemm = event => {
    this.setState({
      totalRisemm: event.target.value,
      runOn: false,
      stairToggle: false,
      idealOn: false
    });
  };

  //Handlers for changing ideal run
  changeidealRunin = event => {
    this.setState({
      idealRunin: event.target.value,
      stairToggle: false,
      idealOn: true
    });
  };
  changeidealRunfr = event => {
    this.setState({
      idealRunfr: event.target.value,
      stairToggle: false,
      idealOn: true
    });
  };
  changeidealRunmm = event => {
    this.setState({
      idealRunmm: event.target.value,
      stairToggle: false,
      idealOn: true
    });
  };

  //Handlers for changing ideal rise
  changeidealRisein = event => {
    this.setState({
      idealRisein: event.target.value,
      stairToggle: false,
      idealOn: true
    });
  };
  changeidealRisefr = event => {
    this.setState({
      idealRisefr: event.target.value,
      stairToggle: false,
      idealOn: true
    });
  };
  changeidealRisemm = event => {
    this.setState({
      idealRisemm: event.target.value,
      stairToggle: false,
      idealOn: true
    });
  };

  //Handlers for changing stringer
  changestringerin = event => {
    this.setState({ stringerin: event.target.value });
  };

  changestringerfr = event => {
    this.setState({ stringerfr: event.target.value });
  };
  changestringermm = event => {
    this.setState({ stringermm: event.target.value });
  };

  //Handlers for changing floor thickness
  changefloorft = event => {
    this.setState({ floorft: event.target.value });
  };

  changefloorin = event => {
    this.setState({ floorin: event.target.value });
  };

  changefloorfr = event => {
    this.setState({ floorfr: event.target.value });
  };
  changefloormm = event => {
    this.setState({ floormm: event.target.value });
  };

  //Handlers for headroom
  changeheadroomlength = event => {
    this.setState({
      headroomLength: event.target.value
    });
  };

  //Handlers for tread
  changetreadin = event => {
    this.setState({
      treadin: event.target.value
    });
  };
  changetreadfr = event => {
    this.setState({
      treadfr: event.target.value
    });
  };
  changetreadmm = event => {
    this.setState({
      treadmm: event.target.value
    });
  };

  //Handlers for riser
  changeriserin = event => {
    this.setState({
      riserin: event.target.value
    });
  };
  changeriserfr = event => {
    this.setState({
      riserfr: event.target.value
    });
  };
  changerisermm = event => {
    this.setState({
      risermm: event.target.value
    });
  };

  //Handlers for nosing
  changenosingin = event => {
    this.setState({
      nosingin: event.target.value
    });
  };
  changenosingfr = event => {
    this.setState({
      nosingfr: event.target.value
    });
  };
  changenosingmm = event => {
    this.setState({
      nosingmm: event.target.value
    });
  };

  //Handlers for toggles
  changeUnitsIn = () => {
    this.setState({
      units: true
    });
  };
  changeUnitsMM = () => {
    this.setState({
      units: false
    });
  };
  changeDimensionsOn = () => {
    this.setState({
      dimensions: true
    });
  };
  changeDimensionsOff = () => {
    this.setState({
      dimensions: false
    });
  };
  changeDetailsOn = () => {
    this.setState({
      details: true
    });
  };
  changeDetailsOff = () => {
    this.setState({
      details: false
    });
  };
  changeTopStairOn = () => {
    this.setState({
      topStair: true
    })
  }
  changeTopStairOff = () => {
    this.setState({
      topStair: false
    })
  }


  //Handler for stair angle
  changeStairAngle = event => {
    this.setState({
      stairToggle: true,
      stairAngle: event.target.value
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div id="sidebar" className="col-12 col-lg-2">
            <div className="sidebar__section sidebar__section--first">
              <div className="title">Toggles</div>
              <Units
                units={this.state.units}
                changeUnitsIn={this.changeUnitsIn}
                changeUnitsMM={this.changeUnitsMM}
              />
              <Dimensions
                dimensions={this.state.dimensions}
                changeDimensionsOn={this.changeDimensionsOn}
                changeDimensionsOff={this.changeDimensionsOff}
              />
              <DetailsToggle
                details={this.state.details}
                changeDetailsOn={this.changeDetailsOn}
                changeDetailsOff={this.changeDetailsOff}
              />
              <TopStair
                topStair={this.state.topStair}
                changeTopStairOn={this.changeTopStairOn}
                changeTopStairOff={this.changeTopStairOff}
              />
            </div>

            <div className="sidebar__section--border"></div>

            <div className="sidebar__section sidebar__section--second">
              <div className="title">Rise-run</div>
              <TotalRun
                totalRunft={this.state.totalRunft}
                totalRunin={this.state.totalRunin}
                totalRunfr={this.state.totalRunfr}
                totalRunmm={this.state.totalRunmm}
                changetotalRunft={this.changetotalRunft}
                changetotalRunin={this.changetotalRunin}
                changetotalRunfr={this.changetotalRunfr}
                changetotalRunmm={this.changetotalRunmm}
                changetotalRunSwitchOn={this.changetotalRunSwitchOn}
                changetotalRunSwitchOff={this.changetotalRunSwitchOff}
                units={this.state.units}
              />
              <TotalRise
                totalRiseft={this.state.totalRiseft}
                totalRisein={this.state.totalRisein}
                totalRisefr={this.state.totalRisefr}
                totalRisemm={this.state.totalRisemm}
                changetotalRiseft={this.changetotalRiseft}
                changetotalRisein={this.changetotalRisein}
                changetotalRisefr={this.changetotalRisefr}
                changetotalRisemm={this.changetotalRisemm}
                units={this.state.units}
              />
              <IdealRun
                idealRunin={this.state.idealRunin}
                idealRunfr={this.state.idealRunfr}
                idealRunmm={this.state.idealRunmm}
                changeidealRunin={this.changeidealRunin}
                changeidealRunfr={this.changeidealRunfr}
                changeidealRunmm={this.changeidealRunmm}
                units={this.state.units}
              />
              <IdealRise
                idealRisein={this.state.idealRisein}
                idealRisefr={this.state.idealRisefr}
                idealRisemm={this.state.idealRisemm}
                changeidealRisein={this.changeidealRisein}
                changeidealRisefr={this.changeidealRisefr}
                changeidealRisemm={this.changeidealRisemm}
                units={this.state.units}
              />
            </div>

            <div className="sidebar__section--border"></div>

            <Details
              treadin={this.state.treadin}
              treadfr={this.state.treadfr}
              treadmm={this.state.treadmm}
              riserin={this.state.riserin}
              riserfr={this.state.riserfr}
              risermm={this.state.risermm}
              nosingin={this.state.nosingin}
              nosingfr={this.state.nosingfr}
              nosingmm={this.state.nosingmm}
              changetreadin={this.changetreadin}
              changetreadfr={this.changetreadfr}
              changetreadmm={this.changetreadmm}
              changeriserin={this.changeriserin}
              changeriserfr={this.changeriserfr}
              changerisermm={this.changerisermm}
              changenosingin={this.changenosingin}
              changenosingfr={this.changenosingfr}
              changenosingmm={this.changenosingmm}
              changestringerin={this.changestringerin}
              changestringerfr={this.changestringerfr}
              changestringermm={this.changestringermm}
              stringerin={this.state.stringerin}
              stringerfr={this.state.stringerfr}
              stringermm={this.state.stringermm}
              details={this.state.details}
              units={this.state.units}
            />

            <div className="sidebar__section--border"></div>

            <div className="sidebar__section sidebar__section--fourth">
              <div className="title">Headroom</div>
              <Height
                totalRunft={this.state.totalRunft}
                totalRunin={this.state.totalRunin}
                totalRunfr={this.state.totalRunfr}
                totalRunmm={this.state.totalRunmm}
                headroomLength={this.state.headroomLength}
                changeheadroomlength={this.changeheadroomlength}
                units={this.state.units}
              />
              <FloorThickness
                floorft={this.state.floorft}
                floorin={this.state.floorin}
                floorfr={this.state.floorfr}
                floormm={this.state.floormm}
                changefloorft={this.changefloorft}
                changefloorin={this.changefloorin}
                changefloorfr={this.changefloorfr}
                changefloormm={this.changefloormm}
                units={this.state.units}
              />
            </div>

            <div className="sidebar__section--border"></div>

            <StairAngle
              idealRunin={this.state.idealRunin}
              idealRunfr={this.state.idealRunfr}
              idealRisein={this.state.idealRisein}
              idealRisefr={this.state.idealRisefr}
              changeStairAngle={this.changeStairAngle}
              stairAngle={this.state.stairAngle}
            />
          </div>

          <div id="container" className="col-12 col-lg-10">
            <Stair
              units={this.state.units}
              totalRunft={this.state.totalRunft}
              totalRunin={this.state.totalRunin}
              totalRunfr={this.state.totalRunfr}
              totalRunmm={this.state.totalRunmm}
              totalRiseft={this.state.totalRiseft}
              totalRisein={this.state.totalRisein}
              totalRisefr={this.state.totalRisefr}
              totalRisemm={this.state.totalRisemm}
              idealRunin={this.state.idealRunin}
              idealRunfr={this.state.idealRunfr}
              idealRunmm={this.state.idealRunmm}
              idealRisein={this.state.idealRisein}
              idealRisefr={this.state.idealRisefr}
              idealRisemm={this.state.idealRisemm}
              totalBoolean={this.state.runOn}
              runCount={this.state.runCount}
              riseCount={this.state.riseCount}
              stringerin={this.state.stringerin}
              stringerfr={this.state.stringerfr}
              stringermm={this.state.stringermm}
              floorft={this.state.floorft}
              floorin={this.state.floorin}
              floorfr={this.state.floorfr}
              floormm={this.state.floormm}
              headroomLength={this.state.headroomLength}
              headroomDelta={this.state.headroomDelta}
              treadin={this.state.treadin}
              treadfr={this.state.treadfr}
              treadmm={this.state.treadmm}
              riserin={this.state.riserin}
              riserfr={this.state.riserfr}
              risermm={this.state.risermm}
              nosingin={this.state.nosingin}
              nosingfr={this.state.nosingfr}
              nosingmm={this.state.nosingmm}
              details={this.state.details}
              dimensions={this.state.dimensions}
              stairAngle={this.state.stairAngle}
              stairToggle={this.state.stairToggle}
              idealBoolean={this.state.idealOn}
              topStair={this.state.topStair}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
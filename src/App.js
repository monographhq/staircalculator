import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Styles/App.css';
import TotalRun from './Components/inputs/totalrun';
import TotalRise from './Components/inputs/totalrise';
import IdealRun from './Components/inputs/idealrun';
import IdealRise from './Components/inputs/idealrise';
import Details from './Components/inputs/details';
import StairAngle from './Components/inputs/stairangle';
import Height from './Components/inputs/height';
import FloorThickness from './Components/inputs/floorthickness';
import Stair from './Components/stair';
import Units from './Components/inputs/units';
import Dimensions from './Components/inputs/dimensions';
import DetailsToggle from './Components/inputs/detailsToggle';


class App extends Component {

  state = {
    totalRunft: 12 * 12,
    totalRunin: 0,
    totalRunfr: 0,

    totalRiseft: 9 * 12,
    totalRisein: 0,
    totalRisefr: 0,

    idealRisein: 7,
    idealRisefr: 0,

    idealRunin: 11,
    idealRunfr: 0,

    stringerin: 5,
    stringerfr: 0.0625 * 15,

    floorft: 0,
    floorin: 7,
    floorfr: 0,
    
    headroomMax: 0,
    headroomLength: 0,

    treadin: 1,
    treadfr: 0,

    riserin: 1,
    riserfr: 0,

    nosingin: 0,
    nosingfr: 0,

    stairAngle: 32.5,
    stairToggle: false,

    runOn: true,
    dimensions: true,
    units: true,
    details: true

  }

  //Handlers for changing total run
  changetotalRunft = (event) => {
      this.setState({
        totalRunft:event.target.value,
        runOn: true,
        stairToggle: false
      })
  }
  changetotalRunin = (event) => {
      this.setState({
        totalRunin:event.target.value,
        runOn: true,
        stairToggle: false
      })
  }
  changetotalRunfr = (event) => {
      this.setState({
        totalRunfr:event.target.value,
        runOn: true,
        stairToggle: false
      })
  }

  //Handlers for changing total rise
  changetotalRiseft = (event) => {
      this.setState({
        totalRiseft:event.target.value,
        runOn: false,
        stairToggle: false
      })
  }
  changetotalRisein = (event) => {
      this.setState({
        totalRisein:event.target.value,
        runOn: false,
        stairToggle: false
      })
  }
  changetotalRisefr = (event) => {
      this.setState({
        totalRisefr:event.target.value,
        runOn: false,
        stairToggle: false
      })
  }

  //Handlers for changing ideal run
  changeidealRunin = (event) => {
    this.setState({
      idealRunin:event.target.value,
      stairToggle: false
    })
  }
  changeidealRunfr = (event) => {
      this.setState({
        idealRunfr:event.target.value,
        stairToggle: false
      })
  }

  //Handlers for changing ideal rise
  changeidealRisein = (event) => {
      this.setState({
        idealRisein:event.target.value,
        stairToggle: false
      })
  }
  changeidealRisefr = (event) => {
      this.setState({
        idealRisefr:event.target.value,
        stairToggle: false
      })
  }

  //Handlers for changing stringer
  changestringerin = (event) => {
    this.setState({stringerin:event.target.value})
  }

  changestringerfr = (event) => {
    this.setState({stringerfr:event.target.value})
  }

  //Handlers for changing floor thickness
  changefloorft = (event) => {
    this.setState({floorft:event.target.value})
  }

  changefloorin = (event) => {
    this.setState({floorin:event.target.value})
  }

  changefloorfr = (event) => {
    this.setState({floorfr:event.target.value})
  }
  
  //Handlers for headroom
  changeheadroomlength = (event) => {
    this.setState({
      headroomLength:event.target.value
    })
  }

  //Handlers for tread
  changetreadin = (event) => {
    this.setState({
      treadin:event.target.value
    })
  }
  changetreadfr = (event) => {
    this.setState({
      treadfr:event.target.value
    })
  }

  //Handlers for riser
  changeriserin = (event) => {
    this.setState({
      riserin:event.target.value
    })
  }
  changeriserfr = (event) => {
    this.setState({
      riserfr:event.target.value
    })
  }

   //Handlers for nosing
   changenosingin = (event) => {
    this.setState({
      nosingin:event.target.value
    })
  }
  changenosingfr = (event) => {
    this.setState({
      nosingfr:event.target.value
    })
  }

  //Handlers for toggles
  changeUnitsIn = () => {
    this.setState({
      units: true
    })
  }
  changeUnitsMM = () => {
    this.setState({
      units: false
    })
  }
  changeDimensionsOn = () => {
    this.setState({
      dimensions: true
    })
  }
  changeDimensionsOff = () => {
    this.setState({
      dimensions: false
    })
  }
  changeDetailsOn = () => {
    this.setState({
      details: true
    })
  }
  changeDetailsOff = () => {
    this.setState({
      details: false
    })
  }

  //Handler for stair angle
  changeStairAngle = (event) => {
    this.setState({
      stairToggle: true,
      stairAngle: event.target.value
    })
  }

  render(){
    return (
      <div className="container-fluid">
        <div className="row">

          <div id="sidebar" className="col-2 ">
              <div className="sidebar__section">
                <Units 
                  units = {this.state.units}
                  changeUnitsIn = {this.changeUnitsIn}
                  changeUnitsMM = {this.changeUnitsMM}
                />
                <Dimensions 
                  dimensions = {this.state.dimensions}
                  changeDimensionsOn = {this.changeDimensionsOn}
                  changeDimensionsOff = {this.changeDimensionsOff}
                />
                <DetailsToggle 
                  details = {this.state.details}
                  changeDetailsOn = {this.changeDetailsOn}
                  changeDetailsOff = {this.changeDetailsOff}
                />
              </div>

              <div className="sidebar__section--border"></div>

              <div className="sidebar__section">
                <div className="title">Rise-run</div>
                <TotalRun 
                    totalRunft = {this.state.totalRunft}
                    totalRunin = {this.state.totalRunin}
                    totalRunfr = {this.state.totalRunfr}
                    changetotalRunft = {this.changetotalRunft}
                    changetotalRunin = {this.changetotalRunin}
                    changetotalRunfr = {this.changetotalRunfr}
                />
                <TotalRise 
                    totalRiseft = {this.state.totalRiseft}
                    totalRisein = {this.state.totalRisein}
                    totalRisefr = {this.state.totalRisefr}
                    changetotalRiseft = {this.changetotalRiseft}
                    changetotalRisein = {this.changetotalRisein}
                    changetotalRisefr = {this.changetotalRisefr}
                />
                <IdealRun 
                    idealRunin = {this.state.idealRunin}
                    idealRunfr = {this.state.idealRunfr}
                    changeidealRunin = {this.changeidealRunin}
                    changeidealRunfr = {this.changeidealRunfr}
                />
                <IdealRise 
                    idealRisein = {this.state.idealRisein}
                    idealRisefr = {this.state.idealRisefr}
                    changeidealRisein = {this.changeidealRisein}
                    changeidealRisefr = {this.changeidealRisefr}
                />
              </div>

              <div className="sidebar__section--border"></div>

              <Details 
                stringerin={this.state.stringerin}
                stringerfr={this.state.stringerfr}
                treadin={this.state.treadin}
                treadfr={this.state.treadfr}
                riserin={this.state.riserin}
                riserfr={this.state.riserfr}
                nosingin={this.state.nosingin}
                nosingfr={this.state.nosingfr}
                changestringerin={this.changestringerin}
                changestringerfr={this.changestringerfr}
                changetreadin={this.changetreadin}
                changetreadfr={this.changetreadfr}
                changeriserin={this.changeriserin}
                changeriserfr={this.changeriserfr}
                changenosingin={this.changenosingin}
                changenosingfr={this.changenosingfr}
                details={this.state.details}
              />

              <div className="sidebar__section--border"></div>

              <div className="sidebar__section">
                  <div className="title">Headroom</div>
                  <Height 
                    totalRunft={this.state.totalRunft}
                    totalRunin={this.state.totalRunin}
                    totalRunfr={this.state.totalRunfr}
                    headroomLength={this.state.headroomLength}
                    changeheadroomlength={this.changeheadroomlength}
                  />
                  <FloorThickness 
                    floorft={this.state.floorft}
                    floorin={this.state.floorin}
                    floorfr={this.state.floorfr}
                    changefloorft={this.changefloorft}
                    changefloorin={this.changefloorin}
                    changefloorfr={this.changefloorfr}
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

          <div id="container" className="col-10">
            <Stair 
              totalRunft={this.state.totalRunft}
              totalRunin={this.state.totalRunin}
              totalRunfr={this.state.totalRunfr}
              totalRiseft={this.state.totalRiseft}
              totalRisein={this.state.totalRisein}
              totalRisefr={this.state.totalRisefr}
              idealRunin={this.state.idealRunin}
              idealRunfr={this.state.idealRunfr}
              idealRisein={this.state.idealRisein}
              idealRisefr={this.state.idealRisefr}
              boolean={this.state.runOn}
              runCount={this.state.runCount}
              riseCount={this.state.riseCount}
              stringerin={this.state.stringerin}
              stringerfr={this.state.stringerfr}
              floorft={this.state.floorft}
              floorin={this.state.floorin}
              floorfr={this.state.floorfr}
              headroomLength={this.state.headroomLength}
              headroomDelta={this.state.headroomDelta}
              treadin={this.state.treadin}
              treadfr={this.state.treadfr}
              riserin={this.state.riserin}
              riserfr={this.state.riserfr}
              nosingin={this.state.nosingin}
              nosingfr={this.state.nosingfr}
              details={this.state.details}
              dimensions={this.state.dimensions}
              stairAngle={this.state.stairAngle}
              stairToggle={this.state.stairToggle}
            />
          </div>
        
      </div>

    </div>
    );
  }
}



export default App;

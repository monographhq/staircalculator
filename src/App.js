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


class App extends Component {

  state = {
    totalRunft: 10 * 12,
    totalRunin: 0,
    totalRunfr: 0,

    totalRiseft: 6 * 12,
    totalRisein: 0,
    totalRisefr: 0,

    idealRisein: 7,
    idealRisefr: 0,

    idealRunin: 11,
    idealRunfr: 0,

    stringerin: 7 * Math.sin(Math.atan(7 / 11)),
    stringerfr: 0,

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

    runOn: true

  }

  // //Retrieves run count
  // runCount = () => {
  //   let sumRuntotal = parseInt( parseInt(this.state.totalRunft) + parseInt(this.state.totalRunin) + parseFloat(this.state.totalRunfr) );
  //   let sumRunideal = parseInt( parseInt(this.state.idealRunin) + parseFloat(this.state.idealRunfr) );
  //   return ( sumRuntotal / sumRunideal )
  // }

  // //Retrieves rise count
  // riseCount = () => {
  //   let sumRisetotal = parseInt( parseInt(this.state.totalRiseft) + parseInt(this.state.totalRisein) + parseFloat(this.state.totalRisefr) );
  //   let sumRiseideal = parseInt( parseInt(this.state.idealRisein) + parseFloat(this.state.idealRisefr) );
  //   return ( sumRisetotal / sumRiseideal )
  // }

  // //Changes rise input values based on run
  // riseChange = () => {
  //   let totalRise = this.runCount * (parseInt( parseInt(this.state.idealRisein) + parseFloat(this.state.idealRisefr) ) );
  //   return totalRise
  // }

  // //Changes run input values based on rise
  // runChange = () => {
  //   let totalRun = this.riseCount * (parseInt( parseInt(this.state.idealRunin) + parseFloat(this.state.idealRunfr) ) );
  //   return totalRun
  // }

  //Handlers for changing total run
  changetotalRunft = (event) => {
      this.setState({
        totalRunft:event.target.value,
        runOn: true
      })
  }
  changetotalRunin = (event) => {
      this.setState({
        totalRunin:event.target.value,
        runOn: true
      })
  }
  changetotalRunfr = (event) => {
      this.setState({
        totalRunfr:event.target.value,
        runOn: true
      })
  }

  //Handlers for changing total rise
  changetotalRiseft = (event) => {
      this.setState({
        totalRiseft:event.target.value,
        runOn: false
      })
  }
  changetotalRisein = (event) => {
      this.setState({
        totalRisein:event.target.value,
        runOn: false
      })
  }
  changetotalRisefr = (event) => {
      this.setState({
        totalRisefr:event.target.value,
        runOn: false
      })
  }

  //Handlers for changing ideal run
  changeidealRunin = (event) => {
    this.setState({idealRunin:event.target.value})
  }
  changeidealRunfr = (event) => {
      this.setState({idealRunfr:event.target.value})
  }

  //Handlers for changing ideal rise
  changeidealRisein = (event) => {
      this.setState({idealRisein:event.target.value})
  }
  changeidealRisefr = (event) => {
      this.setState({idealRisefr:event.target.value})
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

  render(){
    return (
      <div className="container-fluid">
        <div className="row">

          <div id="sidebar" className="col-4">
              <div>
                <div class="title">Rise-run</div>
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
            />

            <div>
                <div class="title">Headroom</div>
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
          
            <StairAngle />
        </div>

        <div className="col-8" id="container">
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
          />
        </div>
        
      </div>

    </div>
    );
  }
}



export default App;

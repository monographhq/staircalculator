import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import TotalRun from './Components/inputs/totalrun';
import TotalRise from './Components/inputs/totalrise';
import IdealRun from './Components/inputs/idealrun';
import IdealRise from './Components/inputs/idealrise';
import Details from './Components/inputs/details';
import StairAngle from './Components/inputs/stairangle';
import Height from './Components/inputs/height';
import FloorOpening from './Components/inputs/flooropening';
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
    idealRunfr: 0
  }

  changetotalRunft = (event) => {
      this.setState({totalRunft:event.target.value})
  }

  changetotalRunin = (event) => {
      this.setState({totalRunin:event.target.value})
  }

  changetotalRunfr = (event) => {
      this.setState({totalRunfr:event.target.value})
  }

  changetotalRiseft = (event) => {
      this.setState({totalRiseft:event.target.value})
  }

  changetotalRisein = (event) => {
      this.setState({totalRisein:event.target.value})
  }

  changetotalRisefr = (event) => {
      this.setState({totalRisefr:event.target.value})
  }

  changeidealRisein = (event) => {
      this.setState({idealRisein:event.target.value})
  }

  changeidealRisefr = (event) => {
      this.setState({idealRisefr:event.target.value})
  }

  render(){
    return (
      <div className="container-fluid">
        <div className="row">

          <div id="sidebar" className="col-4">
              <div>
                <div>Rise-run</div>
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

            <Details />

            <div>
                <div>Headroom</div>
                <Height />
                <FloorOpening />
                <FloorThickness />
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
          />
        </div>
        
      </div>

    </div>
    );
  }
}



export default App;

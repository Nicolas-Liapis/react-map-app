import React, {Component} from 'react';
import Map from './Map';
import Control from './Control';
import {json as requestJson} from 'd3-request';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            materials: null,
            data: null
        };
      }

    
  componentDidMount() {
    requestJson(
      'https://raw.githubusercontent.com/JRGranell/javascript-challenge/master/data/boat_ramps.geojson',
      (error, response) => {
        if (!error) {
          this.loadData(response);
          this.getMaterials(response);
        }
      }
    );
  }
  
  loadData = data => {
    this.setState({data});
  };

  getMaterials(res) {
    let array = res.features;
    let mats = [];
    array.forEach(e => {
      if(!mats.includes(e.properties.material)) {
        mats.push(e.properties.material)
      } 
    })
    this.setState({materials: mats});
  }

    render() {
        
        return (
            <div>
                <Map data={this.state.data} />
                <Control materials={this.state.materials}/>
            </div>
        );
    }
}

export default Home;
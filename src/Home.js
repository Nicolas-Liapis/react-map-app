import React, {Component} from 'react';
import Map from './Map';
import Control from './Control';
import {json as requestJson} from 'd3-request';
import { connect } from 'react-redux';
import * as dataActions from './redux/actions/dataActions';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            materials: null,
            data: null,
            newData: null,
            from: 0,
            to: 526
        };
      }

    
  componentDidMount() {
    requestJson(
      'https://raw.githubusercontent.com/JRGranell/javascript-challenge/master/data/boat_ramps.geojson',
      (error, response) => {
        if (!error) {
          this.getMaterials(response);
          this.loadData(response);
        }
      }
    );
  }
  
  loadData = data => {
    this.setState({data});
  };

  filterData(from, to, material) {
    const setData = {...this.state.data};
    let features = setData.features;
    delete setData["features"];
    let newSet = features.filter(f => f.properties.area_ <= to);
    let newSet1 = [...newSet];
    newSet1 = newSet1.filter(f => f.properties.area_ >= from);
    if (material) {
        let newSet2 = [...newSet1];
        newSet2 = newSet2.filter(f => f.properties.material === material);
        setData["features"] = newSet2;
    } else {
        setData["features"] = newSet1;
    }   
    this.setState({newData: setData});
  }

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

  controlSize = (size) => {
      if(size === 'small') {
        this.setState({from: 0, to: 49});
        this.filterData(0, 49, this.state.material);
      } else if (size === 'medium') {
        this.setState({from: 50, to: 199});
        this.filterData(50, 199, this.state.material);
      } else if (size === 'large') {
        this.setState({from: 200, to: 526});
        this.filterData(200, 526, this.state.material);
      } else if (size === 'all') {
        this.setState({from: 0, to: 526});
          this.filterData(0, 526, this.state.material);
      }
  }

  controlMat = (mat) => {
      if(mat === 'all') {
        this.props.material(null);
        this.filterData(this.state.from, this.state.to, null)
      } else {
        this.props.material(mat);
        this.filterData(this.state.from, this.state.to, mat)
      } 
  }

    render() {
        let len;
        if (this.state.newData) {
             len= this.state.newData.features.length;
        } else {
            len = 106;
        }
        return (
            <div>
                <Map data={this.state.newData ? this.state.newData : this.state.data} />
                <Control length={len} cbMat={this.controlMat} cbSize={this.controlSize} materials={this.state.materials}/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        material: state.material
    };
}

function mapDispatchToProps(dispatch) {
    return {
        material: mat => dispatch(dataActions.material(mat))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home) ;
import React, {Component} from 'react';


class Control extends Component {
    
  constructor(props) {
    super(props);
    this.handleClickSize = this.handleClickSize.bind(this);
    this.state = {
      size: 'all',
      material: 'all'
    }
  }

  handleClickSize = (e) => {
    this.props.cbSize(e.target.id);
    this.setState({size: e.target.id});
  }

  handleClickMaterial = (e) => {
    this.props.cbMat(e.target.id);
    this.setState({material: e.target.id})
  }
  
    materials() {
      const mats = this.props.materials;
      if(mats) {
        let res = mats.map(m => (
          <button key={m} id={m} type="button" className="btn btn-secondary" onClick={this.handleClickMaterial} >{m}</button>
        ))
          return res;
      } 
    }

    render() {
      const mats = this.materials();
        return (
            <div className="container-fluid">
                <h4> Size: <span className="badge badge-light">{this.state.size}</span> Material: <span className="badge badge-light">{this.state.material}</span> Count: <span className="badge badge-light">{this.props.length}</span> </h4>
                <h2>Boat Ramp Size</h2>
                 <div className="btn-group btn-group-lg" role="group" aria-label="Size group">
                    <button id="all" type="button" className="btn btn-secondary" onClick={this.handleClickSize} >All [0,526]</button>
                    <button id="small" type="button" className="btn btn-secondary" onClick={this.handleClickSize}>Small [0,50)</button>
                    <button id="medium" type="button" className="btn btn-secondary" onClick={this.handleClickSize} >Medium [50,200)</button>
                    <button id="large" type="button" className="btn btn-secondary" onClick={this.handleClickSize} >Large [200,526)</button>
                </div>
                <hr/>
                <h2>Boat Ramp Material</h2>
                <div className="btn-group btn-group-lg" role="group" aria-label="Size group">
                <button id="all" type="button" className="btn btn-secondary" onClick={this.handleClickMaterial} >All</button>
                  {mats}
                </div>
            </div>
        );
    }
}

export default Control;

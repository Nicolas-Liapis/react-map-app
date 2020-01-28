import React, {Component} from 'react';
import './Control.css';

const Button = ({type}) => (
<button type="button" className="btn btn-secondary" >{type}</button>
)


class Control extends Component {
    
  
    materials() {
      const mats = this.props.materials;
      if(mats) {
        let res = mats.map(m => (
          <Button key={m} type={m} />
        ))
          return res;
      } 
    }

    render() {
      const mats = this.materials();
        return (
            <div className="container-fluid">
                <h2>Boat Ramp Size</h2>
                 <div className="btn-group btn-group-lg" role="group" aria-label="Size group">
                    <button type="button" className="btn btn-secondary" >Small [0,50)</button>
                    <button type="button" className="btn btn-secondary" >Medium [50,200)</button>
                    <button type="button" className="btn btn-secondary" >Large [200,526)</button>
                </div>
                <hr/>
                <h2>Boat Ramp Material</h2>
                <div className="btn-group btn-group-lg" role="group" aria-label="Size group">
                  {mats}
                </div>
            </div>
        );
    }
}

export default Control;
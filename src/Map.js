import React, {Component} from 'react';
import ReactMapGL, {Source, Layer} from 'react-map-gl';
import {dataLayer} from './map-styles.js';

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      viewport: {
        width: "100%",
        height: "50vh",
        latitude: -28.0167,
        longitude: 153.380,
        zoom: 12
      }
    };
  }

  render() {
        return (
          <div id="map-container">
            <ReactMapGL
                    {...this.state.viewport}
                    mapboxApiAccessToken={'pk.eyJ1Ijoibmljb2xhcy1saWFwaXMiLCJhIjoiY2s1d283a2p6MGIzNjNvbnhja2h4NjdidCJ9.jds1Nl6CiXj1p9za1K4iGw'}
                    onViewportChange={(viewport) => this.setState({viewport})}
                  >
              <Source type="geojson" data={this.props.data}>
              <Layer {...dataLayer} />
              </Source>
            </ReactMapGL>
          </div>
    );
  }
}

export default Map;

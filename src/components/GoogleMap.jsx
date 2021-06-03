import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import icon from "../icons/marker.png";

class GoogleMapsPage extends Component {
  static defaultProps = {
    center: {
      lat: 39.9734675325957,
      lng: 32.8952696310105,
    },
    zoom: 6,
  };

  render() {
    return (
      <div style={{ height: "30vh", width: "100%", marginBottom: "30px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyCXyYY8r3oNdu_CdRUkarJcwryrY70EIDo",
            language: "en",
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <img src={icon}></img>
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapsPage;

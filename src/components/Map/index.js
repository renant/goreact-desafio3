import React, { Component } from "react";

import MapGL from "react-map-gl";

export default class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.18944245,
      longitude: -46.88552856,
      zoom: 14
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  resize = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  };

  render() {
    const { viewport } = this.state;
    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      />
    );
  }
}

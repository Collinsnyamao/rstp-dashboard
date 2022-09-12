import React, { Component } from "react";
// components

//import CardLineChart from "components/Cards/CardLineChart.js";
//import CardVideos from "components/Cards/CardVideo";
import CardVideo from "components/Cards/CardVideo";
import CardBarChart from "components/Cards/CardBarChart";

class Dashboard extends Component {
  state = {
    src: "http://localhost:8083/stream/pattern/channel/0/hls/live/index.m3u8",
  };

  setSrc = (src) => {
    this.setState({ src: src });
  };
  render() {
    const { src } = this.state;
    return (
      <>
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardVideo src={src} />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardBarChart setSrc={this.setSrc} />
          </div>
        </div>
        {/* <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div> */}
      </>
    );
  }
}

export default Dashboard;

import React, { Component } from "react";

class CardBarChart extends Component {
  state = {
    buttons: {
      hst: true,
      rstptoweb: false,
      mse: false,
      hlsll: false,
    },
    sources: {
      hst: "http://localhost:8083/stream/pattern/channel/0/hst/live/index.m3u8",
      rstptoweb:
        "http://localhost:8083/stream/pattern/channel/0/webrtc/live/index.m3u8",
      mse: "http://localhost:8083/stream/pattern/channel/0/mse/live/index.m3u8",
      hlsll:
        "http://localhost:8083/stream/pattern/channel/0/hlsll/live/index.m3u8",
    },
  };

  handleClick = (e) => {
    console.log("name", e.target.name);
    const { buttons, sources } = this.state;

    let allKeys = ["hst", "rstptoweb", "mse", "hlsll"];
    allKeys.forEach((key) => {
      this.props.setSrc(sources[e.target.name]);
      if (key === e.target.name) {
        buttons[key] = true;
      } else {
        buttons[key] = false;
      }
    });

    this.setState({ buttons });
  };
  render() {
    const { hst, rstptoweb, mse, hlsll } = this.state.buttons;
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                  Feeds
                </h6>
                <h2 className="text-blueGray-700 text-xl font-semibold">
                  All feeds
                </h2>
              </div>
            </div>
          </div>
          <div className="p-4 flex-auto">
            {/* Chart */}
            <div className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <button
                aria-current="true"
                type="button"
                name="hst"
                onClick={this.handleClick}
                className={`py-2 px-4 w-full font-medium text-left  text-white rounded-t-lg border-b border-gray-200 cursor-pointer hover:bg-gray-900 focus:outline-none dark:bg-gray-800 dark:border-gray-600 ${
                  hst ? "bg-blueGray-700 text-white" : "text-blueGray-700"
                }`}
              >
                HST
              </button>
              <button
                type="button"
                name="rstptoweb"
                onClick={this.handleClick}
                className={`py-2 px-4 w-full font-medium text-left  text-white border-b border-gray-200 cursor-pointer hover:bg-gray-900 focus:outline-none ${
                  rstptoweb ? "bg-blueGray-700 text-white" : "text-blueGray-700"
                }`}
              >
                RSTP to Web
              </button>
              <button
                type="button"
                name="mse"
                onClick={this.handleClick}
                className={`py-2 px-4 w-full font-medium text-left  text-white border-b border-gray-200 cursor-pointer hover:bg-gray-900 focus:outline-none ${
                  mse ? "bg-blueGray-700 text-white" : "text-blueGray-700"
                }`}
              >
                MSE
              </button>
              <button
                type="button"
                name="hlsll"
                onClick={this.handleClick}
                className={`py-2 px-4 w-full font-medium text-left  text-white rounded-b-lg border-gray-200 cursor-pointer hover:bg-gray-900 focus:outline-none ${
                  hlsll ? "bg-blueGray-700 text-white" : "text-blueGray-700"
                }`}
              >
                HLSLL
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CardBarChart;

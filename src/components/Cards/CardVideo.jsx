import React, { Component } from "react";
import VideoFeed from "components/VideoFeed";
import { auto } from "@popperjs/core";
class CardVideos extends Component {
  render() {
    const videoJsOptions = {
      autoplay: "muted",
      controls: true,
      preload: auto,
      liveui: true,
      sources: [
        {
          src: this.props.src,
          type: "application/x-mpegURL",
        },
      ],
    };
    return (
      <>
        <div className="relative h-full flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                  Overview
                </h6>
                <h2 className="text-white text-xl font-semibold">
                  Sales value
                </h2>
              </div>
            </div>
          </div>
          <div className="p-4 flex-auto">
            {/* Chart */}
            <div className="relative h-350-px">
              <VideoFeed {...videoJsOptions} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CardVideos;

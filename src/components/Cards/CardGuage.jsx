import React, { Component } from "react";
import {
  IgrRadialGaugeModule,
  IgrRadialGauge,
  IgrRadialGaugeRange,
} from "igniteui-react-gauges";

IgrRadialGaugeModule.register();

class CardGuage extends Component {
  state = {};
  render() {
    const { value, title } = this.props;
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="rounded-t mb-0 px-4 py-2 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h6 className="uppercase mx-auto text-blueGray-400 mb-1 text-xs font-semibold">
                  {title}
                </h6>
              </div>
            </div>
          </div>
          <div className="p-2 mx-auto mb-4 flex-auto">
            {/* Chart */}
            <IgrRadialGauge
              tickStartExtent={0.45}
              tickEndExtent={0.575}
              tickStrokeThickness={2}
              tickBrush="DodgerBlue"
              minorTickCount={4}
              minorTickEndExtent={0.5}
              minorTickStartExtent={0.575}
              minorTickStrokeThickness={1}
              minorTickBrush="DarkViolet"
              height="200px"
              width="200px"
              minimumValue={0}
              value={value}
              maximumValue={100}
              interval={10}
            />
          </div>
        </div>
      </>
    );
  }
}

export default CardGuage;

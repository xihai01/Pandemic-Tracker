import { useEffect, useState } from "react";
import HealthRegion from "./HealthRegion";
import * as d3 from "d3";

/**
 *
 * @param {mapData} props
 * This component takes in mapData and renders each health region
 */
export default function HealthRegionList(props) {
  // restriction holds restrictions data for health regions
  const [restriction, setRestriction] = useState({});
  const { svgLoad, setSvgLoad, mapData, stageObj, loading } = props;
  // create a tooltip only once
  useEffect(() => {
     /// tooltip
     d3.select('body')
     .append('div')
     .attr('id', 'tooltip')
     .attr('style', 'position: absolute; opacity: 0');
     ///
  }, []);
  // wait until mapData is loaded and ready for use
  if (!loading) {
    const projection = d3.geoAlbers();
 /*    .scale(1480)
    .translate([960/2, 480/2])
    .precision(.1); */
    const path = d3.geoPath().projection(projection);
    // adjust projection to fit area of svg
    projection.precision(0).rotate([90, 0, 0]).fitExtent(
      [
        [0, 0],
        [960, 480],
      ],
      mapData
    );

    const healthRegionList = mapData.features.map((data) => {
      // get the stage # and phuID for each health region
      let phuID = data.properties["PHU_ID"];
      let region_name = data.properties["NAME_ENG"];
      let stageID = stageObj[phuID];
      return (
        <HealthRegion
          key={data.properties.FID}
          pathData={path(data)}
          stageID={stageID}
          setRestriction={setRestriction}
          phuID={phuID}
          tooltipData={region_name}
        />
      );
    });

    // get user's current geo coordinates in lat/long
    const success = function(pos) {
      const projection = d3.geoAlbers();
      const coords = [pos.coords.longitude, pos.coords.latitude];
      projection.rotate([90, 0, 0]).fitExtent(
        [
          [0, 0],
          [960, 480],
        ],
        mapData
      );
      const pixels = projection(coords);
      const body = d3.select("body");
      body.append("div")
      .style("position", "absolute")
      .style("width", 50 + "px")
      .style("height", 50 + "px")
      .style("background-color", "blue")
      .style("left", pixels[0] + "px")
      .style("top", pixels[1] + "px");

      console.log(pixels[0]);
      console.log(pixels[1]);
    }
    const error = function(error) {
      console.warn(error);
    }
    navigator.geolocation.getCurrentPosition(success, error);

    return (
      <>
        <button
          onClick={() => {
            console.log("hi");
            svgLoad ? setSvgLoad(0) : setSvgLoad(1);
          }}
        >
          enable pan and zoom
        </button>
        <svg>
          <g>{healthRegionList}</g>
        </svg>
        <div>
          {JSON.stringify(restriction.restrictions)}
        </div>
        <div>
          {JSON.stringify(restriction.stats)}
        </div>
      </>
    );
  }
  return <h1>Loading...</h1>;
}

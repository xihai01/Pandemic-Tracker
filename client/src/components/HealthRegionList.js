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
    const path = d3.geoPath().projection(projection);
    // adjust projection to fit area of svg
    projection.rotate([90, 0, 0]).fitExtent(
      [
        [0, 0],
        [1000, 2000],
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
        <svg viewBox="-500 490 2000 1000">
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

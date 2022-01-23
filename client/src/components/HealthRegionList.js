import { useState } from "react";
import HealthRegion from "./HealthRegion";
import { setMapProjection } from "helpers/setMapProjection";
import * as d3 from "d3";
import useMapTools from "hooks/useMapTools";

/**
 *
 * @param {mapData} props
 * This component takes in mapData and renders each health region
 */
export default function HealthRegionList(props) {
  // restriction holds restrictions data for health regions
  const [restriction, setRestriction] = useState({});
  const { svgLoad, setSvgLoad, mapData, stageObj, loading } = props;
  // render tooltip and geoloc marker
  useMapTools(mapData, loading);
  // wait until mapData is loaded and ready for use
  if (!loading) {
    const path = d3.geoPath().projection(setMapProjection(mapData));

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
        <svg>
          <g>{healthRegionList}</g>
        </svg>
        <button
          onClick={() => {
            console.log("hi");
            svgLoad ? setSvgLoad(0) : setSvgLoad(1);
          }}
        >
          enable pan and zoom
        </button>
        <div>{JSON.stringify(restriction.restrictions)}</div>
        <div>{JSON.stringify(restriction.stats)}</div>
      </>
    );
  }
  return <h1>Loading...</h1>;
}

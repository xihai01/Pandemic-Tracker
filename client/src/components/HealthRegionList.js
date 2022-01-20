import HealthRegion from "./HealthRegion";
import * as d3 from "d3";

/**
 *
 * @param {mapData} props
 * This component takes in mapData and renders each health region
 */
export default function HealthRegionList(props) {
  const { svgLoad, setSvgLoad, mapData, stageObj, loading } = props;
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
      // get the stage # for each health region
      let stageID = stageObj[data.properties["PHU_ID"]];
      return (
        <HealthRegion
          key={data.properties.FID}
          pathData={path(data)}
          stageID={stageID}
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
      </>
    );
  }
  return <h1>Loading...</h1>;
}

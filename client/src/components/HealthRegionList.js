import HealthRegion from "./HealthRegion";
import * as d3 from "d3";

/**
 *
 * @param {mapData} props
 * This component takes in mapData and renders each health region
 */
export default function HealthRegionList(props) {
  const { mapData, svgLoad, setSvgLoad } = props;
  let enableZoomPan = false;
  // wait until mapData is loaded and ready for use
  if (mapData.features) {
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
    const healthRegionList = mapData.features.map((data) => (
      <HealthRegion key={data.properties.FID} pathData={path(data)} />
    ));

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
        <svg viewBox="-500 490 2000 1000" preserveAspectRatio="xMidYmid meet">
          {healthRegionList}
        </svg>
      </>
    );
  }
  return <h1>Loading...</h1>;
}

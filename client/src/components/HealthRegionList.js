import { useState } from "react";
import HealthRegion from "./HealthRegion";
import { setMapProjection } from "helpers/setMapProjection";
import { DisplayRestrictions } from "./DisplayRestrictions";
import * as d3 from "d3";
import { CircularProgress } from "@material-ui/core";
import useMapTools from "hooks/useMapTools";
import Navbar from "./Navbar";
import { Button } from "@material-ui/core";
import { Container } from "@mui/material";

/**
 *
 * @param {mapData} props
 * This component takes in mapData and renders each health region
 */
export default function HealthRegionList(props) {
  // restriction holds restrictions data for health regions
  const [restriction, setRestriction] = useState({});
  const [status, setStatus] = useState(false);
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
          setStatus={setStatus}
          phuID={phuID}
          tooltipData={region_name}
        />
      );
    });
    console.log(loading);

    return (
      <Container maxWidth="sm">
      <div className="map-page">
        <Navbar />
        <svg className="image">
          <g>{healthRegionList}</g>
        </svg>
        <div  className="zoom-button">
        <Button
          onClick={() => {
            console.log("hi");
            svgLoad ? setSvgLoad(0) : setSvgLoad(1);
          }}
          variant="contained"
        >
          Zoom In
        </Button>
        </div>
        <DisplayRestrictions status={status} restriction={restriction} />
      </div>
      </Container>
    );
  } else {
    return (
      <div className="loading">
        <CircularProgress color="primary" size="250px" />
      </div>
    );
  }
}

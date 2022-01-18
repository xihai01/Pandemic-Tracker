import useApplicationData from "./hooks/useApplicationData";
import useInitialize from "./hooks/useInitialize";
import HealthRegion from "./components/HealthRegion";
import HealthRegionList from "./components/HealthRegionList";
import { handleZoom, zoomMap } from "./helpers/handleZoom";
import { useState } from "react";
import * as d3 from "d3";
import "./App.css";

function App() {
  // setup application for use
  const { svgLoad, setSvgLoad, mapData } = useInitialize();

  return (
    <>
      <div className="App"></div>
      <div>
        <HealthRegionList
          svgLoad={svgLoad}
          setSvgLoad={setSvgLoad}
          mapData={mapData}
        />
      </div>
    </>
  );
}

export default App;

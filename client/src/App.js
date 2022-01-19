import useApplicationData from "./hooks/useApplicationData";
import useInitialize from "./hooks/useInitialize";
import HealthRegion from "./components/HealthRegion";
import HealthRegionList from "./components/HealthRegionList";
import { handleZoom, zoomMap } from "./helpers/handleZoom";
import { useState } from "react";
import * as d3 from "d3";
import "./App.css";
import Home from "./components/Home";

function App() {
  // setup application for use
  const { svgLoad, setSvgLoad, mapData, stageObj } = useInitialize();

  return (
    <>
      <div className="App">
        {" "}
        <Home />{" "}
      </div>
      <div>
        <HealthRegionList
          svgLoad={svgLoad}
          setSvgLoad={setSvgLoad}
          mapData={mapData}
          stageObj={stageObj}
        />
      </div>
    </>
  );
}

export default App;

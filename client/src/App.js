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
  const {
    svgLoad,
    setSvgLoad,
    mapData,
    stageObj,
    loading,
    restriction,
    setRestriction,
  } = useInitialize();

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
          loading={loading}
          setRestriction={setRestriction}
        />
        <div>
          {JSON.stringify(restriction)}
        </div>
      </div>
    </>
  );
}

export default App;

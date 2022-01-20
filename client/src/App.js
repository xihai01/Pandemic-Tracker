import useApplicationData from "./hooks/useApplicationData";
import useInitialize from "./hooks/useInitialize";
import HealthRegion from "./components/HealthRegion";
import HealthRegionList from "./components/HealthRegionList";
import { handleZoom, zoomMap } from "./helpers/handleZoom";
import { useState } from "react";
import * as d3 from "d3";
import "./App.css";
import Home from "./components/Home";
import { AdminBoard } from "components/Admin";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {

  // setup application for use
  const { svgLoad, setSvgLoad, mapData } = useInitialize();

  return (

    <>
      <Router>
        <Routes>
          <div className="App">  
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<AdminBoard />} />
            <Route path="*" element={<h2>Page not found</h2>} />
            
            <AdminBoard />
          </div>
        </Routes>
      </Router>
      
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

import useApplicationData from "./hooks/useApplicationData";
import HealthRegion from "./components/HealthRegion";
import HealthRegionList from "./components/HealthRegionList";
import { useState } from "react";
import * as d3 from "d3";
import "./App.css";

const handleZoom = function (e) {
  d3.selectAll("path").attr("transform", e.transform);
};

function App() {
  const [svgLoad, setSvgLoad] = useState(0);
  const { state } = useApplicationData();
  // mapData contains the geoJSON data we need
  const { mapData } = state;
  const userList = state.users.map((user) => (
    <li key={user.id}>
      {" "}
      {user.first_name} {user.last_name} {user.email}{" "}
    </li>
  ));
  console.log(state);

  if (svgLoad) {
    console.log("svg exists");
    // get module for zoom and pan behaviour
    let zoom = d3
      .zoom()
      .scaleExtent([1, 5])
      .translateExtent([
        [0, 0],
        [1000, 1500],
      ])
      .on("zoom", handleZoom);
    d3.select("svg").call(zoom);
  }

  return (
    <div className="App">
      <h1> Users </h1>
      <ul> {userList} </ul>
      <HealthRegionList
        svgLoad={svgLoad}
        setSvgLoad={setSvgLoad}
        mapData={mapData}
      />
    </div>
  );
}

export default App;

import useApplicationData from "./hooks/useApplicationData";
import HealthRegion from "./components/HealthRegion";
import HealthRegionList from "./components/HealthRegionList";
import { handleZoom, zoomMap } from "./helpers/handleZoom";
import { useState } from "react";
import * as d3 from "d3";
import "./App.css";

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

  zoomMap(svgLoad);

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

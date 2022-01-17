import useApplicationData from "./hooks/useApplicationData";
import HealthRegion from "./components/HealthRegion";
import * as d3 from "d3";
import "./App.css";

function App() {
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
    )
    const healthRegionList = mapData.features.map((data) => (
      <HealthRegion key={data.properties.FID} pathData={path(data)} />
    ));
    return (
      <div className="App">
        <h1> Users </h1>
        <ul> {userList} </ul>
        <svg viewBox="-500 500 2000 1000" preserveAspectRatio="xMidYmid meet" >{healthRegionList}</svg>
      </div>
    );
  }
  return <h1>Loading</h1>
}

export default App;

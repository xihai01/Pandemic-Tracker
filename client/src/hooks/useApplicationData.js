import { useEffect, useReducer } from "react";
import dataReducer, {
  SET_STAGE_COLOR,
  SET_DATA,
} from "../reducer/data_reducer";
import axios from "axios";
import * as d3 from "d3";

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    stageObj: {},
    mapData: [],
    loading: true,
  });
  useEffect(() => {
    // load geoJSON data and stage # data for each region
    Promise.all([
      d3.json("http://localhost:3000/api/maps"),
      axios.get("http://localhost:3000/api/map_color"),
    ])
      .then(([mapData, stageObj]) => {
        dispatch({
          type: SET_DATA,
          mapData: mapData,
          stageObj: stageObj.data,
        });
      })
      .catch((error) => {
        console.log("error getting map data");
      });
  }, []);

  return {
    state,
    dispatch,
  };
};

export default useApplicationData;

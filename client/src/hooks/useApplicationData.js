import { useEffect, useReducer } from "react";
import dataReducer, { SET_USERS, SET_DATA } from "../reducer/data_reducer";
import axios from "axios";
import * as d3 from "d3";

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    users: [],
    mapData: [],
    loading: true,
  });
  useEffect(() => {
    // get geoJSON from server
    d3.json("http://localhost:3000/api/maps")
      .then((data) => {
        console.log(data);
        dispatch({
          type: SET_DATA,
          mapData: data,
        });
      })
      .catch((error) => {
        console.log("error reading file");
      });

    axios({
      method: "GET",
      url: "http://localhost:3000/api/users",
    })
      .then(({ data }) => {
        console.log(data);
        dispatch({
          type: SET_USERS,
          users: data,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return {
    state,
    dispatch,
  };
};

export default useApplicationData;

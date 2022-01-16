import { useEffect, useReducer } from "react";
import dataReducer, { SET_USERS } from "../reducer/data_reducer";
import axios from "axios";
import * as D3 from "d3";

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    users: [],
    loading: true,
  });
  useEffect(() => {
    D3.json("http://localhost:3000/api/maps")
      .then((data) => {
        console.log(data);
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

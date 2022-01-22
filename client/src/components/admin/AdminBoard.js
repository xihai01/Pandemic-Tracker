import { useReducer, useEffect } from "react";
import axios from "axios";
import adminReducer, { SET_DATA } from "reducer/admin_reducer";
import { useNavigate } from "react-router-dom";
import { Box, AppBar } from "@mui/material";

export default function AdminBoard() {
  const [state, dispatch] = useReducer(adminReducer, {
    stages: [],
    healthRegions: [],
    loading: true,
    error: null,
  });
  const navigate = useNavigate();

  const auth = localStorage.getItem("auth") === "true";
  useEffect(() => {
    if (!auth) {
      return navigate("/admin");
    }

    Promise.all([
      axios.get("/admin/health_regions"),
      axios.get("/admin/stages"),
    ])
      .then(([healthRegions, stages]) => {
        dispatch({
          type: SET_DATA,
          healthRegions: healthRegions.data,
          stages: stages.data,
        });
      })
      .catch((err) => console.log(`Unable to fecth API data`));
  }, []);

  console.log(`state`, state);

  function clearAuth() {
    localStorage.clear();
    axios.get("/admin/logout").then(() => {
      navigate("/admin");
    });
  }
  return (
    <>
      {auth && (
        <Box>
          <AppBar>
            <h2>Admin Page Dashboard</h2>
            <button onClick={clearAuth}>Logout</button>
          </AppBar>
          <button>hello</button>
        </Box>
      )}
    </>
  );
}

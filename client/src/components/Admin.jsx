import {useReducer, useEffect} from 'react';
import axios from "axios";
import adminReducer, { SET_DATA } from "reducer/admin_reducer";



export function AdminBoard(){

  const [state, dispatch] = useReducer(adminReducer,{
    stages: [],  
    health_regions: [],
    loading: true,
    error: null
  });


  useEffect(()=>{
    Promise.all(axios.get('/admin/health_regions'),
    axios.get('/admin/stages'))
    .then(([healthRegions, stages])=>{
      dispatch({ type: SET_DATA, healthRegions, stages });
    })
    .catch((error) => {

      console.log("error reading file");
    });}
  ,[])


    return(
      <h2>Admin Page</h2>
    )


}
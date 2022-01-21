import {useReducer, useEffect} from 'react';
import axios from "axios";
import adminReducer, { SET_DATA } from "reducer/admin_reducer";



export default function AdminBoard(){
  
  const [state, dispatch] = useReducer(adminReducer,{
    stages: [],  
    healthRegions: [],
    loading: true,
    error: null
  });


  useEffect(()=>{
    Promise.all([axios.get('/admin/health_regions'),axios.get('/admin/stages')])
    .then(([healthRegions, stages])=>{
      dispatch({type: SET_DATA, healthRegions: healthRegions.data, stages: stages.data});
    })
    .catch(err=>console.log(`Unable to fecth API data`))
  },[])
  
  console.log(`state`, state);
  
  return(
    <h2>Admin Page Dashboard</h2>
  )
}
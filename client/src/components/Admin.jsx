import {useReducer, useEffect} from 'react';
import axios from "axios";
import adminReducer, { SET_STAGE, SET_REGION } from "reducer/admin_reducer";






export function AdminBoard(){

  const [state, dispatch] = useReducer(adminReducer,{
    stage: [],  
    health_regions: [],
    loading: true
  });


  useEffect(()=>{
    Promise.all(axios.get('/admin/dashboard')
    .then(([dashboard])=>{
      dispatch({ type: SET_APPLICATION_DATA, days, appointments, interviewers });
    }))
    
  },[])



}
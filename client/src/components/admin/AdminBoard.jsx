import {useReducer, useEffect} from 'react';
import axios from "axios";
import adminReducer, { SET_DATA } from "reducer/admin_reducer";
import { useNavigate } from 'react-router-dom';
import AdminLogin from './AdminLogin';



export default function AdminBoard(){
  
  const [state, dispatch] = useReducer(adminReducer,{
    stages: [],  
    healthRegions: [],
    loading: true,
    error: null
  });
  const navigate = useNavigate();





  useEffect(()=>{
    
    const auth = localStorage.getItem('auth') === 'true';
    if(!auth){
      return navigate('/admin')
    };

    Promise.all([axios.get('/admin/health_regions'),axios.get('/admin/stages')])
    .then(([healthRegions, stages])=>{
      dispatch({type: SET_DATA, healthRegions: healthRegions.data, stages: stages.data});
    })
    .catch(err=>console.log(`Unable to fecth API data`))

 
  },[])
  
  console.log(`state`, state);


  function clearAuth(){
    localStorage.clear();
    axios.get('/admin/logout').then(()=>{
      navigate('/admin');
    })
  }
  return(
    <>
      <h2>Admin Page Dashboard</h2>
      <button onClick={clearAuth}>Logout</button>
    </>
  )
}
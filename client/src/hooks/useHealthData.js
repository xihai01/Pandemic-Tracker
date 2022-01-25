import { useReducer, useEffect } from 'react';
import adminReducer, { SET_REGIONS } from "reducer/admin_reducer";
import axios from 'axios'


export default function useHealthData(){
  const [state, dispatch] = useReducer(adminReducer, {
    healthRegions: [],
    loading: true,
    error: null
  })

  useEffect(()=>{
    axios.get(`/admin/health_regions`)
    .then((res)=>{
      dispatch({type: SET_REGIONS, healthRegions: res.data});
    })
    .catch()
  } ,[]);

  const columns = [
    { title: 'Region code', field: 'region_code' },
    { title: 'Name', field: 'region_name',filtering: false},
    { title: 'Lockdown Stage', field: 'stage_id'},
    { title: 'Created On', field: 'created_at',editable: 'never',filtering: false},
    { title: 'Last Update', field: 'updated_at',editable: 'never',filtering: false}





    // {
    //   title: 'Birth Place',
    //   field: 'birthCity',
    //   lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    // },
  ]


  function editRow(id) {
    return axios.put(`/admin/stages/${id}`)
    .then(res=> {
      
      dispatch({ type: SET_REGIONS, id});
    });
    
  }

  function deleteRow(id, interview, mode) {
    //needs work
    // return axios.put(`/api/appointments/${id}`,{interview})
    // .then(res=> {
    //   dispatch({ type: SET_INTERVIEW, id, interview, mode});
    // });
    

  }

  return {
    state,
    columns,
    editRow,
    deleteRow
  }
}


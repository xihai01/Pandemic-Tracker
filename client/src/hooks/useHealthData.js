import { useReducer, useEffect } from 'react';
import adminReducer, { SET_REGIONS } from "reducer/admin_reducer";
import { filteredArray, newObject } from 'helpers/tableFuncs';
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

  ]


  function editRow(data) {
    return Promise.all([axios.put(`/admin/health_regions/${data.id}`,{region_name:data.region_name,region_code:data.region_code,stage_id:data.stage_id}),axios.get(`/admin/health_regions`)])
    .then(([res1,res2])=> {
      console.log(`data edited sucessfully`);
      dispatch({type: SET_REGIONS, healthRegions: res2.data});
    })
    .catch(()=> console.log(`error editing data in DB`));
    
  }

  function deleteRow(data) {
    return axios.delete(`/admin/health_regions/${data.id}`)
    .then(()=> {
      console.log(`data deleted sucessfully`);
      const newArray = filteredArray(state.healthRegions,data.id);
      dispatch({type: SET_REGIONS, healthRegions: newArray});
    })
    .catch(()=> console.log(`error editing data in DB`));
    

  }

  function addRow(data) {
    return axios.post(`/admin/health_regions/`,newObject(data))
    .then(()=> {
      console.log(`data created sucessfully`);
      dispatch({type: SET_REGIONS, healthRegions: [...state.healthRegions,newObject(data)]});
    })
    .catch(()=> console.log(`error creating data in DB`));
    
  }

  return {
    state,
    columns,
    editRow,
    addRow,
    deleteRow
  }
}


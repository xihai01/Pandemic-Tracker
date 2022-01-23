import { useReducer, useEffect } from 'react';
import adminReducer, { SET_DATA } from "reducer/admin_reducer";
import axios from 'axios'


export default useHealthdata(){
const [state, dispatch] = useReducer(adminReducer, {
  healthRegions: [],
  loading: true,
  error: null
})

useEffect(() => {
  axios.get('/admin/health_regions')
    .then((stages)=>{
      dispatch({type: SET_DATA, healthRegions: healthRegions.data, stages: stages.data});
    })
    .catch(()=>console.log(`Unable to fecth API data`))
}, []);

function editRow(id) {
  return axios.delete(`/api/appointments/${id}`)
  .then(res=> {
    
    dispatch({ type: SET_INTERVIEW, id, interview: null });
  });
  

}

function deleteRow(id, interview, mode) {
  
  return axios.put(`/api/appointments/${id}`,{interview})
  .then(res=> {
    dispatch({ type: SET_INTERVIEW, id, interview, mode});
  });
  

}

return {state}
}


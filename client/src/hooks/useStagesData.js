import { useReducer, useEffect } from 'react';
import adminReducer, { SET_DATA } from "reducer/admin_reducer";
import axios from 'axios'


export default function useStagesData(){
  const [state, dispatch] = useReducer(adminReducer, {
    stages: [],
    loading: true,
    error: null
  })

  useEffect(()=>{
    axios.get(`/admin/stages`)
    .then((res)=>{
      dispatch({type: SET_DATA, stages: res.data});
    })
    .catch()
  } ,[]);

  function editRow(id) {
    return axios.put(`/admin/stages/${id}`)
    .then(res=> {
      
      dispatch({ type: SET_DATA, id, interview: null });
    });
    
  }

  function deleteRow(id, interview, mode) {
    //needs work
    return axios.put(`/api/appointments/${id}`,{interview})
    .then(res=> {
      dispatch({ type: SET_INTERVIEW, id, interview, mode});
    });
    

  }

  return {
    state,
    editRow,
    deleteRow
  }
}


import { useReducer, useEffect } from 'react';
import adminReducer, { SET_STAGES } from "reducer/admin_reducer";
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
      dispatch({type: SET_STAGES, stages: res.data});
  
    })
    .catch()
  } ,[]);

  const data = [state.stages.map((stage)=>{
    
    return (
      { name:  stage.id,
        ceremony: stage.ceremony,
        color_code: stage.color_code,
        created_at: stage.created_at,
        entertainment: stage.created_at,
        food_establishments: stage.food_establishments,
        max_indoor_gathering: stage.max_indoor_gathering,
        max_outdoor_gathering: stage.max_outdoor_gathering,
        personal_care: stage.personal_care,
        retail: stage.retail,
        sports_recreational: stage.sports_recreational,
        updated_at: stage.updated_at
      }
    )
      
      
  })]

  function editRow(id) {
    return axios.put(`/admin/stages/${id}`)
    .then(res=> {
      
      dispatch({ type: SET_STAGES, id, interview: null });
    });
    
  }

  function deleteRow(id, interview, mode) {
    //needs work
    return axios.put(`/api/appointments/${id}`,{interview})
    .then(res=> {
      dispatch({ type: SET_STAGES, id, interview, mode});
    });
    

  }

  return {
    state,
    editRow,
    data,
    deleteRow
  }
}


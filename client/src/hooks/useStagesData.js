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

  const columns = [
    { title: 'Stage', field: 'id' },
    { title: 'Ceremony', field: 'ceremony', initialEditValue: 'initial edit value' },
    { title: 'Color code', field: 'color_code'},
    { title: 'Created On', field: 'created_at'},
    { title: 'Entertainment', field: 'entertainment'},
    { title: 'Food establishments', field: 'food_establishments'},
    { title: 'Indoor gatherings', field: 'max_indoor_gathering'},
    { title: 'Outdoor gatherings', field: 'max_outdoor_gathering'},
    { title: 'Personal care', field: 'personal_care'},
    { title: 'Retail', field: 'retail'},
    { title: 'Sports/Recreation', field: 'sports_recreational'},
    { title: 'Last Update', field: 'updated_at'}






    // {
    //   title: 'Birth Place',
    //   field: 'birthCity',
    //   lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    // },
  ]

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
    columns,
    deleteRow
  }
}


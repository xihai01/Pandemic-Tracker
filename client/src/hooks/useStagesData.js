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

 

  const columns = [
    { title: 'Stage', field: 'id' },
    { title: 'Ceremony', field: 'ceremony'},
    { title: 'Color code', field: 'color_code'},
    { title: 'Created On', field: 'created_at', editable: 'never'},
    { title: 'Entertainment', field: 'entertainment'},
    { title: 'Food establishments', field: 'food_establishments'},
    { title: 'Indoor gatherings', field: 'max_indoor_gathering'},
    { title: 'Outdoor gatherings', field: 'max_outdoor_gathering'},
    { title: 'Personal care', field: 'personal_care'},
    { title: 'Retail', field: 'retail'},
    { title: 'Sports/Recreation', field: 'sports_recreational'},
    { title: 'Last Update', field: 'updated_at',editable: 'never'}


  ]

  function editRow(data) {
    const {
      color_code,
      personal_care,
      entertainment,
      sports_recreational,
      ceremony,
      retail,
      food_establishments,
      max_outdoor_gathering,
      max_indoor_gathering
    } = data
    return Promise.all([axios.put(`/admin/stages/${data.id}`,
    {
      color_code,
      personal_care,
      entertainment,
      sports_recreational,
      ceremony,
      retail,
      food_establishments,
      max_outdoor_gathering,
      max_indoor_gathering
    }),
      axios.get(`/admin/stages`)])
    .then(([res1,res2])=> {
      console.log(`data edited sucessfully`);
      dispatch({type: SET_STAGES, stages: res2.data});
    })
    .catch(()=> console.log(`error editing data in DB`));
    
  }

  function deleteRow(data) {
    return Promise.all([axios.delete(`/admin/stages/${data.id}`),axios.get(`/admin/stages`)])
    .then(([res1,res2])=> {
      console.log(`data deleted sucessfully`);
      dispatch({type: SET_STAGES, stages: res2.data});
    })
    .catch(()=> console.log(`error deleting data in DB`));
    

  }

  function addRow(data) {
    const {
      color_code,
      personal_care,
      entertainment,
      sports_recreational,
      ceremony,
      retail,
      food_establishments,
      max_outdoor_gathering,
      max_indoor_gathering
    } = data
    
    return Promise.all([axios.post(`/admin/stages`,
    {
      color_code,
      personal_care,
      entertainment,
      sports_recreational,
      ceremony,
      retail,
      food_establishments,
      max_outdoor_gathering,
      max_indoor_gathering
    }),
    axios.get(`/admin/stages`)])
    .then(([res1,res2])=> {
      console.log(`data created sucessfully`);
      dispatch({type: SET_STAGES, stages: res2.data});
    })
    .catch(()=> console.log(`error creating data in DB`));
    
  }

  return {
    state,
    editRow,
    addRow,
    columns,
    deleteRow
  }
}


import { useReducer, useEffect } from 'react';
import adminReducer, { SET_USER } from "reducer/admin_reducer";
import axios from 'axios';


export default function useUserData(){
  const [state, dispatch] = useReducer(adminReducer, {
    user: [],
    loading: true,
    error: null
  })

  useEffect(()=>{
    axios.get(`/admin/users`)
    .then((res)=>{
      dispatch({type: SET_USER, user: res.data});
  
    })
    .catch()
  } ,[]);

 

  const columns = [
    { title: 'First Name', field: 'first_name',width: null },
    { title: 'Last Name', field: 'last_name'},
    { title: 'Position', field: 'position'},
    { title: 'Email', field: 'email'},
    { title: 'Created On', field: 'created_at', editable: 'never'},
    { title: 'Last Update', field: 'updated_at',editable: 'never'}
    // cellStyle: { textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: 100} for ellipsis columns

  ]

  function editRow(data) {
    const {
      position,
      first_name,
      last_name,
      email
    } = data
    return Promise.all([axios.put(`/admin/stages/${data.id}`,
    {
      position,
      first_name,
      last_name,
      email
    }),
      axios.get(`/admin/stages`)])
    .then(([res1,res2])=> {
      console.log(`data edited sucessfully`);
      dispatch({type: SET_USER, stages: res2.data});
    })
    .catch(()=> console.log(`error editing data in DB`));
    
  }

  function deleteRow(data) {
    return Promise.all([axios.delete(`/admin/stages/${data.id}`),axios.get(`/admin/stages`)])
    .then(([res1,res2])=> {
      console.log(`data deleted sucessfully`);
      dispatch({type: SET_USER, stages: res2.data});
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
      dispatch({type: SET_USER, stages: res2.data});
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


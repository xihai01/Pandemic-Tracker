import {useReducer, useEffect} from 'react';
import axios from "axios";
import adminReducer, { SET_DATA } from "reducer/admin_reducer";
import { useNavigate } from 'react-router-dom';
import { Grid, Container, Button,Paper } from '@material-ui/core';



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
    .catch(()=>console.log(`Unable to fecth API data`))


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
    <Container>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            <h2>Hello World</h2>
            <Button onClick={clearAuth}>
              Logout
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3}>
            <h2>Grids</h2>
          </Paper>
          
        </Grid>
      </Grid>

    </Container>
    </>
  )
}
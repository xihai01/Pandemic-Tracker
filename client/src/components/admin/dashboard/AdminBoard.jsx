import {useReducer, useEffect} from 'react';
import axios from "axios";
import adminReducer, { SET_DASHBOARD } from "reducer/admin_reducer";
import { useNavigate } from 'react-router-dom';
import { Grid, Container, Button,Paper, ListItemIcon, List, ListItemText, ListItem } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@mui/styles';
import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';
import { getAuth } from 'helpers/getAuth';




const drawerWidth = 180
const useStyles = makeStyles({
  drawer:{
    width: drawerWidth
  },
  drawerPaper:{
    width: drawerWidth
  },
  root:{
    display: "flex"
  },
  active:{
    background: "#fe2"
    // f4f4f4
  }

})


export default function AdminBoard({children}){

  const [state, dispatch] = useReducer(adminReducer,{
    dashboard: [],
    loading: true,
    error: null
  });
  const navigate = useNavigate();





  useEffect(()=>{

    if(!getAuth()){
      return navigate('/admin')
    };

    axios.get('/admin/dashboard')
    .then((res)=>{
      dispatch({type: SET_DASHBOARD, dashboard: res.data});
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

  const classes = useStyles();

  const menuItems = [
    {
      text: "Stages",
      icon: <SubjectOutlined color="secondary"/>,
      path: "/"
    },
    {
      text: "Public Health Units",
      icon: <AddCircleOutlined color="secondary"/>,
      path: "/"
    }
    ]

  return(
    <>
    {getAuth() && (
    <div className={classes.root}>
      <Drawer className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{paper:classes.drawerPaper}}
      >
          <Typography variant="h6">
            Starting to build
          </Typography>

        {/* list items */}
        <List>
          {menuItems.map(item=>{
            return <ListItem  key={item.text} onClick={([])=>{}}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text}/>
            </ListItem>
          })}
        </List>

      </Drawer>

      <Container>
          {/* Appbar */}
          <Button onClick={clearAuth} variant='contained' color='primary'>
            Logout
          </Button>
        <Grid container>
          <Grid item xs={12} sm={6} md={3}>
            <Paper>
              <Typography variant="body2">
                first dashboard card
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3}>
              <Typography variant="body2">
              second dashboard card
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3}>
              <Typography variant="body2">
                third dashboard card
              </Typography>
            </Paper>
          </Grid>

        </Grid>

        {children}

      </Container>
    </div>
      )  }
      </>
  )
}
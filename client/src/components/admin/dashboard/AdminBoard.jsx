import {useReducer, useEffect} from 'react';
import axios from "axios";
import adminReducer, { SET_DASHBOARD } from "reducer/admin_reducer";
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid, Container, Button,Paper, ListItemIcon, List, ListItemText, ListItem, makeStyles, AppBar, Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Drawer from '@mui/material/Drawer';
import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';
import { Card,CardContent } from '@mui/material';
import { getAuth } from 'helpers/getAuth';




const drawerWidth = 180
const useStyles = makeStyles((theme)=>{
  return {
    drawer:{
      width: drawerWidth
    },
    drawerPaper:{
      width: drawerWidth
    },
    page:{
      background:"#f9f9f9",
      width: "100%"
    },
    root:{
      display: "flex"
    },
    active:{
      background: "#f4f4f4"
    },
    title:{
      padding: theme.spacing(2)
    },
    appbar:{
      width: `calc(100% - ${drawerWidth}px)`
    },
    toolbar: theme.mixins.toolbar
  }
})


export default function AdminBoard({children}){

  const [state, dispatch] = useReducer(adminReducer,{
    dashboard: [],
    loading: true,
    error: null
  });
  const navigate = useNavigate();
  const location = useLocation();





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
      path: "/stages"
    },
    {
      text: "Public Health Units",
      icon: <AddCircleOutlined color="secondary"/>,
      path: "/regions"
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
          <Typography className={classes.title} variant="h6">
            Dashboard
          </Typography>

        {/* list items */}
        <List>
          {menuItems.map(item=>{
            return (
            <ListItem 
              button  
              key={item.text} 
              onClick={()=>{navigate(item.path)}}
              className={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text}/>
            </ListItem>)
          })}
        </List>

      </Drawer>

      <Container>
        {/* Appbar */}
        <AppBar
          className={classes.appbar}
        >
          <Toolbar>
            <Typography variant="h6">
              Hi,Welcome Back
            </Typography>
          </Toolbar>
        </AppBar>
      
        <Button onClick={clearAuth} variant='contained' color='primary'>
          Logout
        </Button>
        <div className={classes.toolbar}></div>
        <Grid container spacing={3} elevation={1} >
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Grid align="center">
                <Typography variant="h3">
                  {state.dashboard.admins}
                </Typography>
                <Typography variant="body2">
                  Admin Users
                </Typography>
                </Grid>

              </CardContent>
            </Card>
          </Grid>


          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Grid align="center">
                <Typography variant="h3">
                  {state.dashboard.health_regions}
                </Typography>
                <Typography variant="body2">
                  Public Health Units
                </Typography>
                </Grid>

              </CardContent>
            </Card>
          </Grid>


          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Grid align="center">
                <Typography variant="h3">
                  {state.dashboard.stages}
                </Typography>
                <Typography variant="body2">
                  Stages
                </Typography>
                </Grid>

              </CardContent>
            </Card> 
          </Grid>

        </Grid>
        <div className={classes.page}>
          {children}
        </div>

      </Container>
    </div>
      )  }
      </>
  )
}
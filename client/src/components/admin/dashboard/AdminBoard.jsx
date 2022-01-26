import {useReducer, useEffect} from 'react';
import axios from "axios";
import adminReducer, { SET_DASHBOARD } from "reducer/admin_reducer";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Grid, Container, Button,Paper, ListItemIcon, List, ListItemText, ListItem, makeStyles, AppBar, Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Drawer from '@mui/material/Drawer';
import { AccountCircleRounded, AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';
import { Card,CardContent } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { format } from 'date-fns';
import { Avatar } from '@material-ui/core';
import { getAuth } from 'helpers/getAuth';
import { AccountCircleOutlined } from '@material-ui/icons';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';




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
      background: "#f4f4f4",
      borderRight: "3px solid #005249"
    },
    title:{
      padding: theme.spacing(2)
    },
    appbar:{
      width: `calc(100% - ${drawerWidth}px)`
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1
    }
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
      icon: <LocalHospitalIcon color="secondary"/>,
      path: "/stages",
      
    },
    {
      text: "Units",
      icon: <CenterFocusStrongIcon color="secondary"/>,
      path: "/regions",
      

    },
    {
      text: "Users",
      icon: <ManageAccountsIcon color="secondary"/>,
      path: "/users",
      

    },
    {
      text: "Security",
      icon: <FingerprintIcon color="secondary"/>,
      path: "/security",
      

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
          <Typography className={classes.title} variant="h6"component={Link} to="/adminboard">
            Dashboard
          </Typography>
          <Button onClick={clearAuth} variant='contained' color='primary'>
            Logout
          </Button>

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
          elevation={0}
          color="transparent"
        >
          <Toolbar>
            <Typography variant="h6" className={classes.date}>
              Hi,Welcome Back
            </Typography>
            
            <Toolbar>
              {format(new Date(),`do MMMM Y`)}
            </Toolbar>
            <AccountCircleRounded />
          </Toolbar>
        </AppBar>
        <div className={classes.toolbar}></div>
        
          
        <Grid container spacing={3} elevation={1} >
          <Grid item xs={12} sm={6} md={3}>
            <Card style={{background: "#D0F2FF"}}>
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
            <Card style={{background: "#C8FACD"}}>
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
            <Card style={{background: "#FFF7CD" }}>
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

          <Grid item xs={12} sm={6} md={3}>
            <Card style={{background: "#FFE7D9"}}>
              <CardContent>
                <Grid align="center">
                <Typography variant="h3">
                  {state.dashboard.stages}
                </Typography>
                <Typography variant="body2">
                  Bug Reports
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
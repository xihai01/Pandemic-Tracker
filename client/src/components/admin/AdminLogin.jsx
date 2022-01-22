import { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import { Avatar, Grid, Paper,TextField, Button, Link } from '@material-ui/core';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';





export default function AdminLogin(){

const [state, setState] = useState({email: '',
password: '',
auth: false,
error: false})
const navigate = useNavigate();

function validate(){
  axios.get(`/admin/login?email=${state.email}&password=${state.password}`)
  .then((res)=>{
    if(res.status === 200){

      setState((prevState)=>{
        return {...prevState,auth: true}
      })
      localStorage.setItem('auth','true');
      setTimeout(()=>navigate('/adminboard'),2000)
      
      
    }  

  })
  .catch((e)=>{
      console.log(e.message);
      setState((prevState)=>{
        return ({...prevState,error: true})
      })
  })
  
}

const paperStyle = {padding:20, height:'70vh', width:280, margin:'20px auto'}
const avatarStyle = {backgroundColor: '#1bbd7e'}
const btnStyle = {margin:'8px 0'}

return(
  
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}><LockOutlinedIcon style={{border:'none'}}/></Avatar>
          <h2>Admin</h2>
          {state.error && 
          <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
            <strong>Invalid email or password</strong>
          </Alert> }

          
        </Grid>
        <TextField fullWidth
          required
          type="email"
          placeholder='Enter Email address'
          label="Email"
          value={state.email}
          onChange={(e) => {
            setState((prevState)=>{
              return ({...prevState,email: e.target.value})
            });
          }}
        />
        <TextField fullWidth
          required
          type="password"
          placeholder='Enter valid password'
          label="Password"
          value={state.password}
          onChange={(e) => {
            setState((prevState)=>{
              return ({...prevState,password: e.target.value})
            });
          }}
        />
        <Button type="submit" onClick={validate} color="primary" variant="contained" fullWidth style={btnStyle}>
          SIGN IN
        </Button>
        <Typography>
          <Link href='#'>
            Forgot Password
          </Link>
        </Typography>
        <Typography> Create new User?
          <Link href='#'>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
    // <form onSubmit={(e) => e.preventDefault()} autoComplete="on">
    // {state.error && <p>Invalid email or password</p>}
    // <input
    //   name="email"
    //   type="text"
    //   placeholder="Enter Email"
    //   value={state.email}
    //   onChange={(e) => {
    //     setState((prevState)=>{
    //       return ({...prevState,email: e.target.value})
    //     });
    //   }}
    // />
    // <input
    //   name="password"
    //   type="password"
    //   placeholder="Enter Password"
    //   value={state.password}
    //   onChange={(e) => {
    //     setState((prevState)=>{
    //       return ({...prevState,password: e.target.value})
    //     });
    //   }}
    // />
    // <button onClick={validate} >
    //   Login
    // </button>
    // </form>
    
 
  
    
)

}
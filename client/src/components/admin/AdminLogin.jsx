import { useState } from 'react';
import axios from 'axios';
import {navigate, useNavigate} from 'react-router-dom'
import AdminBoard from './AdminBoard';



export default function AdminLogin(){

const [state, setState] = useState({email: '',
password: '',
auth: false,
error: false})
const navigate = useNavigate();

function validate(){
  axios.get(`/admin/login?email=${state.email}&password=${state.password}`)
  .then((res)=>{
    if(res.data.message ===){
      setState((prevState)=>{
        return ({...prevState,auth: true})
      })
      navigate('/adminboard')
      
    }  
 
  })
  .catch((e)=>{
      console.log(e.message);
      setState((prevState)=>{
        return ({...prevState,error: true})
      })
  })
  
}

console.log(`error-----::">`,state.error);



return(
  <>
    <form onSubmit={(e) => e.preventDefault()} autoComplete="on">
    {state.error && <p>Invalid email or password</p>}
    <input
      name="email"
      type="text"
      placeholder="Enter Email"
      value={state.email}
      onChange={(e) => {
        setState((prevState)=>{
          return ({...prevState,email: e.target.value})
        });
      }}
    />
    <input
      name="password"
      type="password"
      placeholder="Enter Password"
      value={state.password}
      onChange={(e) => {
        setState((prevState)=>{
          return ({...prevState,password: e.target.value})
        });
      }}
    />
    <button onClick={validate} >
      Login
    </button>
    </form>
    
  </>
  
    
)

}
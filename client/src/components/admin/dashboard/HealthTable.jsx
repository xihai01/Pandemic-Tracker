import { useReducer, useEffect } from 'react';
import AdminBoard from './AdminBoard';
import { getAuth } from 'helpers/getAuth';
import { useNavigate } from 'react-router-dom';
import useHealthData from 'hooks/useHealthData';

function HealthTable() {
  const navigate = useNavigate();
  const {state,editRow,deleteRow}=useHealthData();

  useEffect(()=>{

    if(!getAuth()){
      return navigate('/admin')
    };

  },[])

  return ( 
    <AdminBoard>
      <h2>THIS IS THE HEALTH REGION COMPONENT FOR THE HEALTH REGION TABLE@@</h2>
    </AdminBoard>
  );
}

export default HealthTable;

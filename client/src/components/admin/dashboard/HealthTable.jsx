import { useReducer, useEffect } from 'react';
import AdminBoard from './AdminBoard';
import { getAuth } from 'helpers/getAuth';
import { useNavigate } from 'react-router-dom';
import useHealthData from 'hooks/useHealthData';
import MaterialTable from "material-table";


function HealthTable() {
  const navigate = useNavigate();
  const {state,columns,editRow,deleteRow}=useHealthData();

  useEffect(()=>{

    if(!getAuth()){
      return navigate('/admin')
    };

  },[])

  // console.log(`HEALTHSTATE`,state);

  return ( 
    <AdminBoard>
      <MaterialTable title="Public Health Regions(Ontario)" columns={columns} data={state.healthRegions} />;
    </AdminBoard>
  );
}

export default HealthTable;

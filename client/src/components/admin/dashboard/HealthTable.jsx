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
      <MaterialTable  
        title="Public Health Regions (Ontario)" 
        columns={columns} data={state.healthRegions} 
        options={{
        exportButton: true,
        actionsColumnIndex: -1
        }}
        actions={[
          {
            icon: 'save',
            tooltip: 'Save User',
            onClick: (event, rowData) => alert("You saved " + rowData.name)
          },
          rowData => ({
            icon: 'delete',
            tooltip: 'Delete User',
            onClick: (event, rowData) => console.log("You want to delete " + rowData.name),
            disabled: rowData.birthYear < 2000
          })
        ]}
        
      />;
    </AdminBoard>
  );
}

export default HealthTable;

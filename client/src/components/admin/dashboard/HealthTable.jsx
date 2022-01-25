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
        actionsColumnIndex: -1,
        selection: true,
        filtering: true
        }}

        editable={{
          onRowAddCancelled: rowData => console.log('Row adding cancelled'),
          onRowAdd: newData =>
              new Promise((resolve, reject) => {
                  setTimeout(() => {
                      /* setData([...data, newData]); */
  
                      resolve();
                  }, 1000);
              }),
          onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                  // setTimeout(() => {
                  //     const dataUpdate = [...data];
                  //     const index = oldData.tableData.id;
                  //     dataUpdate[index] = newData;
                  //     setData([...dataUpdate]);
                      console.log(`oldData========>`,oldData);

                      resolve();
                  // }, 1000);
              }),
          onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                  // setTimeout(() => {
                  //     const dataDelete = [...data];
                  //     const index = oldData.tableData.id;
                  //     dataDelete.splice(index, 1);
                  //     setData([...dataDelete]);
  
                      resolve();
                  // }, 1000);
              })
      }}

      actions={[
        {
          tooltip: 'Remove All Selected Users',
          icon: 'delete',
          onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows')
        }
      ]}
        
      />;
    </AdminBoard>
  );
}

export default HealthTable;

import AdminBoard from "./AdminBoard";
import useUserData from "hooks/useUserData";
import adminReducer, { SET_USERS } from "reducer/admin_reducer";
import MaterialTable from "material-table";


function User() {


  const {state,columns,editRow,addRow,deleteRow}= useUserData();
  
  
  return ( 
    <AdminBoard>
      <MaterialTable 
      title="Lockdown Stages" 
      columns={columns}
      data={state.stages}
      options={{
        exportButton: true,
        actionsColumnIndex: -1
      }}
      
      editable={{
        onRowAdd: newData =>
              new Promise((resolve, reject) => {
                  // setTimeout(() => {
                      /* setData([...data, newData]); */
                      addRow(newData).then(()=>{
                        resolve();
                      })
                  // }, 1000);
              }),
        onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
                // setTimeout(() => {
                //     const dataUpdate = [...data];
                //     const index = oldData.tableData.id;
                //     dataUpdate[index] = newData;
                //     setData([...dataUpdate]);
                editRow(newData).then(()=>{
                  resolve();
                })
                // }, 1000);
            }),
        onRowDelete: oldData =>
            new Promise((resolve, reject) => {
                // setTimeout(() => {
                //     const dataDelete = [...data];
                //     const index = oldData.tableData.id;
                //     dataDelete.splice(index, 1);
                //     setData([...dataDelete]);
                  deleteRow(oldData).then(()=>{
                    console.log(`oldDATA`,oldData);
                    resolve();
                  })
                // }, 1000);
            })
    }}
      
      />;
    </AdminBoard>
    
  );
}

export default User;



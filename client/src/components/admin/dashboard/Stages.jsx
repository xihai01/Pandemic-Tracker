import AdminBoard from "./AdminBoard";
import useStagesData from "hooks/useStagesData";
import adminReducer, { SET_STAGES } from "reducer/admin_reducer";
import MaterialTable from "material-table";


function Stages() {


  const {state,data,columns,editRow,deleteRow}= useStagesData();
  
  
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
          // disabled: rowData.birthYear < 2000
        })
      ]}
      
      />;
    </AdminBoard>
    
  );
}

export default Stages;

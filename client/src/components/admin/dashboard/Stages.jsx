import AdminBoard from "./AdminBoard";
import useStagesData from "hooks/useStagesData";
import adminReducer, { SET_STAGES } from "reducer/admin_reducer";
import MaterialTable from "material-table";


function Stages() {


  const {state,data,columns,editRow,deleteRow}= useStagesData();
  
  
  return ( 
    <AdminBoard>
      <MaterialTable title="Lockdown Stages" columns={columns} data={state.stages} />;
    </AdminBoard>
    
  );
}

export default Stages;

import AdminBoard from "./AdminBoard";
import useStagesData from "hooks/useStagesData";
import adminReducer, { SET_STAGES } from "reducer/admin_reducer";
import MaterialTable from "material-table";


function Stages() {


  const {state,data,columns,editRow,deleteRow}= useStagesData();
  
  
const testColumn = [
  { title: 'Name', field: 'name' },
  { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
  { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
  {
    title: 'Birth Place',
    field: 'birthCity',
    lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
  },
]

const testData = [
  { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
  { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
]


  console.log(`TABLEDATANOW`,data);
  console.log(`COLUMNSANOW`,columns);
  console.log(`================`);
  console.log(`================`);
  console.log(`testCOLUMNSNOW`,testColumn);
  console.log(`testDATANOW`,testData);




  return ( 
    <AdminBoard>
      <h2>THIS IS THE STAGE COMPONENT FOR STAGES TABLE</h2>
      <MaterialTable title="Lockdown Stages" columns={columns} data={state.stages} />;

    </AdminBoard>
    
  );
}

export default Stages;

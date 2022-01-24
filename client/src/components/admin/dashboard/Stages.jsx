import axios from "axios";
import { useState, useEffect } from 'react';
import { Box, Checkbox, TableRow, TableCell, TableHead, TableSortLabel } from '@mui/material';
import AdminBoard from "./AdminBoard";
import useStagesData from "hooks/useStagesData";
import adminReducer, { SET_STAGES } from "reducer/admin_reducer";


function Stages() {


  const {state,data,columns,editRow,deleteRow}= useStagesData();
  
  



  console.log(state);
  console.log(`TABLEDATA`,data);


  return ( 
    <AdminBoard>
      <h2>THIS IS THE STAGE COMPONENT FOR STAGES TABLE</h2>


    </AdminBoard>
    
  );
}

export default Stages;

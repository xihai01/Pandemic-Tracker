import React from "react";
import { makeStyles } from '@material-ui/core/styles'; 
import { AppBar, IconButton } from '@material-ui/core'; 
// import SortIcon from '@mui/icons-material/Sort';

const useStyles = makeStyles((theme) =>({
  appbar: {
    background: 'none,'
  }, 
}));
export default function Nav() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appbar} elevation={0}>
        <h1>Pandemic Tracker</h1>
        <IconButton>
          {/* <SortIcon /> */}
        </IconButton>
      </AppBar>
    </div>
  );
}



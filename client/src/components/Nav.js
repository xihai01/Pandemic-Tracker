import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import AdjustIcon from "@material-ui/icons/Adjust";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Link as Scroll} from 'react-scroll'; 

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  dotcolor: {
    color: "#ba000d",
  },
  container: {
    textAlign: "center",
  },
  quote: {
    color: "#fff",
    fontSize: "1.5rem",
  },
  goDown: {
    color: "#fff",
    fontSize: "3rem",
  },
}));
export default function Nav() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Pandemic Tracker
            <spam className={classes.dotcolor}>
              <AdjustIcon />
            </spam>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h2 className={classes.quote}>
            {" "}
            "We are only as strong as we are united and as weak as we are
            divided."
            <br /> <span className={classes.dotcolor}>J.K. Rowling</span>
          </h2>
          <Scroll to="card-scroll" smooth={true}> 
          <IconButton>
            <ExpandMoreIcon className={classes.goDown} />
          </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import AdjustIcon from "@material-ui/icons/Adjust";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Link as Scroll} from 'react-scroll'; 
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'; 
import CloseIcon from '@material-ui/icons/Close'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem  from "@material-ui/core/ListItem";

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
    fontSize: "2rem",
    
  },
  goDown: {
    color: "#fff",
    fontSize: "3.5rem",
  },
  menuWrapper: { 
    backgroundColor: "#fff", 

  }, 
  link: {
   color: "#84c2d4", 
  }, 

  close: {
    color: "#84c2d4",
  }, 
}));
export default function Nav() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  const navigationLinks = [
    {name: "Home", href: ""}, 
    {name: "Map", href: ""}
  ]
 const [open, setOpen] = useState(false)
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Pandemic Tracker
            <span className={classes.dotcolor}>
              <AdjustIcon />
            </span>
          </h1>
          <IconButton onClick={() => setOpen(true)}>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
     
      <SwipeableDrawer  anchor="right" open={open} onOpen={() => setOpen(true)}  onClose={() => setOpen(false)} className={classes.menuWrapper} >
      <div onClick={() => setOpen(false)} className={classes.close} >
          <IconButton>
            <CloseIcon/>
          </IconButton>
          </div>
          <List> 
          {navigationLinks.map((item)=> (
            <ListItem> 
          <Link
                className={classes.link}
                color="textPrimary"
                varaint="button"
                underline="none"
                href={item.href}
          >
            {item.name}
          </Link>
          </ListItem> 
           ))}
         
          </List>
        
      </SwipeableDrawer>

      
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

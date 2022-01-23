import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Nav from './Nav';
import CardBox from './CardBox';




const useStyles = makeStyles((theme) => ({
    homepic: {
        minHeight: '100vh',
        backgroundImage: `url("/images/bg.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: "#84c2d4",
    },
}));
export default function Home () {
    const classes = useStyles();
    return (
     <div>
     <div className={classes.homepic}>
         <CssBaseline />
         <Nav />
     </div>
     <CardBox />
     </div>
    );
}


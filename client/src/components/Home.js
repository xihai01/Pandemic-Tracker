import React from "react";
import { makeStyles } from '@material-ui/core/styles'; 
import { CssBaseline } from '@material-ui/core'; 
import Nav from './Nav'; 



const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bg.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',  
    },
}));
export default function Home () {
    const classes = useStyles(); 
    return ( 
        <div className="App"> 
            <div className={classes.root}>
                <CssBaseline />
                <Nav />
            </div>
        </div>
    );
}


import React from "react";
import { makeStyles } from '@material-ui/core/styles'; 
import { CssBaseline } from '@material-ui/core'; 
import Nav from './Nav'; 
import Card from './Card'; 



const useStyles = makeStyles((theme) => ({
    homepic: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bg.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',  
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
     <div> 
         <Card />
     </div>
     </div>
    );
}


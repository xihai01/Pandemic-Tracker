import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles'; 
import ImageCard from './ImageCard';
import pics from '../static/pics'; 
import useWindowPosition from '../hooks/useWindowPosition';

const useStyles = makeStyles((theme) => ({
   root: {
       minHeight: '100vh', 
       backgroundColor: "#84c2d4", 
       display: 'flex', 
       justifyContent: 'center', 
       alignItems: 'center', 
       [theme.breakpoints.down("md")]: {
           flexDirection: "column",
          
       }
   }
}))

export default function CardBox () {
    const classes = useStyles(); 
    const checked = useWindowPosition('header'); 
    return ( 
        <div className={classes.root} id="card-scroll">
            <ImageCard pic={pics[0]} checked={checked}/>
            <ImageCard pic={pics[1]} checked={checked}/>
        </div>
       
    ) 
} 
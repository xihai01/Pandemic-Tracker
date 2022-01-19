import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles'; 
import ImageCard from './ImageCard';

const useStyles = makeStyles((theme) => ({
   root: {
       minHeight: '100vh', 
    //    backgroundColor: "#84c2d4", 
   }
}))

export default function Card () {
    const classes = useStyles(); 
    return (
        <div className={classes.root}>
            <ImageCard />
        </div>
    )
}
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grow } from "@material-ui/core";
import { Button } from "@material-ui/core";


const useStyles = makeStyles({
  root: {
    flexDirection: "column",
    display: "flex",
    maxWidth: 645,
    margin: "20px",
    boxShadow: " 0 10px 20px rgba(0,0,0,0.19)",
    justifyContent: "space-around", 
  },

  media: {
    height: 440, 
    width: "100%", 
  },

  title: {
    fontFamily: "Nunito",
    // fontWeight: "bold",
    fontSize: "2rem",
    color: "#ba000d",
  },
  
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#000000", 
  },

  content: {
    display: "flex",
    // flex: 1,
    flexDirection: "column",
    marginTop: "30px", 
  }, 

  buttonContainer: {
    marginTop: "auto",  
    backgroundColor: "#ba000d",  
    textAlign: "center",
  
  }, 
  button: {
    color: "#fff",
    fontWeight: "bold", 
    fontSize: "1rem",
  }
  

});


export default function ImageCard({ pic, checked, buttonName, hrefLocation }) {
  const classes = useStyles();

  return (
    <Grow in={checked} timeout={500}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={pic.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent classes={classes.content}>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {pic.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {pic.description}
            
          </Typography>
          <div className={classes.buttonContainer}> 
            <Button variant="none" href={hrefLocation} className={classes.button}>
              {buttonName}
            </Button>
            </div>  
        </CardContent>
      </Card>
    </Grow>
  );
}

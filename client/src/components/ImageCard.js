import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grow } from "@material-ui/core";


const useStyles = makeStyles({
   root: {
    flex: 1,
    maxWidth: 645,
    // background: "rgba(0,0,0,0.5)",
    margin: "20px",
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);",
  },

  media: {
    height: 440,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#ba000d",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#000000",
  },
});

// in={checked} {...(checked ? { timeout: 1000 } : {})}
export default function ImageCard({ pic, checked }) {
  const classes = useStyles();

  return (
   <Grow in={checked} timeout={500} >
     <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={pic.imageUrl}
        title="Contemplative Reptile"
      />
      <CardContent>
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
      </CardContent>
    </Card>
    </Grow> 
  );
}

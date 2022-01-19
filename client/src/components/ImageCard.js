import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea,CardActions, Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },
});

// in={checked} {...(checked ? { timeout: 1000 } : {})}
export default function ImageCard() {
  const classes = useStyles();

  return (
    <Collapse >
      <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + "/images/mask-pic.jpg"}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant ="h5" component="h1" className={classes.title}>
            Lizard
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            Lizards are widespread group of people, with over 6,000 species. 
          </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary"> 
            Learn More 
          </Button>
        </CardActions>
      </Card>
    </Collapse>
  );
}
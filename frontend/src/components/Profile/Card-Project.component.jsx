import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});

const CardProject = ({ img }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='140'
          image={img}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Card Project
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            voluptate fugiat deserunt possimus
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardProject;

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    height: '92px'
  },
  df: {
    display: 'flex',
    justifyContent: 'flex-start',

  },
  cardImg: {
    objectFit: 'contain',
    flexBasis: 0,
    minWidth: '80px'
  },
  cardContent: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  }
}));

export default function ImgMediaCard(props) {
  const classes = useStyles();

  const { imgsrc, title, author } = props;

  return (
    <Card className={classes.root} style={{ width: '100%' }}>
      <CardActionArea className={classes.df}>
        <CardMedia
          component="img"
          alt={title}
          height="80"
          image={imgsrc}
          title={title}

          className={classes.cardImg}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h5">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Tác giả: {author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
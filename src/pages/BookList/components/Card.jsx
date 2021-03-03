import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 280,
    marginTop: theme.spacing(2),
    position: 'relative'
  },
  cardAction: {
    position: 'absolute',
    bottom: '0'
  }
}));

export default function ImgMediaCard(props) {
  const classes = useStyles();

  const { imgsrc, title, author } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="280"
          image={imgsrc}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Tác giả: {author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Mượn
        </Button>
        <Button size="small" color="primary">
          Tìm hiểu thêm
        </Button>
      </CardActions>
    </Card>
  );
}
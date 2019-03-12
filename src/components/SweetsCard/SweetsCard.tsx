import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ISweet from 'src/models/Sweet';

const styles = createStyles({
  card: {
    width: '100vw'
  },
  media: {
    height: 140,
  },
});

interface SweetCardCardOwnProps {
  sweet: ISweet;
}

type SweetCardCardProps = SweetCardCardOwnProps & WithStyles<typeof styles>;
const SweetCard = (props: SweetCardCardProps) => {
  const { classes, sweet } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={sweet.imagePath}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${sweet.name} ${sweet.price}`}
          </Typography>
          <Typography component="p">
            {sweet.description}
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
  );
}

export default withStyles(styles)(SweetCard);
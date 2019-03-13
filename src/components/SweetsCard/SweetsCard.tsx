import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ISweet from 'src/models/Sweet';

const styles = createStyles({
  card: {
    marginTop: '5%',
    marginLeft: '3%',
    marginRight: '3%',
  },
  media: {
    height: 220,
  },
  actionArea: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
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
          title={sweet.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            {`${sweet.name}`}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="h4">
            {`店舗名`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default withStyles(styles)(SweetCard);
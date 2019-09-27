import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Theme,
} from '@material-ui/core';
import { Sweets } from '../../models/Sweets';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      position: 'relative',
      borderRadius: 15,
    },
    media: {
      height: 300,
    },
    textContainer: {
      position: 'absolute',
      height: theme.spacing(8),
      background: `linear-gradient(to top, rgba(97, 97, 97, 0.5), rgba(245, 245, 245, 0.5))`,
      width: '100%',
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
    },
    sweetsName: {
      color: '#fff',
      fontWeight: 'bold',
      padding: `${theme.spacing(1)}px ${theme.spacing(1)}px 0px`,
    },
    shopName: {
      color: '#fff',
      padding: `${theme.spacing(0)}px ${theme.spacing(1)}px`,
    },
  })
);

type Props = {
  sweets: Sweets;
};

export const SweetsCard: React.FC<Props> = ({ sweets }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={sweets.imagePath}
          title={sweets.name}
        />
      </CardActionArea>
      <div className={classes.textContainer}>
        <Typography
          component='h2'
          variant='subtitle1'
          className={classes.sweetsName}
        >
          {sweets.name}
        </Typography>
        <Typography
          component='p'
          variant='subtitle2'
          className={classes.shopName}
        >
          店舗名
        </Typography>
      </div>
    </Card>
  );
};

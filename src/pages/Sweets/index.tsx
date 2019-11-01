import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SweetsCard } from '../../components/SweetsCard/SweetsCard';
import { SweetsCardList } from '../../components/SweetsCard/SweetsCardList';
import { useSelector } from 'react-redux';
import { RootState } from '../../states';
import { EntitySweetsItem, EntityShop } from '../../states/Entities';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: `${theme.spacing(2)}px auto`,
      width: '100%',
    },
  })
);

export const SweetsPage: React.FC = () => {
  const classes = useStyles();
  const sweets = useSelector<RootState, EntitySweetsItem>(state => state.entities.sweets);
  const shops = useSelector<RootState, EntityShop>(state => state.entities.shop);

  return (
    <div className={classes.root}>
      <SweetsCardList>
        {Object.values(sweets).map((sw, i) => (
          <SweetsCard key={i} sweets={sw} shop={shops[sw.shop_id]} />
        ))}
      </SweetsCardList>
    </div>
  );
};

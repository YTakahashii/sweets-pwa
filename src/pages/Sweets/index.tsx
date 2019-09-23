import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SweetsCard } from '../../components/SweetsCard/SweetsCard';
import { SweetsCardList } from '../../components/SweetsCard/SweetsCardList';
import { useSelector } from 'react-redux';
import { RootState } from '../../states';
import { Sweets } from '../../models/Sweets';

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
  const sweets = useSelector<RootState, Sweets[]>(state => state.sweets.lists);

  return (
    <div className={classes.root}>
      <SweetsCardList>
        {sweets.map((s, i) => (
          <SweetsCard key={i} sweets={s} />
        ))}
      </SweetsCardList>
    </div>
  );
};

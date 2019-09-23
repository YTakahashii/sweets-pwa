import React, { useState, useEffect, useMemo } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SweetsCard } from '../../components/SweetsCard/SweetsCard';
import { SweetsCardList } from '../../components/SweetsCard/SweetsCardList';
import { Sweets } from '../../models/Sweets';
import sweetsSamples from '../../models/samples/Sweets';

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
  const [sweets, setSweets] = useState<Sweets[]>([]);
  useEffect(() => {
    setSweets(sweetsSamples);
  }, []);

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

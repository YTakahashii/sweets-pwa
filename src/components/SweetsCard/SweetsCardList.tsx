import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  bottomNavigationBarHeight,
  envSafeAreaInsetBottom,
  constantSafeAreaInsetBottom,
} from '../../utils/constants';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      position: 'relative',
      width: '100%',
      height: `100vh`,
      overflowY: 'scroll',
      paddingBottom: `calc(${bottomNavigationBarHeight +
        theme.spacing(2)}px + ${envSafeAreaInsetBottom} * 2.5)`,
      [theme.breakpoints.up('xs')]: {
        paddingTop: theme.spacing(5),
      },
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
      },
    },
    test: {
      paddingBottom: `calc(${bottomNavigationBarHeight +
        theme.spacing(2)}px + ${constantSafeAreaInsetBottom} * 2.5)`,
    },
  })
);

export const SweetsCardList: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Container className={`${classes.root} ${classes.test}`} maxWidth='md'>
      {React.Children.map(children, child => child)}
    </Container>
  );
};

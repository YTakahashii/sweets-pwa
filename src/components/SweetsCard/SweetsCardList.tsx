import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  bottomNavigationBarHeight,
  envSafeAreaInsetBottom,
} from '../../utils/constants';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
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
    list: {
      maxWidth: 756,
      margin: '0 auto',
      paddingInlineStart: 0,
      listStyle: 'none',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.up('md')]: {
        justifyContent: 'flex-start',
      },
    },
    item: {
      padding: 8,
      maxWidth: 400,
      width: '100%',
      margin: '0 auto',
      [theme.breakpoints.up('md')]: {
        width: '50%',
        margin: 0,
      },
    },
  })
);

export const SweetsCardList: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.root}`}>
      <Container maxWidth='md'>
        <ul className={classes.list}>
          {React.Children.map(children, child => (
            <li className={classes.item}>{child}</li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

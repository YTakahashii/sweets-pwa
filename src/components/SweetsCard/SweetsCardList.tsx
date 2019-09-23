import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { bottomNavigationBarHeight } from '../../utils/constants';
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
      paddingBottom: bottomNavigationBarHeight + theme.spacing(2),
      [theme.breakpoints.up('xs')]: {
        paddingTop: theme.spacing(5),
      },
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
      },
    },
  })
);

export const SweetsCardList: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth='md'>
      {React.Children.map(children, child => child)}
    </Container>
  );
};

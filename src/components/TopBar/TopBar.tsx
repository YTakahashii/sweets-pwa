import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../assets/logo.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#FFFFFF',
      zIndex: theme.zIndex.appBar,
      width: '100%',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    logo: {
      objectFit: 'contain',
      height: 36,
    },
  })
);

export const TopBar: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position='fixed' className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <IconButton color='primary'>
          <InfoIcon />
        </IconButton>
        <img className={classes.logo} src={logo} alt='あまはこロゴ' />
        <IconButton color='primary'>
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

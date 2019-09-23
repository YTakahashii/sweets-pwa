import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import CakeIcon from '@material-ui/icons/Cake';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useReactRouter from 'use-react-router';
import { bottomNavigationBarHeight } from '../../utils/constants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%',
      borderTop: `solid 1px ${theme.palette.grey[400]}`,
      zIndex: theme.zIndex.appBar,
      backgroundColor: '#fff',
      height: `calc(${bottomNavigationBarHeight}px + env(safe-area-inset-bottom))`,
      paddingBottom: `env(safe-area-inset-bottom)`,
    },
    scrollHidden: {
      bottom: `-calc(${bottomNavigationBarHeight}px + env(safe-area-inset-bottom))`,
    },
  })
);

type MainRoutes = '/sweets' | '/maps' | '/favorites';

export const BottomNavigationBar: React.FC = () => {
  const classes = useStyles();
  const [route, setRoute] = useState<MainRoutes>('/sweets');
  const { history } = useReactRouter();

  const handleChange = (e: React.ChangeEvent, value: MainRoutes) => {
    setRoute(value);
    history.push(value);
  };

  return (
    <BottomNavigation
      value={route}
      onChange={handleChange}
      showLabels
      className={`${classes.root}`}
    >
      <BottomNavigationAction
        label='スイーツ'
        icon={<CakeIcon />}
        value='/sweets'
      />
      <BottomNavigationAction
        label='地図'
        icon={<LocationOnIcon />}
        value='/maps'
      />
      <BottomNavigationAction
        label='お気に入り'
        icon={<FavoriteIcon />}
        value='/favorites'
      />
    </BottomNavigation>
  );
};

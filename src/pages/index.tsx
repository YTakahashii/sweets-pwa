import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Switch, Route, RouteProps } from 'react-router-dom';
import { SweetsPage } from './Sweets';
import { ShopPage } from './Shop';
import { MapPage } from './Map';
import { FavoritesPage } from './Favorites';

type RouteKey = {
  key: string;
};

type RouteType = RouteKey & RouteProps;

const routes: RouteType[] = [
  {
    component: SweetsPage,
    key: 'sweets',
    path: ['/', '/sweets', '/sweets/:id'],
    exact: true,
  },
  {
    component: ShopPage,
    key: 'shops',
    path: ['/shops/:id'],
    exact: true,
  },
  {
    component: MapPage,
    key: 'maps',
    path: ['/maps'],
    exact: true,
  },
  {
    component: FavoritesPage,
    key: 'favorites',
    path: ['/favorites'],
    exact: true,
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBarSpacer: theme.mixins.toolbar,
  })
);

export const Pages: React.FC = ({}) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.appBarSpacer} />
      <Switch>
        {routes.map(route => (
          <Route key={route.key} {...route} />
        ))}
      </Switch>
    </>
  );
};

import React from 'react';
import { Switch, Route, RouteProps } from 'react-router-dom';
import { SweetsPage } from './Sweets';
import { ShopPage } from './Shop';
import { MapPage } from './Map';
import { FavoritesPage } from './Favorites';
import { SweetsDetailPage } from './SweetsDetail';

type RouteKey = {
  key: string;
};

type RouteType = RouteKey & RouteProps;

const routes: RouteType[] = [
  {
    component: SweetsPage,
    key: 'sweets',
    path: ['/', '/sweets'],
    exact: true,
  },
  {
    component: SweetsDetailPage,
    key: 'sweets#detail',
    path: ['/sweets/:id'],
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

export const Pages: React.FC = () => (
  <Switch>
    {routes.map(route => (
      <Route key={route.key} {...route} />
    ))}
  </Switch>
);

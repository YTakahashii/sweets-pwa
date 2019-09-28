import React, { useState } from 'react';
import {
  BottomNavigation as MaterialBottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';
import CakeIcon from '@material-ui/icons/Cake';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useReactRouter from 'use-react-router';
import { bottomNavigationBarHeight } from '../../utils/constants';
import styled from 'styled-components';

const BottomNavigation = styled(MaterialBottomNavigation)`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: calc(${bottomNavigationBarHeight} + env(safe-area-inset-bottom));
  height: calc(
    ${bottomNavigationBarHeight} + constants(safe-area-inset-bottom)
  );
  padding-bottom: env(safe-area-inset-bottom);
  padding-bottom: constants(safe-area-inset-bottom);
  border-top: solid 1px ${({ theme }) => theme.palette.grey[400]};
  z-index: ${({ theme }) => theme.zIndex.appBar};
  background-color: ${({ theme }) => theme.palette.common.white};
`;

type MainRoutes = '/sweets' | '/maps' | '/favorites';

export const BottomNavigationBar: React.FC = () => {
  const [route, setRoute] = useState<MainRoutes>('/sweets');
  const { history } = useReactRouter();

  const handleChange = (e: React.ChangeEvent, value: MainRoutes) => {
    setRoute(value);
    history.push(value);
  };

  return (
    <BottomNavigation value={route} onChange={handleChange} showLabels>
      <BottomNavigationAction
        label='スイーツ3'
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

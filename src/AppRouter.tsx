import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  setupConfig,
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, heart, map, search } from 'ionicons/icons';
import { SweetsPage } from './components/pages/Sweets/Sweets';
import { SweetsDetailPage } from './components/pages/SweetsDetail/SweetsDetail';
import { MapsPage } from './components/pages/Maps/Maps';
import { FavoritesPage } from './components/pages/Favorites/Favorites';
import { SearchPage } from './components/pages/Search/Search';
import { ShopDetailPage } from './components/pages/ShopDetail/ShopDetail';
import { useDispatch } from 'react-redux';
import { loadData } from './actions/App/ActionCreator';
import { scrollToTopSweetsListEvent } from './events/event';

setupConfig({
  swipeBackEnabled: false,
});

export const AppRouter: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  });

  const handleSweetsTab = () => document.dispatchEvent(scrollToTopSweetsListEvent);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path='/sweets' component={SweetsPage} exact={true} />
            <Route path='/sweets/:id' component={SweetsDetailPage} />
            <Route path='/search' component={SearchPage} exact={true} />
            <Route path='/maps' component={MapsPage} exact={true} />
            <Route path='/favorites' component={FavoritesPage} exact={true} />
            <Route path='/shops/:id' component={ShopDetailPage} exact={true} />
            <Route path='/' render={() => <Redirect to='/sweets' />} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot='bottom'>
            <IonTabButton tab='sweets' href='/sweets' onClick={handleSweetsTab} defaultChecked>
              <IonIcon icon={home} />
              <IonLabel>スイーツ</IonLabel>
            </IonTabButton>
            <IonTabButton tab='search' href='/search'>
              <IonIcon icon={search} />
              <IonLabel>検索</IonLabel>
            </IonTabButton>
            <IonTabButton tab='maps' href='/maps'>
              <IonIcon icon={map} />
              <IonLabel>マップ</IonLabel>
            </IonTabButton>
            <IonTabButton tab='favorites' href='/favorites'>
              <IonIcon icon={heart} />
              <IonLabel>お気に入り</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

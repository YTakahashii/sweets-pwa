import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, heart, map, search } from 'ionicons/icons';
import { SweetsPage } from './components/pages/Sweets/Sweets';
import { SweetsDetailPage } from './components/pages/SweetsDetail/SweetsDetail';
import { MapsPage } from './components/pages/Maps/Maps';
import { FavoritesPage } from './components/pages/Favorites/Favorites';
import { SearchPage } from './components/pages/Search/Search';

export const AppRouter: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path='/:tab(sweets)' component={SweetsPage} exact={true} />
          <Route path='/sweets/:id' component={SweetsDetailPage} exact={true} />
          <Route path='/:tab(search)' component={SearchPage} exact={true} />
          <Route path='/:tab(maps)' component={MapsPage} exact={true} />
          <Route path='/:tab(favorites)' component={FavoritesPage} exact={true} />
          <Route path='/' render={() => <Redirect to='/sweets' />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot='bottom'>
          <IonTabButton tab='sweets' href='/sweets'>
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

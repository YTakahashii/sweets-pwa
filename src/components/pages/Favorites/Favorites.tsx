import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonContent,
  IonItem,
  IonLabel,
  IonThumbnail,
} from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../states';
import { httpToHttps } from '../../../utils/OfficialImageUtil';

export const FavoritesPage: React.FC = () => {
  const sweets = useSelector<RootState, RootState['entities']['sweets']>(state => state.entities.sweets);
  const favorites = useSelector<RootState, RootState['sweets']['favorites']>(state => state.sweets.favorites);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>お気に入り</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {favorites.map(id => (
            <IonItem key={id} button routerLink={`/favorites/${id}`}>
              <IonThumbnail slot='start'>
                <img src={`${httpToHttps(sweets[id].imagePath)}`} alt={sweets[id].name} />
              </IonThumbnail>
              <IonLabel>
                <h2> {sweets[id].name}</h2>
                <h3>{sweets[id].price}</h3>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

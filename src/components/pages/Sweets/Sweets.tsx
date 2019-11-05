import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../states';
import { SweetsCard } from './internal/SweetsCard/SweetsCard';

export const SweetsPage: React.FC = () => {
  const sweets = useSelector<RootState, RootState['entities']['sweets']>(state => state.entities.sweets);
  const shops = useSelector<RootState, RootState['entities']['shop']>(state => state.entities.shop);

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>スイーツ</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {Object.values(sweets).map(s => (
          <SweetsCard key={s.id} sweetsItem={s} shopName={shops[s.shop_id].name} />
        ))}
      </IonContent>
    </IonPage>
  );
};

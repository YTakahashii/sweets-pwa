import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../states';
import { EntitySweetsItem, EntityShop } from '../../../states/Entities';
import { SweetsCard } from './internal/SweetsCard/SweetsCard';

export const SweetsPage: React.FC = () => {
  const sweets = useSelector<RootState, EntitySweetsItem>(state => state.entities.sweets);
  const shops = useSelector<RootState, EntityShop>(state => state.entities.shop);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>スイーツ</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {Object.values(sweets).map(s => (
          <SweetsCard key={s.id} sweetsItem={s} shopName={shops[s.shop_id].name} />
        ))}
      </IonContent>
    </IonPage>
  );
};

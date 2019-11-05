import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonNav } from '@ionic/react';
import { SweetsItem } from '../../../../../infrastructures/models/Sweets';

type Props = {
  sweetsItem: SweetsItem;
  shopName: string;
};

export const SweetsCard: React.FC<Props> = ({ sweetsItem, shopName }) => {
  return (
    <IonCard button routerLink={`/sweets/${sweetsItem.id}`}>
      <img src={sweetsItem.imagePath} />
      <IonCardHeader>
        <IonCardTitle>{sweetsItem.name}</IonCardTitle>
        <IonCardSubtitle>{shopName}</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  );
};
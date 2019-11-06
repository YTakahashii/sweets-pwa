import React, { useLayoutEffect, useRef } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../states';
import { SweetsCard } from './internal/SweetsCard/SweetsCard';
import { AmahakoEvent } from '../../../events/event';

export const SweetsPage: React.FC = () => {
  const sweets = useSelector<RootState, RootState['entities']['sweets']>(state => state.entities.sweets);
  const shops = useSelector<RootState, RootState['entities']['shop']>(state => state.entities.shop);
  const contentRef = useRef<HTMLIonContentElement>(null);

  const handleSweetsTab = () => {
    if (contentRef.current) {
      contentRef.current.scrollToTop(1000);
    }
  };

  useLayoutEffect(() => {
    document.addEventListener(AmahakoEvent.ScrollToTopSweetsList, handleSweetsTab, false);
    return document.removeEventListener(AmahakoEvent.ScrollToTopSweetsList, handleSweetsTab, true);
  });

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>スイーツ</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen ref={contentRef}>
        {Object.values(sweets).map(s => (
          <SweetsCard key={s.id} sweetsItem={s} shopName={shops[s.shop_id].name} />
        ))}
      </IonContent>
    </IonPage>
  );
};

import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  useIonViewWillEnter,
} from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../states';
import { SweetsCard } from './internal/SweetsCard/SweetsCard';
import { AmahakoEvent } from '../../../events/event';
import { RouteComponentProps } from 'react-router';
import { parse } from 'query-string';
import { SweetsItem } from '../../../infrastructures/models';

type Props = RouteComponentProps;

export const SweetsPage: React.FC<Props> = ({ location }) => {
  const sweets = useSelector<RootState, RootState['entities']['sweets']>(state => state.entities.sweets);
  const shops = useSelector<RootState, RootState['entities']['shop']>(state => state.entities.shop);
  const smallCategory = useSelector<RootState, RootState['entities']['smallCategory']>(
    state => state.entities.smallCategory
  );
  const largeCategory = useSelector<RootState, RootState['entities']['largeCategory']>(
    state => state.entities.largeCategory
  );
  const aggregatedSweetsId = useSelector<RootState, RootState['smallCategory']['aggregatedSweetsId']>(
    state => state.smallCategory.aggregatedSweetsId
  );
  const contentRef = useRef<HTMLIonContentElement>(null);
  const [title, setTitle] = useState('スイーツ');
  const smallCategoryId = parse(location.search).sm;
  const [renderSweets, setRenderSweets] = useState<SweetsItem[]>(Object.values(sweets));
  const handleSweetsTab = () => {
    if (contentRef.current) {
      contentRef.current.scrollToTop(1000);
    }
  };

  useLayoutEffect(() => {
    document.addEventListener(AmahakoEvent.ScrollToTopSweetsList, handleSweetsTab, false);
    return document.removeEventListener(AmahakoEvent.ScrollToTopSweetsList, handleSweetsTab, true);
  });

  useIonViewWillEnter(() => {
    if (smallCategoryId && typeof smallCategoryId === 'string') {
      const smCategory = smallCategory[smallCategoryId];
      if (smCategory) {
        const smallCategoryName = smallCategory[smallCategoryId].name;
        setTitle(smallCategoryName);
        const filteredSweets = aggregatedSweetsId[parseInt(smallCategoryId)].map(sweetsId => sweets[sweetsId]);
        setRenderSweets(filteredSweets);
      }
    } else {
      setTitle('スイーツ');
      setRenderSweets(Object.values(sweets));
    }
  });

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          {smallCategoryId && typeof smallCategoryId === 'string' && (
            <IonButtons>
              <IonBackButton
                defaultHref={`/search/large_categories/${smallCategory[smallCategoryId].large_category_id}`}
                text={`${largeCategory[smallCategory[smallCategoryId].large_category_id].name}`}
              />
            </IonButtons>
          )}
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen ref={contentRef}>
        {renderSweets.map(s => (
          <SweetsCard key={s.id} sweetsItem={s} shopName={shops[s.shop_id].name} />
        ))}
      </IonContent>
    </IonPage>
  );
};

import React, { useLayoutEffect, useRef } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonText,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../../../states';
import styled from 'styled-components';
import { getRefererPath } from '../../../utils/getRefererPath';

type Props = RouteComponentProps<{ id: string }>;

export const SweetsDetailPage: React.FC<Props> = ({ match }) => {
  const sweets = useSelector<RootState, RootState['entities']['sweets']>(state => state.entities.sweets);
  const selectedSweets = sweets[match.params.id];
  const shops = useSelector<RootState, RootState['entities']['shop']>(state => state.entities.shop);
  const aggregatedSweetsByCategory = useSelector<RootState, RootState['smallCategory']['aggregatedSweetsId']>(
    state => state.smallCategory.aggregatedSweetsId
  );
  const recommendedSweetsIds = selectedSweets.small_category_ids.flatMap(id => aggregatedSweetsByCategory[id]);
  const refererPath = getRefererPath(document.referrer) || '/sweets';
  const contentRef = useRef<HTMLIonContentElement>(null);

  useLayoutEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollToTop();
    }
  }, [match.params.id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref={refererPath} text='' />
          </IonButtons>
          <IonTitle>{selectedSweets.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class='ion-padding' ref={contentRef}>
        <img src={selectedSweets.imagePath} alt={selectedSweets.name} />

        <IonText>
          <h1>{selectedSweets.name}</h1>
        </IonText>

        <IonText>
          <p>{selectedSweets.price}</p>
        </IonText>

        <IonText>
          <p>{selectedSweets.description}</p>
        </IonText>

        <IonList>
          <IonListHeader>取り扱い店舗</IonListHeader>
          <ShopNameItem button routerLink={`/shops/${selectedSweets.shop_id}`}>
            <IonLabel>{shops[selectedSweets.shop_id].name}</IonLabel>
          </ShopNameItem>
        </IonList>

        <IonList>
          <IonListHeader>おすすめ商品</IonListHeader>
          <IonGrid>
            <IonRow>
              {recommendedSweetsIds.map(id => (
                <IonCol key={id} size='4'>
                  <img src={sweets[id].imagePath} alt={sweets[id].name} onClick={handleRecommendClick(id)} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

const ShopNameItem = styled(IonItem)`
  border-radius: 10px;
`;

import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonText,
  IonList,
  IonListHeader,
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonBackButton,
} from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../states';

type Props = RouteComponentProps<{ id: string }>;

export const ShopDetailPage: React.FC<Props> = ({ match }) => {
  const shops = useSelector<RootState, RootState['entities']['shop']>(state => state.entities.shop);
  const selectedShop = shops[match.params.id];
  const sweets = useSelector<RootState, RootState['entities']['sweets']>(state => state.entities.sweets);
  const aggregateSweetsByShop = useSelector<RootState, RootState['shop']['aggregatedSweetsByShop']>(
    state => state.shop.aggregatedSweetsByShop
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/sweets' text='' />
          </IonButtons>
          <IonTitle>{selectedShop.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class='ion-padding'>
        <img src={selectedShop.imagePath} alt={selectedShop.name} />

        <IonText>
          <h1>{selectedShop.name}</h1>
        </IonText>

        <IonText>
          <p>{selectedShop.telephone}</p>
        </IonText>

        <IonText>
          <p>{selectedShop.openingHoursSpecification}</p>
        </IonText>

        <IonText>
          <p>{selectedShop.closed}</p>
        </IonText>

        <IonText>
          <p>{selectedShop.parking}</p>
        </IonText>

        <IonText>
          <p>{selectedShop.eatin}</p>
        </IonText>

        <IonText>
          <a href={selectedShop.url} target='_blank' rel='noopener noreferrer'>
            {selectedShop.url}
          </a>
        </IonText>

        <IonList>
          <IonListHeader>取り扱い商品</IonListHeader>
          <IonGrid>
            <IonRow>
              {aggregateSweetsByShop[selectedShop.id].map(sweetsId => (
                <IonCol key={sweetsId} size='4'>
                  <img src={sweets[sweetsId].imagePath} alt={sweets[sweetsId].name} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

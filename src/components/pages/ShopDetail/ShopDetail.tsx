import React, { useRef } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonText,
  IonList,
  IonListHeader,
  IonGrid,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../states';
import { SquareImageList, SquareImage } from '../../standalones/SquareImageList';
import {
  IonShopDetailContent,
  IonShopDetailItem,
  ContentUnderImage,
  IonSopDetaiFontawesomelIcon,
} from './internal/elements';
import { call, time, calendar, restaurant, link } from 'ionicons/icons';
import { isMaterial } from '../../../utils/isMaterial';
import { httpToHttps } from '../../../utils/OfficialImageUtil';

type Props = RouteComponentProps<{ id: string }>;

export const ShopDetailPage: React.FC<Props> = ({ match, history }) => {
  const shops = useSelector<RootState, RootState['entities']['shop']>(state => state.entities.shop);
  const selectedShop = shops[match.params.id];
  const sweets = useSelector<RootState, RootState['entities']['sweets']>(state => state.entities.sweets);
  const aggregateSweetsByShop = useSelector<RootState, RootState['shop']['aggregatedSweetsByShop']>(
    state => state.shop.aggregatedSweetsByShop
  );
  const imgRef = useRef<HTMLImageElement>(null);

  const handleSweetsClick = (id: number) => () => history.push(`/sweets/${id}`);
  const urlReg = /^(https?|ftp)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)$/; // eslint-disable-line no-useless-escape

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
      <IonShopDetailContent class='ion-padding'>
        <img src={httpToHttps(selectedShop.imagePath)} alt={selectedShop.name} />

        <ContentUnderImage>
          <IonText>
            <h1>{selectedShop.name}</h1>
          </IonText>

          <IonShopDetailItem lines='none'>
            <IonIcon icon={call} size='small' slot='start'></IonIcon>
            <IonLabel position='fixed'>電話番号</IonLabel>
            <IonText>
              <a href={`tel:${selectedShop.telephone}`} target='_blank' rel='noopener noreferrer'>
                {selectedShop.telephone}
              </a>
            </IonText>
          </IonShopDetailItem>

          <IonShopDetailItem lines='none'>
            <IonIcon icon={time} size='small' slot='start'></IonIcon>
            <IonLabel position='fixed'>営業時間</IonLabel>
            <IonText>{selectedShop.openingHoursSpecification}</IonText>
          </IonShopDetailItem>

          <IonShopDetailItem lines='none'>
            <IonIcon icon={calendar} size='small' slot='start'></IonIcon>
            <IonLabel position='fixed'>定休日</IonLabel>
            <IonText>{selectedShop.closed}</IonText>
          </IonShopDetailItem>

          <IonShopDetailItem lines='none'>
            <IonSopDetaiFontawesomelIcon isMaterial={isMaterial()}>
              <i className='fas fa-parking'></i>
            </IonSopDetaiFontawesomelIcon>
            <IonLabel position='fixed'>駐車場</IonLabel>
            <IonText>{selectedShop.parking}</IonText>
          </IonShopDetailItem>

          <IonShopDetailItem lines='none'>
            <IonIcon icon={restaurant} size='small' slot='start'></IonIcon>
            <IonLabel position='fixed'>イートイン</IonLabel>
            <IonText>{selectedShop.eatin}</IonText>
          </IonShopDetailItem>

          <IonShopDetailItem lines='none'>
            <IonIcon icon={link} size='small' slot='start'></IonIcon>
            <IonLabel position='fixed'>公式サイト</IonLabel>
            {selectedShop.url.match(urlReg) ? (
              <IonText>
                <a href={selectedShop.url} target='_blank' rel='noopener noreferrer'>
                  {selectedShop.url}
                </a>
              </IonText>
            ) : (
              <IonText>なし</IonText>
            )}
          </IonShopDetailItem>

          <IonList>
            <IonListHeader>取り扱い商品</IonListHeader>
            <IonGrid fixed>
              <SquareImageList>
                {aggregateSweetsByShop[selectedShop.id].map(sweetsId => (
                  <SquareImage
                    key={sweetsId}
                    src={httpToHttps(sweets[sweetsId].imagePath)}
                    alt={sweets[sweetsId].name}
                    onClick={handleSweetsClick(sweetsId)}
                  />
                ))}
              </SquareImageList>
            </IonGrid>
          </IonList>
        </ContentUnderImage>
      </IonShopDetailContent>
    </IonPage>
  );
};

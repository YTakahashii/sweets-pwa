import React, { useLayoutEffect, useRef } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonText,
  IonLabel,
  IonList,
  IonListHeader,
  IonIcon,
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../../../states';
import { SquareImageList, SquareImage } from '../../standalones/SquareImageList';
import { logoYen } from 'ionicons/icons';
import {
  IonDescriptionText,
  IonPriceItem,
  IonShopNameItem,
  IonSweetsDetailContent,
  ContentUnderImage,
} from './internal/elements';

type Props = RouteComponentProps<{ id: string }>;

export const SweetsDetailPage: React.FC<Props> = ({ match, history }) => {
  const sweets = useSelector<RootState, RootState['entities']['sweets']>(state => state.entities.sweets);
  const selectedSweets = sweets[match.params.id];
  const shops = useSelector<RootState, RootState['entities']['shop']>(state => state.entities.shop);
  const aggregatedSweetsByCategory = useSelector<RootState, RootState['smallCategory']['aggregatedSweetsId']>(
    state => state.smallCategory.aggregatedSweetsId
  );
  const recommendedSweetsIds = selectedSweets.small_category_ids.flatMap(id => aggregatedSweetsByCategory[id]);
  const contentRef = useRef<HTMLIonContentElement>(null);
  const handleRecommendClick = (id: number) => () => history.push(`/sweets/${id}`);

  useLayoutEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollToTop();
    }
  }, [match.params.id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton defaultHref='/sweets' text='' />
          </IonButtons>
          <IonTitle>{selectedSweets.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonSweetsDetailContent class='ion-padding' ref={contentRef}>
        <img src={selectedSweets.imagePath} alt={selectedSweets.name} />

        <ContentUnderImage>
          <IonText>
            <h1>{selectedSweets.name}</h1>
          </IonText>

          <IonPriceItem lines='none'>
            <IonIcon icon={logoYen} size='small'></IonIcon>
            <IonLabel>{selectedSweets.price}</IonLabel>
          </IonPriceItem>

          <IonDescriptionText>
            <p>{selectedSweets.description}</p>
          </IonDescriptionText>

          <IonList>
            <IonListHeader>取り扱い店舗</IonListHeader>
            <IonShopNameItem button routerLink={`/shops/${selectedSweets.shop_id}`} lines='none'>
              <IonLabel>{shops[selectedSweets.shop_id].name}</IonLabel>
            </IonShopNameItem>
          </IonList>

          <IonList>
            <IonListHeader>おすすめ商品</IonListHeader>
            <SquareImageList>
              {recommendedSweetsIds.map(id => (
                <SquareImage
                  key={id}
                  src={sweets[id].imagePath}
                  alt={sweets[id].name}
                  onClick={handleRecommendClick(id)}
                />
              ))}
            </SquareImageList>
          </IonList>
        </ContentUnderImage>
      </IonSweetsDetailContent>
    </IonPage>
  );
};

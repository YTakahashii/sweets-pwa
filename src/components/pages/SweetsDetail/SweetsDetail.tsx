import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
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
  IonButton,
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../states';
import { SquareImageList, SquareImage } from '../../standalones/SquareImageList';
import { share, heart, heartEmpty, logoYen } from 'ionicons/icons';
import {
  IonDescriptionText,
  IonPriceItem,
  IonShopNameItem,
  IonSweetsDetailContent,
  ContentUnderImage,
  SweetsName,
} from './internal/elements';
import { registerFavoriteSweets, unregisterFavoriteSweets } from '../../../actions/Sweets/ActionCreator';

type Props = RouteComponentProps<{ id: string }>;

export const SweetsDetailPage: React.FC<Props> = ({ match, history }) => {
  const sweets = useSelector<RootState, RootState['entities']['sweets']>(state => state.entities.sweets);
  const selectedSweets = sweets[match.params.id];
  const shops = useSelector<RootState, RootState['entities']['shop']>(state => state.entities.shop);
  const aggregatedSweetsByCategory = useSelector<RootState, RootState['smallCategory']['aggregatedSweetsId']>(
    state => state.smallCategory.aggregatedSweetsId
  );
  const favorites = useSelector<RootState, RootState['sweets']['favorites']>(state => state.sweets.favorites);
  const isFavorite = favorites ? !!favorites.find(fav => fav === parseInt(match.params.id)) : false;
  const recommendedSweetsIds = selectedSweets.small_category_ids.flatMap(id => aggregatedSweetsByCategory[id]);
  const contentRef = useRef<HTMLIonContentElement>(null);
  const [favoriteIcon, setFavoriteIcon] = useState(heartEmpty);
  const handleRecommendClick = (id: number) => () => history.push(`/sweets/${id}`);
  const dispatch = useDispatch();
  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(unregisterFavoriteSweets({ id: parseInt(match.params.id) }));
    } else {
      dispatch(registerFavoriteSweets({ id: parseInt(match.params.id) }));
    }
  };

  useLayoutEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollToTop();
    }
  }, [match.params.id]);

  useEffect(() => {
    if (isFavorite) {
      setFavoriteIcon(heart);
    } else {
      setFavoriteIcon(heartEmpty);
    }
  }, [isFavorite]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton defaultHref='/sweets' text='' />
          </IonButtons>
          <IonTitle>{selectedSweets.name}</IonTitle>
          <IonButtons slot='end'>
            <IonButton onClick={handleFavorite}>
              <IonIcon icon={favoriteIcon}></IonIcon>
            </IonButton>
            <IonButton>
              <IonIcon icon={share}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonSweetsDetailContent class='ion-padding' ref={contentRef}>
        <img src={selectedSweets.imagePath} alt={selectedSweets.name} />
        <ContentUnderImage>
          <IonText>
            <SweetsName>{selectedSweets.name}</SweetsName>
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

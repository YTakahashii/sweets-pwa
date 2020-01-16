import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonText,
  IonLabel,
  IonList,
  IonListHeader,
  IonIcon,
  IonButton,
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../states';
import { SquareImageList, SquareImage } from '../../standalones/SquareImageList';
import { heart, heartEmpty, logoYen } from 'ionicons/icons';
import {
  IonDescriptionText,
  IonPriceItem,
  IonShopNameItem,
  IonSweetsDetailContent,
  ContentUnderImage,
  SweetsName,
} from './internal/elements';
import { registerFavoriteSweets, unregisterFavoriteSweets } from '../../../actions/Sweets/ActionCreator';
import { httpToHttps } from '../../../utils/OfficialImageUtil';

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
  const recommendedSweetsIds = selectedSweets.small_category_ids.flatMap(id =>
    aggregatedSweetsByCategory[id].filter(id => id !== selectedSweets.id)
  );
  const contentRef = useRef<HTMLIonContentElement>(null);
  const [favoriteIcon, setFavoriteIcon] = useState(heartEmpty);
  const handleRecommendClick = (id: number) => () => history.push(`/sweets/${id}`, { referrer: '/sweeets/detail' });
  const dispatch = useDispatch();
  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(unregisterFavoriteSweets({ id: parseInt(match.params.id) }));
    } else {
      dispatch(registerFavoriteSweets({ id: parseInt(match.params.id) }));
    }
  };
  const handleBackButton = () => {
    const referrer = history.location.state?.referrer;
    if (referrer === '/sweeets/detail' || referrer === '/shops/detail' || referrer === '/search') {
      // 他のスイーツ詳細・店舗詳細ページから開かれた場合、1つ前のページに遷移する
      history.goBack();
    } else {
      // その他のページから遷移してきた場合は /sweets に遷移する
      if (match.path.includes('/favorites')) {
        history.push('/favorites');
      } else {
        history.push('/sweets');
      }
    }
  };
  console.log(match.path);

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
          <IonButtons slot='start'>
            <IonButton onClick={handleBackButton}>
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>{selectedSweets.name}</IonTitle>
          <IonButtons slot='end'>
            <IonButton onClick={handleFavorite}>
              <IonIcon icon={favoriteIcon}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonSweetsDetailContent class='ion-padding' ref={contentRef}>
        <img src={httpToHttps(selectedSweets.imagePath)} alt={selectedSweets.name} />
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

          {recommendedSweetsIds.length > 0 && (
            <IonList style={{ margin: '0' }}>
              <IonListHeader>おすすめ商品</IonListHeader>
              <SquareImageList>
                {recommendedSweetsIds.map(id => (
                  <SquareImage
                    key={id}
                    src={httpToHttps(sweets[id].imagePath)}
                    alt={sweets[id].name}
                    onClick={handleRecommendClick(id)}
                  />
                ))}
              </SquareImageList>
            </IonList>
          )}
        </ContentUnderImage>
      </IonSweetsDetailContent>
    </IonPage>
  );
};

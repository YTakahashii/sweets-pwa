import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../states';
import { SweetsCard } from '../Sweets/internal/SweetsCard/SweetsCard';
import { RouteComponentProps } from 'react-router';
import {
  SearchResaultNotFound,
  SearchResaultNotFoundTitle,
  SearchResaultNotFoundDescription,
} from '../Search/internal/elements';

type Props = RouteComponentProps<{ id: string }>;

export const SearchSweetsPage: React.FC<Props> = ({ match }) => {
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

  const selectedSmallCategory = smallCategory[parseInt(match.params.id)];
  const filteredSweets = aggregatedSweetsId[selectedSmallCategory.id].map(sweetsId => sweets[sweetsId]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton
              defaultHref={`/search/large_categories/${selectedSmallCategory.large_category_id}`}
              text={`${largeCategory[selectedSmallCategory.large_category_id].name}`}
            />
          </IonButtons>
          <IonTitle>{selectedSmallCategory.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <>
          {filteredSweets.map(s => (
            <SweetsCard key={s.id} sweetsItem={s} shopName={shops[s.shop_id].name} />
          ))}
          {filteredSweets.length === 0 && (
            <SearchResaultNotFound>
              <SearchResaultNotFoundTitle>結果無し</SearchResaultNotFoundTitle>
              <SearchResaultNotFoundDescription>検索結果と一致するものはありません。</SearchResaultNotFoundDescription>
            </SearchResaultNotFound>
          )}
        </>
      </IonContent>
    </IonPage>
  );
};

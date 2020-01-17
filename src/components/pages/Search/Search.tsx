import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonSearchbar,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonThumbnail,
} from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../states';
import { SweetsItem } from '../../../infrastructures/models';
import {
  SearchResaultNotFound,
  SearchResaultNotFoundTitle,
  SearchResaultNotFoundDescription,
} from './internal/elements';
import { httpToHttps } from '../../../utils/OfficialImageUtil';
import { useHistory } from 'react-router';

export const SearchPage: React.FC = () => {
  const sweets = useSelector<RootState, RootState['entities']['sweets']>(state => state.entities.sweets);
  const [filteredSweets, setFilteredSweets] = useState<SweetsItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInput = (e: React.FormEvent<HTMLIonSearchbarElement>) => {
    const value = e.currentTarget.value ? e.currentTarget.value : '';
    setSearchQuery(value);
    if (value) {
      setFilteredSweets(Object.values(sweets).filter(s => s.name.includes(value)));
    } else {
      setFilteredSweets([]);
    }
  };

  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>検索</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            placeholder='スイーツ名で検索'
            onInput={handleSearchInput}
            value={searchQuery}
            onIonClear={handleClear}
          ></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {searchQuery.length === 0 ? (
          <LargeCategoryList />
        ) : filteredSweets.length === 0 ? (
          <SearchResaultNotFound>
            <SearchResaultNotFoundTitle>結果無し</SearchResaultNotFoundTitle>
            <SearchResaultNotFoundDescription>検索結果と一致するものはありません。</SearchResaultNotFoundDescription>
          </SearchResaultNotFound>
        ) : (
          <SearchResaultList filteredSweets={filteredSweets} />
        )}
      </IonContent>
    </IonPage>
  );
};

type Props = {
  filteredSweets: SweetsItem[];
};

const SearchResaultList: React.FC<Props> = ({ filteredSweets }) => {
  const shops = useSelector<RootState, RootState['entities']['shop']>(state => state.entities.shop);
  const history = useHistory();
  const handleClick = (id: number) => () => {
    history.push(`/sweets/${id}`, { referrer: '/search' });
  };

  return (
    <IonList>
      {filteredSweets.map(s => (
        <IonItem key={s.id} button onClick={handleClick(s.id)}>
          <IonThumbnail slot='start'>
            <img src={httpToHttps(s.imagePath)} alt={s.name} />
          </IonThumbnail>
          <IonLabel>
            <h2>{s.name}</h2>
            <p>{shops[s.shop_id].name}</p>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

const LargeCategoryList: React.FC = () => {
  const largeCategory = useSelector<RootState, RootState['entities']['largeCategory']>(
    state => state.entities.largeCategory
  );
  return (
    <IonList>
      {Object.values(largeCategory).map(l => (
        <IonItem key={l.id} button routerLink={`/search/large_categories/${l.id}`}>
          <IonLabel>
            <h2>{l.name}</h2>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

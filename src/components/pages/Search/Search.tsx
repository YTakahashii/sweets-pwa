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

export const SearchPage: React.FC = () => {
  const sweets = useSelector<RootState, RootState['entities']['sweets']>(state => state.entities.sweets);
  const [filteredSweets, setFilteredSweets] = useState<SweetsItem[]>([]);

  const handleSearchInput = (e: React.FormEvent<HTMLIonSearchbarElement>) => {
    // console.log(e.currentTarget.value);
    const searchQuery = e.currentTarget.value;
    if (searchQuery !== null && searchQuery !== undefined) {
      if (searchQuery.length === 0) {
        setFilteredSweets([]);
      } else {
        setFilteredSweets(Object.values(sweets).filter(s => s.name.includes(searchQuery)));
      }
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>検索</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar placeholder='スイーツ名で検索' onInput={handleSearchInput}></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {filteredSweets.length > 0 ? <SearchResaultList filteredSweets={filteredSweets} /> : <LargeCategoryList />}
      </IonContent>
    </IonPage>
  );
};

type Props = {
  filteredSweets: SweetsItem[];
};

const SearchResaultList: React.FC<Props> = ({ filteredSweets }) => {
  const shops = useSelector<RootState, RootState['entities']['shop']>(state => state.entities.shop);
  return (
    <IonList>
      {filteredSweets.map(s => (
        <IonItem key={s.id} button routerLink={`/sweets/${s.id}`}>
          <IonThumbnail slot='start'>
            <img src={s.imagePath} alt='' />
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

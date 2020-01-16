import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../states';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonLabel,
  IonItem,
  IonButtons,
  IonBackButton,
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';

type Props = RouteComponentProps<{ id: string }>;

export const SearchBySmallCategoryPage: React.FC<Props> = ({ match }) => {
  const aggregatedSmallCategory = useSelector<RootState, RootState['largeCategory']['aggregatedSmallCategory']>(
    state => state.largeCategory.aggregatedSmallCategory
  );
  const smallCategory = useSelector<RootState, RootState['entities']['smallCategory']>(
    state => state.entities.smallCategory
  );
  const id = parseInt(match.params.id);
  const largeCategory = useSelector<RootState, RootState['entities']['largeCategory']>(
    state => state.entities.largeCategory
  );
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/search' text='検索' />
          </IonButtons>
          <IonTitle>{largeCategory[id].name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {aggregatedSmallCategory[id].map(id => (
            <IonItem key={id} button routerLink={`/search/small_categories/${id}`}>
              <IonLabel>
                <h2>{smallCategory[id].name}</h2>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

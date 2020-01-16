import styled from 'styled-components';
import { IonItem, IonText, IonContent } from '@ionic/react';
import { Color, Space } from '../../../../styles/variables';

export const IonShopNameItem = styled(IonItem)`
  border-radius: 10px;
  --background: ${Color.WHITE_GRAY};
`;

export const IonPriceItem = styled(IonItem)`
  --padding-start: 0px;
`;

export const IonDescriptionText = styled(IonText)`
  color: ${Color.GRAY};
`;

export const IonSweetsDetailContent = styled(IonContent)`
  --padding-start: 0px;
  --padding-end: 0px;
`;

export const ContentUnderImage = styled.div`
  padding: ${Space * 2}px;
`;

export const SweetsName = styled.h1`
  margin: 0px;
`;

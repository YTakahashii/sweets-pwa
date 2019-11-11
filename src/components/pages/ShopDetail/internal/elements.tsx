import styled from 'styled-components';
import { IonItem, IonContent } from '@ionic/react';
import { Space } from '../../../../styles/variables';

export const IonShopDetailItem = styled(IonItem)`
  --padding-start: 0px;
`;

type IonSopDetaiFontawesomelIconProps = {
  isMaterial: boolean;
};
export const IonSopDetaiFontawesomelIcon = styled('i')<IonSopDetaiFontawesomelIconProps>`
  padding-inline-start: 2px;
  padding-inline-end: ${({ isMaterial }) => (isMaterial ? '33px' : '17px')};
  color: ${({ isMaterial }) => isMaterial && '#666'};
`;

export const IonShopDetailContent = styled(IonContent)`
  --padding-start: 0px;
  --padding-end: 0px;
`;

export const ContentUnderImage = styled.div`
  padding: ${Space * 2}px;
`;

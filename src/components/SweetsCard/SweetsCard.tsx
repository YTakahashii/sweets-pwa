import React from 'react';
import styled from 'styled-components';
import {
  Card as MaterialCard,
  CardActionArea,
  CardMedia as MaterialCardMedia,
  Typography as MaterialTypography,
} from '@material-ui/core';
import { Sweets } from '../../models/Sweets';
import { Shop } from '../../models/Shop';
import useReactRouter from 'use-react-router';

const Card = styled(MaterialCard)`
  position: relative;
  border-radius: 15px;
`;

const CardMedia = styled(MaterialCardMedia)`
  height: 300px;
`;

const TextContainer = styled.div`
  position: absolute;
  height: ${({ theme }) => theme.spacing(8)}px;
  background: linear-gradient(
    to top,
    rgba(97, 97, 97, 0.5),
    rgba(245, 245, 245, 0.5)
  );
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

const SweetsName = styled(MaterialTypography)`
  color: ${({ theme }) => theme.palette.common.white};
  font-weight: bold;
  padding: ${({ theme }) => `${theme.spacing(1)}px ${theme.spacing(1)}px 0px`};
`;

const ShopName = styled(MaterialTypography)`
  color: ${({ theme }) => theme.palette.common.white};
  padding: ${({ theme }) => `${theme.spacing(0)}px ${theme.spacing(1)}px`};
`;

type Props = {
  sweets: Sweets;
  shop: Shop;
};

export const SweetsCard: React.FC<Props> = ({ sweets, shop }) => {
  const { history } = useReactRouter();
  const handleClick = () => history.push(`/sweets/${sweets.id}`);

  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardMedia image={sweets.imagePath} title={sweets.name} />
      </CardActionArea>
      <TextContainer>
        <SweetsName component='h2' variant='subtitle1'>
          {sweets.name}
        </SweetsName>
        <ShopName component='p' variant='subtitle2'>
          {shop.name}
        </ShopName>
      </TextContainer>
    </Card>
  );
};

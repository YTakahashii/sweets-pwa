import React, { useRef, useEffect } from 'react';
import useReactRouter from 'use-react-router';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState, AggregatedSweetsBySmallCategory } from '../../states';
import { Sweets } from '../../models/Sweets';
import { Shop } from '../../models/Shop';
import { bottomNavigationBarHeight } from '../../utils/constants';
import { Typography } from '@material-ui/core';
import MaterialStoreIcon from '@material-ui/icons/StorefrontRounded';
import MaterialThumbUpIcon from '@material-ui/icons/ThumbUpAltRounded';

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(2)}px 0px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow-y: scroll;
  background: ${({ theme }) => theme.palette.common.white};
  padding-bottom: calc(
    ${({ theme }) => bottomNavigationBarHeight + theme.spacing(3)}px + env(safe-area-inset-bottom) * 2.5
  );
  padding-bottom: calc(
    ${({ theme }) => bottomNavigationBarHeight + theme.spacing(3)}px + constants(safe-area-inset-bottom) * 2.5
  );
`;

const Spacer = styled.div`
  padding-bottom: ${bottomNavigationBarHeight - 16}px;
`;

const SweetsImage = styled.img`
  width: 100%;
  max-height: 500px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  padding-left: 16px;
  padding-right: 16px;
`;

const SweetsName = styled(Typography)`
  font-weight: bold;
  font-size: 1.5rem;
`;

const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
`;

const Text = styled.p`
  margin: 0;
  font-size: 1.25rem;
`;

const MoneyIcon = styled.i`
  padding-right: ${({ theme }) => theme.spacing(1)}px;
`;

const StoreIcon = styled(MaterialStoreIcon)`
  padding-right: ${({ theme }) => theme.spacing(1)}px;
  font-size: 1.8rem;
`;

const StoreLink = styled.a`
  font-size: 1.125rem;
`;

const Description = styled.p`
  padding-top: ${({ theme }) => theme.spacing(1)}px;
  padding-bottom: ${({ theme }) => theme.spacing(2)}px;
  margin: 0px;
`;

const ThumbUpIcon = styled(MaterialThumbUpIcon)`
  padding-right: ${({ theme }) => theme.spacing(1)}px;
  font-size: 1.8rem;
`;

const RecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.spacing(2)}px;
`;

const RecommendSweetsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, 100px);
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  align-content: center;
  justify-content: center;
  padding-top: 8px;
  grid-gap: 8px;
`;

const RecommendSweetsImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 100px;
  max-width: 100px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.palette.grey[400]};
`;

type RouteParams = {
  id: string;
};

export const SweetsDetailPage: React.FC = () => {
  const ref = useRef<HTMLDivElement>();
  const { match, history } = useReactRouter<RouteParams>();
  const id = parseInt(match.params.id, 10);
  const sweets = useSelector<RootState, Sweets[]>(state => state.sweets.lists);
  const mainSweets = sweets.find(s => s.id === id);
  const shop = useSelector<RootState, Shop | undefined>(state =>
    state.shop.lists.find(s => s.id === mainSweets!.shop_id)
  );
  const aggregatedSweetsByCategory = useSelector<RootState, AggregatedSweetsBySmallCategory>(
    state => state.smallCategory.edits.aggregatedSweetsBySmCategory
  );
  const recommendedSweetsIds = mainSweets!.small_category_ids.flatMap(id => aggregatedSweetsByCategory[id]);
  const sweetsById = (id: number) => sweets.find(s => s.id === id);
  const handleRcommendedImageClick = (id: number) => () => history.push(`/sweets/${id}`);

  useEffect(() => {}, [match.params.id]);

  return (
    <Wrapper>
      <Spacer />
      {mainSweets === undefined ? (
        <p>存在しません。</p>
      ) : (
        <Container>
          <ImageContainer>
            <SweetsImage src={mainSweets.imagePath} />
          </ImageContainer>
          <Content>
            <SweetsName component='h2' variant='h6'>
              {mainSweets.name}
            </SweetsName>
            <IconTextContainer>
              <MoneyIcon className='fas fa-yen-sign' />
              <Text>{mainSweets.price}</Text>
            </IconTextContainer>
            <Description>{mainSweets.description}</Description>
            <IconTextContainer>
              <StoreIcon aria-label='店舗名' />
              <StoreLink href={shop && `/shops/${shop.id}`}>{shop ? shop.name : '店舗情報はありません'}</StoreLink>
            </IconTextContainer>
            <RecommendContainer>
              <IconTextContainer>
                <ThumbUpIcon />
                <Text>おすすめ商品</Text>
              </IconTextContainer>
              <RecommendSweetsContainer>
                {recommendedSweetsIds.map(id => (
                  <div key={id}>
                    <RecommendSweetsImage
                      key={id}
                      src={sweetsById(id)!.imagePath}
                      onClick={handleRcommendedImageClick(id)}
                    />
                  </div>
                ))}
              </RecommendSweetsContainer>
            </RecommendContainer>
          </Content>
        </Container>
      )}
    </Wrapper>
  );
};

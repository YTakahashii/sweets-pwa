import React from 'react';
import useReactRouter from 'use-react-router';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../states';
import { Sweets } from '../../models/Sweets';
import { bottomNavigationBarHeight } from '../../utils/constants';
import { Typography } from '@material-ui/core';

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(2)}px 0px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow-y: scroll;
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

const Price = styled.p`
  margin: 0;
  font-size: 1.125rem;
  line-height: 2;
`;

const Description = styled.p`
  margin: 0;
`;

type RouteParams = {
  id: string;
};

export const SweetsDetailPage: React.FC = () => {
  const { match } = useReactRouter<RouteParams>();
  const id = parseInt(match.params.id, 10);
  const sweets = useSelector<RootState, Sweets | undefined>(state =>
    state.sweets.lists.find(s => s.id === id)
  );

  return (
    <Wrapper>
      <Spacer />
      {sweets === undefined ? (
        <p>存在しません。</p>
      ) : (
        <Container>
          <ImageContainer>
            <SweetsImage src={sweets.imagePath} />
          </ImageContainer>
          <Content>
            <SweetsName component='h2' variant='h6'>
              {sweets.name}
            </SweetsName>
            <Price>{sweets.price}</Price>
            <Description>{sweets.description}</Description>
          </Content>
        </Container>
      )}
    </Wrapper>
  );
};

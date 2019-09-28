import React from 'react';
import { bottomNavigationBarHeight } from '../../utils/constants';
import { Container } from '@material-ui/core';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  overflow-y: scroll;
  padding-bottom: calc(
    ${({ theme }) => bottomNavigationBarHeight + theme.spacing(3)}px +
      env(safe-area-inset-bottom) * 2.5
  );
  padding-bottom: calc(
    ${({ theme }) => bottomNavigationBarHeight + theme.spacing(3)}px +
      constants(safe-area-inset-bottom) * 2.5
  );
  padding-top: ${({ theme }) => theme.spacing(5)}px;
  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    padding-top: ${({ theme }) => theme.spacing(6)}px;
  }
`;

const List = styled.ul`
  max-width: 756px;
  margin: 0 auto;
  padding-inline-start: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    max-width: 1000px;
    justify-content: flex-start;
  }
`;

const Item = styled.li`
  padding: ${({ theme }) => theme.spacing(1)}px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    max-width: 500px;
    width: 50%;
    margin: 0;
  }
`;

export const SweetsCardList: React.FC = ({ children }) => (
  <Wrapper>
    <Container>
      <List>
        {React.Children.map(children, child => (
          <Item>{child}</Item>
        ))}
      </List>
    </Container>
  </Wrapper>
);

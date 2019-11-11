import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  justify-content: space-between;
  grid-auto-rows: minmax(101px, auto);
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const SquareImageList: React.FC<ComponentPropsWithoutRef<'ul'>> = ({ children, ...rest }) => (
  <List {...rest}>{children}</List>
);

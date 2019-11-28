import React from 'react';
import styled from 'styled-components';
import { useWindowSize } from '../../../hooks/useWindowSize';

const Wrapper = styled.li`
  display: flex;
`;

const Img = styled.img`
  width: 100%;
`;

type Props = {
  src?: string;
  alt?: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
};

export const SquareImage: React.FC<Props> = ({ src, alt, onClick }) => {
  const windowSize = useWindowSize();
  const height = Math.ceil((windowSize.innerWidth - 40) / 3);

  return (
    <Wrapper>
      <Img src={src} alt={alt} onClick={onClick} height={height} />
    </Wrapper>
  );
};

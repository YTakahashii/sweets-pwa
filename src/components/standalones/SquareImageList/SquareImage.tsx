import React, { useRef } from 'react';
import styled from 'styled-components';
import useComponentSize from '@rehooks/component-size';

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
  const targetRef = useRef<HTMLLIElement>(null);
  const size = useComponentSize(targetRef);

  return (
    <Wrapper ref={targetRef}>
      <Img src={src} alt={alt} onClick={onClick} height={size.width} />
    </Wrapper>
  );
};

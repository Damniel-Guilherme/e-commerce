import React from 'react';
import styled from 'styled-components';

// Estilos globais

const CorWrapper = styled.p`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1124px) {
    
  }
`;

const Cor = () => {
  return (
    <CorWrapper>
        Cor
    </CorWrapper>
  );
}

export default Cor;
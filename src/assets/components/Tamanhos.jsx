import React from 'react';
import styled from 'styled-components';

// Estilos globais

const TamanhosWrapper = styled.p`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1124px) {
    
  }
`;

const CheckboxStyled = styled.input`
  
`;

const Tamanhos = () => {
  return (
    <TamanhosWrapper>
        Tamanho
    </TamanhosWrapper>
  );
}

export default Tamanhos;
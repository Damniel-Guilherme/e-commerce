import React from 'react';
import styled from 'styled-components';

// Importando os Cards das Collections
import CollectionsCard from './CollectionsCard';

// Estilos globais
import GlobalStyle from './GlobalStyle';

const LancamentosContainer = styled.div`

  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: #00000020;
  margin-top: 30px;
`;

const Title = styled.h1`
  width: 1920px;
  margin-left: 10px;
  color: #000000;
  font-size: 25px;
  text-align: start;
 font-family: 'Roboto', sans-serif;  // Adiciona a fonte Roboto ao título

 @media only screen and (min-width: 1124px) {
    font-size: 25px;
    margin-left: 40px;

 }

`;

const Collections = () => {
  return (

      <LancamentosContainer>
          <GlobalStyle/>
          <Title>Collections</Title>
        
        <CollectionsCard></CollectionsCard>
      </LancamentosContainer>


  );
}

export default Collections;
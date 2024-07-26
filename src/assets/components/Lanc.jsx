import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Cor from './Cor';
import Tamanhos from './Tamanhos';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 0px 30px;
  max-width: 1920px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover img {
    transform: scale(1.05);
  }

  &:hover div {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const Text = styled.h3`
  color: white;
  font-size: 1.5em;
  text-align: center;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0px;
  margin: 20px;
`;

const Title = styled.h4`
  font-size: 16px;
  text-align: center;
  margin: 20px;
`;

const ButtonCart = styled.button`
  border: none;
  background-color: transparent;
`;

const DivDois = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const GhostItem = styled(GridItem)`
  visibility: hidden;
`;

const Lanc = () => {
  const [roupas, setRoupas] = useState([]);

  useEffect(() => {
    const fetchRoupas = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/services');
        const updatedRoupas = response.data.map(roupa => ({
          ...roupa,
          image_path: `http://localhost:3000/${roupa.image_path.replace(/\\/g, '/')}`
        }));
        setRoupas(updatedRoupas);
      } catch (error) {
        console.error('Error fetching roupas:', error);
      }
    };

    fetchRoupas();
  }, []);

  const getGhostItems = () => {
    const itemsPerRow = window.innerWidth >= 1200 ? 4 : window.innerWidth >= 900 ? 3 : window.innerWidth >= 600 ? 2 : 1;
    const ghostItemsCount = itemsPerRow - (roupas.length % itemsPerRow);
    return Array(ghostItemsCount).fill(null);
  };

  return (
    <Container>
      {roupas.map((roupa) => (
        <GridItem key={roupa._id}>
          <ImageWrapper>
            <Title>{roupa.title}</Title>
            <Image src={roupa.kit} alt={roupa.description} />
            <Overlay>
              <Text>{roupa.title}</Text>
            </Overlay>
            <Description>
              <DivDois>
                <Tamanhos />
                <Cor />
              </DivDois>
              <p>{roupa.valor}</p>
              <ButtonCart>Add to Cart</ButtonCart>
            </Description>
          </ImageWrapper>
        </GridItem>
      ))}
      {getGhostItems().map((_, index) => (
        <GhostItem key={`ghost-${index}`} />
      ))}
    </Container>
  );
};

export default Lanc;
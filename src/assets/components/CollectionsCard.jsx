import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
    width: 100%;
    height: 120px;
    background-color: #ff0000;

    @media only screen and (min-width: 1124px) {
        background-color: black;
        height: 350px;
    };
`
const CardsD = styled.div` 
    width: 17%;
    height: 90%;
    background-color: blue;
    color: white;
    text-align: center;
`

const CardsDText = styled.p`
    font-size: 20px;
`

const CollectionsCard = () => {

    const Categorias = ['Camisetas', 'Bermudas', 'Moletons', 'Kits', 'Acessorios', 'News'];

    return (
         <Div>
            {Categorias.map((categoria, index) => (
                <CardsD><CardsDText key={index}>{categoria}</CardsDText></CardsD>
            ))};
         </Div>
    );
};

export default CollectionsCard;
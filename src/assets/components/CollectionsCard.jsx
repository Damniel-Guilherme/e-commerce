import React from 'react';
import styled from 'styled-components';
import { ImgsCollections } from './ImgsCollections.jsx';

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    height: 120px;
    background-color: #ff0000;

    @media only screen and (min-width: 1124px) {
        background-color: black;
        height: 350px;
    }
`;

const CardsD = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin: 0 10px;
    width: 17%;
    height: 90%;
    background-color: blue;
    color: white;
    text-align: center;
`;

const CardsDText = styled.p`
    font-size: 20px;
`;

const CardsImgs = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const CollectionsCard = () => {
    const Categorias = [
        {
            Categoria: "Camisetas",
            Imagem: ImgsCollections.Camisetas,
        },
        {
            Categoria: "Moletons",
            Imagem: ImgsCollections.Moletons,
        },
        {
            Categoria: "Calças",
            Imagem: ImgsCollections.Calças,
        },
        {
            Categoria: "Bermudas",
            Imagem: ImgsCollections.Bermudas,
        },
        {
            Categoria: "Kits",
            Imagem: ImgsCollections.Kits,
        },
        {
            Categoria: "News",
            Imagem: ImgsCollections.News,
        },
    ];

    return (
        <Div>
            {Categorias.map((categoria, index) => (
                <CardsD key={index}>
                    <CardsDText>{categoria.Categoria}</CardsDText>
                    <CardsImgs src={categoria.Imagem} alt={categoria.Categoria} />
                </CardsD>
            ))}
        </Div>
    );
};

export default CollectionsCard;

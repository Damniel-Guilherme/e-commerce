import React from 'react';
import styled from 'styled-components';
import { ImgsCollections } from './ImgsCollections.jsx';

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px 0;
    gap: 10px;

    background-color: red;
 
    @media only screen and (min-width: 1124px) {
        flex-wrap: nowrap;
        gap: 10px;
    }
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 30%;

    max-width: 300px;
    background-color: red;
    color: white;
    text-align: center;
    gap: 10px;
    margin-bottom: 10px;


    @media only screen and (min-width: 1124px) {
        background-color: blue;
        gap: 0px;
    }
`;

const CardText = styled.p`
    font-size: 16px;
    color: black;
    font-weight: bold;

    @media only screen and (min-width: 1124px) {
        font-size: 20px;
    }
`;

const CardImage = styled.img`
    width: 100%;
    object-fit: contain;
    border: solid 1px black;
`;

const CollectionsCard = () => {
    const Categorias = [
        { Categoria: "Camisetas", Imagem: ImgsCollections.Camisetas },
        { Categoria: "Blusas", Imagem: ImgsCollections.Blusas },
        { Categoria: "Calças", Imagem: ImgsCollections.Calças },
        { Categoria: "Bermudas", Imagem: ImgsCollections.Bermudas },
        { Categoria: "Kits", Imagem: ImgsCollections.Kits },
        { Categoria: "News", Imagem: ImgsCollections.News },
    ];

    return (
        <Div>
            {Categorias.map((categoria, index) => (
                <Card key={index}>
                    <CardText>{categoria.Categoria}</CardText>
                    <CardImage src={categoria.Imagem} alt={categoria.Categoria} />
                </Card>
            ))}
        </Div>
    );
};

export default CollectionsCard;
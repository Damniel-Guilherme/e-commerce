import React from 'react';
import styled from 'styled-components';
import { ImgsCollections } from './ImgsCollections.jsx';

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    height: auto;
 


    @media only screen and (min-width: 1124px) {

        height: 350px;
        gap: 20px;
    }
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 25%;
    height: 120px;

    color: white;
    text-align: center;
    padding: 10px;

    @media only screen and (min-width: 1124px) {
        width: 14%;
        height: 90%;
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
    height: 80%;
    object-fit: contain;
`;

const CollectionsCard = () => {
    const Categorias = [
        { Categoria: "Camisetas", Imagem: ImgsCollections.Camisetas },
        { Categoria: "Moletons", Imagem: ImgsCollections.Moletons },
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
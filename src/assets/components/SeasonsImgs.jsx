import styled from 'styled-components';

const ContainerCollections = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 100%;
    max-width: 1920px;
    height: 900px;
    background-color: red;

    padding: 0 30px;
`;

const ContainerCollectionsEstation = styled.div`
    width: 30%;
    height: 850px;
    background-color: blue;
`;

const ContainerCollectionsEstation2 = styled.div`
    width: 70%;
    height: 850px;
    background-color: blue;
`;


const SeasonsImgs = () => {
    return (
        <>
           <ContainerCollections>
            <ContainerCollectionsEstation></ContainerCollectionsEstation>
            <ContainerCollectionsEstation2></ContainerCollectionsEstation2>
           </ContainerCollections>
        </>

    );
}

export default SeasonsImgs;
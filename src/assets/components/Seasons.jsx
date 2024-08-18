import styled from 'styled-components';


const Container = styled.div`
    display: flex;

    width: 100%;
    max-width: 1920px;
    margin-top: 20px;
`;

const Text = styled.p`
    font-size: 30px;
    font-weight: bolder;
    

    @media only screen and (min-width: 1124px) {
        
    font-size: 25px;
    margin: 0 20px;
    padding: 20px;
 }
`;

const Seasons = () => {
    return (
        <Container>
            <Text>Collections</Text>

        </Container>
    );
}

export default Seasons;
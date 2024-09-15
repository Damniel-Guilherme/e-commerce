import styled from 'styled-components';
import LogoImg from '../../imgs/header/NavLogo.svg';

const StyledLogo = styled.img`
  width: 100px;

  @media only screen and (min-width: 1124px) {
    width: 130px;
  }
`;

function NavLogo() {
  return (
    <>
      <StyledLogo src={LogoImg} alt="Logo Rexpeita" />
    </>
  );
}

export default NavLogo;
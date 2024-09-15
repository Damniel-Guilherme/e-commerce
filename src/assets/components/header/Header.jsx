import styled from 'styled-components';
import NavLogo from './NavLogo';
import Menu from './Menu';
import ContainerCards from './ContainerCards';

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:  10px 0px;
  color: #000000;

  @media only screen and (min-width: 1124px) {
    margin: 0 0px;
    height: 100px;
   
    .menu {
      order: 2;
    }
    .logo {
      order: 1;
      
    }
    .DisplayNone {
      display: none;
    }
  }
`;

const MenuWrapper = styled.div`
  order: 1;

  @media only screen and (min-width: 1124px) {
    order: 2;
  }
`;

const LogoWrapper = styled.div`
  order: 2;

  @media only screen and (min-width: 1124px) {
    order: 1;
  }
`;

const ContainerCardsWrapper = styled.div`
  order: 3;

  @media only screen and (min-width: 1124px) {
    order: 3;
  }
`;

const ContainerMenuLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media only screen and (min-width: 1124px) {
    display: none;
  }
`

const ContainerMenuLogoDesk = styled.div`
 display: none;

  @media only screen and (min-width: 1124px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

function Header() {
  return (
    <HeaderContainer>
      <ContainerMenuLogoDesk>

        <MenuWrapper>
          <Menu/>
        </MenuWrapper>

        <LogoWrapper>
          <NavLogo/>
        </LogoWrapper>

      </ContainerMenuLogoDesk>

      <MenuWrapper className='DisplayNone'>
        <Menu />
      </MenuWrapper>

      <LogoWrapper className='DisplayNone'>
        <NavLogo />
      </LogoWrapper>

      <ContainerCardsWrapper>
        <ContainerCards />
      </ContainerCardsWrapper>
    </HeaderContainer>
  );
}

export default Header;
import { styled } from 'styled-components';
const StyledNavBar = styled.nav<{ $isTransparent: boolean; $shown: boolean }>`
  position: sticky;
  display: flex;
  z-index: 2;
  top: 25px;
  background-color: black;
  min-height: 70px;
  height: auto;
  width: 100%;
  visibility: ${props => props.$shown ? 'visible' : 'hidden'};
  .logo {
    width: 100px;
    margin-top: 10px;
    margin-bottom: 0px;
    margin-left: 25px;
  }
  .hamburger {
    position: absolute;
    right: 25px;
    top: 20px;
    border: 0px solid blue;
    color: var(--main-bg);
  }
  @media screen and (min-width: 700px) {
    display: none;
    margin-bottom: -5%;
    background-color: transparent;
    .logo {
      visibility: hidden;
      z-index: 0;
    }
    .hamburger {
      display: none;
    }
  }
`;
export default StyledNavBar;

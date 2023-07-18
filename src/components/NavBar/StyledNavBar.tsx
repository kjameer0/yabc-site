import { styled } from 'styled-components';
const StyledNavBar = styled.nav<{ $isTransparent: boolean }>`
  position: sticky;
  display: flex;
  z-index: 2;
  top: 0px;
  background-color: black;
  min-height: 70px;
  height: auto;
  width: 100%;
  .logo {
    visibility: ${(props) => (props.$isTransparent ? 'hidden' : 'visible')};
    visibility: 'visible';
    margin-top: 5px;
    margin-left: 10px;
    min-width: 169px;
    max-width: 174px;
    width: 169px;
    height: auto;
  }
  .hamburger {
    position: absolute;
    right: 4px;
    top: 8%;
    border: 0px solid blue;
    color: var(--main-bg);
  }
  @media screen and (min-width: 700px) {
    margin-bottom: -5%;
    background-color: transparent;
    .logo {
      width: 22%;
      visibility: visible;
      z-index: 0;
    }
    .hamburger {
      display: none;
    }
  }
`;
export default StyledNavBar;

import { styled } from 'styled-components';
const StyledNavBar = styled.nav<{ $isTransparent: boolean }>`
  position: sticky;
  display: flex;
  z-index: 2;
  top: 0px;
  min-height: 70px;
  height: auto;
  width: 100%;
  .logo {
    visibility: ${(props) => (props.$isTransparent ? 'hidden' : 'visible')};
    visibility: 'visible';
    margin-left: 1%;
    margin-top: 5px;
    width: calc(169px / 1.5);
    height: calc(128px / 1.5);
  }
  .hamburger {
    position: absolute;
    right: 4px;
    top: 8%;
    border: 0px solid blue;
    color: var(--main-bg);
  }
  @media screen and (min-width: 700px) {
    margin-bottom: 10px;
    .logo {
      visibility: visible;
      width: calc(169px / 1);
      height: calc(128px / 1);
      z-index: 0;
    }
    .hamburger {
      display: none;
    }
  }
`;
export default StyledNavBar;

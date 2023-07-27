import { styled } from 'styled-components';
const StyledNavBar = styled.nav<{ $isTransparent: boolean }>`
  position: sticky;
  display: flex;
  z-index: 2;
  top: 13px;
  background-color: black;
  min-height: 70px;
  height: auto;
  width: 100%;
.logo {
  margin-top: 10px;
  margin-bottom: 0px;
}
  .hamburger {
    position: absolute;
    right: 4px;
    top: 8%;
    border: 0px solid blue;
    color: var(--main-bg);
  }
  @media screen and (min-width: 700px) {
    display: none;
    margin-bottom: -5%;
    background-color: transparent;
    .logo {
      width: 22%;
      visibility: hidden;
      z-index: 0;
    }
    .hamburger {
      display: none;
    }
  }
`;
export default StyledNavBar;

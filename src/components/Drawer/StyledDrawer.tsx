import { styled } from 'styled-components';
import { OpenOptions } from 'components/NavBar/utils-NavBar';
const drawerWidth = '200px';
const StyledDrawer = styled.nav<{ $open: OpenOptions }>`
  position: fixed;
  top: 0;
  z-index: 3;
  background-attachment: scroll;
  right: calc(${drawerWidth} * -1);
  height: 100vh;
  background-color: var(--main-bg);
  width: ${drawerWidth};
  animation-name: ${(props) => props.$open};
  animation-duration: 0.25s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  .categories-list {
    list-style: none;
    padding-left: 0;
  }
  .category {
    margin-top: 5px;
    flex-basis: 100%;
  }
  .category button {
    cursor: pointer;
    background: black;
    color: white;
    border: 0;
    padding: 10px 0;
    height: 100%;
    font-size: 1.1rem;
    width: 100%;
  }
  .category ul {
    list-style: none;
    padding-left: 10px;
  }
  .category ul .nav-anchor button{
    margin-top: 1px;
    background: #515050;
  }

  @keyframes open {
    from {
      right: calc(${drawerWidth} * -1);
    }
    to {
      right: 0;
    }
  }
  @keyframes close {
    from {
      right: 0;
    }
    to {
      right: calc(${drawerWidth} * -1);
    }
  }
`;

export default StyledDrawer;

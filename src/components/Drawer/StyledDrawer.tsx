import { styled } from 'styled-components';
import { OpenOptions } from 'components/NavBar/utils-NavBar';
const drawerWidth = '200px';
const StyledDrawer = styled.div<{ $open: OpenOptions }>`
  position: fixed;
  top: 0;
  z-index: 3;
  background-attachment: scroll;
  right: calc(${drawerWidth} * -1);
  height: 100vh;
  background-color: #a19d9d;
  width: ${drawerWidth};
  animation-name: ${(props) => props.$open};
  animation-duration: 0.25s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
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
  .nav-list {
    position: relative;
    right: 0;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .nav-list > li {
    height: 40px;
    border: 1px solid black;
    width: 100%;
  }
`;

export default StyledDrawer;

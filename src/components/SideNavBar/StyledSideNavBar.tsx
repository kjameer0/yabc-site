import { styled } from 'styled-components';

export default styled.nav`
  position: fixed;
  left: 0;
  display: none;
  background-color: var(--main-bg);
  height: 100vh;
  width: clamp(200px, 20vw, 255px);
  .img-wrapper {
    background: black;

  }
  @media screen and (min-width: 700px) {
    display: block;
  }
`;

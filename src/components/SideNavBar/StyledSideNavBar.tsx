import { styled } from 'styled-components';

export default styled.nav`
  position: fixed;
  left: 0;
  display: none;
  /* margin-top: 200px; */
  background-color: var(--main-bg);
  height: 100vh;
  width: clamp(200px, 20vw, 255px);
  @media screen and (min-width: 700px) {
    display: block;
  }
`;

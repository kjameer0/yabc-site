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
 ul {
  display: flex;
  flex-wrap: wrap;
    width: 100%;
    list-style: none;
    padding-left: 0;
    border: 1px solid red;
  }
  .category {
    width: 100%;
  }
  a {
    text-decoration: none;
  }
  button:hover, a:hover {
    transform: scale(1.1);
  }
  .category button {
    /* color: red; */
    width: 100%;

  }
  ul ul {
    list-style: square;
  }
  @media screen and (min-width: 700px) {
    display: block;
  }
`;

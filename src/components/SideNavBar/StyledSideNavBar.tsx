import { styled } from 'styled-components';

export default styled.nav`
  position: fixed;
  top: 15px;
  left: 0;
  display: none;
  background-color: var(--main-bg);
  height: 100vh;
  width: clamp(200px, 20vw, 255px);
  .img-wrapper {
    background: black;
  }
  .categories-list {
    margin-top: -15px;
    background: black;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    list-style: none;
    padding-left: 0;
  }
  .category {
    width: 100%;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button:hover,
  a:hover {
    transform: scale(1.1);
    font-size: 1.3rem;
  }
  .category button {
    cursor: pointer;
    font-family: Inter-black, sans-serif;
    height: 25px;
    font-size: 0.75rem;
    border: 0;
    margin: 5px 0;
    width: 100%;
    color: black;
    background: var(--main-bg);
  }
  .nav-anchor .link-button {
    background: #bad87f;
  }
  ul ul {
    list-style: none;
    text-align: right;
  }
  .address-p {
    font-family: Inter-semi-bold;
    font-size: .75rem;
    margin: 0 0 0 10px;
    text-align: left;
    color: black;
    flex-basis: 100%;
  }
  .mission-logo-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    height: auto;
  }
  img {
    margin-left: 5px;
    width: 90px;
  }

  @media screen and (min-width: 700px) {
    display: block;
  }
`;

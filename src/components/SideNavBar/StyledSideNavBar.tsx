import { styled } from 'styled-components';

export default styled.nav`
  position: fixed;
  top: 0px;
  left: 0;
  display: none;
  background-color: var(--main-bg);
  height: 100vh;
  width: clamp(200px, 20vw, 255px);
  /* logo wrapper */
  .img-wrapper {
    background: black;
    margin-bottom: 5px;
  }
  .categories-list {
    margin-top: -25px;
    background: black;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    list-style: none;
    padding-left: 0;
    padding-bottom: 6px;
  }
  //individual li item of link category
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
    height: 30px;
    font-size: .75rem;
    border: 0;
    margin: 5px 0;
    width: 100%;
    color: black;
    background: var(--main-bg);
  }
  .nav-anchor .link-button {
    background: #bad87f;
  }
  /* any individual list of links under each category */
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
    margin-left: 30px;
  }
  img {
    margin-left: 5px;
    width: 140px;
  }

  @media screen and (min-width: 700px) {
    /* toggle existence */
    display: block;
  }
`;

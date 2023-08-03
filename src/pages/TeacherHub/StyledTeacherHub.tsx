import { styled } from 'styled-components';

export default styled.main`
  .bold-para {
    font-family: hind-guntur-bold, sans-serif;
  }
  .expectation-list-wrapper {
  }
  .expectations-list p::before {
    content: '●';
    /* content: '◼'; */
    margin-right: 5px;
  }
  .expectation-list-wrapper img {
    margin-top: 50px;
    width: clamp(217px, 30vw, 440px);
    height: auto;
    max-height: clamp(217px, 30vw, 440px);
  }
  .resource-button-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .resource-button-wrapper a {
    padding: 10px 0;
    margin: 15px 0;
    width: 50%;
  }

  @media screen and (min-width: 700px) {
    .expectation-list-wrapper {
      display: flex;
    }
    .resource-button-wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    .resource-button-wrapper a {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 80px;
      margin: 10px 0;
      width: 40%;
    }
    .resource-button-wrapper a p {
      margin: 0;
    }
  }
`;

import { styled } from 'styled-components';

export default styled.main`
  .requirements-wrapper {
    display: flex;
    justify-content: center;
  }
  .requirements {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    background-color: white;
    color: black;
  }
  .requirements-h3 {
    font-family: Inter-black, sans-serif;
    font-size: clamp(1.1rem, 3vw, 2.3rem);
    margin: 5px;
    margin-bottom: 15px;
  }
  .requirements-h4 {
    font-size: clamp(1rem, 3vw, 1.5rem);
    font-family: Inter-bold;
    margin-bottom: 0;
    margin-top: 0px;
  }
  .requirements-ul {
    margin-top: 0;
    width: 75%;
    list-style: none;
    padding: 0;
  }
  .requirements-ul li::before {
    content: '●';
    margin-right: 5px;
  }
  .requirements p {
    margin-top: 0;
    font-family: inter-bold;
    font-size: clamp(1rem, 2vw, 1.4rem);
  }
  .green-separator {
    width: 80%;
    height: 1px;
    background: var(--main-bg);
    align-self: center;
    margin-top: 30px;
  }
  .enrollment-process {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .enrollment-process p {
    width: 75%;
  }
  .enrollment-button-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
  .enrollment-button-wrapper button {
    padding: 5px;
  }
  .faq-section {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .faq-h3 {
    font-size: clamp(1.3rem, 3vw, 2rem);
    margin: 20px;
  }

  .faq-section section {
    color: black;
    width: 75%;
  }
  .regular-instruction {
    background: #d0ea9b;
    margin-bottom: 40px;
  }
  .shared-instruction {
    background: white;
  }
`;

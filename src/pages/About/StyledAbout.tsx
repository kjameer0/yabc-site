import { styled } from 'styled-components';

export default styled.main`
  .line-separate {
    margin: 4% auto 2% auto;
    width: 95%;
    max-width: 988px;
    background-color: var(--main-bg);
    height: 1px;
  }

  .attend-info .para-content {
    margin-top: 0;
    margin-bottom: 20px;
    font-family: hind-guntur-light, sans-serif;
  }
  .para-content b {
    font-family: hind-guntur-semibold, sans-serif;
  }
  .attend-info-h2 {
    margin: 0;
    font-family: hind-guntur-bold;
    font-size: clamp(1rem, 3vw, 1.5rem);
  }
  button {
    padding: 5px;
    max-width: 510px;
    width: 90%;
  }
  .open-house-button {
    margin-bottom: 2%;
  }
  .good-fit-section .major-heading {
    margin-bottom: 2px;
  }
  .good-fit-h3 {
    margin-top: 0;
    color: var(--main-bg);
  }
  .requirements {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .requirements-h4 {
    margin-bottom: 10px;
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
  .meet-graduates img {
    width: clamp(197px, 20vw, 400px);
    height: auto;
    border: 8px solid white;
  }
  @media screen and (min-width: 700px) {
    .line-break {
      display: none;
    }
    section > .para-content {
      width: 80%;
    }
    .requirements-ul {
      width: 100%;
    }
    .attend-info,
    .good-fit-section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .attend-info button {
      width: 35%;
    }
  }
`;

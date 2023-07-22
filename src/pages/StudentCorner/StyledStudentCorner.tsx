import { styled } from 'styled-components';

export default styled.main`
  .remote-learning-section {
    padding-bottom: 30px;
  }
  .reminder-wrapper {
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
  }
  .reminder-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 734px;
    border: 1px solid white;
    background-color: white;
    color: black;
  }
  .reminder-section h2 {
    font-size: clamp(1.5rem, 3vw, 3rem);
  }
  .reminder-section p {
    margin-top: 0;
    font-family: hind-guntur-bold, sans-serif;
    width: 90%;
    line-height: 1.4;
  }
  .remote-learning-section {
    max-width: 734px;
    width: 100%;
    border: 1px solid var(--main-bg);
    margin-top: 40px;
  }
  .remote-learning-section img {
    width: clamp(279px, 60vw, 709px);
  }
  .buttons-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .buttons-wrapper button {
    max-width: 734px;
    margin-top: 30px;
    width: clamp(292px, 40%, 734px);
  }
  .buttons-wrapper button p {
    max-height: 36px;
    height: auto;
    margin-top: 4px;
    font-family: hind-guntur-medium, sans-serif;
    font-size: clamp(1rem, 1.5vw, 2rem);
    letter-spacing: -0.05rem;
    padding-top: 2px;
    margin: 0;
  }
`;

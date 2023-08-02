import { styled } from 'styled-components';

export default styled.main`
  .transform-lives-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .transform-p-first {
    margin-bottom: 0;
    width: 80%;
    font-family: hind-guntur-bold, sans-serif;
  }
  .remote-learning-section {
    padding-bottom: 30px;
  }
  .reminder-wrapper {
    display: flex;
    justify-content: center;
  }
  .reminder-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 734px;
    width: 80%;
    border: 1px solid white;
    background-color: white;
    color: black;
    padding-bottom: 5px;
  }
  .reminder-section h2 {
    font-size: clamp(1.5rem, 3vw, 3rem);
    margin-bottom: 10px;
  }
  .reminder-section p {
    margin-top: 0;
    margin-bottom: 10px;
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
  .buttons-wrapper a {
    max-width: 734px;
    margin-top: 30px;
    width: clamp(292px, 40%, 734px);
  }
`;

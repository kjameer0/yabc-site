import { styled } from 'styled-components';

export default styled.main`
  .enroll-section {
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    color: black;
  }
  .enroll-section p {
    margin-top: 0;
    margin-bottom: 10px;
    width: 80%;
  }
  .enroll-section li {
    margin: 0px auto;
    width: 100%;
  }
  .enroll-section-h2 {
    font-size: clamp(1.2rem, 3vw, 2rem);
    font-family: Inter-black;
    margin-bottom: 10px;
  }
  .enroll-step-h3 {
    font-size: clamp(.75rem, 3vw, 1.5rem);
    font-family: Inter-bold;
    margin: 0;
  }
  .step-ul {
    margin-top: 0;
    list-style: none;
    padding: 0;
  }
  .step-ul li::before {
    content: '●';
    margin-right: 5px;
  }
  .enroll-step-bold-p {
    font-family: Inter-bold;
    font-size: clamp(1rem , 3vw, 1.3rem);
  }
`;

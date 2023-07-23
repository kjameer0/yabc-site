import { styled } from 'styled-components';

export default styled.main`
  p {
    margin: 0;
  }
  fieldset {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    border: 0;
  }
  .form-label {
    font-size: clamp(1rem, 3vw, 1.2rem);
    font-family: Inter-regular, sans-serif;
    display: flex;
    flex-basis: 100%;
    max-width: 960px;
    margin-bottom: 3%;
  }
  .input-field {
    font-family: Inter-regular;
    height: 29px;
    flex-basis: 50%;
  }
  .form-label-text {
    font-family: Inter-regular, sans-serif;
    padding-top: 12px;
    text-align: right;
    flex-basis: 30%;
    margin-right: 10px;
  }
  .form-assist-p {
    font-family: hind-guntur-bold;
    font-size: clamp(1rem, 3vw, 1.5rem);
    justify-self: center;
    flex-basis: 100%;
  }

  .dropdown-label {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    /* flex-basis: 100%; */
    /* height: 24px; */
  }
  .dropdown-label p {
    flex-basis: 100%;
    text-align: left;
    font-size: clamp(0.9rem, 3vw, 1.1rem);
  }
  .select {
    min-height: 24px;
    flex-basis: 100%;
  }
  .submit-button {
    font-size: clamp(1rem, 3vw, 2rem);
    flex-basis: 10%;
  }
  @media screen and (min-width: 700px) {
    .form-label {
      flex-basis: unset;
      /* outline: solid 1px red; */
      /* flex-wrap: nowrap; */
    }
    .input-field {
      height: 40px;
      font-size: 1.3rem;
      width: clamp(300px, 50%, 630px);
      flex-basis: unset;
    }
    .form-label-text {
      flex-basis: 40%;
    }
    .select {
      height: 40px;
      width: clamp(300px, 50%, 630px);
      flex-basis: unset;
    }
  }
`;

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
    flex-basis: 20%;
  }
  .line-break {
    display: none;
  }
  @media screen and (min-width: 700px) {
    .dropdown-label {
      justify-content: flex-start;
    }
    .line-break {
      display: block;
    }
    .form-label {
      display: flex;
      justify-content: center;
    }
    .form-label .form-label-text {
      min-width: 155px;
      flex-basis: 8%;
      padding-top: 0;
      min-height: 40px;
      margin-right: 20px;
    }
    .form-label .input-field,
    .form-label .select {
      min-width: 240px;
      flex-basis: 40%;
      margin-right: clamp(40px, 5vw, 120px);
    }
    .form-label .sl-text {
      white-space: nowrap;
      text-align: right;
    }
  }
`;

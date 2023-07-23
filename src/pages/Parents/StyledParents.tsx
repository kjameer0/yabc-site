import { styled } from 'styled-components';

export default styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  ol {
    list-style: none;
    /* border: 1px solid red; */
    counter-reset: count 0;
    padding-left: 0;
    align-self: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  ol li::before {
    content: counter(count, decimal) '.';
    margin-right: 4px;
  }
  ol li {
    counter-increment: count 1;
    padding-left: 0 !important;
    width: 80%;
    /* border: 1px solid green; */
  }
  .involvement-button-wrapper {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
  .involvement-button-wrapper button {
    padding: 5px 0;
    margin-bottom: 15px;
    width: 100%;
  }
  .admin-button {
    background: var(--main-bg);
    color: black;
  }
  .bold-para {
    font-family: hind-guntur-bold, sans-serif;
  }
  .parents-night img {
    border: 2px solid white;
    width: clamp(300px, 40vw, 750px);
  }
  .resource-icon {
    width: 145px;
    height: auto;
  }
  .resources-flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .resources-icon-wrapper {
    flex-basis: 100%;
    margin-top: 20px;
  
  }
  .resources-icon-button {
    height: clamp(46px, 8vw, 130px);
    color: white;
    background: black;
    border: 1px solid white;
    width: 80%;
    padding: 0;
  }
  .resources-icon-button a {
    text-decoration: none;
    color: inherit;
  }
  .icon-button-text {
    margin: 0;
    font-size: clamp(0.75rem, 2vw, 1.3rem);
    font-family: Inter-regular, sans-serif;
  }
  .icon-button-bold-text {
    margin: 0;
    font-size: clamp(1rem, 2vw, 1.3rem);
    font-family: Inter-bold, sans-serif;
  }
  @media screen and (min-width: 700px) {
    .involvement-button-wrapper {
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .resources-icon-wrapper {
      flex-basis: 50%;
    }
    .admin-button {
      margin-left: 4%;
    }
    .involvement-button-wrapper button {
      width: 40%;
      flex-basis: 100%;
    }
  }
`;

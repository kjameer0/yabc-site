import { styled } from 'styled-components';

export default styled.main`
  h1 {
    margin-bottom: 50px;
  }
  h2 {
    margin: 25px auto;
    margin-bottom: 30px;
    text-align: right;
  }
  .staff-flex-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .white-line-long {
    margin-top: 50px;
    width: 75%;
    border: 1px solid white;
    position: relative;
    left: 35%;
  }
  .white-line-short {
    width: 60%;
    border: 1px solid white;
    position: relative;
    left: 45%;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 700px) {
    .staff-flex-wrapper {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    .white-line-short {
      margin-bottom: 80px;
    }
  }
`;

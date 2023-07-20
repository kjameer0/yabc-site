import { styled } from 'styled-components';

export default styled.div<{ $direction: 'left' | 'right' }>`
  display: flex;
  .staff-img {
    width: 124px;
    border: 2px solid var(--main-bg);
    border-radius: 100%;
    height: auto;
    order: ${(props) => (props.$direction === 'left' ? 1 : 2)};
  }
  .staff-info-ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;
    list-style: none;
    text-align: left;
    line-height: 1;
    /* border: 1px solid white; */
  }
  .staff-info-ul li {
    margin-top: 3px;
  }
  .staff-info {
    display: flex;
    order: ${(props) => (props.$direction === 'right' ? 1 : 2)};
  }
  .staff-name {
    font-size: clamp(1rem, 3vw, 1.5rem);
    font-family: hind-guntur-bold;
    color: var(--main-bg);
  }
  .staff-role {
    font-size: clamp(0.75rem, 3vw, 1.5rem);
    font-family: hind-guntur-bold;
  }
  .staff-email {
    font-size: clamp(0.75rem, 3vw, 1.5rem);
    font-family: hind-guntur-regular;
  }
  @media screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 400px;
    .staff-info {
      order: 2;
    }
    .staff-info-ul {
      margin-right: 30px;
      text-align: center;
    }
    .staff-img {
      order: 1;
      flex-basis: 100%;
      max-width: 175px;
      max-height: 175px;
    }
  }
`;

import { styled } from 'styled-components';

export default styled.a`
  color: var(--main-bg);
  border: 1px solid var(--main-bg);
  letter-spacing: -0.05rem;
  padding: 10px 5px;
  background-color: black;
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-family: Inter-semi-bold, sans-serif;
  &:hover {
    cursor: pointer;
    background-color: #e5fbb9;
    color: black;
  }
  &:active {
    background: black;
    color: white;
  }

`;


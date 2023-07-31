import { styled } from 'styled-components';

export default styled.button`
  color: var(--main-bg);
  border: 1px solid var(--main-bg);
  letter-spacing: -0.05rem;
  padding: -12px;
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
  a {
    display: block;
    margin: 0;
    text-decoration: none;
    color: inherit;
  }
`;

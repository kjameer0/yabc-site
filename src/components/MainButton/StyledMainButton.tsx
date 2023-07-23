import { styled } from 'styled-components';

export default styled.button`
  color: var(--main-bg);
  border: 1px solid var(--main-bg);
  letter-spacing: -0.05rem;
  padding: 0px;
  background-color: black;
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-family: Inter-semi-bold, sans-serif;
  &:hover {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
